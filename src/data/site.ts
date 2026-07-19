export const siteConfig = {
  name: "نُخبة | NOKHBA",
  tagline: "🌿 عالم نُخبة | حيثُ تلتقي الأصالة بالجودة الطبيعية",
  description:
    "في زمنٍ غابت فيه المكونات الحقيقية أطلقنا نُخبة لنكون جسركم الموثوق نحو الطبيعة البكر وخيراتها الصافية.",
  phone: "+20 10 1234 5678",
  address: "مصر",
  email: "info@nokhba.com",
  social: {
    facebook: "https://facebook.com/nokhba",
    whatsapp: "https://wa.me/201012345678",
    instagram: "https://instagram.com/nokhba",
    twitter: "https://x.com/nokhba",
  },
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "المنتجات", href: "/products" },
    { label: "آراء العملاء", href: "/testimonials" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  categories: [
    { id: "all", label: "كل المنتجات" },
    { id: "olive-oil", label: "زيوت زيتون" },
    { id: "honey-dairy", label: "عسل ومنتجات نحل" },
    { id: "ghee", label: "سمن فلاحي" },
    { id: "healthy-bakery", label: "مخبوزات صحية" },
    { id: "natural-oils", label: "زيوت طبيعية" },
    { id: "herbal", label: "أعشاب وتوابل" },
    { id: "skincare", label: "عناية بالبشرة" },
    { id: "dates", label: "تمر" },
    { id: "tea", label: "شاي وأعشاب" },
    { id: "nuts", label: "مكسرات" },
    { id: "offers", label: "عروض وخصومات" },
  ],
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  category: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "olive-oil-1",
    name: "زيت زيتون بكر ممتاز - عصرة نُخبة",
    description: "زيت زيتون بكر ممتاز معصور على البارد برائحته النفاذة وفائدته الكاملة. منتج طبيعي 100% من أفضل بساتين الزيتون.",
    price: 180,
    weight: "1 لتر",
    image: "/images/olive-oil.jpg",
    category: "olive-oil",
    badge: "الأكثر مبيعاً",
    rating: 5,
    reviews: 128,
  },
  {
    id: "olive-oil-2",
    name: "زيت زيتون بكر ممتاز - عبوة اقتصادية",
    description: "زيت زيتون بكر ممتاز عبوة اقتصادية 3 لتر للاستخدام اليومي بنفس الجودة العالية.",
    price: 450,
    weight: "3 لتر",
    image: "/images/olive-oil-3l.jpg",
    category: "olive-oil",
    rating: 5,
    reviews: 94,
  },
  {
    id: "ghee-buffalo",
    name: "سمن جاموسي فلاحي أصلي - مرمل",
    description: "سمن فلاحي جاموسي أصلي مرمل بطعم البيوت المصرية العريقة. منتج طبيعي نقي بدون إضافات.",
    price: 220,
    weight: "1 كجم",
    image: "/images/ghee-buffalo.jpg",
    category: "ghee",
    badge: "طبيعي 100%",
    rating: 5,
    reviews: 86,
  },
  {
    id: "ghee-cow",
    name: "سمن بقري فلاحي أصلي - مرمل",
    description: "سمن فلاحي بقري أصلي مرمل بقوام شهي وطعم أصلي. منتج طبيعي من مزارع موثوقة.",
    price: 190,
    weight: "1 كجم",
    image: "/images/ghee-cow.jpg",
    category: "ghee",
    rating: 4,
    reviews: 72,
  },
  {
    id: "honey-1",
    name: "عسل نحل طبيعي - قطفة جبلي",
    description: "عسل نحل طبيعي نقي قطفة جبلية فاخرة مع شمع النحل الطبيعي. غني بالفيتامينات والمعادن.",
    price: 250,
    weight: "500 جم",
    image: "/images/honey-mountain.jpg",
    category: "honey-dairy",
    badge: "ممتاز",
    rating: 5,
    reviews: 156,
  },
  {
    id: "honey-2",
    name: "عسل نحل طبيعي - قطفة برسيم",
    description: "عسل نحل برسيم طبيعي نقي لذيذ الطعم مناسب للتحلية والاستخدام اليومي.",
    price: 160,
    weight: "500 جم",
    image: "/images/honey-clover.jpg",
    category: "honey-dairy",
    rating: 4,
    reviews: 103,
  },
  {
    id: "healthy-bread",
    name: "عيش كامل الحبة - مخبوز طازج",
    description: "عيش كامل الحبة مصنوع بعناية فائقة من دقيق القمح الكامل. غني بالألياف والعناصر الغذائية.",
    price: 35,
    weight: "ربطة (4 قطع)",
    image: "/images/whole-wheat-bread.jpg",
    category: "healthy-bakery",
    rating: 4,
    reviews: 67,
  },
  {
    id: "hair-oil-1",
    name: "زيت جوز الهند البكر للشعر",
    description: "زيت جوز الهند البكر الطبيعي لتغذية الشعر وتقويته وزيادة لمعانه. مناسب لجميع أنواع الشعر.",
    price: 95,
    weight: "250 مل",
    image: "/images/coconut-oil.jpg",
    category: "natural-oils",
    badge: "عضوي",
    rating: 4,
    reviews: 89,
  },
  {
    id: "black-seed-oil",
    name: "زيت حبة البركة - الذهب الأسود",
    description: "زيت حبة البركة البكر الطبيعي لتعزيز المناعة والعناية بالشعر والبشرة.",
    price: 120,
    weight: "250 مل",
    image: "/images/black-seed-oil.jpg",
    category: "natural-oils",
    rating: 5,
    reviews: 112,
  },
  {
    id: "soap-1",
    name: "صابون زيت زيتون طبيعي - حلب",
    description: "صابون زيت زيتون حلب طبيعي 100% للعناية بالبشرة. مناسب لجميع أنواع البشرة.",
    price: 45,
    weight: "قطعة 150 جم",
    image: "/images/aleppo-soap.jpg",
    category: "skincare",
    badge: "يدوي الصنع",
    rating: 5,
    reviews: 74,
  },
  {
    id: "dates-1",
    name: "تمر مجهول فاخر",
    description: "تمر مجهول فاخر كبير الحجم طري ولذيذ. منتج طبيعي من أفضل مزارع التملك.",
    price: 140,
    weight: "1 كجم",
    image: "/images/dates.jpg",
    category: "dates",
    rating: 5,
    reviews: 98,
  },
  {
    id: "mixed-nuts",
    name: "مكسرات مشكلة فاخرة",
    description: "تشكيلة من المكسرات الفاخرة المحمصة (لوز، كاجو، جوز، فستق، بندق).",
    price: 250,
    weight: "500 جم",
    image: "/images/mixed-nuts.jpg",
    category: "nuts",
    badge: "تحميص طازج",
    rating: 4,
    reviews: 56,
  },
  {
    id: "herbal-tea",
    name: "شاي أعشاب جبلية - مشكل",
    description: "تشكيلة من الأعشاب الجبلية الطبيعية (نعناع، بابونج، كركديه، يانسون) للاستمتاع بمشروب صحي.",
    price: 65,
    weight: "200 جم",
    image: "/images/herbal-tea.jpg",
    category: "tea",
    rating: 4,
    reviews: 43,
  },
  {
    id: "turmeric",
    name: "كركم طبيعي مطحون",
    description: "كركم طبيعي مطحون من أجود المحاصيل. يستخدم في الطهي والطبخ وللأغراض الصحية.",
    price: 30,
    weight: "100 جم",
    image: "/images/turmeric.jpg",
    category: "herbal",
    rating: 4,
    reviews: 38,
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  product?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "أمينة محمد",
    location: "القاهرة",
    avatar: "",
    rating: 5,
    text: "منتجات رائعة جداً! زيت الزيتون أصلي ونقي، أنصح الجميع بتجربة نُخبة. الجودة فوق الممتاز.",
    product: "زيت زيتون بكر ممتاز",
  },
  {
    id: "t2",
    name: "أحمد علي",
    location: "الإسكندرية",
    avatar: "",
    rating: 5,
    text: "السمن الفلاحي الجاموسي طعمه ولا أروع، ذكرني بزمن البيوت المصرية القديمة. تعامل راقي وتوصيل سريع.",
    product: "سمن جاموسي فلاحي",
  },
  {
    id: "t3",
    name: "نورة سعيد",
    location: "الجيزة",
    avatar: "",
    rating: 5,
    text: "العسل الجبلي فاخر جداً، طعمه مختلف وجودة عالية. شكراً نُخبة على هذا المنتج الرائع.",
    product: "عسل نحل جبلي",
  },
  {
    id: "t4",
    name: "محمود حسن",
    location: "المنصورة",
    avatar: "",
    rating: 4,
    text: "العيش كامل الحبة طازج ولذيذ، مناسب جداً للرجيم الصحي. سعره مناسب مقارنة بالجودة.",
    product: "عيش كامل الحبة",
  },
  {
    id: "t5",
    name: "سارة خالد",
    location: "السعودية",
    avatar: "",
    rating: 5,
    text: "زيت جوز الهند رائع للشعر، استخدمته أسبوع ولاحظت فرق كبير. منتج طبيعي أصلي.",
    product: "زيت جوز الهند البكر",
  },
  {
    id: "t6",
    name: "كريم عبدالله",
    location: "مصر الجديدة",
    avatar: "",
    rating: 5,
    text: "صابون زيت الزيتون الحلبي رائع للبشرة، ناعم وطبيعي. التوصيل كان سريع جداً والتغليف ممتاز.",
    product: "صابون زيت زيتون حلب",
  },
];

export const whyChooseUs = [
  {
    icon: "truck",
    title: "شحن سريع وآمن",
    description: "نوصل لك المنتجات في أسرع وقت وبأعلى معايير الأمان والتغليف.",
  },
  {
    icon: "leaf",
    title: "منتجات طبيعية 100%",
    description: "كل منتجاتنا طبيعية تماماً بدون مواد حافظة أو إضافات صناعية.",
  },
  {
    icon: "badge-check",
    title: "جودة عالية",
    description: "ننتقي بعناية أفضل المنتجات من مصادرها الموثوقة لنضمن لكم أعلى جودة.",
  },
  {
    icon: "origin",
    title: "من المصدر مباشرة",
    description: "منتجاتنا تأتيكم مباشرة من المزارع والمناحل دون وسطاء.",
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}