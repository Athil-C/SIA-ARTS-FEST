import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Award, User, Trophy, Star, ListChecks, Grid, Clipboard, AlertCircle, Info } from 'lucide-react';
import { useResults } from '../../../context/DataContext';
import { Alert, AlertDescription } from '../../Components/ui/alert';
import axios from 'axios';

const DEBOUNCE_DELAY = 300;
const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, '');

// Points calculation matrices
const prizePointsMatrix = {
  'SINGLE': {
    'FIRST': 3,
    'SECOND': 2,
    'THIRD': 1
  },
  'GROUP': {
    'FIRST': 10,
    'SECOND': 7,
    'THIRD': 5
  },
  'GENERAL': {
    'FIRST': 15,
    'SECOND': 10,
    'THIRD': 7
  }
};

const gradePoints = {
  'SINGLE': {
    'A': 5,
    'B': 3,
    'C': 1
  },
  'GROUP': {
    'A': 15,
    'B': 7,
    'C': 5
  },
  'GENERAL': {
    'A': 20,
    'B': 15,
    'C': 10
  }
};

const calculatePoints = (category, prize, grade) => {
  let total = 0;

  // Calculate prize points if prize is provided
  if (prize && category) {
    total += prizePointsMatrix[category]?.[prize] || 0;
  }

  // Add grade points if grade is provided
  if (grade) {
    total += gradePoints[category]?.[grade] || 0;
  }

  return total || '';
};

const getPointsBreakdown = (category, prize, grade) => {
  const parts = [];

  if (prize && category) {
    parts.push(`Prize (${prize}): ${prizePointsMatrix[category]?.[prize] || 0}`);
  }

  if (grade) {
    parts.push(`Grade (${grade}): ${gradePoints[category]?.[grade] || 0}`);
  }

  return parts.join(' + ');
};

const initialFormState = {
  studentName: '',
  programName: '',
  teamName: '',
  category: '',
  stage: '',
  prize: '',
  grade: '',
  points: '',
};

const AddResultForm = () => {
  const { addResult, results, editResult } = useResults();
  const { state } = useLocation();
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [pointsBreakdown, setPointsBreakdown] = useState('');
  const [showPointsBreakdown, setShowPointsBreakdown] = useState(false);
  const navigate = useNavigate();

  // Memoized form fields configuration
  const formFields = useMemo(() => {
    const fields = [
      { 
        name: 'teamName', 
        icon: <Grid className="w-5 h-5 text-gray-400" />, 
        options: ['Qāf', 'Meem', 'Dal', 'Seen'],
        required: true
      },
      { 
        name: 'category', 
        icon: <ListChecks className="w-5 h-5 text-gray-400" />, 
        options: ['SINGLE', 'GROUP', 'GENERAL'],
        required: true
      },
      { 
        name: 'stage', 
        icon: <Star className="w-5 h-5 text-gray-400" />, 
        options: ['STAGE', 'NON-STAGE'],
        required: true
      },
      { 
        name: 'prize', 
        icon: <Trophy className="w-5 h-5 text-gray-400" />, 
        options: ['FIRST', 'SECOND', 'THIRD'],
        required: false
      }
    ];

    // Only add the grade field if category is 'SINGLE' or 'GROUP'
 if (['SINGLE', 'GROUP', 'GENERAL'].includes(formData.category)) {
  fields.push({
    name: 'grade', 
    icon: <Star className="w-5 h-5 text-gray-400" />, 
    options: ['A', 'B', 'C'],
    required: false
  });
}


    return fields;
  }, [formData.category]);

  // Initialize form with edit data
  useEffect(() => {
    if (state?.result) {
      setFormData(state.result);
    }
  }, [state]);

  // Points calculation effect
  useEffect(() => {
    const calculatedPoints = calculatePoints(
      formData.category,
      formData.prize,
      formData.grade
    ).toString();

    const breakdown = getPointsBreakdown(
      formData.category,
      formData.prize,
      formData.grade
    );

    setPointsBreakdown(breakdown);

    if (calculatedPoints !== formData.points) {
      setFormData(prev => ({
        ...prev,
        points: calculatedPoints
      }));
    }
  }, [formData.category, formData.prize, formData.grade]);

  // Validation for prize or grade requirement
  const validatePrizeOrGrade = (data) => {
    if (!data.prize && !data.grade) {
      setError('Either Prize or Grade must be provided');
      return false;
    }
    return true;
  };

  // Duplicate check with debounce
  const checkDuplicate = useCallback(
    (data) => {
      const isDuplicateEntry = results.some(result => 
        result._id !== state?.result?._id &&
        result.studentName.toLowerCase() === data.studentName.toLowerCase() &&
        result.programName.toLowerCase() === data.programName.toLowerCase() &&
        result.category === data.category
      );
      setIsDuplicate(isDuplicateEntry);
    },
    [results, state?.result?._id]
  );

  // Debounced form change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (['studentName', 'programName', 'category'].includes(name)) {
        setTimeout(() => checkDuplicate(newData), DEBOUNCE_DELAY);
      }
      return newData;
    });
    setError(null);
  }, [checkDuplicate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePrizeOrGrade(formData)) {
      return;
    }

    if (isDuplicate) {
      setError('This result appears to be a duplicate. Please verify the details.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const cleanedFormData = {
        ...formData,
        studentName: formData.studentName.trim(),
        programName: formData.programName.trim()
      };

      if (state?.result) {
        await editResult(state.result._id, cleanedFormData);
      } else {
        await addResult(cleanedFormData);
      }
      navigate("/cart");
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 md:px-12">
      <div className="max-w-lg mx-auto bg-white/40 dark:bg-transparent shadow-lg rounded-lg p-6 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <Award className="w-12 h-12 mx-auto text-blue-500" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mt-2">
            {state?.result ? 'Edit Result' : 'Add Result'}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Manage and submit student results</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isDuplicate && (
          <Alert variant="warning" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Potential duplicate entry detected. Please verify the details.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Name & Program Name inputs */}
          {['studentName', 'programName'].map(field => (
            <div key={field} className="relative">
              {field === 'studentName' && (
                <User className="absolute w-5 h-5 text-gray-400 top-2 left-3" />
              )}
              {field === 'programName' && (
                <Clipboard className="absolute w-5 h-5 text-gray-400 top-2 left-3" />
              )}
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field === 'studentName' ? 'Student Name' : 'Program Name'}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          ))}

          {/* Dynamic form fields */}
          {formFields.map(field => (
            <div key={field.name} className="relative">
              {field.icon && (
                <div className="absolute top-2 left-3">
                  {field.icon}
                </div>
              )}
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required={field.required}
              >
                <option value="">Select {field.name}</option>
                {field.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Points - read-only */}
          <div className="relative">
            <div className="absolute top-2 left-3 text-gray-400">
              <Info className="w-5 h-5" />
            </div>
            <input
              type="text"
              name="points"
              value={formData.points}
              readOnly
              placeholder="Points"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Points Breakdown (optional) */}
          {showPointsBreakdown && (
            <div className="text-sm text-gray-600 mt-4">
              <Info className="w-4 h-4 inline-block mr-2" />
              Points Breakdown: {pointsBreakdown}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Result'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResultForm;
