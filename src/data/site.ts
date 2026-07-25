export const siteConfig = {
  name: "نُخبة | NOKHBA",
  tagline: "🌿 عالم نُخبة | حيثُ تلتقي الأصالة بالجودة الطبيعية",
  description:
    "في زمنٍ غابت فيه المكونات الحقيقية أطلقنا نُخبة لنكون جسركم الموثوق نحو الطبيعة البكر وخيراتها الصافية.",
  phone: "+20 10 2369 6962",
  whatsappNumber: "01023696962",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb8PH4B2ER6dkSly7J0c",
  address: "مصر",
  email: "info@nokhba.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591911367593&locale=de_DE",
    whatsapp: "https://wa.me/201023696962",
    instagram: "https://instagram.com/nokhba",
    twitter: "https://x.com/nokhba",
  },
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "المنتجات", href: "/products" },
    { label: "العروض", href: "/products?category=offers" },
    { label: "آراء العملاء", href: "/testimonials" },
    { label: "عن نُخبة", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
  ],
  categories: [
    { id: "all", label: "كل المنتجات" },
    { id: "olive-oil", label: "زيت زيتون بكر ممتاز" },
    { id: "offers", label: "العروض و الخصومات" },
    { id: "hair-oils", label: "باكدج زيوت الشعر الخطير" },
    { id: "cosmetics", label: "مستحضرات التجميل" },
    { id: "soap", label: "صابون العناية بالبشرة" },
    { id: "natural-oils", label: "زيوت طبيعية" },
    { id: "dates", label: "تمر" },
    { id: "spices", label: "التوابل والبهارات" },
    { id: "honey", label: "عسل نحل والطحينه الخام" },
    { id: "tea-coffee", label: "شاي الزرده والبن" },
    { id: "olives", label: "زيتون سيوي" },
    { id: "nuts", label: "لب ومكسرات مطروح" },
    { id: "henna", label: "الحنة و أعشاب الشعر" },
    { id: "herbal", label: "الاعشاب والبذور العلاجيه" },
    { id: "aromatic-oils", label: "زيوت عطرية" },
    { id: "our-products", label: "منتجاتنا" },
  ],
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  sale_price?: number;
  weight?: string;
  size?: string | null;
  image: string;
  category: string;
  badge?: string;
  rating?: number | null;
  reviews: number;
  origin?: string;
  discount?: number;
  discount_percentage?: number;
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "أميرة أحمد",
    role: "عميلة دائمة",
    content: "منتجات رائعة جداً، زيت الزيتون أصلي والجودة ممتازة. التوصيل سريع والتغليف محترف. أنصح الجميع بالتجربة ❤️",
    rating: 5,
  },
  {
    id: "2",
    name: "محمد علي",
    role: "عميل موثوق",
    content: "طلب أكثر من مرة، الثقة في نخبة مستمرة. العسل طبيعي 100% والبهارات فريش. شكراً لكم 🌿",
    rating: 5,
  },
  {
    id: "3",
    name: "سارة خالد",
    role: "مهتمة بالمنتجات الطبيعية",
    content: "زيوت الشعر الخطير غيرت شعري تماماً! نتيجة مذهلة من أول استعمال. سعيدة جداً بالتعامل معاكم 💎",
    rating: 5,
  },
  {
    id: "4",
    name: "أحمد حسن",
    role: "عميل جديد",
    content: "أول مرة أطلب وكانت التجربة ممتازة. الزيتون السيوي طعم لا يُقارن. خدمة العملاء محترمة جداً",
    rating: 5,
  },
  {
    id: "5",
    name: "نورة عبدالله",
    role: "عميلة مميزة",
    content: "صابون العناية بالبشرة رائع، بشرتي تحسنت كثيراً. التوصيل كان سريع والتغليف جميل جداً 🧼",
    rating: 5,
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: "🫒",
    title: "منتجات طبيعية 100%",
    description: "نقدم منتجات طبيعية مستخرجة من واحات سيوة ومطروح بطرق تقليدية أصيلة تحافظ على القيمة الغذائية."
  },
  {
    icon: "🏆",
    title: "جودة نخبة",
    description: "نختار بعناية أجود المنتجات من أفضل المزارعين والمنتجين المحليين لنضمن لكم الجودة الفائقة."
  },
  {
    icon: "🚚",
    title: "توصيل سريع",
    description: "نوصل طلبك لباب البيت في جميع أنحاء مصر بسرعة وأمان مع تغليف محترف يحافظ على المنتجات."
  },
  {
    icon: "💬",
    title: "دعم واتساب فوري",
    description: "فريقنا متاح عبر واتساب على مدار الساعة للرد على استفساراتكم ومساعدتكم في اختيار المنتجات."
  },
  {
    icon: "🌿",
    title: "خبرة وثقة",
    description: "سنوات من الخبرة في مجال المنتجات الطبيعية جعلتنا الاسم الموثوق لكل من يبحث عن الجودة."
  },
  {
    icon: "💰",
    title: "أسعار منافسة",
    description: "نقدم أفضل الأسعار مع خصومات وعروض مستمرة لنضمن لكم أفضل قيمة مقابل المال."
  },
];

