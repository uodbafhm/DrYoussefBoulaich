
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { label: t.stats.reviews, value: `${CONTACT_INFO.reviews}+`, icon: '⭐' },
    { label: t.stats.experience, value: '10+', icon: '🎓' },
    { label: t.stats.patients, value: '1500+', icon: '😊' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Dental office"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className={`max-w-2xl text-white space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-block px-4 py-1.5 bg-blue-600/30 backdrop-blur-md rounded-full text-blue-100 text-sm font-bold border border-blue-500/20">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              {t.hero.title} <br />
              <span className="text-blue-400">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className={`flex flex-wrap gap-4 pt-4 ${isRTL ? 'justify-start' : ''}`}>
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                {t.hero.cta}
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all"
              >
                {t.hero.servicesCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Services */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold mb-2">{t.homeServices.subtitle}</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">{t.homeServices.title}</h3>
            </div>
            <Link to="/services" className={`text-blue-600 font-bold flex items-center gap-2 hover:${isRTL ? 'translate-x-[-4px]' : 'translate-x-[4px]'} transition-transform`}>
              {t.homeServices.viewAll} 
              <span className="text-2xl">{isRTL ? '←' : '→'}</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.slice(0, 3).map((service: any) => (
              <div key={service.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden relative">
                  <img src={CONTACT_INFO.name === "Dr. Youssef Boulaich" ? (
                    service.id === 'blanchiment' ? "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800" :
                    service.id === 'implants' ? "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp" :
                    "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800"
                  ) : ""} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-slate-500 line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-sky-400 rounded-full blur-3xl opacity-50"></div>
          
          <h2 className="text-4xl md:text-5xl font-black relative z-10 leading-tight">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl relative z-10">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition-colors shadow-lg shadow-black/10"
            >
              {t.cta.btn}
            </Link>
            <a 
              href={`https://wa.me/212${CONTACT_INFO.whatsapp.substring(1)}`} 
              target="_blank" 
              className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-green-600 transition-colors shadow-lg shadow-black/10 flex items-center gap-2"
            >
              <span>{t.cta.whatsapp}</span>
              <span className="text-2xl">💬</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
