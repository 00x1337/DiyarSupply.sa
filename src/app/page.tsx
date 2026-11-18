"use client";

import React, { useState } from "react";

type Meal = "breakfast" | "lunch" | "dinner";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#menus", label: "قوائم الطعام" },
  { href: "#letters", label: "شهادات الشكر" },
  { href: "#track-record", label: "سابقة الأعمال" },
  { href: "#contact", label: "تواصل معنا" },
];

const heroStats: { value: string; unit?: string; label: string }[] = [
  { value: "+17", label: "عاماً منذ التأسيس 2007" },
  { value: "1665", unit: "م²", label: "مساحة المطبخ المركزي" },
  { value: "ISO 45001", label: "السلامة والصحة المهنية" },
  { value: "HACCP", label: "نظام سلامة ونظافة الغذاء" },
];

const values = [
  { icon: "🧼", title: "النظافة والمعايير الصحية", text: "نظام صحي صارم يضمن سلامة كل مكون يقدم للعميل." },
  { icon: "⏰", title: "الالتزام بالمواعيد", text: "انضباط دقيق في مواعيد تسليم الوجبات والبوفيهات." },
  { icon: "💡", title: "الابتكار في التقديم", text: "أساليب عصرية تناسب الحفلات الرسمية والمشاعر." },
  { icon: "🏆", title: "الجودة أولاً", text: "مكونات ممتازة 100% تم اختيارها بعناية فائقة." },
];

const services = [
  {
    title: "خدمة الضيافة الشاملة",
    text: "تنظيم وإدارة شؤون الضيافة في الفعاليات والمؤتمرات والمناسبات العائلية بأسلوب يعكس الذوق الرفيع.",
  },
  {
    title: "كاترينج الشركات والمؤسسات",
    text: "توريد الوجبات اليومية والموسمية لمنسوبي وموظفي الشركات والجهات الحكومية والبعثات الدبلوماسية.",
  },
  {
    title: "البوفيهات المفتوحة VIP",
    text: "تجهيز سخانات وأطباق بوفيه مفتوح فاخرة تناسب كبار الشخصيات مع طاقم خدمة محترف ومظهر لائق.",
  },
  {
    title: "كاترينج للمناسبات الخاصة",
    text: "ولائم وأطباق مخصصة حسب رغبة العميل تشمل الأطباق العربية والشرقية والمأكولات الآسيوية والحلويات.",
  },
  {
    title: "كاترينج دوري (يومي / أسبوعي)",
    text: "عقود توريد مجدولة وثابتة للمدارس، المعاهد، والمخيمات طوال فترات الإقامة والمواسم التشغيلية.",
  },
  {
    title: "أسطول النقل المجهز",
    text: "سيارات مجهزة لنقل الأغذية بدرجات حرارة مضبوطة تضمن وصول الوجبات طازجة وساخنة لمقر العميل.",
  },
];