export const products: Product[] = [
  // ===== زيت زيتون بكر ممتاز (olive-oil) =====
  {
    id: "zait-kareem-super-extra-virgin",
    name: "🫒 زيت زيتون كريم – سوبر إكسترا فرجن",
    description: "زيت زيتون بكر ممتاز فاخر من مطروح، معصور على البارد، غني بمضادات الأكسدة والفوائد الصحية.",
    price: 500,
    originalPrice: 600,
    sale_price: 500,
    size: "1 كيلو",
    weight: "1 كيلو",
    image: "",
    category: "olive-oil",
    discount: 17,
    discount_percentage: 17,
    rating: 5.0,
    reviews: 12,
    origin: "مطروح",
    inStock: true,
  },
  {
    id: "zait-bekr-kham-gargan-1l",
    name: "زيت زيتون بكر خام – جركن 1 لتر | مطروح",
    description: "زيت زيتون بكر خام طبيعي 100% من مطروح، معصور على البارد، مناسب للطبخ والاستخدام اليومي.",
    price: 400,
    originalPrice: 450,
    sale_price: 400,
    size: "١ لتر",
    weight: "١ لتر",
    image: "",
    category: "olive-oil",
    discount: 11,
    discount_percentage: 11,
    rating: null,
    reviews: 8,
    origin: "مطروح",
    inStock: true,
  },

  // ===== العروض و الخصومات (offers) =====
  {
    id: "esharqa-sareea-set",
    name: "مجموعة الإشراقة السريعة",
    description: "مجموعة متكاملة للعناية اليومية ببشرتك، تمنحك إشراقة ونضارة فورية.",
    price: 190,
    originalPrice: 210,
    sale_price: 190,
    size: "60 مل للزجاجة",
    weight: "60 مل للزجاجة",
    image: "",
    category: "offers",
    discount: 10,
    discount_percentage: 10,
    rating: 5.0,
    reviews: 6,
    origin: "مطروح",
    inStock: true,
  },
  {
    id: "zuyut-tasakot-inbat-derma-roller",
    name: "مجموعتين زيوت (تساقط + انبات ) + ديرما رولر هديه",
    description: "مجموعة متكاملة للعناية بالشعر: زيت لتساقط الشعر + زيت للإنبات + ديرما رولر مجاناً.",
    price: 400,
    originalPrice: 500,
    sale_price: 400,
    size: "150 مل للزجاجة",
    weight: "150 مل للزجاجة",
    image: "",
    category: "offers",
    discount: 20,
    discount_percentage: 20,
    rating: null,
    reviews: 0,
    origin: "مطروح",
    inStock: false,
  },

  // ===== باكدج زيوت الشعر الخطير و الزيوت المستورده (hair-oils) =====
  {
    id: "herbs-india-hair-oil",
    name: "زيت شعر Herbs India – أعشاب الهند",
    description: "زيت شعر طبيعي مستورد من الهند بخلاصة الأعشاب الهندية الفاخرة لتغذية وتقوية الشعر.",
    price: 120,
    originalPrice: 180,
    sale_price: 120,
    size: null,
    weight: "",
    image: "",
    category: "hair-oils",
    discount: 33,
    discount_percentage: 33,
    rating: null,
    reviews: 0,
    origin: "الهند",
    inStock: true,
  },

  // ===== صابون العنايه بالبشره (soap) =====
  {
    id: "sabonet-nila-zarka",
    name: "صابونه النيلة الزرقاء",
    description: "صابون طبيعي بالنيلة الزرقاء للعناية بالبشرة، ينظف بعمق ويرطب البشرة.",
    price: 70,
    originalPrice: 90,
    sale_price: 70,
    size: null,
    weight: "",
    image: "",
    category: "soap",
    discount: 22,
    discount_percentage: 22,
    rating: null,
    reviews: 0,
    origin: "مصر",
    inStock: true,
  },

  // ===== مستحضرات التجميل (cosmetics) =====
  {
    id: "cream-misk-tahara",
    name: "كريم مسك الطهاره",
    description: "كريم مسك الطهارة الفاخر للعناية بالبشرة بعد الطهارة، مستورد من السعودية.",
    price: 60,
    originalPrice: 80,
    sale_price: 60,
    size: null,
    weight: "",
    image: "",
    category: "cosmetics",
    discount: 25,
    discount_percentage: 25,
    rating: null,
    reviews: 0,
    origin: "السعوديه",
    inStock: false,
  },

  // ===== تمر (dates) =====
  {
    id: "tamor-nagma-siwa",
    name: "تمور نجمه سيوه",
    description: "تمور فاخرة من واحة سيوه، ذات طعم رائع وقيمة غذائية عالية.",
    price: 245,
    originalPrice: 320,
    sale_price: 245,
    size: "5 كيلو",
    weight: "5 كيلو",
    image: "",
    category: "dates",
    discount: 23,
    discount_percentage: 23,
    rating: null,
    reviews: 0,
    origin: "سيوه",
    inStock: false,
  },
  {
    id: "tamer-libi-jalo",
    name: "تمر ليبي چالو",
    description: "تمر ليبي چالو فاخر، طعم لذيذ وقيمة غذائية ممتازة.",
    price: 70,
    originalPrice: 100,
    sale_price: 70,
    size: "1 كيلو",
    weight: "1 كيلو",
    image: "",
    category: "dates",
    discount: 30,
    discount_percentage: 30,
    rating: null,
    reviews: 0,
    origin: "ليبيا",
    inStock: true,
  },

  // ===== منتجاتنا (new category) =====
  {
    id: "shai-onotha-zahorat-turki",
    name: "شاي الأنوثة «الزهورات التركي» 🌸✨",
    description: "شاي الزهورات التركي الفاخر، مزيج رائع من الأعشاب والزهور الطبيعية لتعزيز الأنوثة.",
    price: 120,
    originalPrice: 150,
    sale_price: 120,
    size: "200 جرام",
    weight: "200 جرام",
    image: "",
    category: "our-products",
    discount: 20,
    discount_percentage: 20,
    rating: null,
    reviews: 0,
    origin: "مطروح",
    inStock: true,
  },

  // ===== التوابل والبهارات (spices) =====
  {
    id: "felfel-aswad",
    name: "فلفل اسود",
    description: "فلفل أسود فاخر مستورد من البرازيل، طازج وعالي الجودة.",
    price: 110,
    originalPrice: 120,
    sale_price: 110,
    size: "250 جرام",
    weight: "250 جرام",
    image: "",
    category: "spices",
    discount: 8,
    discount_percentage: 8,
    rating: 5.0,
    reviews: 4,
    origin: "البرازيل",
    inStock: true,
  },

  // ===== زيتون سيوي (olives) =====
  {
    id: "zeitoun-tofahi",
    name: "زيتون تفاحي",
    description: "زيتون تفاحي سيوي فاخر، طعم رائع وجودة ممتازة من واحة سيوه.",
    price: 120,
    originalPrice: 170,
    sale_price: 120,
    size: "1 kg",
    weight: "1 kg",
    image: "",
    category: "olives",
    discount: 29,
    discount_percentage: 29,
    rating: null,
    reviews: 0,
    origin: "سيوه",
    inStock: true,
  },

  // ===== زيوت طبيعية (natural-oils) =====
  {
    id: "zait-jawz-alhind",
    name: "زيت جوز الهند",
    description: "زيت جوز الهند الطبيعي النقي للعناية بالشعر والبشرة من مطروح.",
    price: 70,
    originalPrice: 120,
    sale_price: 70,
    size: "150 ملي",
    weight: "150 ملي",
    image: "",
    category: "natural-oils",
    discount: 42,
    discount_percentage: 42,
    rating: null,
    reviews: 0,
    origin: "مطروح",
    inStock: true,
  },

  // ===== عسل نحل والطحينه الخام (honey) =====
  {
    id: "asal-nahl-sidr-jabali",
    name: "عسل نحل سدر جبلي طبيعي 100٪",
    description: "عسل نحل سدر جبلي ليبي طبيعي 100%، من أجود أنواع العسل الجبلي.",
    price: 350,
    originalPrice: 450,
    sale_price: 350,
    size: null,
    weight: "",
    image: "",
    category: "honey",
    discount: 22,
    discount_percentage: 22,
    rating: null,
    reviews: 0,
    origin: "ليبيا",
    inStock: true,
  },

  // ===== شاي الزرده والبن (tea-coffee) =====
  {
    id: "shai-ghazalin-akhdar",
    name: "شاي الغزالين«اخضر»",
    description: "شاي الغزالين الأخضر الفاخر من ليبيا، نكهة مميزة وجودة عالية.",
    price: 65,
    originalPrice: 80,
    sale_price: 65,
    size: "125 جرام",
    weight: "125 جرام",
    image: "",
    category: "tea-coffee",
    discount: 19,
    discount_percentage: 19,
    rating: null,
    reviews: 0,
    origin: "ليبيا",
    inStock: true,
  },

  // ===== لب ومكسرات مطروح (nuts) =====
  {
    id: "ain-gamal-fakher",
    name: "عين جمل فاخر",
    description: "عين جمل (جوز) فاخر مستورد من إيران، عالي الجودة والطعم.",
    price: 100,
    originalPrice: 125,
    sale_price: 100,
    size: "125 جراماً",
    weight: "125 جراماً",
    image: "",
    category: "nuts",
    discount: 20,
    discount_percentage: 20,
    rating: 5.0,
    reviews: 5,
    origin: "ايران",
    inStock: true,
  },

  // ===== الحنة و أعشاب الشعر (henna) =====
  {
    id: "henna-nobar-alhindia",
    name: "حنه نوبار الهنديه",
    description: "حنة نوبار الهندية الأصلية للعناية بالشعر وتلوينه طبيعياً.",
    price: 50,
    originalPrice: 100,
    sale_price: 50,
    size: "170 جرام تقريبا",
    weight: "170 جرام تقريبا",
    image: "",
    category: "henna",
    discount: 50,
    discount_percentage: 50,
    rating: null,
    reviews: 0,
    origin: "الهند",
    inStock: true,
  },

  // ===== الاعشاب والبذور العلاجيه (herbal) =====
  {
    id: "bodor-akpi-seeds",
    name: "بذور الأكبي (Akpi Seeds)",
    description: "بذور الأكبي الإفريقية العلاجية، غنية بالفوائد الصحية والعناصر الغذائية.",
    price: 100,
    originalPrice: 120,
    sale_price: 100,
    size: "100 جرام",
    weight: "100 جرام",
    image: "",
    category: "herbal",
    discount: 17,
    discount_percentage: 17,
    rating: null,
    reviews: 0,
    origin: "افريقيا",
    inStock: false,
  },
];