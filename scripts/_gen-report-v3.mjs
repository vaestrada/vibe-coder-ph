#!/usr/bin/env node
/**
 * Gen AI to Z — v3 SOTA Registration Analytics
 * 
 * KEY FIX: Each registrant can match BOTH a school AND org partner(s).
 * Previous versions did exclusive matching — org partners "stole" school entries.
 * 
 * Strategy:
 *   1. For each registrant, scan their `organization` field
 *   2. Try to match a SCHOOL (keyword-based, handles acronyms/typos/orgs-at-school)
 *   3. Separately try to match ORG PARTNER(s) 
 *   4. A single entry like "GDG PUP" → school=PUP, orgPartner=GDG on Campus PUP
 */
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// ─── School Clusters ─────────────────────────────────────────────────
// Format: [canonical, [...keywords that indicate this school]]
// Keywords are checked via normalized containment (case-insensitive, stripped punctuation)
const schoolClusters = [
  // ORDER MATTERS: more-specific "University of the Philippines" variants first
  // to prevent UP's generic keyword from stealing TUP/PUP entries
  ['Polytechnic University of the Philippines', [
    'polytechnic university of the philippines', 'polytechnic university of philippines',
    'polytecnic university', 'polytechnjc university',
    'pup', 'p.u.p.',
  ]],
  ['Technological University of the Philippines', [
    'technological university of the philippines',
    'tup manila', 'tup - manila', 'tupm', 'tup',
  ]],
  ['University of the Philippines', [
    'university of the philippines', 'up diliman', 'up manila', 'up los banos',
    'uplb', 'upd', 'up open university', 'up college of',
    'up coe', 'up dss', 'updss', 'up data science',
    'up solair', 'up ncpag', 'up tmc',
    'peyups',
  ]],
  ['Cavite State University', [
    'cavite state university', 'cavite states university', 'cavute state university',
    'cavite staye university', 'cavite state univ',
    'cvsu', 'c.v.s.u.',
  ]],
  ['Mapúa University', [
    'mapua', 'mapúa', 'mapùa',
    'malayan colleges laguna', 'malayan college laguna', 'malayan collages laguna',
    'malayan digital college',
  ]],
  ['Technological Institute of the Philippines', [
    'technological institute of the philippines',
    'tip qc', 'tip manila', 'tip quezon city', 'tipqc',
    // Be careful: 'tip' alone is too short, but as a standalone word match it's fine
  ]],
  ['National University', [
    'national university', 'nu manila', 'nu fairview', 'nu moa',
    'nu wizards', 'nu - manila',
    'gdgoc national university', 'gdg on campus nu',
    'gdgoc nu', 'gdgoc, national university',
  ]],
  ['EARIST', [
    'earist', 'e.a.r.i.s.t.',
    'eulogio amang rodriguez', 'eulogio "amang" rodriguez',
    "eulogio 'amang' rodriguez", "eulogio ''amang'' rodriguez",
    'eulogio amang rodriquez',
    'comsa earist', 'comsa – earist', 'comsa-earist', 'comsa',
  ]],
  ['University of Santo Tomas', [
    'university of santo tomas', 'ust',
  ]],
  ['De La Salle University', [
    'de la salle university', 'de la salle', 'dlsu',
  ]],
  ['University of Rizal System', [
    'university of rizal system', 'university of ruzal system',
    'university rizal system',
    'urs', 'urs-binangonan', 'urs binangonan',
  ]],
  ['ICCT Colleges', [
    'icct',
  ]],
  ['Quezon City University', [
    'quezon city university', 'qcu',
  ]],
  ['St. Clare College of Caloocan', [
    'st. clare college', 'st clare college', 'st. college of caloocan',
  ]],
  ['University of Makati', [
    'university of makati', 'umak',
  ]],
  ['St. Dominic College of Asia', [
    'st. dominic college of asia', 'st. dominico college of asia',
  ]],
  ['FEU Institute of Technology', [
    'feu institute of technology', 'feu tech', 'feutech', 'feu-tech',
    'far eastern university institute',
    'feati',
  ]],
  ['Colegio de San Gabriel Arcangel', [
    'colegio de san gabriel arcangel', 'colegio de san gabriel arcanghel',
    'cdsga',
  ]],
  ['STI Colleges', [
    'sti college', 'sti ortigas', 'sti munoz', 'sti muñoz', 'sti global',
    'sti caloocan', 'sti marikina',
  ]],
  ['University of the East', [
    'university of the east', 'ue manila',
  ]],
  ['Philippine Christian University', [
    'philippine christian university', 'pcu',
  ]],
  ['Rizal Technological University', [
    'rizal technological university', 'rtu',
  ]],
  ['Bulacan State University', [
    'bulacan state university', 'bulsu',
  ]],
  ['Our Lady of Fatima University', [
    'our lady of fatima', 'university of our lady of fatima',
  ]],
  ['New Era University', [
    'new era university', 'neu ',
  ]],
  ['Universidad De Manila', [
    'universidad de manila', 'udm',
  ]],
  ['Arellano University', [
    'arellano university',
  ]],
  ['PHINMA Education', [
    'phinma',
  ]],
  ['University of Caloocan City', [
    'university of caloocan city',
  ]],
  ['Adamson University', [
    'adamson university', 'adamson',
  ]],
  ['President Ramon Magsaysay State University', [
    'president ramon magsaysay', 'prmsu',
  ]],
  ['Pangasinan State University', [
    'pangasinan state university', 'psu',
  ]],
  ['Our Lady of Perpetual Succor College', [
    'our lady of perpetual succor',
  ]],
  ['Mariano Marcos State University', [
    'mariano marcos state university', 'mmsu',
  ]],
  ['Gordon College', [
    'gordon college',
  ]],
  ['Pamantasan ng Lungsod ng Maynila', [
    'pamantasan ng lungsod ng maynila', 'plm',
  ]],
  ['Emilio Aguinaldo College', [
    'emilio aguinaldo college', 'eac',
  ]],
  ['AMA Computer University', [
    'ama computer', 'amacu', 'aclc college',
  ]],
  ['Taguig City University', [
    'taguig city university',
  ]],
  ['Batangas State University', [
    'batangas state university', 'batstateu',
  ]],
  ['University of the Cordillera', [
    'university of the cordillera',
  ]],
  ['Colegio De Montalban', [
    'colegio de montalban',
  ]],
  ['University of Houston, Asian Institute of Management', [
    'university of houston', 'asian institute of management',
  ]],
  ['Lanao del Norte National Comprehensive High School', [
    'lanao del norte',
  ]],
  ['Dominican College', [
    'dominican college',
  ]],
  ['National Aviation Academy of the Philippines', [
    'national aviation academy',
  ]],
  ['Colegio de Sta. Teresa de Avila', [
    'colegio de sta. teresa',
  ]],
  ['Pateros Technological College', [
    'pateros technological',
  ]],
  ['Trinity University of Asia', [
    'trinity university',
  ]],
  ['Leyte Normal University', [
    'leyte normal university',
  ]],
  ['University of Chichester', [
    'university of chichester',
  ]],
  ['State University of Northern Negros', [
    'state university of northern negros',
  ]],
  ['Westbridge Institute of Technology', [
    'westbridge institute',
  ]],
  ["National Teacher's College", [
    "national teacher's college", 'national teachers college',
  ]],
  ['Pamantasan ng Lungsod ng Pasig', [
    'pamantasan ng lungsod ng pasig',
  ]],
  ['Pamantasan ng Lungsod ng Muntinlupa', [
    'pamantasan ng lungsod ng muntinlupa',
  ]],
  ['Informatics College', [
    'informatics',
  ]],
  ['Bicol University', [
    'bicol university',
  ]],
  ['University of San Carlos / USLS', [
    'usls',
  ]],
  ['Central Philippine University', [
    'cpu',
  ]],
];

