import { supabase } from "./supabase";

// ─── Types ───────────────────────────────────────────────────────────
export interface ReportSummary {
  total: number;
  confirmed: number;
  pending: number;
  checkedIn: number;
  checkinPctTotal: number;
  checkinPctConfirmed: number;
}

export interface ReportItem {
  name: string;
  count: number;
  pct: number;
}

export interface ReportTimeline {
  date: string;
  count: number;
  cumulative: number;
}

export interface CheckinTimeBlock {
  label: string;
  count: number;
}

export interface ReportData {
  summary: ReportSummary;
  affiliation: ReportItem[];
  howDidYouHear: ReportItem[];
  schools: ReportItem[];
  orgPartners: ReportItem[];
  timeline: ReportTimeline[];
  checkinTimeline: CheckinTimeBlock[];
}

// ─── School Clusters ─────────────────────────────────────────────────
// ORDER MATTERS: more-specific variants first to prevent keyword stealing
const SCHOOL_CLUSTERS: [string, string[]][] = [
  ['Polytechnic University of the Philippines', [
    'polytechnic university of the philippines', 'polytechnic university of philippines',
    'polytecnic university', 'polytechnjc university', 'pup', 'p.u.p.',
  ]],
  ['Technological University of the Philippines', [
    'technological university of the philippines', 'tup manila', 'tup - manila', 'tupm', 'tup',
  ]],
  ['University of the Philippines', [
    'university of the philippines', 'up diliman', 'up manila', 'up los banos',
    'uplb', 'upd', 'up open university', 'up college of',
    'up coe', 'up dss', 'updss', 'up data science',
    'up solair', 'up ncpag', 'up tmc', 'peyups',
  ]],
  ['Cavite State University', [
    'cavite state university', 'cavite states university', 'cavute state university',
    'cavite staye university', 'cavite state univ', 'cvsu', 'c.v.s.u.',
  ]],
  ['Mapúa University', [
    'mapua', 'mapúa', 'mapùa',
    'malayan colleges laguna', 'malayan college laguna', 'malayan collages laguna',
    'malayan digital college',
  ]],
  ['Technological Institute of the Philippines', [
    'technological institute of the philippines',
    'tip qc', 'tip manila', 'tip quezon city', 'tipqc',
  ]],
  ['National University', [
    'national university', 'nu manila', 'nu fairview', 'nu moa',
    'nu wizards', 'nu - manila',
    'gdgoc national university', 'gdg on campus nu', 'gdgoc nu', 'gdgoc, national university',
  ]],
  ['EARIST', [
    'earist', 'e.a.r.i.s.t.',
    'eulogio amang rodriguez', 'eulogio "amang" rodriguez',
    "eulogio 'amang' rodriguez", "eulogio ''amang'' rodriguez",
    'eulogio amang rodriquez', 'comsa earist', 'comsa – earist', 'comsa-earist', 'comsa',
  ]],
  ['University of Santo Tomas', ['university of santo tomas', 'ust']],
  ['De La Salle University', ['de la salle university', 'de la salle', 'dlsu']],
  ['University of Rizal System', [
    'university of rizal system', 'university of ruzal system', 'university rizal system',
    'urs', 'urs-binangonan', 'urs binangonan',
  ]],
  ['ICCT Colleges', ['icct']],
  ['Quezon City University', ['quezon city university', 'qcu']],
  ['St. Clare College of Caloocan', ['st. clare college', 'st clare college', 'st. college of caloocan']],
  ['University of Makati', ['university of makati', 'umak']],
  ['St. Dominic College of Asia', ['st. dominic college of asia', 'st. dominico college of asia']],
  ['FEU Institute of Technology', [
    'feu institute of technology', 'feu tech', 'feutech', 'feu-tech',
    'far eastern university institute', 'feati',
  ]],
  ['Colegio de San Gabriel Arcangel', ['colegio de san gabriel arcangel', 'colegio de san gabriel arcanghel', 'cdsga']],
  ['STI Colleges', ['sti college', 'sti ortigas', 'sti munoz', 'sti muñoz', 'sti global', 'sti caloocan', 'sti marikina']],
  ['University of the East', ['university of the east', 'ue manila']],
  ['Philippine Christian University', ['philippine christian university', 'pcu']],
  ['Rizal Technological University', ['rizal technological university', 'rtu']],
  ['Bulacan State University', ['bulacan state university', 'bulsu']],
  ['Our Lady of Fatima University', ['our lady of fatima', 'university of our lady of fatima']],
  ['New Era University', ['new era university']],
  ['Universidad De Manila', ['universidad de manila', 'udm']],
  ['Arellano University', ['arellano university']],
  ['PHINMA Education', ['phinma']],
  ['University of Caloocan City', ['university of caloocan city']],
  ['Adamson University', ['adamson university', 'adamson']],
  ['President Ramon Magsaysay State University', ['president ramon magsaysay', 'prmsu']],
  ['Pangasinan State University', ['pangasinan state university', 'psu']],
  ['Our Lady of Perpetual Succor College', ['our lady of perpetual succor']],
  ['Mariano Marcos State University', ['mariano marcos state university', 'mmsu']],
  ['Gordon College', ['gordon college']],
  ['Pamantasan ng Lungsod ng Maynila', ['pamantasan ng lungsod ng maynila', 'plm']],
  ['Emilio Aguinaldo College', ['emilio aguinaldo college', 'eac']],
  ['AMA Computer University', ['ama computer', 'amacu', 'aclc college']],
  ['Taguig City University', ['taguig city university']],
  ['Batangas State University', ['batangas state university', 'batstateu']],
  ['Technological University of the Philippines', ['technological university of the philippines', 'tup']],
  ['Pamantasan ng Lungsod ng Pasig', ['pamantasan ng lungsod ng pasig']],
  ['Pamantasan ng Lungsod ng Muntinlupa', ['pamantasan ng lungsod ng muntinlupa']],
  ['Bicol University', ['bicol university']],
  ['Trinity University of Asia', ['trinity university']],
  ['Dominican College', ['dominican college']],
  ['Leyte Normal University', ['leyte normal university']],
  ['Pateros Technological College', ['pateros technological']],
  ['Westbridge Institute of Technology', ['westbridge institute']],
  ["National Teacher's College", ["national teacher's college", 'national teachers college']],
  ['Colegio De Montalban', ['colegio de montalban']],
  ['Colegio de Sta. Teresa de Avila', ['colegio de sta. teresa']],
  ['University of Chichester', ['university of chichester']],
  ['State University of Northern Negros', ['state university of northern negros']],
  ['National Aviation Academy of the Philippines', ['national aviation academy']],
  ['Lanao del Norte National Comprehensive High School', ['lanao del norte']],
];