const meals: Record<Meal, { tab: string; title: string; items: string[] }> = {
  breakfast: {
    tab: "وجبة الإفطار (Breakfast)",
    title: "محتويات وجبة الإفطار الصباحية",
    items: [
      "أرز مقلي بالبصل والخضار الطازج",
      "كشري أسيوي شهي بحليب النارجين",
      "بيض مسلوق صحي ومتبل",
      "تونة بالخضار والبهارات الخفيفة",
      "بطاطس مقلية مع فاصوليا خضراء",
      "كروبوك روبيان شرائح مقرمش وبلينجو",
      "عيش توست طازج وخبز همبرجر",
      "جبنة مثلثات ومربى وعسل شفرات",
      "سمبل شفرات وسمبل مطبوخ",
      "فواكه مشكلة طازجة (4 أنواع) وعصير المراعي",
    ],
  },
  lunch: {
    tab: "وجبة الغداء (Lunch)",
    title: "محتويات وجبة الغداء الرئيسية",
    items: [
      "أرز أبيض فاخر (رويال - مالجروشا)",
      "لحم مقلقل شهي بالنارجين",
      "دجاج مقلي بالصوص الأحمر مع شيبس",
      "طبق سايو اسم بالجمبري الطازج",
      "خضار مشكلة مطهية على البخار (بطاطس، جزر، كوسة)",
      "كفتة بطاطس مقرمشة متبلة",
      "بيض مسلوق بصوص الكاري الغني",
      "كروبوك روبيان وسمبل تقليدي مطبوخ",
      "حلى جلي الزهراء الشهي",
      "فواكه طازجة منتقاة وعصائر باردة",
    ],
  },
  dinner: {
    tab: "وجبة العشاء (Dinner)",
    title: "محتويات وجبة العشاء المتكاملة",
    items: [
      "أرز أبيض رويال وأرز كتوبت (لونتي)",
      "ساتي لحم دجاج مشوي مع صوص الفول السوداني",
      "شوربة ذيل الثور الغنية أو شوربة مقادم",
      "دجاج أوبور على الطريقة التقليدية",
      "سلطة قادو قادو بالصوص الخاص",
      "لحم رندق المطهو ببطء والمتبل",
      "سمبل شفرات ومطبوخ عالي الجودة",
      "حلى جلي ومقرمشات كروبك بلينجو",
      "تشكيلة فواكه 4 أصناف وعصائر منوعة",
    ],
  },
};

const letters = [
  {
    from: "ماليزيا • FELDA TRAVEL",
    title: "خطاب شكر رسمي - موسم 1445هـ",
    text: "شكر وتقدير رسمي من إدارة شركة فيلدا للسفريات بماليزيا على تقديم خدمات الإعاشة وتجهيز الخيام بمكتب 112 لحجاج البعثة.",
  },
  {
    from: "ماليزيا • TABUNG HAJI",
    title: "شهادة شكر وتقدير - موسم 1446هـ",
    text: "إشادة من رئيس مجلس إدارة شركة تابونج حاجي ترافيل (داتو سري سيد صالح) على الجهود المميزة في خدمة الحجاج.",
  },
  {
    from: "شركة مشارق المتميزة (ركين)",
    title: "شكر وتقدير لمطبخ وائل رشيدي",
    text: "خطاب شكر وتقدير من رئيس مجلس الإدارة والرئيس التنفيذي لشركة مشارق ركين على إنجاح موسم حج 1445هـ.",
  },
  {
    from: "ماليزيا • ANDALUSIA TOURS",
    title: "شكر وتقدير - موسم حج 1445هـ",
    text: "إشادة من الرئيس التنفيذي لشركة الأندلسية على التفاني في أداء مهام الخيام والإعاشة على أكمل وجه.",
  },
  {
    from: "اتحاد شركات AMPHURI",
    title: "أفضل مقدم خدمات لحجاج الاتحاد",
    text: "جائزة وتكريم كأفضل متعهد إعاشة وخدمات لحجاج اتحاد شركات AMPHURI لموسم الحج.",
  },
  {
    from: "اتحاد شركات HIMPU",
    title: "أفضل مقدم خدمات لحجاج الاتحاد",
    text: "شهادة تقدير وتكريم رسمي لجودة التموين الغذائي وسرعة استجابة فرق العمل الميدانية.",
  },
];

