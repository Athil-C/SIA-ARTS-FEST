import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../FrameMotion/variants";

const candidateData = [
  {
    "id": "500",
    "name": "MUNAVAR ALI C",
    "chestNo": "500",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "501",
    "name": "MUHAMMED SHINAN",
    "chestNo": "501",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "502",
    "name": "MUHAMMED SINAN K",
    "chestNo": "502",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "503",
    "name": "RAMEES AHAMMED MU",
    "chestNo": "503",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "505",
    "name": "MOHAMMED ISMAYIL",
    "chestNo": "505",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "506",
    "name": "MUHAMMAD VAYIS",
    "chestNo": "506",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "507",
    "name": "MUHAMMAD ASIF A.K",
    "chestNo": "507",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "508",
    "name": "MUHAMMAD SAHAL T",
    "chestNo": "508",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "509",
    "name": "MUHAMMED HADI",
    "chestNo": "509",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "510",
    "name": "MUHAMMED NABEEL KE",
    "chestNo": "510",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "511",
    "name": "MUHAMMED SABITH",
    "chestNo": "511",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "512",
    "name": "LUKHMAN P",
    "chestNo": "512",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "513",
    "name": "ADIL MALOOF K",
    "chestNo": "513",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "514",
    "name": "MOHAMMED ANSIL",
    "chestNo": "514",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "515",
    "name": "MUHAMMED SHAMEEM K",
    "chestNo": "515",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "517",
    "name": "ABIL SAID ABINAZ",
    "chestNo": "517",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "518",
    "name": "SUHAID P",
    "chestNo": "518",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "519",
    "name": "SAKARIYA KK",
    "chestNo": "519",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "520",
    "name": "HISHAM ABDULLA",
    "chestNo": "520",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "521",
    "name": "MUHAMMED HABEEB M",
    "chestNo": "521",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "522",
    "name": "YOUSUF M",
    "chestNo": "522",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "523",
    "name": "ABDU NAFIE AT",
    "chestNo": "523",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "524",
    "name": "MUHAMMAD THASNEEM KE",
    "chestNo": "524",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "525",
    "name": "MUHAMMED THANSEER",
    "chestNo": "525",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "526",
    "name": "RAZI SHOUKATHALI",
    "chestNo": "526",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "527",
    "name": "MUHAMMAD NIJAD MS",
    "chestNo": "527",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "528",
    "name": "MUHAMMED SINAN M",
    "chestNo": "528",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "529",
    "name": "NABEEL VAJID K",
    "chestNo": "529",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "530",
    "name": "MUHAMMED SINAN B",
    "chestNo": "530",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "531",
    "name": "RASEEN RAHMAN TR",
    "chestNo": "531",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "532",
    "name": "MUHAMMED SHADHIL M",
    "chestNo": "532",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "533",
    "name": "MUHAMMED HANEEN CH",
    "chestNo": "533",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "534",
    "name": "MUHAMMED SWALIH AH",
    "chestNo": "534",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "535",
    "name": "KS MOHAMMED SINAN",
    "chestNo": "535",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "536",
    "name": "AFIN SIDHAN N",
    "chestNo": "536",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "537",
    "name": "ARSHAD M",
    "chestNo": "537",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "538",
    "name": "MUHAMMAD NASHEETH V",
    "chestNo": "538",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "539",
    "name": "MUHAMMAD NAJAD AK",
    "chestNo": "539",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "540",
    "name": "MUHAMMED SHADIL TP",
    "chestNo": "540",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "541",
    "name": "MUHAMMAD SALMAN FARIS T",
    "chestNo": "541",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "542",
    "name": "NAJIL NIHAL U",
    "chestNo": "542",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "543",
    "name": "MUHAMMAD MIRSHAN",
    "chestNo": "543",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "544",
    "name": "ABDULLA K",
    "chestNo": "544",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "545",
    "name": "MUHAMMED ASLAM.T",
    "chestNo": "545",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "546",
    "name": "MUHAMMAD IYAS",
    "chestNo": "546",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "547",
    "name": "MUHAMMED AJMAL",
    "chestNo": "547",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "548",
    "name": "ABDUL BASITH KP",
    "chestNo": "548",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "549",
    "name": "MOHAMMED DANISH M V",
    "chestNo": "549",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "550",
    "name": "MUHAMMED SHIBAN T T",
    "chestNo": "550",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "551",
    "name": "SHAZIN MOHAMMED M K",
    "chestNo": "551",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "552",
    "name": "AHAMMED NEJADHE",
    "chestNo": "552",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "553",
    "name": "MUHAMMED SINAN U",
    "chestNo": "553",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "554",
    "name": "UVAIS KA",
    "chestNo": "554",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "555",
    "name": "MUHAMMED NAJAD V",
    "chestNo": "555",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "556",
    "name": "ASEEM MUHAMMED P",
    "chestNo": "556",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "557",
    "name": "MUHAMMED ASIF M.K",
    "chestNo": "557",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "558",
    "name": "MUHAMMED THAMEEM TI",
    "chestNo": "558",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "559",
    "name": "ADHNAN P",
    "chestNo": "559",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "560",
    "name": "MUHAMMED NIYAZ",
    "chestNo": "560",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "561",
    "name": "MUHAMMED HISHAM P V",
    "chestNo": "561",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "562",
    "name": "MUHAMMED SINAN K V",
    "chestNo": "562",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "563",
    "name": "ATHIL C",
    "chestNo": "563",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "564",
    "name": "SAHL MUHAMMED . K",
    "chestNo": "564",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "565",
    "name": "MUHAMMED HASEEM P S",
    "chestNo": "565",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "566",
    "name": "MUHAMMED NAFI E",
    "chestNo": "566",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "567",
    "name": "ANSAF AMAAN AM",
    "chestNo": "567",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "568",
    "name": "MUHAMMED MAFAS PF",
    "chestNo": "568",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "569",
    "name": "MUHAMMED NABEEL P",
    "chestNo": "569",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "570",
    "name": "MUHAMMED NAHYAN P",
    "chestNo": "570",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "571",
    "name": "MUHAMMED FAYIS CH",
    "chestNo": "571",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "572",
    "name": "MUHAMMED SHABEEB MU",
    "chestNo": "572",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "573",
    "name": "ADHIL HASSAN CS",
    "chestNo": "573",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "574",
    "name": "ABDUL HADI KC",
    "chestNo": "574",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "575",
    "name": "ADHIL MUHAMMED",
    "chestNo": "575",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "576",
    "name": "MUHAMMED NAJAD",
    "chestNo": "576",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "577",
    "name": "MUHAMMED SHINAS P",
    "chestNo": "577",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "578",
    "name": "MUHAMMAD NIBRAS",
    "chestNo": "578",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "579",
    "name": "AMJAD E",
    "chestNo": "579",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "580",
    "name": "MUHAMMED RAVAN PK",
    "chestNo": "580",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "581",
    "name": "MEHAFIL SHAN",
    "chestNo": "581",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "582",
    "name": "MUHAMMED SHAMIL K",
    "chestNo": "582",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "583",
    "name": "MUHAMMED RAFI E",
    "chestNo": "583",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "584",
    "name": "MUHAMMED AMEERSHAH K",
    "chestNo": "584",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "585",
    "name": "ABDUL MUHAIMIN KC",
    "chestNo": "585",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "586",
    "name": "MUHSIN. K",
    "chestNo": "586",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "587",
    "name": "MUHAMMED NIHAL T",
    "chestNo": "587",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "588",
    "name": "SHANE AKTHER",
    "chestNo": "588",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "589",
    "name": "MUHAMMED THWAHIR N",
    "chestNo": "589",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "590",
    "name": "MUHAMMAD NIHAL. CN",
    "chestNo": "590",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "591",
    "name": "MUHAMMED JUNAID. T",
    "chestNo": "591",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "592",
    "name": "MUHAMMED MIHLAD",
    "chestNo": "592",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "593",
    "name": "SINSARUL HAQUE",
    "chestNo": "593",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "594",
    "name": "MUHAMMED SHANIL",
    "chestNo": "594",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "595",
    "name": "MUHAMMED ZIYAD PA",
    "chestNo": "595",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "596",
    "name": "MUHAMMED AJMAL M",
    "chestNo": "596",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "597",
    "name": "MUHAMMAD AJMAL.V P",
    "chestNo": "597",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "598",
    "name": "MUHAMMED NASIM K",
    "chestNo": "598",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "599",
    "name": "MUHAMMAD SAJID. C",
    "chestNo": "599",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "600",
    "name": "MUHAMMED BASIL K",
    "chestNo": "600",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "601",
    "name": "MUHAMMED SWALIH. VA",
    "chestNo": "601",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "602",
    "name": "MUHAMMED RAZEEN. KU",
    "chestNo": "602",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "603",
    "name": "AMEEN IHSAN K",
    "chestNo": "603",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "604",
    "name": "MUHAMMAD MUZZAMMIL B",
    "chestNo": "604",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "605",
    "name": "MUHAMMED ADHIL E.H",
    "chestNo": "605",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "606",
    "name": "HASHIM K J",
    "chestNo": "606",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "607",
    "name": "MUHAMMED RAMZIN",
    "chestNo": "607",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "608",
    "name": "MUHAMMED SINAN K M",
    "chestNo": "608",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "609",
    "name": "NASEEM RAZAN. T",
    "chestNo": "609",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "610",
    "name": "MUHAMMAD HASEEN C",
    "chestNo": "610",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "611",
    "name": "MUHAMMED ASIM P",
    "chestNo": "611",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "612",
    "name": "MUHAMMED SABITH. K.P.",
    "chestNo": "612",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "613",
    "name": "MUHAMMED RABEEH",
    "chestNo": "613",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "614",
    "name": "MUHAMMAD NAJAD CN",
    "chestNo": "614",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "615",
    "name": "MUHAMMAD NAISHAN. MN",
    "chestNo": "615",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "616",
    "name": "MUHAMMED SHANIB. PA",
    "chestNo": "616",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "617",
    "name": "Ebrahim Badusha.PP",
    "chestNo": "617",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "618",
    "name": "MUHAMMED NIHAL PN",
    "chestNo": "618",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "619",
    "name": "MUHAMMED FAHEEM",
    "chestNo": "619",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "620",
    "name": "Muhammed Luthfi MM",
    "chestNo": "620",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "621",
    "name": "Muhammed Rabeeh C",
    "chestNo": "621",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "622",
    "name": "MUHAMMAD NUFAIL KP",
    "chestNo": "622",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "623",
    "name": "MUHAMMED V",
    "chestNo": "623",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "624",
    "name": "MUHAMMED NADEERSHAH K",
    "chestNo": "624",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "625",
    "name": "FAAZ MUHAMMED P. M",
    "chestNo": "625",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "626",
    "name": "AMJAD AMAN",
    "chestNo": "626",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "627",
    "name": "MUHAMMED RISHAN VU",
    "chestNo": "627",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "628",
    "name": "MUHAMMAD ADNAN T",
    "chestNo": "628",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "629",
    "name": "Adnan Muhamed Ammar.M.U",
    "chestNo": "629",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "630",
    "name": "MUHAMMED HANAN E",
    "chestNo": "630",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "631",
    "name": "ABDUL LATHEEF. K.K",
    "chestNo": "631",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "632",
    "name": "MUHAMMED SHIBIL. K.K",
    "chestNo": "632",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "633",
    "name": "MUHAMMED ANZIL E A",
    "chestNo": "633",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "634",
    "name": "MUHUMMED INSHAS",
    "chestNo": "634",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "635",
    "name": "MUHAMMAD FARHAN",
    "chestNo": "635",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "636",
    "name": "IHSAN K",
    "chestNo": "636",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "637",
    "name": "MOHAMMED ANAS C",
    "chestNo": "637",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "638",
    "name": "MUHAMMED RAZI. C",
    "chestNo": "638",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "639",
    "name": "MUHAMMED ANSIF P",
    "chestNo": "639",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "640",
    "name": "MUHAMMED ANVIN.P",
    "chestNo": "640",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "641",
    "name": "MUHAMMED NIHAL TP",
    "chestNo": "641",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "642",
    "name": "MOHAMED AIHAM.CK",
    "chestNo": "642",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "643",
    "name": "MUHAMMED DILSHAD M",
    "chestNo": "643",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "644",
    "name": "MOHAMMED SHADIL T T",
    "chestNo": "644",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "645",
    "name": "MUHAMMED AFNAN K",
    "chestNo": "645",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "646",
    "name": "MUHAMMED SHABEEH PP",
    "chestNo": "646",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "647",
    "name": "MUHAMMED MUBASHIR",
    "chestNo": "647",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "648",
    "name": "SAYYID JAZEEL JIFRI PM",
    "chestNo": "648",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "649",
    "name": "MUHAMMED HILAL NK",
    "chestNo": "649",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "650",
    "name": "JAVAD ALI",
    "chestNo": "650",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "651",
    "name": "SHUHAIB RAHMAN KP",
    "chestNo": "651",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "652",
    "name": "MUHAMMED ARSHIL ALI KP",
    "chestNo": "652",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "653",
    "name": "Muhammed Najil KV",
    "chestNo": "653",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "654",
    "name": "MUHAMED RIZWAN.K",
    "chestNo": "654",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "655",
    "name": "MUHAMMED SHABNAN V",
    "chestNo": "655",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "656",
    "name": "MUHAMMED HISHAM P",
    "chestNo": "656",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "657",
    "name": "NAJAH AK",
    "chestNo": "657",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "658",
    "name": "MUHAMMAD THAMEEM",
    "chestNo": "658",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "659",
    "name": "MUHAMMED SHAMIL PP",
    "chestNo": "659",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "660",
    "name": "MUHAMMED HANOON",
    "chestNo": "660",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "661",
    "name": "MUHAMMED SHAYAN HANI K",
    "chestNo": "661",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "662",
    "name": "MUHAMMED FAIZAN E",
    "chestNo": "662",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "663",
    "name": "MUHAMMED ANSHID E A",
    "chestNo": "663",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "664",
    "name": "MUHAMMED SHAFI TP",
    "chestNo": "664",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "665",
    "name": "Muhammed Thameem. P",
    "chestNo": "665",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "666",
    "name": "MUHAMMED MUSHFIQ MON",
    "chestNo": "666",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "667",
    "name": "MUHAMMAD A",
    "chestNo": "667",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "668",
    "name": "MUHAMMAD FADHIL T",
    "chestNo": "668",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "669",
    "name": "MUHAMMED ZAYYAN AK",
    "chestNo": "669",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "670",
    "name": "ABDUL HADHI",
    "chestNo": "670",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "671",
    "name": "MUHAMMED ANSHID.K",
    "chestNo": "671",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "672",
    "name": "MUHAMMED SHABAN. PP",
    "chestNo": "672",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "673",
    "name": "MUHAMMED SHIYAN P P",
    "chestNo": "673",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "674",
    "name": "MUHAMMED RAFEED.K",
    "chestNo": "674",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "675",
    "name": "MUHAMMED AJIL K.E",
    "chestNo": "675",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "676",
    "name": "IBRAHIM SHA THANGAL",
    "chestNo": "676",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "677",
    "name": "AMANSHAN MN",
    "chestNo": "677",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "678",
    "name": "ALI AFNAN",
    "chestNo": "678",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "679",
    "name": "Muhammed Badusha. Ap",
    "chestNo": "679",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "681",
    "name": "ADHIL KM",
    "chestNo": "681",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "682",
    "name": "MUHAMMAD RAZI K",
    "chestNo": "682",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "683",
    "name": "MUHAMMED HIDASH PP",
    "chestNo": "683",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "684",
    "name": "AMJID AMAN. P. J",
    "chestNo": "684",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "685",
    "name": "MUHAMMED NABEEL T",
    "chestNo": "685",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "686",
    "name": "MUHAMMED BILAL PA",
    "chestNo": "686",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "687",
    "name": "MUHAMMED SHAHSAD O.R",
    "chestNo": "687",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "688",
    "name": "Muhammad Sinan",
    "chestNo": "688",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "689",
    "name": "MINHAJ KP",
    "chestNo": "689",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "690",
    "name": "MUHAMMED MUNAVIR K",
    "chestNo": "690",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "691",
    "name": "MOHAMMED RAYYAN",
    "chestNo": "691",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "692",
    "name": "N MOHAMMED NOUFAN",
    "chestNo": "692",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "693",
    "name": "ALI HADHI",
    "chestNo": "693",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "694",
    "name": "MUHAMMAD NIDAN",
    "chestNo": "694",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "695",
    "name": "MUHAMMED RAZIN",
    "chestNo": "695",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "696",
    "name": "MUHAMMAD MUHSIN M.K",
    "chestNo": "696",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "697",
    "name": "MUHAMMED SHAMMAS .C",
    "chestNo": "697",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "698",
    "name": "NAMIN JASAN K A",
    "chestNo": "698",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "699",
    "name": "Muhammad mazin",
    "chestNo": "699",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "700",
    "name": "MUHAMMED ADHIL SHAN E",
    "chestNo": "700",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "701",
    "name": "MUHAMMED NABHAN P",
    "chestNo": "701",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "702",
    "name": "Nijas . P",
    "chestNo": "702",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "703",
    "name": "MOHAMMED ZIYAD. K",
    "chestNo": "703",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "704",
    "name": "MUHAMMED AYAN HAMZA",
    "chestNo": "704",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "705",
    "name": "HADI A",
    "chestNo": "705",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "706",
    "name": "MUHAMMED FIZAN PC",
    "chestNo": "706",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "707",
    "name": "MUHAMMED MIDHLAJ KK",
    "chestNo": "707",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "708",
    "name": "MUHAMMED FAHEEM",
    "chestNo": "708",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "709",
    "name": "MUHAMMED FARHAN. K",
    "chestNo": "709",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "710",
    "name": "MUHAMMED NAJAD M T",
    "chestNo": "710",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "711",
    "name": "Hamil Shebin",
    "chestNo": "711",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "712",
    "name": "ADNASH M",
    "chestNo": "712",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "713",
    "name": "MUHAMMAD NIHAL",
    "chestNo": "713",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "714",
    "name": "MUHAMMAD RIZVAN O S",
    "chestNo": "714",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "715",
    "name": "MUHAMMAD NAJAD",
    "chestNo": "715",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "716",
    "name": "MUHAMMED HAFEEM",
    "chestNo": "716",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "717",
    "name": "MUHAMMED HIDASH K",
    "chestNo": "717",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "718",
    "name": "MUHAMMAD ADHIL P",
    "chestNo": "718",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "719",
    "name": "SALMAN FARIS",
    "chestNo": "719",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "720",
    "name": "MUHAMMED ALISHAN KK",
    "chestNo": "720",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "721",
    "name": "MUHAMMED SHIBIL",
    "chestNo": "721",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "722",
    "name": "SHAKIR FAIROOZ",
    "chestNo": "722",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "723",
    "name": "MUHAMMED SINAN EA",
    "chestNo": "723",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "724",
    "name": "MUHAMMED WASEEM K S",
    "chestNo": "724",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "725",
    "name": "IBRAHIM P",
    "chestNo": "725",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "726",
    "name": "Muhammed Zibiyan. A",
    "chestNo": "726",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "727",
    "name": "MUHAMMED SHAMIL T",
    "chestNo": "727",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "728",
    "name": "MOHAMED AJMAL M K",
    "chestNo": "728",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "729",
    "name": "HADI HANAN",
    "chestNo": "729",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "730",
    "name": "MASHHOOR AHDAL C",
    "chestNo": "730",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "731",
    "name": "MUHAMMED ABSAM",
    "chestNo": "731",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "732",
    "name": "MUHAMMED RAYYAN V V",
    "chestNo": "732",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "733",
    "name": "MUHAMMED IYAS",
    "chestNo": "733",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "734",
    "name": "MUHAMMED ZAYYAN P",
    "chestNo": "734",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "735",
    "name": "S.MUHAMMAD NASWEEH VT",
    "chestNo": "735",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "736",
    "name": "MUHAMMED USMAN",
    "chestNo": "736",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "737",
    "name": "MUHAMMED AZMIL SHAN",
    "chestNo": "737",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  },
  {
    "id": "738",
    "name": "MUHAMMED HATHIM",
    "chestNo": "738",
    "programs": [
      { "event": "ELOCUTION" },
      { "event": "POEM RECITATION" }
    ]
  }
];

