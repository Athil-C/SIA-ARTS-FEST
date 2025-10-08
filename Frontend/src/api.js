// src/api.js
const API_URL = "http://localhost:5000/api/schedules"; // backend URL

export async function getSchedules() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addSchedule(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
