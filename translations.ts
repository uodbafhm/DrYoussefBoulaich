
export type Language = 'ar' | 'fr' | 'en' | 'es';

export const translations = {
  ar: {
    nav: { home: 'الرئيسية', services: 'خدماتنا', contact: 'حجز موعد', call: 'اتصل بنا' },
    hero: {
      badge: 'رعاية متطورة لابتسامتك',
      title: 'نحن نهتم بجمال',
      titleAccent: 'وصحة ابتسامتك',
      desc: 'الدكتور يوسف بولعيش يقدم لكم أحدث الحلول الطبية في طب الأسنان بخبرة عالمية ولمسة إنسانية في قلب مدينة تطوان.',
      cta: 'احجز موعدك الآن',
      servicesCta: 'اكتشف خدماتنا'
    },
    stats: {
      reviews: 'تقييم إيجابي',
      experience: 'سنوات من الخبرة',
      patients: 'مريض سعيد'
    },
    homeServices: {
      subtitle: 'ماذا نقدم؟',
      title: 'أفضل الحلول المتكاملة لصحة وجمال الفم والأسنان',
      viewAll: 'عرض جميع الخدمات'
    },
    cta: {
      title: 'جاهز للحصول على ابتسامة أحلامك؟',
      desc: 'تواصل معنا اليوم لحجز استشارتك الأولى مع الدكتور يوسف بولعيش.',
      btn: 'احجز موعد الآن',
      whatsapp: 'واتساب مباشر'
    },
    footer: {
      mission: 'نلتزم بتقديم أفضل رعاية صحية لأسنانكم باستخدام أحدث التقنيات لضمان ابتسامة مشرقة وصحية تدوم طويلاً.',
      contactTitle: 'معلومات التواصل',
      hoursTitle: 'ساعات العمل',
      monFri: 'الإثنين - الجمعة',
      sat: 'السبت',
      sun: 'الأحد',
      closed: 'مغلق',
      rights: 'جميع الحقوق محفوظة.'
    },
    servicesPage: {
      badge: 'تخصصاتنا',
      title: 'نقدم رعاية شاملة لجميع احتياجات أسنانك',
      desc: 'نعتمد في عيادتنا على أحدث المعدات الطبية العالمية لضمان نتائج مبهرة وأقل قدر من الألم.',
      bookThis: 'حجز موعد لهذه الخدمة',
      whyTitle: 'لماذا تختار عيادتنا؟',
      whyItems: [
        'أحدث التقنيات الرقمية لطب الأسنان.',
        'تعقيم صارم وفق المعايير الدولية.',
        'بيئة مريحة وهادئة لتقليل التوتر.',
        'طاقم طبي محترف ومتعاون.'
      ]
    },
    contactPage: {
      title: 'تواصل معنا واحجز موعدك',
      desc: 'فريقنا جاهز للإجابة على جميع استفساراتكم وتحديد الموعد الأنسب لكم.',
      formTitle: 'معلومات الموعد',
      nameLabel: 'الإسم الكامل',
      phoneLabel: 'رقم الهاتف',
      serviceLabel: 'الخدمة المطلوبة',
      servicePlaceholder: 'اختر الخدمة...',
      otherService: 'أخرى / استشارة عامة',
      dateLabel: 'التاريخ المفضل',
      timeLabel: 'الوقت المفضل',
      messageLabel: 'رسالة إضافية (اختياري)',
      messagePlaceholder: 'اكتب ملاحظاتك هنا...',
      submit: 'تأكيد حجز الموعد',
      success: 'شكراً لك!',
      successDesc: 'لقد تم استلام طلبك بنجاح. سنقوم بالاتصال بك قريباً لتأكيد الموعد.',
      sendAnother: 'إرسال طلب آخر',
      infoTitle: 'معلومات الاتصال',
      locTitle: 'موقع العيادة',
      locCity: 'تطوان، المغرب',
      callUs: 'اتصل بنا',
      followUs: 'تابعنا'
    },
    services: [
      { id: "blanchiment", title: "تبييض الأسنان", description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.", icon: "✨" },
      { id: "implants", title: "زراعة الأسنان", description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.", icon: "🦷" },
      { id: "orthodontie", title: "تقويم الأسنان", description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.", icon: "📏" },
      { id: "soins", title: "علاج التسوس", description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.", icon: "🛡️" },
      { id: "detartrage", title: "تنظيف الأسنان", description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.", icon: "🧼" },
      { id: "extraction", title: "خلع الأسنان", description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم.", icon: "🗜️" }
    ]
  },
  fr: {
    nav: { home: 'Accueil', services: 'Services', contact: 'Rendez-vous', call: 'Contact' },
    hero: {
      badge: 'Soins avancés pour votre sourire',
      title: 'Nous prenons soin de la beauté',
      titleAccent: 'et de la santé de votre sourire',
      desc: 'Le Dr Youssef Boulaich vous propose les dernières solutions médicales en dentisterie avec une expertise internationale au cœur de Tétouan.',
      cta: 'Réserver un rendez-vous',
      servicesCta: 'Nos services'
    },
    stats: { reviews: 'Avis positifs', experience: 'Années d’expérience', patients: 'Patients satisfaits' },
    homeServices: { subtitle: 'Que proposons-nous ?', title: 'Solutions complètes pour la santé bucco-dentaire', viewAll: 'Voir tous les services' },
    cta: { title: 'Prêt pour le sourire de vos rêves ?', desc: 'Contactez-nous dès aujourd’hui pour votre première consultation.', btn: 'Prendre rendez-vous', whatsapp: 'WhatsApp direct' },
    footer: {
      mission: 'Engagés à fournir les meilleurs soins dentaires avec les dernières technologies pour un sourire éclatant.',
      contactTitle: 'Contact',
      hoursTitle: 'Horaires',
      monFri: 'Lundi - Vendredi',
      sat: 'Samedi',
      sun: 'Dimanche',
      closed: 'Fermé',
      rights: 'Tous droits réservés.'
    },
    servicesPage: {
      badge: 'Nos spécialités',
      title: 'Des soins complets pour tous vos besoins',
      desc: 'Nous utilisons les équipements mondiaux les plus récents pour garantir des résultats impressionnants.',
      bookThis: 'Prendre rendez-vous pour ce service',
      whyTitle: 'Pourquoi nous choisir ?',
      whyItems: ['Technologies numériques avancées.', 'Stérilisation rigoureuse.', 'Environnement confortable.', 'Équipe professionnelle.']
    },
    contactPage: {
      title: 'Contactez-nous et réservez',
      desc: 'Notre équipe est prête à répondre à toutes vos questions.',
      formTitle: 'Informations du rendez-vous',
      nameLabel: 'Nom complet',
      phoneLabel: 'Téléphone',
      serviceLabel: 'Service souhaité',
      servicePlaceholder: 'Choisir un service...',
      otherService: 'Autre / Consultation générale',
      dateLabel: 'Date préférée',
      timeLabel: 'Heure préférée',
      messageLabel: 'Message (optionnel)',
      messagePlaceholder: 'Écrivez vos notes ici...',
      submit: 'Confirmer le rendez-vous',
      success: 'Merci !',
      successDesc: 'Votre demande a été reçue. Nous vous contacterons bientôt.',
      sendAnother: 'Envoyer une autre demande',
      infoTitle: 'Informations de contact',
      locTitle: 'Emplacement',
      locCity: 'Tétouan, Maroc',
      callUs: 'Appelez-nous',
      followUs: 'Suivez-nous'
    },
    services: [
      { id: "blanchiment", title: "Blanchiment dentaire", description: "Blanchiment professionnel pour un sourire éclatant et naturel.", icon: "✨" },
      { id: "implants", title: "Implants dentaires", description: "Remplacement permanent des dents manquantes avec confort et esthétique.", icon: "🦷" },
      { id: "orthodontie", title: "Orthodontie", description: "Correction de l'alignement des dents pour enfants et adultes.", icon: "📏" },
      { id: "soins", title: "Soins des caries", description: "Traitement rapide et sans douleur pour préserver vos dents.", icon: "🛡️" },
      { id: "detartrage", title: "Détartrage & Polissage", description: "Élimination du tartre et de la plaque pour des gencives saines.", icon: "🧼" },
      { id: "extraction", title: "Extraction dentaire", description: "Extraction sûre avec soin particulier pour minimiser la douleur.", icon: "🗜️" }
    ]
  },
  en: {
    nav: { home: 'Home', services: 'Services', contact: 'Booking', call: 'Contact' },
    hero: {
      badge: 'Advanced care for your smile',
      title: 'We care for the beauty',
      titleAccent: 'and health of your smile',
      desc: 'Dr. Youssef Boulaich offers the latest medical solutions in dentistry with international expertise in the heart of Tetouan.',
      cta: 'Book Appointment Now',
      servicesCta: 'Explore Services'
    },
    stats: { reviews: 'Positive Reviews', experience: 'Years of Experience', patients: 'Happy Patients' },
    homeServices: { subtitle: 'What we offer?', title: 'Complete solutions for oral health and beauty', viewAll: 'View All Services' },
    cta: { title: 'Ready for your dream smile?', desc: 'Contact us today to book your first consultation with Dr. Youssef Boulaich.', btn: 'Book Now', whatsapp: 'Direct WhatsApp' },
    footer: {
      mission: 'Committed to providing the best dental care using the latest technology for a lasting bright smile.',
      contactTitle: 'Contact Info',
      hoursTitle: 'Working Hours',
      monFri: 'Mon - Fri',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'Closed',
      rights: 'All rights reserved.'
    },
    servicesPage: {
      badge: 'Our Specialties',
      title: 'Comprehensive care for all dental needs',
      desc: 'Our clinic uses state-of-the-art global medical equipment for painless results.',
      bookThis: 'Book this service',
      whyTitle: 'Why Choose Us?',
      whyItems: ['Advanced digital dentistry.', 'Strict sterilization standards.', 'Comfortable environment.', 'Professional medical staff.']
    },
    contactPage: {
      title: 'Get in Touch',
      desc: 'Our team is ready to answer your questions and find the best time for you.',
      formTitle: 'Appointment Info',
      nameLabel: 'Full Name',
      phoneLabel: 'Phone Number',
      serviceLabel: 'Required Service',
      servicePlaceholder: 'Choose a service...',
      otherService: 'Other / General Consultation',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      messageLabel: 'Additional Message (Optional)',
      messagePlaceholder: 'Write your notes here...',
      submit: 'Confirm Appointment',
      success: 'Thank You!',
      successDesc: 'Your request has been received. We will contact you shortly.',
      sendAnother: 'Send another request',
      infoTitle: 'Contact Information',
      locTitle: 'Clinic Location',
      locCity: 'Tetouan, Morocco',
      callUs: 'Call Us',
      followUs: 'Follow Us'
    },
    services: [
      { id: "blanchiment", title: "Teeth Whitening", description: "Professional whitening for a bright and natural smile.", icon: "✨" },
      { id: "implants", title: "Dental Implants", description: "Permanent and aesthetic tooth replacement for comfort.", icon: "🦷" },
      { id: "orthodontie", title: "Orthodontics", description: "Teeth alignment for children and adults for a healthy look.", icon: "📏" },
      { id: "soins", title: "Caries Treatment", description: "Fast, painless treatment to preserve tooth structure.", icon: "🛡️" },
      { id: "detartrage", title: "Cleaning & Scaling", description: "Removing plaque and tartar for healthy gums and fresh breath.", icon: "🧼" },
      { id: "extraction", title: "Tooth Extraction", description: "Safe extraction with special care to minimize pain.", icon: "🗜️" }
    ]
  },
  es: {
    nav: { home: 'Inicio', services: 'Servicios', contact: 'Cita', call: 'Contacto' },
    hero: {
      badge: 'Cuidado avanzado para su sonrisa',
      title: 'Cuidamos la belleza',
      titleAccent: 'y la salud de su sonrisa',
      desc: 'El Dr. Youssef Boulaich ofrece las últimas soluciones médicas en odontología con experiencia internacional en Tetuán.',
      cta: 'Reserve su cita',
      servicesCta: 'Nuestros servicios'
    },
    stats: { reviews: 'Reseñas positivas', experience: 'Años de experiencia', patients: 'Pacientes felices' },
    homeServices: { subtitle: '¿Qué ofrecemos?', title: 'Soluciones completas para la salud bucal', viewAll: 'Ver todos los servicios' },
    cta: { title: '¿Listo para la sonrisa de tus sueños?', desc: 'Contáctenos hoy para reservar su primera consulta con el Dr. Youssef Boulaich.', btn: 'Reservar ahora', whatsapp: 'WhatsApp directo' },
    footer: {
      mission: 'Comprometidos a brindar la mejor atención dental utilizando la última tecnología.',
      contactTitle: 'Contacto',
      hoursTitle: 'Horarios',
      monFri: 'Lunes - Viernes',
      sat: 'Sábado',
      sun: 'Domingo',
      closed: 'Cerrado',
      rights: 'Todos los derechos reservados.'
    },
    servicesPage: {
      badge: 'Especialidades',
      title: 'Atención integral para sus necesidades dentales',
      desc: 'Nuestra clínica utiliza equipos médicos de última generación para resultados sin dolor.',
      bookThis: 'Reservar este servicio',
      whyTitle: '¿Por qué elegirnos?',
      whyItems: ['Odontología digital avanzada.', 'Esterilización estricta.', 'Ambiente cómodo.', 'Personal profesional.']
    },
    contactPage: {
      title: 'Contáctenos',
      desc: 'Nuestro equipo está listo para responder sus preguntas.',
      formTitle: 'Información de la cita',
      nameLabel: 'Nombre completo',
      phoneLabel: 'Teléfono',
      serviceLabel: 'Servicio requerido',
      servicePlaceholder: 'Elija un servicio...',
      otherService: 'Otro / Consulta general',
      dateLabel: 'Fecha preferida',
      timeLabel: 'Hora preferida',
      messageLabel: 'Mensaje adicional (Opcional)',
      messagePlaceholder: 'Escriba sus notas aquí...',
      submit: 'Confirmar cita',
      success: '¡Gracias!',
      successDesc: 'Su solicitud ha sido recibida. Le contactaremos pronto.',
      sendAnother: 'Enviar otra solicitud',
      infoTitle: 'Información de contacto',
      locTitle: 'Ubicación',
      locCity: 'Tetuán, Marruecos',
      callUs: 'Llámenos',
      followUs: 'Síganos'
    },
    services: [
      { id: "blanchiment", title: "Blanqueamiento dental", description: "Blanqueamiento profesional para una sonrisa brillante.", icon: "✨" },
      { id: "implants", title: "Implantes dentales", description: "Reemplazo de dientes permanente y estético.", icon: "🦷" },
      { id: "orthodontie", title: "Ortodoncia", description: "Alineación dental para niños y adultos.", icon: "📏" },
      { id: "soins", title: "Tratamiento de caries", description: "Tratamiento rápido y sin dolor para preservar el diente.", icon: "🛡️" },
      { id: "detartrage", title: "Limpieza y raspado", description: "Eliminación de sarro para encías sanas.", icon: "🧼" },
      { id: "extraction", title: "Extracción dental", description: "Extracción segura con cuidado especial.", icon: "🗜️" }
    ]
  }
};
