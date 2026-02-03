
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', phone: '', service: '', date: '', time: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">{t.contactPage.title}</h1>
          <p className="text-slate-500 text-lg">{t.contactPage.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20 space-y-6 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto">✓</div>
                <h3 className="text-3xl font-bold text-slate-900">{t.contactPage.success}</h3>
                <p className="text-slate-500 text-lg">{t.contactPage.successDesc}</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">{t.contactPage.sendAnother}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.contactPage.formTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">{t.contactPage.nameLabel}</label>
                    <input type="text" name="fullName" required placeholder={t.contactPage.nameLabel} value={formData.fullName} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">{t.contactPage.phoneLabel}</label>
                    <input type="tel" name="phone" required placeholder="06XXXXXXXX" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.contactPage.serviceLabel}</label>
                  <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="">{t.contactPage.servicePlaceholder}</option>
                    {t.services.map((s: any) => <option key={s.id} value={s.id}>{s.title}</option>)}
                    <option value="other">{t.contactPage.otherService}</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">{t.contactPage.dateLabel}</label>
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">{t.contactPage.timeLabel}</label>
                    <input type="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 block">{t.contactPage.messageLabel}</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder={t.contactPage.messagePlaceholder}></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 text-lg">{t.contactPage.submit}</button>
              </form>
            )}
          </div>

          <div className="space-y-10">
            <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-8">{t.contactPage.infoTitle}</h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.contactPage.locTitle}</h4>
                    <p className="text-slate-400">{t.contactPage.locCity}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📱</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.contactPage.callUs}</h4>
                    <p className="text-slate-400">Tel: <span dir="ltr">{CONTACT_INFO.phone}</span></p>
                    <p className="text-slate-400">WhatsApp: <span dir="ltr">{CONTACT_INFO.whatsapp}</span></p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📷</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.contactPage.followUs}</h4>
                    <a href={CONTACT_INFO.instagram} target="_blank" className="text-blue-400 hover:text-blue-300 font-medium">@dr.boulaichyoussef</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-white h-[450px]">
              <iframe src={CONTACT_INFO.mapIframe} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
