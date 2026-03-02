import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../sections/Footer';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/services';
import {
    Shield, LogOut, MapPin, Users, Clock, DollarSign,
    Activity, CheckCircle, AlertTriangle, Radio, FileText,
    ChevronRight, Zap
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface Deployment {
    id: string;
    serviceId: string;
    guards: number;
    location: string;
    status: string;
    startDate: string;
    cost: number;
}

interface ClientData {
    name: string;
    email: string;
    id: string;
    deployments: Deployment[];
}

export const ClientDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [client, setClient] = useState<ClientData | null>(null);
    const [activeTab, setActiveTab] = useState<'overview' | 'deployments' | 'billing'>('overview');

    useEffect(() => {
        const auth = localStorage.getItem('ikg_auth');
        const storedClient = localStorage.getItem('ikg_client');

        if (!auth || !storedClient) {
            navigate('/login');
            return;
        }

        setClient(JSON.parse(storedClient));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('ikg_auth');
        navigate('/login');
    };

    if (!client) return null;

    const totalGuards = client.deployments.reduce((sum, d) => sum + d.guards, 0);
    const totalCost = client.deployments.reduce((sum, d) => sum + d.cost, 0);
    const activeDeployments = client.deployments.filter(d => d.status === 'Active').length;

    const getServiceName = (serviceId: string) => {
        return servicesData.find(s => s.id === serviceId)?.title || serviceId;
    };

    return (
        <div className="min-h-screen bg-ikg-stealth font-sans text-white selection:bg-ikg-gold selection:text-black">
            <Navbar />

            <div className="pt-28 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-mono text-green-500 uppercase tracking-widest">System Online</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                            Command <span className="text-ikg-gold">Center</span>
                        </h1>
                        <p className="text-white/40 font-mono text-sm mt-2">
                            Welcome, <span className="text-white">{client.name}</span> // ID: <span className="text-ikg-gold">{client.id}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/booking"
                            className="px-6 py-3 bg-ikg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4" />
                            New Deployment
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 border border-white/20 text-white/60 font-bold uppercase text-xs tracking-widest hover:border-red-500 hover:text-red-500 transition-colors flex items-center gap-2"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: 'Active Deployments', value: activeDeployments, icon: Activity, color: 'text-green-500', bg: 'bg-green-500/10' },
                        { label: 'Personnel Deployed', value: totalGuards, icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                        { label: 'Threat Level', value: 'ELEVATED', icon: AlertTriangle, color: 'text-orange-400', bg: 'bg-orange-500/10' },
                        { label: 'Total Investment', value: `$${totalCost.toLocaleString()}`, icon: DollarSign, color: 'text-ikg-gold', bg: 'bg-ikg-gold/10' }
                    ].map((kpi, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/[0.02] border border-white/10 p-6 hover:border-white/20 transition-colors"
                        >
                            <div className={`p-2 ${kpi.bg} rounded w-fit mb-4`}>
                                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                            </div>
                            <div className="text-2xl md:text-3xl font-black text-white mb-1">{kpi.value}</div>
                            <div className="text-xs font-mono text-white/40 uppercase tracking-widest">{kpi.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 mb-8 border-b border-white/10">
                    {[
                        { id: 'overview' as const, label: 'Situation Room', icon: Radio },
                        { id: 'deployments' as const, label: 'Active Units', icon: Shield },
                        { id: 'billing' as const, label: 'Financial Intel', icon: FileText }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-4 font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-all border-b-2 -mb-[1px] ${activeTab === tab.id
                                ? 'text-ikg-gold border-ikg-gold bg-white/[0.02]'
                                : 'text-white/40 border-transparent hover:text-white/60'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {/* Status Panel */}
                        <div className="md:col-span-2 bg-white/[0.02] border border-white/10 p-8">
                            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-green-500" />
                                Operational Status
                            </h3>

                            <div className="space-y-6">
                                {client.deployments.map((dep, idx) => (
                                    <div key={idx} className="bg-black/30 border border-white/5 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-3 h-3 rounded-full ${dep.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                            <div>
                                                <div className="font-bold uppercase text-white">{getServiceName(dep.serviceId)}</div>
                                                <div className="text-xs font-mono text-white/40 flex items-center gap-2 mt-1">
                                                    <MapPin className="w-3 h-3" /> {dep.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-center">
                                                <div className="text-lg font-black text-white">{dep.guards}</div>
                                                <div className="text-[10px] font-mono text-white/30 uppercase">Personnel</div>
                                            </div>
                                            <div className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border ${dep.status === 'Active'
                                                ? 'border-green-500 text-green-500'
                                                : 'border-red-500 text-red-500'
                                                }`}>
                                                {dep.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Intel Sidebar */}
                        <div className="space-y-6">
                            {/* Threat Level */}
                            <div className="bg-orange-500/5 border border-orange-500/20 p-6">
                                <h4 className="text-sm font-bold uppercase flex items-center gap-2 text-orange-400 mb-4">
                                    <AlertTriangle className="w-4 h-4" />
                                    Threat Assessment
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/60">Regional Risk</span>
                                        <span className="font-mono text-orange-400">MODERATE</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/5 rounded overflow-hidden">
                                        <div className="w-[60%] h-full bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500 rounded"></div>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-white/60">Cyber Threat</span>
                                        <span className="font-mono text-red-400">HIGH</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/5 rounded overflow-hidden">
                                        <div className="w-[80%] h-full bg-gradient-to-r from-green-500 via-orange-400 to-red-500 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white/[0.02] border border-white/10 p-6">
                                <h4 className="text-sm font-bold uppercase mb-4 text-white">Quick Actions</h4>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Request Additional Guards', href: '/booking' },
                                        { label: 'Report Incident', href: '#' },
                                        { label: 'Contact Command', href: '#' }
                                    ].map((action, i) => (
                                        <Link
                                            key={i}
                                            to={action.href}
                                            className="w-full p-3 border border-white/5 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-ikg-gold hover:border-ikg-gold/30 transition-colors flex items-center justify-between"
                                        >
                                            {action.label}
                                            <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'deployments' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        {client.deployments.map((dep, idx) => {
                            const service = servicesData.find(s => s.id === dep.serviceId);
                            return (
                                <div key={idx} className="bg-white/[0.02] border border-white/10 p-8 flex flex-col lg:flex-row gap-8">
                                    {/* Unit Details */}
                                    <div className="lg:w-1/2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-3 h-3 rounded-full ${dep.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                            <span className={`text-xs font-bold uppercase tracking-widest ${dep.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                                                {dep.status}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase mb-2 text-white">{service?.title || dep.serviceId}</h3>
                                        <p className="text-white/50 text-sm mb-6">{service?.longDesc?.slice(0, 150) || 'Deployment details classified.'}...</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-black/30 border border-white/5 p-4">
                                                <Users className="w-4 h-4 text-ikg-gold mb-2" />
                                                <div className="text-2xl font-black">{dep.guards}</div>
                                                <div className="text-[10px] font-mono text-white/40 uppercase">Personnel</div>
                                            </div>
                                            <div className="bg-black/30 border border-white/5 p-4">
                                                <MapPin className="w-4 h-4 text-ikg-gold mb-2" />
                                                <div className="text-sm font-bold truncate">{dep.location}</div>
                                                <div className="text-[10px] font-mono text-white/40 uppercase">Location</div>
                                            </div>
                                            <div className="bg-black/30 border border-white/5 p-4">
                                                <Clock className="w-4 h-4 text-ikg-gold mb-2" />
                                                <div className="text-sm font-bold">{dep.startDate}</div>
                                                <div className="text-[10px] font-mono text-white/40 uppercase">Start Date</div>
                                            </div>
                                            <div className="bg-black/30 border border-white/5 p-4">
                                                <DollarSign className="w-4 h-4 text-ikg-gold mb-2" />
                                                <div className="text-sm font-bold">${dep.cost.toLocaleString()}</div>
                                                <div className="text-[10px] font-mono text-white/40 uppercase">Contract Value</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Unit Roster */}
                                    <div className="lg:w-1/2 bg-black/20 border border-white/5 p-6">
                                        <h4 className="text-sm font-bold uppercase mb-4 text-white/60 flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-ikg-gold" /> Assigned Personnel
                                        </h4>
                                        <div className="space-y-3">
                                            {Array.from({ length: Math.min(dep.guards, 5) }, (_, i) => (
                                                <div key={i} className="flex items-center gap-4 p-3 bg-white/[0.02] border border-white/5">
                                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xs font-mono text-white/30">
                                                        {String.fromCharCode(65 + i)}{i + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="text-sm font-bold text-white">Operative {String.fromCharCode(65 + i)}-{1000 + i}</div>
                                                        <div className="text-[10px] font-mono text-white/30 uppercase">
                                                            {['Team Lead', 'Point Guard', 'Overwatch', 'Medic', 'Comms'][i]}
                                                        </div>
                                                    </div>
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                </div>
                                            ))}
                                            {dep.guards > 5 && (
                                                <p className="text-xs text-white/30 text-center font-mono">
                                                    + {dep.guards - 5} additional operatives assigned
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}

                {activeTab === 'billing' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        {/* Billing Summary */}
                        <div className="bg-white/[0.02] border border-white/10 p-8">
                            <h3 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-ikg-gold" />
                                Financial Summary
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-black/30 border border-white/5 p-6">
                                    <div className="text-3xl font-black text-ikg-gold mb-2">${totalCost.toLocaleString()}</div>
                                    <div className="text-xs font-mono text-white/40 uppercase">Total Billed</div>
                                </div>
                                <div className="bg-black/30 border border-white/5 p-6">
                                    <div className="text-3xl font-black text-green-500 mb-2">$0</div>
                                    <div className="text-xs font-mono text-white/40 uppercase">Outstanding Balance</div>
                                </div>
                                <div className="bg-black/30 border border-white/5 p-6">
                                    <div className="text-3xl font-black text-white mb-2">{client.deployments.length}</div>
                                    <div className="text-xs font-mono text-white/40 uppercase">Active Contracts</div>
                                </div>
                            </div>

                            {/* Invoice Table */}
                            <div className="overflow-x-auto -mx-2 px-2">
                                <div className="border border-white/10 overflow-hidden min-w-[600px]">
                                    <div className="grid grid-cols-5 gap-4 p-4 bg-white/5 text-xs font-mono uppercase tracking-widest text-white/40">
                                        <span>Invoice ID</span>
                                        <span>Service</span>
                                        <span>Date</span>
                                        <span>Amount</span>
                                        <span>Status</span>
                                    </div>
                                    {client.deployments.map((dep, idx) => (
                                        <div key={idx} className="grid grid-cols-5 gap-4 p-4 border-t border-white/5 text-sm hover:bg-white/[0.02] transition-colors">
                                            <span className="font-mono text-white/60 text-xs">{dep.id.slice(0, 12)}...</span>
                                            <span className="font-bold text-white text-xs uppercase">{getServiceName(dep.serviceId)}</span>
                                            <span className="text-white/50 text-xs">{dep.startDate}</span>
                                            <span className="font-mono text-ikg-gold text-xs">${dep.cost.toLocaleString()}</span>
                                            <span className="text-green-500 font-bold text-xs uppercase flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3" /> Paid
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            <Footer />
        </div>
    );
};