// ─── Org Partner Clusters ────────────────────────────────────────────
// These match org partner names — a registrant can match BOTH school and org
const orgPartnerClusters = [
  ['DEVCON Manila', [
    'devcon manila', 'devcon', 'developers connect',
  ]],
  ['Power BI Pilipinas', [
    'power bi pilipinas', 'pbip', 'powerbi pilipinas', 'power bi pilipinas',
  ]],
  ['UP Data Science Society', [
    'up data science society', 'up dss', 'updss',
  ]],
  ['GDG on Campus PUP', [
    'gdg pup', 'gdgoc pup', 'gdsc pup', 'gdg on campus pup',
    'google developer groups - pup', 'google developers group pup',
    'google developer groups on campus pup',
  ]],
  ['GDG on Campus NU Manila', [
    'gdg nu', 'gdgoc nu', 'gdg on campus nu',
    'gdgoc national university', 'gdgoc, national university',
  ]],
  ['COMSA – EARIST', [
    'comsa',
  ]],
  ['AWS User Group e:Novators PH', [
    'aws user group e:novators', 'awsug e:novators', 'enovators',
    'aws cloud club e:novators',
  ]],
  ['JPCS TIP QC', [
    'jpcs tip', 'jpcs tip qc', 'tipqc-jpcs', 'tipqc jpcs',
    'junior philippine computer sc',  // catches various JPCS TIP variants
  ]],
  ['AWS Cloud Club PUP', [
    'aws cloud club pup', 'awscc pup', 'aws cc pup', 'aws pup',
    'aws student cloud club pup', 'aws cloud club - pup',
  ]],
  ['CoCreate Network', [
    'cocreate network',
  ]],
  ['PSYSC', [
    'psysc', 'philippine society of youth science',
  ]],
  ['Fatima Computing and Multimedia Society', [
    'fatima computing and multimedia',
  ]],
  ['JPCS FEU Tech', [
    'jpcs feu',
    'feu tech acm',
  ]],
  ['AI for Everyday Pinoys', [
    'ai for everyday pinoys',
  ]],
  ['Data Engineering Pilipinas', [
    'data engineering pilipinas',
  ]],
  ['PUP ASCII', [
    'pup ascii', 'ascii pup',
    'pup association of students for computer intelligence',
    'association of students for computer intelligence integration',
  ]],
  ['Microsoft Azure Community PH', [
    'microsoft azure community',
  ]],
  ['Hack Club Philippines', [
    'hack club',
  ]],
  ['AWS Cloud Clubs Philippines', [
    'awscc ph', 'awsccph', 'awscc-mmdc',
    'aws cloud clubs philippines',
    'aws cloud club adamson',  // general AWSCC chapter
  ]],
  ['FWDP', [
    'fwdp', 'filipino web development peers',
  ]],
  ['GDG Baguio', [
    'google developer group baguio',
  ]],
  ['GDG on Campus Bicol University', [
    'gdg on campus bicol', 'google developer groups on campus bicol',
  ]],
  ['GDG on Campus TUP', [
    'google developers group on campus - tupm',
  ]],
];

