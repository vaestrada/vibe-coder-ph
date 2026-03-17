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

export interface AffiliationAttendance {
  name: string;
  total: number;
  checkedIn: number;
  pct: number;
}

export interface RegTimingBucket {
  label: string;
  total: number;
  checkedIn: number;
  pct: number;
}

export interface ReportData {
  summary: ReportSummary;
  affiliation: ReportItem[];
  howDidYouHear: ReportItem[];
  schools: ReportItem[];
  orgPartners: ReportItem[];
  timeline: ReportTimeline[];
  checkinTimeline: CheckinTimeBlock[];
  yearLevel: ReportItem[];
  affiliationAttendance: AffiliationAttendance[];
  regTimingAttendance: RegTimingBucket[];
  topInterests: ReportItem[];
  feedback: FeedbackData | null;
}

// ─── Feedback Types ──────────────────────────────────────────────────
export interface RatingCategory {
  label: string;
  avg: number;
  distribution: number[]; // [1-star, 2-star, 3-star, 4-star, 5-star]
}

export interface Testimonial {
  text: string;
  isAnonymous: boolean;
}

export interface FeedbackData {
  totalResponses: number;
  responseRate: number; // of checked-in attendees
  nps: number; // Net Promoter Score (would_recommend)
  wouldRecommendYes: number;
  wouldRecommendTotal: number;
  ratings: RatingCategory[];
  testimonials: Testimonial[];
  topicsForFuture: ReportItem[];
  whatWorkedWell: string[];
  whatNeedsImprovement: string[];
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
    .select('organization, affiliation, how_did_you_hear, status, created_at, checked_in, checked_in_at, year_level, expectations')
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

  // Year level (normalize variants)
  const yearMap: Record<string, number> = {};
  for (const r of rows) {
    const raw = (r.year_level || '').trim().toLowerCase();
    if (!raw) continue;
    let level: string | null = null;
    if (/grade\s*11/i.test(raw)) level = 'Grade 11';
    else if (/grade\s*12/i.test(raw)) level = 'Grade 12';
    else if (/1st|first|^1$/i.test(raw)) level = '1st Year';
    else if (/2nd|second|^2$/i.test(raw)) level = '2nd Year';
    else if (/3rd|third|^3$/i.test(raw)) level = '3rd Year';
    else if (/4th|fourth|4rt|^4$/i.test(raw)) level = '4th Year';
    else if (/5th|fifth|^5$/i.test(raw)) level = '5th Year';
    else if (/master/i.test(raw)) level = 'Masters';
    else level = raw.charAt(0).toUpperCase() + raw.slice(1);
    if (level) yearMap[level] = (yearMap[level] || 0) + 1;
  }
  const yearTotal = Object.values(yearMap).reduce((a, b) => a + b, 0);
  const yearLevel = toSorted(yearMap, yearTotal);

  // Attendance by affiliation (cross-tab)
  const affilAttnMap: Record<string, { total: number; checkedIn: number }> = {};
  for (const r of rows) {
    const a = (r.affiliation || 'Not specified').trim();
    if (!affilAttnMap[a]) affilAttnMap[a] = { total: 0, checkedIn: 0 };
    affilAttnMap[a].total += 1;
    if (r.checked_in) affilAttnMap[a].checkedIn += 1;
  }
  const affiliationAttendance: AffiliationAttendance[] = Object.entries(affilAttnMap)
    .sort((a, b) => b[1].total - a[1].total)
    .map(([name, v]) => ({
      name,
      total: v.total,
      checkedIn: v.checkedIn,
      pct: v.total > 0 ? +((v.checkedIn / v.total) * 100).toFixed(1) : 0,
    }));

  // Registration timing → attendance correlation
  const REG_BUCKETS: { label: string; start: string; end: string }[] = [
    { label: 'Early (before Feb 15)', start: '2000-01-01', end: '2026-02-15' },
    { label: 'Late Feb (15–28)', start: '2026-02-15', end: '2026-03-01' },
    { label: 'Early Mar (1–9)', start: '2026-03-01', end: '2026-03-10' },
    { label: 'Last week (10–15)', start: '2026-03-10', end: '2026-03-16' },
    { label: 'Day before / Day of', start: '2026-03-16', end: '2099-01-01' },
  ];
  const regTimingAttendance: RegTimingBucket[] = REG_BUCKETS.map(b => {
    const inBucket = rows.filter(r => r.created_at >= b.start && r.created_at < b.end);
    const checkedInCount = inBucket.filter(r => r.checked_in).length;
    return {
      label: b.label,
      total: inBucket.length,
      checkedIn: checkedInCount,
      pct: inBucket.length > 0 ? +((checkedInCount / inBucket.length) * 100).toFixed(1) : 0,
    };
  }).filter(b => b.total > 0);

  // Audience interests from expectations (keyword extraction)
  const INTEREST_KEYWORDS: [string, RegExp][] = [
    ['AI / Artificial Intelligence', /\bai\b|artificial intelligence/i],
    ['Vibe Coding', /vibe\s*cod/i],
    ['Machine Learning', /machine learning|ml\b/i],
    ['Prompt Engineering', /prompt/i],
    ['Web Development', /web\s*dev|website|frontend|backend/i],
    ['Career / Jobs', /career|job|intern|employ|hire/i],
    ['Data Science / Analytics', /data\s*(?:science|analy)|analytics/i],
    ['Networking', /network|connect|meet|community/i],
    ['Automation', /automat/i],
    ['Software Development', /software|coding|code|program/i],
    ['Productivity Tools', /productiv|tool/i],
    ['Ethics / Responsible AI', /ethic|responsible|bias/i],
    ['Business / Entrepreneurship', /business|entrepreneur|startup|market/i],
    ['Deep Learning', /deep\s*learn|neural|nlp|llm/i],
  ];
  const interestCounts: Record<string, number> = {};
  const expectationsRows = rows.filter(r => r.expectations && r.expectations.trim());
  for (const r of expectationsRows) {
    const text = r.expectations;
    for (const [label, re] of INTEREST_KEYWORDS) {
      if (re.test(text)) {
        interestCounts[label] = (interestCounts[label] || 0) + 1;
      }
    }
  }
  const topInterests = toSorted(interestCounts, expectationsRows.length);