const ProgramDetails = () => {
  const { id } = useParams();
  const candidate = candidateData.find((c) => c.id === id);

  if (!candidate) {
    return (
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"
      >
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-3">
          Candidate Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          No record found for ID: <span className="font-semibold">{id}</span>
        </p>
        <Link
          to="/candidate-search"
          className="px-6 py-3 rounded-xl bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 shadow-md"
        >
          Back to Search
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800 px-4 py-10">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-2xl bg-white/60 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-orange-200 dark:border-gray-700 overflow-hidden"
      >
        {/* Candidate Name */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-400 text-center py-6">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            {candidate.name}
          </h1>
        </div>

        {/* Programs Heading */}
        <div className="text-center mt-6 mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Programs
          </h2>
        </div>

        {/* Program List */}
        <div className="p-6">
          <motion.ul
            variants={fadeIn("up", 0.2)}
            className="bg-white/30 dark:bg-gray-800/40 rounded-xl py-4 px-6 shadow-inner list-disc list-inside space-y-2"
          >
            {candidate.programs.map((program, index) => (
              <li
                key={index}
                className="text-gray-900 dark:text-gray-100 font-medium"
              >
                {program.event}
              </li>
            ))}
          </motion.ul>

          {/* Back Button */}
          <div className="text-center mt-6">
            <Link
              to="/candidate-search"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all font-semibold"
            >
              Back to Search
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramDetails;
