import { Shield, Target, Radio, Crosshair, Users, Activity } from 'lucide-react';

export const servicesData = [
    {
        id: 'combat-training',
        title: "Combat Training",
        icon: Crosshair,
        desc: "Tactical maneuvers, weapons handling, and battlefield communication.",
        longDesc: "We offer a wide range of training activities, including physical fitness, weapons handling, tactical maneuvers, hand-to-hand combat techniques, marksmanship, battlefield communication, and other relevant skills required for combat situations.",
        features: [
            "Weapons Handling",
            "Tactical Maneuvers",
            "Hand-to-Hand Combat",
            "Battlefield Communication"
        ]
    },
    {
        id: 'guard-training',
        title: "Security Guard Training",
        icon: Users,
        desc: "Ensuring guards effectively perform duties and protect premises.",
        longDesc: "We carry out security guard training which helps to make sure that our security officers can effectively perform their duties, from protecting your premises to dealing with various emergency situations. It's also a good way to keep them from making mistakes that could harm our clients and in turn legally damage our business reputation.",
        features: [
            "Premises Protection",
            "Emergency Response",
            "Risk Mitigation",
            "Professional Conduct"
        ]
    },
    {
        id: 'self-defense',
        title: "Self-Defense",
        icon: Activity,
        desc: "Reasonable force to protect oneself and family from aggressors.",
        longDesc: "We also give training for self-defense which is the use of reasonable force to protect oneself or members of the family from bodily harm from the attack of an aggressor, if you sense you're in danger.",
        features: [
            "Personal Protection",
            "Family Security",
            "Threat Awareness",
            "Defensive Techniques"
        ]
    },
    {
        id: 'physical-security',
        title: "Physical Security",
        icon: Shield,
        desc: "Personnel protection from actions and events causing loss or damage.",
        longDesc: "Mobile and Static - we take care of personnel protection from physical actions and events that could cause serious loss or damage to an individual.",
        features: [
            "Mobile Security",
            "Static Protection",
            "Personnel Safety",
            "Asset Security"
        ]
    },
    {
        id: 'patrols',
        title: "Patrols",
        icon: Target,
        desc: "Well-trained guards monitoring and securing specific assigned areas.",
        longDesc: "We have well trained guards who carry out patrols to monitor and secure the specific geographic area they have been assigned to.",
        features: [
            "Area Monitoring",
            "Perimeter Checks",
            "Rapid Response",
            "Situational Vetting"
        ]
    },
    {
        id: 'surveillance',
        title: "Surveillance",
        icon: Radio,
        desc: "Continuous observation to gather info for strategic security decisions.",
        longDesc: "Our guards are trained to carryout continuous or prolonged observation of an individual, group, or organization to gather information that can aid informed and strategic security decisions.",
        features: [
            "Prolonged Observation",
            "Information Gathering",
            "Strategic Intelligence",
            "Advanced Monitoring"
        ]
    }
];
