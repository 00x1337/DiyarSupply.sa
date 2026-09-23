"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"breakfast" | "lunch" | "dinner">("lunch");

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Banner */}
      <div className="bg-amber-500 text-slate-950 text-xs py-2 px-4 font-bold border-b border-amber-600">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span>★ ريادة تموين وإعاشة ضيوف الرحمن والمدارس والمناسبات منذ عام 2007م</span>
            <span className="hidden md:inline text-amber-800">|</span>
            <span className="hidden md:inline font-semibold">حاصلة على شهادة ISO 45001:2018 وشهادة نظام الهاسب (HACCP)</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="tel:+966596048533" className="hover:underline flex items-center gap-1">
              <span>+966 59 604 8533</span>
            </a>
            <span>|</span>
            <a href="mailto:info@wrgrop.com" className="hover:underline">info@wrgrop.com</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Mark */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 text-2xl border border-amber-300">
              WR
            </div>
            <div>
              <span className="block text-xl font-black text-white tracking-tight">شركة وائل رشيدي للإعاشة</span>
              <span className="block text-xs font-bold text-amber-400 tracking-wider font-sans uppercase">Wael Rasheedi Catering (تموين الديار)</span>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition">من نحن</a>
            <a href="#services" className="hover:text-amber-400 transition">خدماتنا</a>
            <a href="#menus" className="hover:text-amber-400 transition text-amber-400">قوائم الطعام</a>
            <a href="#track-record" className="hover:text-amber-400 transition">سابقة الأعمال</a>
            <a href="#letters" className="hover:text-amber-400 transition">شهادات الشكر</a>
            <a href="#contact" className="hover:text-amber-400 transition">تواصل معنا</a>
          </nav>

          {/* Action CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:brightness-105 transition transform active:scale-95"
          >
            <span>طلب عروض الكاترينج</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              من المطبخ إلى الريادة • خبرة تتجاوز 17 عاماً في العاصمة المقدسة
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
              الطعام ليس مجرد وجبة بل <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">تجربة نكهة وضيافة راقية</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              تأسست شركة وائل رشيدي لخدمات الإعاشة والتموين في المملكة منذ عام 2007م لتوفير أفضل الوجبات المطهية والجافة وبوفيهات الـ VIP المفتوحة لبعثات الحج الرسمية والشركات والمناسبات الكبرى بمكة المكرمة والمشاعر المقدسة.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#menus"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition transform active:scale-95"
              >
                تصفح قوائم الطعام
              </a>
              <a
                href="#letters"
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition"
              >
                شهادات شكر البعثات الدولية
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="block text-3xl font-black text-amber-400 font-sans">+17</span>
                <span className="text-xs text-slate-400">عاماً منذ التأسيس 2007</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="block text-3xl font-black text-white font-sans">675م²</span>
                <span className="text-xs text-slate-400">مساحة المطبخ المركزي</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="block text-3xl font-black text-amber-400 font-sans">ISO 45001</span>
                <span className="text-xs text-slate-400">السلامة والصحة المهنية</span>
              </div>
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="block text-3xl font-black text-white font-sans">HACCP</span>
                <span className="text-xs text-slate-400">نظام سلامة ونظافة الغذاء</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold rounded-md">
                من نحن • Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                شغف بالضيافة واهتمام فائق بأدق تفاصيل الجودة
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                نحن شركة وائل رشيدي لخدمات الإعاشة بالحج والعمرة، نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة متكاملة من النكهة والجودة والتقديم الراقي. تأسست شركتنا في المملكة العربية السعودية منذ عام 2007م لتقديم خدمات التغذية للحجاج والمعتمرين والمدارس والفعاليات الرسمية بمكة المكرمة والمشاعر المقدسة.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                تدار الشركة بإشراف مباشر مع فريق من كوكبة الشباب السعودي المؤهل، ونخبة من الطهاة المحترفين من دول جنوب وجنوب شرق آسيا والدول العربية، مع أسطول متكامل لنقل وتوزيع الوجبات والبوفيهات في الوقت المحدد.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <h4 className="font-bold text-amber-400 mb-1">الرؤية الاستراتيجية</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    أن نكون الشركة الرائدة في مجال إنتاج الطعام وتقديم خدمات التموين والضيافة في منطقتنا بما يتلائم مع أعلى المعايير والمقاييس العالمية.
                  </p>
                </div>
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  <h4 className="font-bold text-amber-400 mb-1">رسالتنا</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    العمل لإرساء معايير جديدة لإنتاج الأغذية وتقديم خدمات الضيافة من خلال نخبة من الكفاءات الطموحة لنؤسس لشراكات طويلة الأمد مع عملائنا.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
                <span className="text-3xl block">🧼</span>
                <h4 className="font-bold text-white text-base">النظافة والمعايير الصحية</h4>
                <p className="text-xs text-slate-400">نظام صحي صارم يضمن سلامة كل مكون يقدم للعميل.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
                <span className="text-3xl block">⏰</span>
                <h4 className="font-bold text-white text-base">الالتزام بالمواعيد</h4>
                <p className="text-xs text-slate-400">انضباط دقيق في مواعيد تسليم الوجبات والبوفيهات.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
                <span className="text-3xl block">💡</span>
                <h4 className="font-bold text-white text-base">الابتكار في التقديم</h4>
                <p className="text-xs text-slate-400">أساليب عصرية تناسب الحفلات الرسمية والمشاعر.</p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
                <span className="text-3xl block">🏆</span>
                <h4 className="font-bold text-white text-base">الجودة أولاً</h4>
                <p className="text-xs text-slate-400">مكونات ممتازة 100% تم اختيارها بعناية فائقة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">نطاق الخدمات</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">خدمات الضيافة والتموين الشاملة</h2>
            <p className="text-slate-400 text-sm">
              حلول مصممة لتلبية احتياجات الشركات والبعثات والاحتفالات الخاصة:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">01. خدمة الضيافة الشاملة</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تنظيم وإدارة شؤون الضيافة في الفعاليات والمؤتمرات والمناسبات العائلية بأسلوب يعكس الذوق الرفيع.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">02. كاترينج الشركات والمؤسسات</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                توريد الوجبات اليومية والموسمية لمنسوبي وموظفي الشركات والجهات الحكومية والبعثات الدبلوماسية.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">03. البوفيهات المفتوحة VIP</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                تجهيز سخانات وأطباق بوفيه مفتوح فاخرة تناسب كبار الشخصيات مع طاقم خدمة محترف ومظهر لائق.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">04. كاترينج للمناسبات الخاصة</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                ولائم وأطباق مخصصة حسب رغبة العميل تشمل الأطباق العربية والشرقية والمأكولات الآسيوية والحلويات.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">05. كاترينج دوري (يومي / أسبوعي)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                عقود توريد مجدولة وثابتة للمدارس، المعاهد، والمخيمات طوال فترات الإقامة والمواسم التشغيلية.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-amber-400 mb-2">06. أسطول النقل المجهز</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                سيارات مجهزة لنقل الأغذية بدرجات حرارة مضبوطة تضمن وصول الوجبات طازجة وساخنة لمقر العميل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menus Interactive Showcase Section */}
      <section id="menus" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">تشكيلاتنا المميزة</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">نماذج من قوائم الطعام (Menus)</h2>
            <p className="text-slate-400 text-sm">
              أطباق متقنة تلائم أذواق الحجاج من مختلف الجنسيات (شرقية، عربية، آسيوية وإندونيسية):
            </p>

            {/* Menu Tabs */}
            <div className="flex justify-center gap-3 pt-6">
              <button
                onClick={() => setActiveTab("breakfast")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
                  activeTab === "breakfast"
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                وجبة الإفطار (Breakfast)
              </button>
              <button
                onClick={() => setActiveTab("lunch")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
                  activeTab === "lunch"
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                وجبة الغداء (Lunch)
              </button>
              <button
                onClick={() => setActiveTab("dinner")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
                  activeTab === "dinner"
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                وجبة العشاء (Dinner)
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-xl">
            {activeTab === "breakfast" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-slate-800 pb-3">محتويات وجبة الإفطار الصباحية</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">✓ أرز مقلي بالبصل والخضار الطازج</div>
                  <div className="flex items-center gap-2">✓ كشري أسيوي شهي بحليب النارجين</div>
                  <div className="flex items-center gap-2">✓ بيض مسلوق صحي ومتبل</div>
                  <div className="flex items-center gap-2">✓ تونة بالخضار والبهارات الخفيفة</div>
                  <div className="flex items-center gap-2">✓ بطاطس مقلية مع فاصوليا خضراء</div>
                  <div className="flex items-center gap-2">✓ كروبوك روبيان شرائح مقرمش وبلينجو</div>
                  <div className="flex items-center gap-2">✓ عيش توست طازج وخبز همبرجر</div>
                  <div className="flex items-center gap-2">✓ جبنة مثلثات ومربى وعسل شفرات</div>
                  <div className="flex items-center gap-2">✓ سمبل شفرات وسمبل مطبوخ</div>
                  <div className="flex items-center gap-2">✓ فواكه مشكلة طازجة (4 أنواع) وعصير المراعي</div>
                </div>
              </div>
            )}

            {activeTab === "lunch" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-slate-800 pb-3">محتويات وجبة الغداء الرئيسية</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">✓ أرز أبيض فاخر (رويال - مالجروشا)</div>
                  <div className="flex items-center gap-2">✓ لحم مقلقل شهي بالنارجين</div>
                  <div className="flex items-center gap-2">✓ دجاج مقلي بالصوص الأحمر مع شيبس</div>
                  <div className="flex items-center gap-2">✓ طبق سايو اسم بالجمبري الطازج</div>
                  <div className="flex items-center gap-2">✓ خضار مشكلة مطهية على البخار (بطاطس، جزر، كوسة)</div>
                  <div className="flex items-center gap-2">✓ كفتة بطاطس مقرمشة متبلة</div>
                  <div className="flex items-center gap-2">✓ بيض مسلوق بصوص الكاري الغني</div>
                  <div className="flex items-center gap-2">✓ كروبوك روبيان وسمبل تقليدي مطبوخ</div>
                  <div className="flex items-center gap-2">✓ حلى جلي الزهراء الشهي</div>
                  <div className="flex items-center gap-2">✓ فواكه طازجة منتقاة وعصائر باردة</div>
                </div>
              </div>
            )}

            {activeTab === "dinner" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-slate-800 pb-3">محتويات وجبة العشاء المتكاملة</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">✓ أرز أبيض رويال وأرز كتوبت (لونتي)</div>
                  <div className="flex items-center gap-2">✓ ساتي لحم دجاج مشوي مع صوص الفول السوداني</div>
                  <div className="flex items-center gap-2">✓ شوربة ذيل الثور الغنية أو شوربة مقادم</div>
                  <div className="flex items-center gap-2">✓ دجاج أوبور على الطريقة التقليدية</div>
                  <div className="flex items-center gap-2">✓ سلطة قادو قادو بالصوص الخاص</div>
                  <div className="flex items-center gap-2">✓ لحم رندق المطهو ببطء والمتبل</div>
                  <div className="flex items-center gap-2">✓ سمبل شفرات ومطبوخ عالي الجودة</div>
                  <div className="flex items-center gap-2">✓ حلى جلي ومقرمشات كروبك بلينجو</div>
                  <div className="flex items-center gap-2">✓ تشكيلة فواكه 4 أصناف وعصائر منوعة</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Letters of Appreciation / شهادات الشكر */}
      <section id="letters" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">سجل التقدير والشكر</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">شهادات وخطابات شكر وتقدير رسمية</h2>
            <p className="text-slate-400 text-sm">
              إشادات رفيعة من بعثات الحج والشركات الدولية تقديراً للأداء والالتزام:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">ماليزيا • FELDA TRAVEL</span>
              <h4 className="font-bold text-white text-base">خطاب شكر رسمي - موسم 1445هـ</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                شكر وتقدير رسمي من إدارة شركة فيلدا للسفريات بماليزيا على تقديم خدمات الإعاشة وتجهيز الخيام بمكتب 112 لحجاج البعثة.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">ماليزيا • TABUNG HAJI</span>
              <h4 className="font-bold text-white text-base">شهادة شكر وتقدير - موسم 1446هـ</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                إشادة من رئيس مجلس إدارة شركة تابونج حاجي ترافيل (داتو سري سيد صالح) على الجهود المميزة في خدمة الحجاج.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">شركة مشارق المتميزة (ركين)</span>
              <h4 className="font-bold text-white text-base">شكر وتقدير لمطبخ وائل رشيدي</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                خطاب شكر وتقدير من رئيس مجلس الإدارة والرئيس التنفيذي لشركة مشارق ركين على إنجاح موسم حج 1445هـ.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">ماليزيا • ANDALUSIA TOURS</span>
              <h4 className="font-bold text-white text-base">شكر وتقدير - موسم حج 1445هـ</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                إشادة من الرئيس التنفيذي لشركة الأندلسية على التفاني في أداء مهام الخيام والإعاشة على أكمل وجه.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">اتحاد شركات AMPHURI</span>
              <h4 className="font-bold text-white text-base">أفضل مقدم خدمات لحجاج الاتحاد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                جائزة وتكريم كأفضل متعهد إعاشة وخدمات لحجاج اتحاد شركات AMPHURI لموسم الحج.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-amber-400">اتحاد شركات HIMPU</span>
              <h4 className="font-bold text-white text-base">أفضل مقدم خدمات لحجاج الاتحاد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                شهادة تقدير وتكريم رسمي لجودة التموين الغذائي وسرعة استجابة فرق العمل الميدانية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Numbers */}
      <section id="track-record" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">إحصائيات المواسم</span>
            <h2 className="text-3xl font-black text-white">سابقة أعمال موثقة بالأرقام</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-sans block mb-1">2,600 حاج</span>
              <span className="text-xs text-slate-300 font-semibold">بعثة الحج الصينية</span>
              <p className="text-xs text-slate-500 mt-2">إعاشة مطهية وجافة بالمشاعر</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-sans block mb-1">2,000 حاج VIP</span>
              <span className="text-xs text-slate-300 font-semibold">حجاج ماليزيا VIP</span>
              <p className="text-xs text-slate-500 mt-2">بوفيه مفتوح طوال فترة التواجد</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-sans block mb-1">2,800 حاج</span>
              <span className="text-xs text-slate-300 font-semibold">بعثة الحج الإندونيسية</span>
              <p className="text-xs text-slate-500 mt-2">إعاشة لعدة مواسم متتالية</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 font-sans block mb-1">3,400 حاج</span>
              <span className="text-xs text-slate-300 font-semibold">مكتب 111 جنوب شرق آسيا</span>
              <p className="text-xs text-slate-500 mt-2">خدمات إعاشة VIP بالمشاعر</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">تواصل مباشر</span>
          <h2 className="text-3xl sm:text-4xl font-black">يسرنا تقديم أفضل عروض الإعاشة لمؤسستكم</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            مكة المكرمة - حي الشوقية / حي الخضراء • هاتف: 0596048533 • بريد إلكتروني: info@wrgrop.com
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-mono">
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-amber-400">سجل تجاري: 4031050596</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300">رقم المنشأة: 7014915180</span>
            <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-amber-400">رخصة بلدي: 3909489775</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-500 py-8 border-t border-slate-900 text-xs text-center">
        <p className="text-slate-400 font-bold mb-1">شركة وائل رشيدي لخدمات الإعاشة والتموين (تموين الديار)</p>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} • Wael Rasheedi Catering (WR Group)</p>
      </footer>
    </div>
  );
}
