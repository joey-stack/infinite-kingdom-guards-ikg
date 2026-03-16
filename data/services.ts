import { Shield, Target, Building2, Crosshair, Users, Activity, UserCheck, FileText, ShieldAlert, Home, BookOpen, MessageSquare } from 'lucide-react';

export const servicesData = [
    {
        id: 'escort-services',
        title: "Escort Services",
        icon: Shield,
        desc: "Secure transport and protection for high-value personnel and assets.",
        longDesc: "Protocol-driven secure escort services ensuring safe transit for VVIPs, corporate executives, and sensitive materials across diverse environments.",
        features: [
            "Secure Transit",
            "Route Planning",
            "Asset Protection",
            "VVIP Protocol"
        ]
    },
    {
        id: 'close-protection',
        title: "Close Protection",
        icon: UserCheck,
        desc: "Elite personal security detail for individual protection.",
        longDesc: "Dedicated personal protection officers (Bodyguards) trained in defensive tactics, threat assessment, and emergency evacuation to ensure individual safety at all times.",
        features: [
            "Personal Detail",
            "Threat Assessment",
            "Crisis Management",
            "Covert Protection"
        ]
    },
    {
        id: 'protocol',
        title: "Protocol",
        icon: FileText,
        desc: "Diplomatic and corporate coordination for high-profile events.",
        longDesc: "Comprehensive administrative and diplomatic support, managing high-profile arrivals, event coordination, and official liaison services with precision.",
        features: [
            "Diplomatic Liaison",
            "Event Management",
            "Logistics Support",
            "Official Escort"
        ]
    },
    {
        id: 'office-security',
        title: "Office Security",
        icon: Building2,
        desc: "Integrated security solutions for corporate and commercial premises.",
        longDesc: "Standardized and high-tech security for corporate environments, focusing on access control, asset protection, and personnel safety within office complexes.",
        features: [
            "Access Control",
            "Perimeter Defense",
            "Staff Safety",
            "Loss Prevention"
        ]
    },
    {
        id: 'bouncers',
        title: "Bouncers",
        icon: Users,
        desc: "Professional crowd management for clubs and private venues.",
        longDesc: "Specialized physical security for nightlife, private events, and entertainment venues, focused on conflict resolution and entry management.",
        features: [
            "Entry Verification",
            "Conflict Resolution",
            "Crowd Monitoring",
            "Incident Response"
        ]
    },
    {
        id: 'armed-protection',
        title: "Armed Protection",
        icon: Crosshair,
        desc: "Tactical armed response for high-risk security requirements.",
        longDesc: "Lethal and non-lethal armed response units available for high-threat scenarios, cash-in-transit, and high-value asset containment.",
        features: [
            "Tactical Response",
            "Asset Containment",
            "High-Threat Defense",
            "Rapid Deployment"
        ]
    },
    {
        id: 'crowd-control',
        title: "Crowd Control",
        icon: ShieldAlert,
        desc: "Strategic management of large-scale public or private events.",
        longDesc: "Large-scale management for stadiums, concerts, and public gatherings, ensuring smooth flow and rapid response to civil disturbances.",
        features: [
            "Egress Management",
            "Buffer Zones",
            "Risk Mitigation",
            "Public Safety"
        ]
    },
    {
        id: 'home-security',
        title: "Home Security",
        icon: Home,
        desc: "Residential protection and surveillance for private estates.",
        longDesc: "Comprehensive residential security including static guards, panic response systems, and perimeter monitoring for private homes and estates.",
        features: [
            "Estates Patrols",
            "Panic Systems",
            "Gate Security",
            "24/7 Monitoring"
        ]
    },
    {
        id: 'security-trainings',
        title: "Security Trainings",
        icon: BookOpen,
        desc: "Professional development and tactical conditioning for guards.",
        longDesc: "Comprehensive training programs covering physical fitness, tactical maneuvers, and specialized security protocols for professional protectors.",
        features: [
            "Tactical Drills",
            "Ethics & Conduct",
            "First Aid/Safety",
            "Weapon Proficiency"
        ]
    },
    {
        id: 'security-consultation',
        title: "Security Consultation",
        icon: MessageSquare,
        desc: "Strategic risk assessment and defensive advisory services.",
        longDesc: "Expert advisory services to identify vulnerabilities, develop security architectures, and optimize protective protocols for organizations and individuals.",
        features: [
            "Risk Analysis",
            "Policy Development",
            "Safety Audits",
            "Strategic Planning"
        ]
    }
];
