
import React from 'react';
import { CONTACT_INFO, SERVICES as RAW_SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h1 className="text-blue-600 font-bold tracking-widest uppercase text-sm">{t.servicesPage.badge}</h1>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">{t.servicesPage.title}</h2>
          <p className="text-slate-500 text-lg">{t.servicesPage.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.services.map((service: any, index: number) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={RAW_SERVICES[index]?.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row' : 'flex-row'}`}>
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-blue-600 font-bold group-hover:underline"
                >
                  {t.servicesPage.bookThis}
                  <span className={`mr-2 text-xl group-hover:${isRTL ? 'translate-x-[-5px]' : 'translate-x-[5px]'} transition-transform`}>{isRTL ? '←' : '→'}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
           <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-black text-slate-900">{t.servicesPage.whyTitle}</h3>
              <ul className="space-y-4">
                {t.servicesPage.whyItems.map((item: string, i: number) => (
                  <li key={i} className={`flex items-center gap-3 text-slate-600 font-medium ${isRTL ? '' : ''}`}>
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
           <div className="flex-1 w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=800" 
                className="w-full h-full object-cover" 
                alt="Clinic"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
