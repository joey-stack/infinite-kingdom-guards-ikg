import { ServiceItem, CurriculumModule, OperationalLogItem, NewsItem } from './types';

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
  { id: '1', title: 'Introduction to Security', description: 'Overview, roles, and ethics within the security landscape.', topics: ['Overview', 'Roles & Responsibilities', 'Types of Security', 'Ethics'] },
  { id: '2', title: 'Legal & Regulatory', description: 'Understanding rights, limitations, and use-of-force laws.', topics: ['Laws in Nigeria', 'Rights & Limitations', 'Use-of-Force', 'Human Rights'] },
  { id: '3', title: 'Communication Skills', description: 'Mastering verbal and non-verbal protocols for effective operation.', topics: ['Verbal/Non-Verbal', 'Customer Service', 'Conflict Resolution', 'Radio Protocols'] },
  { id: '4', title: 'Patrol & Surveillance', description: 'Techniques for observation, access control, and monitoring.', topics: ['Situational Awareness', 'Access Control', 'Vehicle Screening', 'CCTV Basics'] },
  { id: '5', title: 'Emergency Response', description: 'Protocols for fire, medical, and crisis situations.', topics: ['Fire Safety', 'Evacuation', 'First Aid / CPR', 'Incident Protocol'] },
  { id: '6', title: 'Equipment & Tech', description: 'Operational mastery of radios, CCTV, and defensive tools.', topics: ['Radio Ops', 'CCTV Monitoring', 'Access Systems', 'Non-Lethal Tools'] },
  { id: '7', title: 'Incident Reporting', description: 'Accurate documentation and chain of custody procedures.', topics: ['Activity Logs', 'Evidence Handling', 'Chain of Custody'] },
  { id: '8', title: 'Threat Assessment', description: 'Identifying and neutralizing potential risks before materialization.', topics: ['Suspicious Behavior', 'Preventive Measures', 'Risk Assessment'] },
  { id: '9', title: 'Conflict & Crowd', description: 'De-escalation techniques for aggressive individuals and crowds.', topics: ['Aggressive Persons', 'Crowd Management', 'De-Escalation'] },
  { id: '10', title: 'Professional Conduct', description: 'Discipline, grooming, and psychological resilience training.', topics: ['Grooming', 'Discipline', 'Mental Preparedness', 'Stress Mgmt'] },
  { id: '11', title: 'Site-Specific Ops', description: 'Tailored procedures for residential, corporate, and retail environments.', topics: ['Residential', 'Corporate', 'Retail', 'Hospitality/Banking'] },
  { id: '12', title: 'Specialized Modules', description: 'Advanced training for VIPs, transit, and counter-terrorism.', topics: ['VIP Protection', 'Cash-in-Transit', 'Anti-Terrorism', 'Disaster Response'] },
  { id: '13', title: 'Practical Drills', description: 'Real-world simulation of emergency and patrol scenarios.', topics: ['Patrol Scenarios', 'Fire Drills', 'First-Aid Sims', 'Real-Time Incidents'] },
  { id: '14', title: 'Certification', description: 'Final theoretical and practical evaluations for qualification.', topics: ['Written Assessment', 'Practical Eval', 'Performance Review'] },
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