// ─── Org Partner Clusters ────────────────────────────────────────────
const ORG_CLUSTERS: [string, string[]][] = [
  ['DEVCON Manila', ['devcon manila', 'devcon', 'developers connect']],
  ['Power BI Pilipinas', ['power bi pilipinas', 'pbip', 'powerbi pilipinas']],
  ['UP Data Science Society', ['up data science society', 'up dss', 'updss']],
  ['GDG on Campus PUP', [
    'gdg pup', 'gdgoc pup', 'gdsc pup', 'gdg on campus pup',
    'google developer groups - pup', 'google developers group pup',
  ]],
  ['GDG on Campus NU Manila', [
    'gdg nu', 'gdgoc nu', 'gdg on campus nu', 'gdgoc national university', 'gdgoc, national university',
  ]],
  ['COMSA – EARIST', ['comsa']],
  ['AWS User Group e:Novators PH', ['aws user group e:novators', 'awsug e:novators', 'enovators', 'aws cloud club e:novators']],
  ['JPCS TIP QC', ['jpcs tip', 'jpcs tip qc', 'tipqc-jpcs', 'junior philippine computer sc']],
  ['AWS Cloud Club PUP', ['aws cloud club pup', 'awscc pup', 'aws cc pup', 'aws pup', 'aws student cloud club pup']],
  ['CoCreate Network', ['cocreate network']],
  ['PSYSC', ['psysc', 'philippine society of youth science']],
  ['Fatima Computing and Multimedia Society', ['fatima computing and multimedia']],
  ['JPCS FEU Tech', ['jpcs feu', 'feu tech acm']],
  ['AI for Everyday Pinoys', ['ai for everyday pinoys']],
  ['Data Engineering Pilipinas', ['data engineering pilipinas']],
  ['PUP ASCII', ['pup ascii', 'ascii pup', 'pup association of students for computer intelligence', 'association of students for computer intelligence integration']],
  ['Microsoft Azure Community PH', ['microsoft azure community']],
  ['Hack Club Philippines', ['hack club']],
  ['AWS Cloud Clubs Philippines', ['awscc ph', 'awsccph', 'awscc-mmdc', 'aws cloud clubs philippines', 'aws cloud club adamson']],
  ['FWDP', ['fwdp', 'filipino web development peers']],
  ['GDG on Campus Bicol University', ['gdg on campus bicol', 'google developer groups on campus bicol']],
  ['GDG on Campus TUP', ['google developers group on campus - tupm']],
  ['GDG Baguio', ['google developer group baguio']],
];

// ─── Matching Logic ──────────────────────────────────────────────────
const STANDALONE = new Set(['pup', 'tip', 'ust', 'ue', 'rtu', 'qcu', 'plm', 'tup', 'udm', 'pcu']);