// ─── Normalize for matching ──────────────────────────────────────────
function norm(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[""'']/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[^a-z0-9\s".:/-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Special standalone acronyms that should only match as whole words
const STANDALONE_ACRONYMS = new Set(['pup', 'tip', 'ust', 'ue', 'rtu', 'qcu', 'plm', 'tup', 'udm', 'pcu']);

function matchesKeyword(normalized, keyword) {
  const kw = norm(keyword);
  if (!kw) return false;
  
  // For very short keywords (acronyms), require word boundary match
  if (kw.length <= 4 && STANDALONE_ACRONYMS.has(kw)) {
    // Match as whole word: check word boundaries
    const regex = new RegExp('(^|\\s|[^a-z])' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|\\s|[^a-z])');
    return regex.test(normalized);
  }
  
  // For longer keywords, containment is fine
  return normalized.includes(kw);
}

function findSchool(rawOrg) {
  if (!rawOrg) return null;
  const n = norm(rawOrg);
  if (!n || n === 'none' || n === 'n/a' || n === 'na' || n === 'not applicable' ||
      n === 'school' || n === 'unemployed' || n === '.' || n === 'independent nga e' ||
      n === 'content creator' || n === 'independent contractor') return null;

  for (const [canonical, keywords] of schoolClusters) {
    for (const kw of keywords) {
      if (matchesKeyword(n, kw)) return canonical;
    }
  }
  return null; // Not a recognized school
}

function findOrgPartners(rawOrg) {
  if (!rawOrg) return [];
  const n = norm(rawOrg);
  if (!n) return [];
  
  const matched = [];
  for (const [canonical, keywords] of orgPartnerClusters) {
    for (const kw of keywords) {
      if (matchesKeyword(n, kw)) {
        matched.push(canonical);
        break; // Don't double-match same org
      }
    }
  }
  return matched;
}

// ─── Main ────────────────────────────────────────────────────────────
const { data: rows, error } = await sb.from('event_registrations')
  .select('organization, affiliation, how_did_you_hear, status, created_at');

if (error) { console.error(error); process.exit(1); }

console.error(`Loaded ${rows.length} registrants`);

// Summary
const summary = {
  total: rows.length,
  confirmed: rows.filter(r => r.status === 'confirmed').length,
  pending: rows.filter(r => r.status === 'pending').length,
  cancelled: rows.filter(r => r.status === 'cancelled').length,
};

// Affiliation
const affilMap = {};
for (const r of rows) {
  const a = (r.affiliation || 'Not specified').trim();
  affilMap[a] = (affilMap[a] || 0) + 1;
}

// How did you hear
const howMap = {};
for (const r of rows) {
  const h = (r.how_did_you_hear || 'Not specified').trim();
  howMap[h] = (howMap[h] || 0) + 1;
}

// Schools — each registrant's org is matched to a school
const schoolMap = {};
const unmatched = [];
let matchedSchoolCount = 0;

for (const r of rows) {
  const raw = (r.organization || '').trim();
  const school = findSchool(raw);
  if (school) {
    schoolMap[school] = (schoolMap[school] || 0) + 1;
    matchedSchoolCount++;
  } else if (raw && raw !== '-' && raw !== 'N/A' && raw !== 'n/a' && raw !== 'None' && raw !== 'NA' && raw !== '.' && raw.length > 2) {
    // Track unmatched entries that might be schools
    const n = norm(raw);
    if (n !== 'none' && n !== 'not applicable' && n !== 'school' && n !== 'unemployed' &&
        n !== 'independent nga e' && n !== 'content creator' && n !== 'independent contractor') {
      unmatched.push(raw);
    }
  }
}

// Org Partners — each registrant can match multiple org partners
const orgMap = {};
for (const r of rows) {
  const raw = (r.organization || '').trim();
  const partners = findOrgPartners(raw);
  for (const p of partners) {
    orgMap[p] = (orgMap[p] || 0) + 1;
  }
}

// Registration Timeline
const dateMap = {};
for (const r of rows) {
  const d = r.created_at.slice(0, 10);
  dateMap[d] = (dateMap[d] || 0) + 1;
}
const dates = Object.keys(dateMap).sort();
let cum = 0;
const timeline = dates.map(d => {
  cum += dateMap[d];
  return { date: d, count: dateMap[d], cumulative: cum };
});

// Build sorted arrays
function toSorted(map, total) {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count, pct: +(count / total * 100).toFixed(1) }));
}

