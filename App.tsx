import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustSignals } from './components/sections/TrustSignals';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Industries } from './components/sections/Industries';
import { Testimonials } from './components/sections/Testimonials';
import { Academy } from './components/sections/Academy';
import { Recruiting } from './components/sections/Recruiting';
import { Footer } from './components/sections/Footer';
import { SmoothScroll } from './components/ui/SmoothScroll';

// Lazy load page components
const AboutPage = React.lazy(() => import('./components/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = React.lazy(() => import('./components/pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AcademyPage = React.lazy(() => import('./components/pages/AcademyPage'));
const FieldReportsPage = React.lazy(() => import('./components/pages/FieldReportsPage').then(m => ({ default: m.FieldReportsPage })));
const FieldReportDetail = React.lazy(() => import('./components/pages/FieldReportDetail').then(m => ({ default: m.FieldReportDetail })));
const BookingPage = React.lazy(() => import('./components/pages/BookingPage').then(m => ({ default: m.BookingPage })));
const LoginPage = React.lazy(() => import('./components/pages/LoginPage').then(m => ({ default: m.LoginPage })));
const ClientDashboard = React.lazy(() => import('./components/pages/ClientDashboard').then(m => ({ default: m.ClientDashboard })));
const ContactPage = React.lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = React.lazy(() => import('./components/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const ServiceDetail = React.lazy(() => import('./components/pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));

import { ProtectedRoute } from './components/ui/ProtectedRoute';
import { PromoPopup } from './components/ui/PromoPopup';

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen w-full bg-ikg-stealth flex items-center justify-center">
    <div className="w-16 h-[2px] bg-ikg-gold animate-pulse" />
  </div>
);

const Home: React.FC = () => (
  <main className="min-h-screen w-full bg-ikg-stealth relative overflow-x-hidden">
    <Navbar />
    <Hero />
    <TrustSignals />
    <About />
    <Services />
    <Industries />
    <Academy />
    <Testimonials />
    <Footer />
  </main>
);

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <PromoPopup />
      <React.Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/field-reports" element={<FieldReportsPage />} />
          <Route path="/field-reports/:id" element={<FieldReportDetail />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><ClientDashboard /></ProtectedRoute>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
    </SmoothScroll>
  );
};

export default App;