function norm(s: string): string {
  return (s || '')
    .toLowerCase()
    .replace(/[\u201c\u201d\u2018\u2019]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[^a-z0-9\s".:/-]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchesKeyword(normalized: string, keyword: string): boolean {
  const kw = norm(keyword);
  if (!kw) return false;
  if (kw.length <= 4 && STANDALONE.has(kw)) {
    const re = new RegExp('(^|\\s|[^a-z])' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|\\s|[^a-z])');
    return re.test(normalized);
  }
  return normalized.includes(kw);
}

const SKIP = new Set(['', 'none', 'n/a', 'na', 'not applicable', 'school', 'unemployed', '.', 'independent nga e', 'content creator', 'independent contractor']);

function findSchool(raw: string): string | null {
  const n = norm(raw);
  if (!n || SKIP.has(n)) return null;
  for (const [canonical, keywords] of SCHOOL_CLUSTERS) {
    for (const kw of keywords) {
      if (matchesKeyword(n, kw)) return canonical;
    }
  }
  return null;
}

function findOrgPartners(raw: string): string[] {
  const n = norm(raw);
  if (!n) return [];
  const matched: string[] = [];
  for (const [canonical, keywords] of ORG_CLUSTERS) {
    for (const kw of keywords) {
      if (matchesKeyword(n, kw)) { matched.push(canonical); break; }
    }
  }
  return matched;
}

function toSorted(map: Record<string, number>, total: number): ReportItem[] {
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count, pct: +(count / total * 100).toFixed(1) }));
}

// ─── Fetch + Process ─────────────────────────────────────────────────
export async function getEventReport(): Promise<ReportData> {
  const { data: rows, error } = await supabase
    .from('event_registrations')
    .select('organization, affiliation, how_did_you_hear, status, created_at, checked_in, checked_in_at')
    .eq('event_slug', 'gen-ai-to-z');

  if (error || !rows) throw new Error('Failed to fetch registrations');

  const checkedIn = rows.filter(r => r.checked_in === true).length;
  const confirmed = rows.filter(r => r.status === 'confirmed').length;
  const summary: ReportSummary = {
    total: rows.length,
    confirmed,
    pending: rows.filter(r => r.status === 'pending').length,
    checkedIn,
    checkinPctTotal: rows.length > 0 ? +((checkedIn / rows.length) * 100).toFixed(1) : 0,
    checkinPctConfirmed: confirmed > 0 ? +((checkedIn / confirmed) * 100).toFixed(1) : 0,
  };

  // Check-in timeline (hourly blocks, Manila timezone)
  const TIME_BLOCKS = [
    { label: 'Before 7 AM', minHr: 0, maxHr: 6 },
    { label: '7:00–7:59 AM', minHr: 7, maxHr: 7 },
    { label: '8:00–8:59 AM', minHr: 8, maxHr: 8 },
    { label: '9:00–9:59 AM', minHr: 9, maxHr: 9 },
    { label: '10:00–10:59 AM', minHr: 10, maxHr: 10 },
    { label: '11:00–11:59 AM', minHr: 11, maxHr: 11 },
    { label: '12:00–12:59 PM', minHr: 12, maxHr: 12 },
    { label: '1:00–1:59 PM', minHr: 13, maxHr: 13 },
    { label: '2:00–2:59 PM', minHr: 14, maxHr: 14 },
    { label: '3:00 PM+', minHr: 15, maxHr: 23 },
  ];
  const checkinTimeline: CheckinTimeBlock[] = TIME_BLOCKS.map(b => {
    const count = rows.filter(r => {
      if (!r.checked_in || !r.checked_in_at) return false;
      // Convert to Manila time (UTC+8)
      const utcDate = new Date(r.checked_in_at);
      const manilaHour = new Date(utcDate.getTime() + 8 * 60 * 60 * 1000).getUTCHours();
      return manilaHour >= b.minHr && manilaHour <= b.maxHr;
    }).length;
    return { label: b.label, count };
  }).filter(b => b.count > 0);

  // Affiliation
  const affilMap: Record<string, number> = {};
  for (const r of rows) {
    const a = (r.affiliation || 'Not specified').trim();
    affilMap[a] = (affilMap[a] || 0) + 1;
  }

  // How did you hear
  const howMap: Record<string, number> = {};
  for (const r of rows) {
    const h = (r.how_did_you_hear || 'Not specified').trim();
    howMap[h] = (howMap[h] || 0) + 1;
  }

  // Schools (each entry matched to a school)
  const schoolMap: Record<string, number> = {};
  for (const r of rows) {
    const school = findSchool((r.organization || '').trim());
    if (school) schoolMap[school] = (schoolMap[school] || 0) + 1;
  }

  // Org Partners (each entry can match multiple org partners)
  const orgMap: Record<string, number> = {};
  for (const r of rows) {
    const partners = findOrgPartners((r.organization || '').trim());
    for (const p of partners) orgMap[p] = (orgMap[p] || 0) + 1;
  }

  // Timeline
  const dateMap: Record<string, number> = {};
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

  return {
    summary,
    affiliation: toSorted(affilMap, rows.length),
    howDidYouHear: toSorted(howMap, rows.length),
    schools: toSorted(schoolMap, rows.length),
    orgPartners: toSorted(orgMap, rows.length),
    timeline,
    checkinTimeline,
  };
}