const records = [
  { value: "2,600", unit: "حاج", name: "بعثة الحج الصينية", note: "إعاشة مطهية وجافة بالمشاعر" },
  { value: "2,000", unit: "حاج VIP", name: "حجاج ماليزيا VIP", note: "بوفيه مفتوح طوال فترة التواجد" },
  { value: "2,800", unit: "حاج", name: "بعثة الحج الإندونيسية", note: "إعاشة لعدة مواسم متتالية" },
  { value: "3,400", unit: "حاج", name: "مكتب 111 جنوب شرق آسيا", note: "خدمات إعاشة VIP بالمشاعر" },
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent-500">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="M5.8 10.3l2.6 2.6 5.8-5.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 rtl:rotate-180">
      <path
        d="M14 5l7 7m0 0l-7 7m7-7H3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Meal>("lunch");

  return (
    <div className="min-h-screen bg-white text-brand-600 selection:bg-accent-500 selection:text-white">
      {/* Top Banner */}
      <div className="bg-brand-800 text-brand-50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[11px] font-semibold sm:px-6 sm:text-xs lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="flex items-center gap-1.5">
              <span className="text-accent-400">★</span>
              ريادة تموين وإعاشة ضيوف الرحمن والمدارس والمناسبات منذ عام 2007م
            </span>
            <span className="hidden h-3 w-px bg-white/25 md:block" />
            <span className="hidden text-brand-100/80 md:inline">
              حاصلة على شهادة ISO 45001:2018 وشهادة نظام الهاسب (HACCP)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+966596048533"
              className="flex items-center gap-1 whitespace-nowrap hover:text-accent-300"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
                <path
                  d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.7 3c.1.4 0 .8-.4 1l-1.8 1.1a12 12 0 006.2 6.2l1.1-1.8c.2-.4.6-.5 1-.4l3 .7c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1A15 15 0 014 6V5z"
                  fill="currentColor"
                />
              </svg>
              <span dir="ltr" className="nums">
                +966 59 604 8533
              </span>
            </a>
            <span className="h-3 w-px bg-white/25" />
            <a href="mailto:info@wrgrop.com" dir="ltr" className="hover:text-accent-300">
              info@wrgrop.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#top" className="flex shrink-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="تموين الديار" className="h-11 w-auto sm:h-14" />
          </a>

          {/* Links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-bold text-brand-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-accent-500/25 transition hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            <span className="hidden sm:inline">طلب عروض الكاترينج</span>
            <span className="sm:hidden">طلب عرض</span>
            <Arrow />
          </a>
        </div>

        {/* Mobile nav strip */}
        <div className="border-t border-brand-100 lg:hidden">
          <nav
            aria-label="القائمة الرئيسية (الجوال)"
            className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-3 py-2 text-[13px] font-bold text-brand-700 [scrollbar-width:none]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-lg px-3 py-1.5 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
            <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-200/45 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                من المطبخ إلى الريادة • خبرة تتجاوز 17 عاماً في العاصمة المقدسة
              </div>

              <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-brand-600 sm:text-5xl lg:text-6xl">
                الطعام ليس مجرد وجبة بل{" "}
                تجربة نكهة وضيافة راقية
              </h1>

              <p className="mx-auto max-w-3xl text-base leading-relaxed text-brand-700 sm:text-lg">
                تأسست شركة وائل رشيدي لخدمات الإعاشة والتموين في المملكة منذ عام 2007م لتوفير أفضل الوجبات
                المطهية والجافة وبوفيهات الـ VIP المفتوحة لبعثات الحج الرسمية والشركات والمناسبات الكبرى بمكة
                المكرمة والمشاعر المقدسة.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <a
                  href="#menus"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-accent-500/25 transition hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  تصفح قوائم الطعام
                  <Arrow />
                </a>
                <a
                  href="#letters"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-7 py-3.5 text-sm font-bold text-brand-600 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
                >
                  شهادات شكر البعثات الدولية
                </a>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-14 grid grid-cols-2 gap-3 border-t border-brand-100 pt-10 sm:gap-4 lg:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-100 bg-white p-4 text-center shadow-sm shadow-brand-900/5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                >
                  <span className="nums block text-2xl font-black text-brand-700 sm:text-3xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="ms-1.5 text-lg font-extrabold text-brand-500 sm:text-xl">{stat.unit}</span>
                    )}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold text-brand-600/85 sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-y border-brand-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="space-y-5 lg:col-span-7">
                <span className="inline-block rounded-md border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  من نحن • Who We Are
                </span>
                <h2 className="text-3xl font-black leading-tight text-brand-600 sm:text-4xl">
                  شغف بالضيافة واهتمام فائق بأدق تفاصيل الجودة
                </h2>
                <p className="text-sm leading-relaxed text-brand-700 sm:text-base">
                  نحن شركة وائل رشيدي لخدمات الإعاشة بالحج والعمرة، نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة
                  متكاملة من النكهة والجودة والتقديم الراقي. تأسست شركتنا في المملكة العربية السعودية منذ عام
                  2007م لتقديم خدمات التغذية للحجاج والمعتمرين والمدارس والفعاليات الرسمية بمكة المكرمة
                  والمشاعر المقدسة.
                </p>
                <p className="text-sm leading-relaxed text-brand-700 sm:text-base">
                  تدار الشركة بإشراف مباشر مع فريق من كوكبة الشباب السعودي المؤهل، ونخبة من الطهاة المحترفين
                  من دول جنوب وجنوب شرق آسيا والدول العربية، مع أسطول متكامل لنقل وتوزيع الوجبات والبوفيهات
                  في الوقت المحدد.
                </p>

                <div className="grid gap-4 pt-2 sm:grid-cols-2">
                  <div className="rounded-2xl border border-brand-100 bg-brand-50/70 p-5">
                    <h4 className="mb-1 flex items-center gap-2 font-bold text-brand-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                      الرؤية الاستراتيجية
                    </h4>
                    <p className="text-xs leading-relaxed text-brand-700/80">
                      أن نكون الشركة الرائدة في مجال إنتاج الطعام وتقديم خدمات التموين والضيافة في منطقتنا بما
                      يتلائم مع أعلى المعايير والمقاييس العالمية.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-100 bg-brand-50/70 p-5">
                    <h4 className="mb-1 flex items-center gap-2 font-bold text-brand-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                      رسالتنا
                    </h4>
                    <p className="text-xs leading-relaxed text-brand-700/80">
                      العمل لإرساء معايير جديدة لإنتاج الأغذية وتقديم خدمات الضيافة من خلال نخبة من الكفاءات
                      الطموحة لنؤسس لشراكات طويلة الأمد مع عملائنا.
                    </p>
                  </div>
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-sm shadow-brand-900/5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                  >
                    <span className="block text-3xl">{value.icon}</span>
                    <h4 className="mt-2 text-sm font-extrabold text-brand-600">{value.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-brand-600/85">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 bg-brand-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">نطاق الخدمات</span>
              <h2 className="text-3xl font-black text-brand-600 sm:text-4xl">خدمات الضيافة والتموين الشاملة</h2>
              <p className="text-sm text-brand-600/85">
                حلول مصممة لتلبية احتياجات الشركات والبعثات والاحتفالات الخاصة:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="nums flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-sm font-black text-brand-700 ring-1 ring-brand-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-brand-100" />
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <h3 className="mb-1.5 text-base font-extrabold text-brand-600">{service.title}</h3>
                  <p className="text-xs leading-relaxed text-brand-700/80">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menus */}
        <section id="menus" className="scroll-mt-24 relative overflow-hidden bg-brand-900 py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-400">تشكيلاتنا المميزة</span>
              <h2 className="text-3xl font-black text-white sm:text-4xl">نماذج من قوائم الطعام (Menus)</h2>
              <p className="text-sm text-brand-100/70">
                أطباق متقنة تلائم أذواق الحجاج من مختلف الجنسيات (شرقية، عربية، آسيوية وإندونيسية):
              </p>
            </div>

            {/* Menu Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pb-8 sm:gap-3">
              {(Object.keys(meals) as Meal[]).map((key) => {
                const active = activeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    aria-pressed={active}
                    className={`rounded-xl px-4 py-2.5 text-xs font-extrabold transition sm:px-6 sm:text-sm ${
                      active
                        ? "bg-accent-500 text-white shadow-lg shadow-brand-950/30"
                        : "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
                    }`}
                  >
                    {meals[key].tab}
                  </button>
                );
              })}
            </div>

            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-2xl shadow-brand-950/40 sm:p-8">
              <h3 className="mb-5 border-b border-brand-100 pb-4 text-lg font-extrabold text-brand-600 sm:text-xl">
                {meals[activeTab].title}
              </h3>
              <div className="grid gap-3 text-sm text-brand-700 sm:grid-cols-2">
                {meals[activeTab].items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 rounded-lg bg-brand-50/60 px-3 py-2">
                    <Check />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Letters of Appreciation */}
        <section id="letters" className="scroll-mt-24 bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">سجل التقدير والشكر</span>
              <h2 className="text-3xl font-black text-brand-600 sm:text-4xl">شهادات وخطابات شكر وتقدير رسمية</h2>
              <p className="text-sm text-brand-600/85">
                إشادات رفيعة من بعثات الحج والشركات الدولية تقديراً للأداء والالتزام:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {letters.map((letter) => (
                <div
                  key={letter.from}
                  className="group relative overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-brand-600 to-accent-500 opacity-0 transition group-hover:opacity-100" />
                  <span className="mb-2 block text-xs font-extrabold text-brand-500">{letter.from}</span>
                  <h4 className="mb-2 text-base font-extrabold text-brand-600">{letter.title}</h4>
                  <p className="text-xs leading-relaxed text-brand-700/80">{letter.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section id="track-record" className="scroll-mt-24 border-t border-brand-100 bg-brand-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-500">إحصائيات المواسم</span>
              <h2 className="text-3xl font-black text-brand-600">سابقة أعمال موثقة بالأرقام</h2>
            </div>

            <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
              {records.map((record) => (
                <div
                  key={record.name}
                  className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm shadow-brand-900/5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="nums block text-3xl font-black text-brand-700">
                    {record.value}{" "}
                    <span className="text-lg font-extrabold text-brand-500">{record.unit}</span>
                  </span>
                  <span className="mt-2 block text-xs font-extrabold text-brand-600">{record.name}</span>
                  <p className="mt-1.5 text-[11px] text-brand-600/80">{record.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-brand-900 py-20 text-white">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-400">تواصل مباشر</span>
            <h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-4xl">
              يسرنا تقديم أفضل عروض الإعاشة لمؤسستكم
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-brand-100/70">
              مكة المكرمة - حي الشوقية / حي الخضراء • هاتف:{" "}
              <span dir="ltr" className="nums inline-block">
                0596048533
              </span>{" "}
              • بريد إلكتروني:{" "}
              <span dir="ltr" className="inline-block">
                info@wrgrop.com
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="tel:+966596048533"
                className="nums inline-flex items-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-brand-950/30 transition hover:bg-accent-600 active:scale-[0.98]"
              >
                اتصل بنا الآن
              </a>
              <a
                href="mailto:info@wrgrop.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                راسلنا بالبريد
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 pt-3 text-xs font-mono">
              <span className="rounded-lg bg-white/5 px-4 py-2 text-brand-100 ring-1 ring-white/10">
                سجل تجاري:{" "}
                <span dir="ltr" className="inline-block text-accent-300">
                  4031050596
                </span>
              </span>
              <span className="rounded-lg bg-white/5 px-4 py-2 text-brand-100 ring-1 ring-white/10">
                رقم المنشأة: <span dir="ltr" className="inline-block">7014915180</span>
              </span>
              <span className="rounded-lg bg-white/5 px-4 py-2 text-brand-100 ring-1 ring-white/10">
                رخصة بلدي:{" "}
                <span dir="ltr" className="inline-block text-accent-300">
                  3909489775
                </span>
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 py-8 text-center text-xs text-brand-200/60">
        <div className="mx-auto max-w-7xl px-4">
          <span className="mx-auto mb-4 block h-0.5 w-16 rounded-full bg-accent-500" />
          <p className="mb-1 font-extrabold text-brand-50">
            شركة وائل رشيدي لخدمات الإعاشة والتموين (تموين الديار)
          </p>
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} • Wael Rasheedi Catering (WR Group)</p>
        </div>
      </footer>
    </div>
  );
}
