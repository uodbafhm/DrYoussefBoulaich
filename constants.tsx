
import { Service } from './types';

export const CONTACT_INFO = {
  name: "Dr. Youssef Boulaich",
  whatsapp: "0661841032",
  phone: "0539993827",
  instagram: "https://www.instagram.com/dr.boulaichyoussef/?hl=en",
  address: "Tetouan, Morocco",
  reviews: 15,
  mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415387.87417270505!2d-5.3600131!3d35.5730165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b436a83b6d0bb%3A0xb567ea95cd055b7d!2sCabinet%20dantaire%20Youssef%20Boulaich!5e0!3m2!1sen!2sma!4v1769643985315!5m2!1sen!2sma"
};

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];