const report = {
  summary,
  affiliation: toSorted(affilMap, rows.length),
  howDidYouHear: toSorted(howMap, rows.length),
  schools: toSorted(schoolMap, rows.length),
  orgPartners: toSorted(orgMap, rows.length),
  registrationTimeline: timeline,
};

// Output
const json = JSON.stringify(report, null, 2);
process.stdout.write(json);

// Debug info to stderr
console.error(`\n=== SUMMARY ===`);
console.error(`Total: ${summary.total} | Confirmed: ${summary.confirmed} | Pending: ${summary.pending}`);
console.error(`\n=== SCHOOLS (${Object.keys(schoolMap).length} unique, ${matchedSchoolCount} matched) ===`);
for (const s of report.schools) {
  console.error(`  ${s.count}\t${s.name}`);
}
console.error(`\n=== UNMATCHED ORGS (${unmatched.length} entries — potential missing schools) ===`);
const unmatchedCount = {};
for (const u of unmatched) { unmatchedCount[u] = (unmatchedCount[u] || 0) + 1; }
for (const [name, count] of Object.entries(unmatchedCount).sort((a,b) => b[1] - a[1])) {
  console.error(`  ${count}\t${name}`);
}
console.error(`\n=== ORG PARTNERS (${Object.keys(orgMap).length} unique) ===`);
for (const o of report.orgPartners) {
  console.error(`  ${o.count}\t${o.name}`);
}
