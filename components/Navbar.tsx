
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { lang, setLang, t, isRTL } = useLanguage();
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-black bg-gradient-to-l from-blue-700 to-sky-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              {CONTACT_INFO.name}
            </Link>
          </div>

          {/* Desktop Menu - Center & Right Side */}
          <div className="hidden md:flex items-center flex-1 justify-end gap-6 lg:gap-10">
            {/* Nav Links Group */}
            <div className="flex items-center gap-6 lg:gap-8 mx-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-hover-effect text-lg font-bold transition-all whitespace-nowrap ${
                    isActive(link.path) ? 'text-blue-600 scale-105' : 'text-slate-600 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Language & CTA Group */}
            <div className="flex items-center gap-4 border-r border-slate-100 pr-4 rtl:border-r-0 rtl:pr-0 rtl:border-l rtl:pl-4">
              {/* Desktop Language Dropdown */}
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl text-sm font-black text-slate-700 transition-all active:scale-95"
                >
                  <svg className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="uppercase tracking-widest">{currentLangObj.code}</span>
                  <span className="text-lg leading-none">{currentLangObj.flag}</span>
                </button>

                {isLangMenuOpen && (
                  <div className={`absolute top-full mt-3 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 ${isRTL ? 'right-0' : 'left-0'}`}>
                    <div className="p-1.5 space-y-1">
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => {
                            setLang(l.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                            lang === l.code 
                              ? 'bg-blue-600 text-white' 
                              : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{l.flag}</span>
                            <span>{l.label}</span>
                          </div>
                          {lang === l.code && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Call Button */}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 text-base whitespace-nowrap"
              >
                {t.nav.call}
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
             <button
                onClick={() => setIsLangMenuOpen(true)}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-black text-slate-700 active:bg-slate-100"
             >
                <span className="uppercase tracking-widest">{currentLangObj.code}</span>
                <span className="text-base">{currentLangObj.flag}</span>
             </button>

            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="text-slate-600 hover:text-blue-600 p-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileNavOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileNavOpen(false)}
                className={`block px-4 py-4 rounded-2xl text-lg font-bold transition-all ${
                  isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileNavOpen(false)}
              className="block px-4 py-4 mt-4 bg-blue-600 text-white rounded-2xl text-center font-black shadow-lg"
            >
              {t.nav.call}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Language Selection Modal - Centered for visibility */}
      {isLangMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md" onClick={() => setIsLangMenuOpen(false)}></div>
           <div className="relative bg-white w-full max-w-sm rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-black text-slate-900">اللغة / Language</h3>
                 <button onClick={() => setIsLangMenuOpen(false)} className="p-2 text-slate-400 bg-slate-50 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                 </button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-6 py-5 rounded-2xl text-lg font-black transition-all ${
                      lang === l.code 
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100' 
                        : 'bg-slate-50 text-slate-600 active:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{l.flag}</span>
                      <span>{l.label}</span>
                    </div>
                    {lang === l.code && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </button>
                ))}
              </div>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
