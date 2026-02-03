
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-right">
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl font-bold text-blue-400">{CONTACT_INFO.name}</h2>
            <p className="text-slate-400 leading-relaxed">{t.footer.mission}</p>
          </div>
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>📞 <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a></li>
              <li>💬 <a href={`https://wa.me/212${CONTACT_INFO.whatsapp.substring(1)}`} target="_blank">WhatsApp: {CONTACT_INFO.whatsapp}</a></li>
            </ul>
          </div>
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-bold">{t.footer.hoursTitle}</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>{t.footer.monFri}</span>
                <span dir="ltr">09:00 - 18:30</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1">
                <span>{t.footer.sat}</span>
                <span dir="ltr">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t.footer.sun}</span>
                <span className="text-red-400">{t.footer.closed}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
