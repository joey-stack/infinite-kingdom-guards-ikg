import { ServiceItem, CurriculumModule, OperationalLogItem, NewsItem } from './types';

export const BASE_RATE = 250000;

export const SERVICES: ServiceItem[] = [
  {
    id: 'combat',
    code: 'DEF-COMBAT',
    title: 'Combat Training',
    description: 'Physical fitness, weapons handling, tactical maneuvers, CQC techniques, and battlefield communication.',
    specs: ['Marksmanship', 'Tactical Maneuvers', 'Battlefield Comms'],
  },
  {
    id: 'guarding',
    code: 'DEF-GUARD',
    title: 'Private Security',
    description: 'Premise protection and emergency situation management. Mitigating legal and reputational risk.',
    specs: ['Premise Protection', 'Emergency Response', 'Risk Mitigation'],
  },
  {
    id: 'response',
    code: 'DEF-SELF',
    title: 'Self-Defense',
    description: 'Use of reasonable force to protect self and family from aggressors and bodily harm.',
    specs: ['Force Application', 'Personal Safety', 'Aggressor Neutralization'],
  },
  {
    id: 'physical',
    code: 'DEF-PHYS',
    title: 'Physical Security',
    description: 'Mobile and Static protection preventing loss or damage to individuals and assets.',
    specs: ['Mobile Protection', 'Static Guarding', 'Asset Preservation'],
  },
  {
    id: 'patrols',
    code: 'DEF-PATROL',
    title: 'Patrol Operations',
    description: 'Geographic saturation, monitoring, and securing of assigned sectors.',
    specs: ['Sector Monitoring', 'Area Saturation', 'Rapid Response'],
  },
  {
    id: 'surveillance',
    code: 'DEF-INTEL',
    title: 'Surveillance',
    description: 'Continuous prolonged observation to gather information for strategic security decisions.',
    specs: ['Intel Gathering', 'Prolonged Observation', 'Strategic Decisions'],
  },
];

export const CURRICULUM: CurriculumModule[] = [
  { 
    id: '1', 
    title: 'Introduction to Security', 
    description: 'Overview of the industry, roles, responsibilities, and professional ethics.', 
    topics: ['Industry Overview', 'Roles & Responsibilities', 'Types of Security', 'Code of Conduct'] 
  },
  { 
    id: '2', 
    title: 'Legal & Regulatory Framework', 
    description: 'Laws governing private security in Nigeria, use-of-force, and compliance.', 
    topics: ['Nigerian Security Laws', 'Rights & Limitations', 'Use-of-Force Principles', 'Human Rights'] 
  },
  { 
    id: '3', 
    title: 'Communication Skills', 
    description: 'Verbal and non-verbal communication, conflict resolution, and radio protocols.', 
    topics: ['Customer Service', 'Conflict Resolution', 'De-Escalation', 'Radio Protocols'] 
  },
  { 
    id: '4', 
    title: 'Patrol & Surveillance Ops', 
    description: 'Observation techniques, access control procedures, and surveillance equipment.', 
    topics: ['Situational Awareness', 'Patrol Techniques', 'Access Control', 'Vehicle Screening'] 
  },
  { 
    id: '5', 
    title: 'Emergency Response & Safety', 
    description: 'Fire safety, evacuation procedures, first aid, and incident protocols.', 
    topics: ['Fire Safety', 'First Aid Basics', 'CPR / BLS', 'Incident Response'] 
  },
  { 
    id: '6', 
    title: 'Security Equipment & Tech', 
    description: 'Mastery of radios, CCTV monitoring, alarm systems, and non-lethal tools.', 
    topics: ['Radio Operation', 'CCTV Monitoring', 'Alarm Systems', 'Access Systems'] 
  },
  { 
    id: '7', 
    title: 'Incident Reporting', 
    description: 'Daily activity logs, evidence handling, and record-keeping standards.', 
    topics: ['Daily Logs', 'Incident Reports', 'Evidence Handling', 'Chain of Custody'] 
  },
  { 
    id: '8', 
    title: 'Threat Assessment', 
    description: 'Identifying suspicious behavior and preventive security measures.', 
    topics: ['Suspicious Behavior', 'Threat Recognition', 'Preventive Measures', 'Risk Assessment'] 
  },
  { 
    id: '9', 
    title: 'Conflict & Crowd Control', 
    description: 'Managing crowd movement and de-escalation under pressure.', 
    topics: ['Aggressive Persons', 'Crowd Management', 'De-Escalation', 'Judgment Scenarios'] 
  },
  { 
    id: '10', 
    title: 'Professional Conduct', 
    description: 'Grooming, discipline, mental preparedness, and stress management.', 
    topics: ['Appearance', 'Punctuality', 'Mental Readiness', 'Stress Mgmt'] 
  },
  { 
    id: '11', 
    title: 'Site-Specific Operations', 
    description: 'Procedures for residential, corporate, retail, and hospital security.', 
    topics: ['Residential Estates', 'Corporate Offices', 'Retail Security', 'Bank Protocols'] 
  },
  { 
    id: '12', 
    title: 'Advanced Specialized Modules', 
    description: 'VIP protection, cash-in-transit, and anti-terrorism awareness.', 
    topics: ['VIP Protection', 'Cash-in-Transit', 'Anti-Terrorism', 'Disaster Response'] 
  },
  { 
    id: '13', 
    title: 'Practical Drills & Sims', 
    description: 'Real-time incident simulation, patrol drills, and evacuation exercises.', 
    topics: ['Patrol Drills', 'Access Scenarios', 'Fire/Evac Drills', 'Incident Sims'] 
  },
  { 
    id: '14', 
    title: 'Assessment & Certification', 
    description: 'Written and practical evaluations required for performance certification.', 
    topics: ['Written Exams', 'Practical Evals', 'Performance Review', 'Certification'] 
  },
];

export const OPS_LOGS: OperationalLogItem[] = [
  { id: '1', code: 'CMD-ABUJA-HQ', location: 'ABUJA COMMAND', status: 'ACTIVE', timestamp: 'LIVE FEED' },
  { id: '2', code: 'CMD-YOLA-NO', location: 'YOLA COMMAND', status: 'ACTIVE', timestamp: 'LIVE FEED' },
  { id: '3', code: 'OP-LAGOS-22', location: 'LAGOS OUTPOST', status: 'SECURED', timestamp: '22:00 ZULU' },
  { id: '4', code: 'OP-DEMSA-UNI', location: 'DEMSA UNI', status: 'ACTIVE', timestamp: '09:45 ZULU' },
];

export const NEWS: NewsItem[] = [
  { 
    id: 'n1', 
    category: 'TRAINING', 
    title: 'IKG Academy: Enrollment Open for Batch 24', 
    date: 'FEB 04, 2026', 
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'n2', 
    category: 'CORPORATE', 
    title: 'Strategic Partnership with Smart City Africa', 
    date: 'JAN 28, 2026', 
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  { 
    id: 'n3', 
    category: 'INTEL', 
    title: 'Security Advisory: North-East Corridor', 
    date: 'JAN 15, 2026', 
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=800&auto=format&fit=crop'
  },
];