  // ─── Feedback ────────────────────────────────────────────────────
  let feedback: FeedbackData | null = null;
  const { data: fbRows } = await supabase
    .from('event_feedback')
    .select('overall_rating, content_rating, speakers_rating, venue_rating, organization_rating, would_recommend, consent_for_testimonial, is_anonymous, what_worked_well, what_needs_improvement, topics_for_future, additional_comments')
    .eq('event_slug', 'gen-ai-to-z');

  if (fbRows && fbRows.length > 0) {
    const RATING_FIELDS: { key: string; label: string }[] = [
      { key: 'overall_rating', label: 'Overall' },
      { key: 'content_rating', label: 'Content' },
      { key: 'speakers_rating', label: 'Speakers' },
      { key: 'venue_rating', label: 'Venue' },
      { key: 'organization_rating', label: 'Organization' },
    ];

    const ratings: RatingCategory[] = RATING_FIELDS.map(({ key, label }) => {
      const vals = fbRows.map(r => (r as Record<string, unknown>)[key] as number | null).filter((v): v is number => v != null);
      const dist = [0, 0, 0, 0, 0];
      let sum = 0;
      for (const v of vals) { dist[v - 1]++; sum += v; }
      return { label, avg: vals.length > 0 ? +(sum / vals.length).toFixed(2) : 0, distribution: dist };
    });

    const recWithAnswer = fbRows.filter(r => r.would_recommend != null);
    const yesCount = recWithAnswer.filter(r => r.would_recommend === true).length;
    const nps = recWithAnswer.length > 0 ? +((yesCount / recWithAnswer.length) * 100).toFixed(0) : 0;

    // Testimonials: only from consented respondents with meaningful text
    const SKIP_TEXT = new Set(['', 'none', 'n/a', 'na', 'nothing', '-', '.']);
    const testimonials: Testimonial[] = fbRows
      .filter(r => r.consent_for_testimonial === true)
      .flatMap(r => {
        const texts: string[] = [];
        for (const field of ['what_worked_well', 'additional_comments'] as const) {
          const v = ((r as Record<string, unknown>)[field] as string | null || '').trim();
          if (v && !SKIP_TEXT.has(v.toLowerCase()) && v.length > 20) texts.push(v);
        }
        return texts.map(text => ({ text, isAnonymous: r.is_anonymous === true }));
      })
      .slice(0, 12);

    // Topics for future events
    const topicMap: Record<string, number> = {};
    const FUTURE_KEYWORDS: [string, RegExp][] = [
      ['Hands-on Workshops', /workshop|hands.?on/i],
      ['Hackathons', /hackathon/i],
      ['AI / Machine Learning', /\bai\b|machine learning|deep learning|llm/i],
      ['Web Development', /web\s*dev|frontend|backend|fullstack/i],
      ['Prompt Engineering', /prompt/i],
      ['Data Science', /data\s*(?:science|analy|engineer)/i],
      ['Robotics / Hardware', /robot|hardware|iot/i],
      ['Networking Events', /network/i],
      ['Career / Industry', /career|industry|intern|job/i],
      ['Cybersecurity', /cyber|security/i],
      ['Seminars / Talks', /seminar|talk|lecture/i],
      ['AI Tools for Students', /ai\s*tool|tool.*student|student.*tool/i],
    ];
    for (const r of fbRows) {
      const text = ((r.topics_for_future as string) || '').trim();
      if (!text || SKIP_TEXT.has(text.toLowerCase())) continue;
      for (const [label, re] of FUTURE_KEYWORDS) {
        if (re.test(text)) topicMap[label] = (topicMap[label] || 0) + 1;
      }
    }
    const topicTotal = fbRows.filter(r => {
      const t = ((r.topics_for_future as string) || '').trim();
      return t && !SKIP_TEXT.has(t.toLowerCase());
    }).length;
    const topicsForFuture = toSorted(topicMap, topicTotal);

    // What worked well — curated themes
    const workedWell = fbRows
      .map(r => ((r.what_worked_well as string) || '').trim())
      .filter(t => t && !SKIP_TEXT.has(t.toLowerCase()) && t.length > 15)
      .slice(0, 8);

    // What needs improvement
    const improvements = fbRows
      .map(r => ((r.what_needs_improvement as string) || '').trim())
      .filter(t => t && !SKIP_TEXT.has(t.toLowerCase()) && t.length > 10)
      .slice(0, 8);

    feedback = {
      totalResponses: fbRows.length,
      responseRate: summary.checkedIn > 0 ? +((fbRows.length / summary.checkedIn) * 100).toFixed(1) : 0,
      nps,
      wouldRecommendYes: yesCount,
      wouldRecommendTotal: recWithAnswer.length,
      ratings,
      testimonials,
      topicsForFuture,
      whatWorkedWell: workedWell,
      whatNeedsImprovement: improvements,
    };
  }

  return {
    summary,
    affiliation: toSorted(affilMap, rows.length),
    howDidYouHear: toSorted(howMap, rows.length),
    schools: toSorted(schoolMap, rows.length),
    orgPartners: toSorted(orgMap, rows.length),
    timeline,
    checkinTimeline,
    yearLevel,
    affiliationAttendance,
    regTimingAttendance,
    topInterests,
    feedback,
  };
}
