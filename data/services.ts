import { Shield, Target, Radio, Crosshair, Users, Activity } from 'lucide-react';

export const servicesData = [
    {
        id: 'mobile-static-security',
        title: "Mobile & Static Security",
        icon: Shield,
        desc: "Rapid response units for high-risk transit zones and fixed assets.",
        longDesc: "Our Mobile & Static Security units provide comprehensive protection for both moving and fixed assets. Utilizing armored vehicles and highly trained personnel, we ensure the safety of high-value cargo and individuals in transit. For static locations, our perimeter defense systems and access control protocols create an impenetrable shield against unauthorized access.",
        features: [
            "Armored Transport Escort",
            "24/7 Static Guarding",
            "Access Control Management",
            "Crisis Response Protocols"
        ]
    },
    {
        id: 'patrol-operations',
        title: "Patrol Operations",
        icon: Target,
        desc: "24/7 static and roving perimeter defense systems with real-time tracking.",
        longDesc: "We maintain a constant presence with our Patrol Operations. Our roving units utilize GPS-tracked vehicles and body cams to ensure total accountability and real-time situational awareness. Whether it's a residential estate or a corporate complex, our patrols act as a powerful deterrent and a rapid response force.",
        features: [
            "GPS-Tracked Roving Units",
            "Real-time Incident Reporting",
            "Perimeter Integrity Checks",
            "Coordination with Law Enforcement"
        ]
    },
    {
        id: 'surveillance',
        title: "Surveillance",
        icon: Radio,
        desc: "Drone-assisted monitoring and advanced electronic countermeasures.",
        longDesc: "Gain the upper hand with our advanced Surveillance capabilities. We deploy aerial drones for wide-area monitoring and thermal imaging cameras for night operations. Our electronic countermeasures team secures your communications and sweeps for bugs to protect sensitive information.",
        features: [
            "Aerial Drone Monitoring",
            "Thermal & Night Vision",
            "TSCM (Bug Sweeping)",
            "CCTV Command Center Integration"
        ]
    },
    {
        id: 'combat-training',
        title: "Combat Training",
        icon: Crosshair,
        desc: "Advanced tactical instruction for private sector defense personnel.",
        longDesc: "Our Combat Training modules are derived from special forces methodologies. We offer advanced tactical instruction for private security teams, covering close quarters battle (CQB), defensive driving, and weapon handling. Elevate your team's capability to military standards.",
        features: [
            "Close Quarters Battle (CQB)",
            "Defensive Driving Courses",
            "Weapon Handling & Safety",
            "Hostile Environment Awareness"
        ]
    },
    {
        id: 'guard-training',
        title: "Guard Training",
        icon: Users,
        desc: "Rigorous vetting and physical conditioning programs for elite guards.",
        longDesc: "Quality starts with training. Our Guard Training program is a rigorous selection and conditioning process designed to produce elite protectors. We focus on physical fitness, conflict de-escalation, and legal compliance, ensuring our guards are disciplined professionals.",
        features: [
            "Physical Conditioning",
            "Conflict De-escalation",
            "First Aid & CPR Certification",
            "Professional Etiquette"
        ]
    },
    {
        id: 'self-defense',
        title: "Self Defense",
        icon: Activity,
        desc: "Specialized civilian and corporate personal protection workshops.",
        longDesc: "Empower yourself and your staff with our Self Defense workshops. Tailored for civilians and corporate teams, these sessions teach practical personal protection techniques, situational awareness, and threat avoidance. Confidence is the first line of defense.",
        features: [
            "Krav Maga Fundamentals",
            "Situational Awareness",
            "Anti-Kidnapping Drills",
            "Corporate Safety Seminars"
        ]
    }
];
