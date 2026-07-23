export const LANGUAGES = [
  { code: "ru", label: "RU", name: "Русский" },
  { code: "uz", label: "UZ", name: "O'zbekcha" },
];

const destinationItems = {
  ru: [
    { country: "Грузия", tag: "«Чудеса Грузии»", desc: "Тбилиси · Бакуриани · Батуми", price: "от 740$", icon: "ic-mountain" },
    { country: "Турция", tag: "«Чудеса Турции»", desc: "Измир · Стамбул · Каппадокия · Памуккале", price: "от 801$", icon: "ic-sun" },
    { country: "Турция", tag: "Анталья · Бодрум · Кушадасы", desc: "Пляжный отдых, отели 4–5★", price: "от 502$", icon: "ic-palm" },
    { country: "Азербайджан", tag: "«Чудеса Азербайджана»", desc: "Баку · Габала · Шеки + Нафталан", price: "от 502$", icon: "ic-mountain" },
    { country: "ОАЭ", tag: "Дубай + Абу-Даби", desc: "Два эмирата в одной поездке", price: "от 580$", icon: "ic-sun" },
    { country: "Египет", tag: "Пляжный отдых", desc: "Всё включено, тёплое море", price: "от 647$", icon: "ic-palm" },
    { country: "Китай", tag: "«Аватар» тур", desc: "Гуанчжоу · Чжанцзяцзе · Фэнхуан", price: "от 1642$", icon: "ic-mountain" },
    { country: "Вьетнам", tag: "Нячанг", desc: "Пляжи и восточный колорит", price: "от 736$", icon: "ic-palm" },
    { country: "Мальдивы", tag: "Островной рай", desc: "Виллы над водой, люкс-отдых", price: "от 1075$", icon: "ic-sun" },
  ],
  uz: [
    { country: "Gruziya", tag: "«Gruziya mo'jizalari»", desc: "Tbilisi · Bakuriani · Batumi", price: "740$ dan", icon: "ic-mountain" },
    { country: "Turkiya", tag: "«Turkiya mo'jizalari»", desc: "Izmir · Stambul · Kappadokiya · Pamukkale", price: "801$ dan", icon: "ic-sun" },
    { country: "Turkiya", tag: "Antaliya · Bodrum · Kushadasi", desc: "Plyaj dam olish, 4–5★ mehmonxonalar", price: "502$ dan", icon: "ic-palm" },
    { country: "Ozarbayjon", tag: "«Ozarbayjon mo'jizalari»", desc: "Boku · Gabala · Shaki + Naftalan", price: "502$ dan", icon: "ic-mountain" },
    { country: "BAA", tag: "Dubay + Abu-Dabi", desc: "Bitta sayohatda ikki amirlik", price: "580$ dan", icon: "ic-sun" },
    { country: "Misr", tag: "Plyaj dam olish", desc: "Hammasi kiritilgan, issiq dengiz", price: "647$ dan", icon: "ic-palm" },
    { country: "Xitoy", tag: "«Avatar» turi", desc: "Guanchjou · Chjanszyatsze · Fenxuan", price: "1642$ dan", icon: "ic-mountain" },
    { country: "Vetnam", tag: "Nyachang", desc: "Plyajlar va sharq ruhi", price: "736$ dan", icon: "ic-palm" },
    { country: "Maldiv orollari", tag: "Orol jannati", desc: "Suv ustidagi villalar, lyuks dam olish", price: "1075$ dan", icon: "ic-sun" },
  ],
};

const hotDeals = {
  ru: [
    { country: "Кыргызстан", tag: "Иссык-Куль и горы", price: "от 459$" },
    { country: "Шарджа", tag: "Компактный эмират (ОАЭ)", price: "от 505$" },
    { country: "Катар", tag: "Доха за выходные", price: "от 504$" },
    { country: "Таиланд", tag: "Пхукет", price: "от 601€" },
    { country: "Кемер", tag: "Пляжный отдых (Турция)", price: "от 620€" },
  ],
  uz: [
    { country: "Qirg'iziston", tag: "Issiqko'l va tog'lar", price: "459$ dan" },
    { country: "Sharja", tag: "Ixcham amirlik (BAA)", price: "505$ dan" },
    { country: "Qatar", tag: "Dam olish kunlariga Doha", price: "504$ dan" },
    { country: "Tailand", tag: "Fukuet", price: "601€ dan" },
    { country: "Kemer", tag: "Plyaj dam olish (Turkiya)", price: "620€ dan" },
  ],
};

const faqItems = {
  ru: [
    {
      q: "Сколько стоит тур?",
      a: "Цены «от» указаны на человека при двухместном размещении. Точная стоимость зависит от даты вылета, отеля и сезона — её уточнит менеджер после заявки.",
    },
    {
      q: "Что входит в стоимость?",
      a: "Авиаперелёт, проживание, трансфер и медицинская страховка — одним пакетом. В части туров дополнительно включены экскурсии, детали есть в описании направления.",
    },
    {
      q: "Как забронировать тур?",
      a: "Напишите в Telegram или позвоните по телефону — менеджер поможет подобрать вариант под ваш бюджет и оформит бронирование.",
    },
    {
      q: "Можно ли лететь семьёй или большой компанией?",
      a: "Да, программы подходят для семей, друзей и родителей — подберём вариант на любой возраст и бюджет.",
    },
    {
      q: "Нужна ли виза?",
      a: "Зависит от направления. Менеджер подскажет, нужна ли виза для выбранной страны, и поможет с оформлением при необходимости.",
    },
  ],
  uz: [
    {
      q: "Tur qancha turadi?",
      a: "«dan» narxlar 1 kishi uchun, ikki kishilik xonada joylashishda ko'rsatilgan. Aniq narx parvoz sanasi, mehmonxona va mavsumga bog'liq — so'rovdan so'ng menejer aniqlashtiradi.",
    },
    {
      q: "Narxga nima kiradi?",
      a: "Aviachipta, mehmonxona, transfer va tibbiy sug'urta — bitta paketda. Ba'zi turlarga qo'shimcha ekskursiyalar ham kiritilgan, tafsilotlar yo'nalish tavsifida ko'rsatilgan.",
    },
    {
      q: "Turni qanday bron qilaman?",
      a: "Telegram orqali yozing yoki qo'ng'iroq qiling — menejer byudjetingizga mos variantni tanlab, bronni rasmiylashtiradi.",
    },
    {
      q: "Oila yoki katta guruh bilan borsa bo'ladimi?",
      a: "Ha, dasturlar oilalar, do'stlar va ota-onalar uchun mos — har qanday yosh va byudjetga variant topamiz.",
    },
    {
      q: "Viza kerakmi?",
      a: "Yo'nalishga bog'liq. Menejer tanlangan davlat uchun viza kerak-kerakmasligini aytadi va zarur bo'lsa rasmiylashtirishga yordam beradi.",
    },
  ],
};

const whyItems = {
  ru: [
    { icon: "ic-shield", title: "Надёжно и без риска", text: "Подбираем тур, который точно вам подходит — никакой спешки и рискованных решений." },
    { icon: "ic-tag", title: "Честная цена", text: "Никаких обязательных доплат — стоимость тура фиксирована и прозрачна." },
    { icon: "ic-bus", title: "Комфортный трансфер", text: "Комфортабельные автобусы Mercedes и трансферы по всему маршруту." },
    { icon: "ic-medical", title: "Страховка включена", text: "Медицинская страховка входит в стоимость каждого тура." },
    { icon: "ic-gift", title: "Экскурсии в подарок", text: "Обзорные экскурсии и русскоговорящие гиды-историки — бонусом к туру." },
    { icon: "ic-family", title: "Для всей семьи", text: "Программы для семей, друзей и родителей — на любой бюджет и возраст." },
  ],
  uz: [
    { icon: "ic-shield", title: "Ishonchli va xatarsiz", text: "Sizga aynan mos turni tanlaymiz — shoshilinch va xavfli qarorlarsiz." },
    { icon: "ic-tag", title: "Halol narx", text: "Yashirin qo'shimcha to'lovlar yo'q — tur narxi aniq va shaffof." },
    { icon: "ic-bus", title: "Qulay transfer", text: "Qulay Mercedes avtobuslar va butun marshrut bo'ylab transferlar." },
    { icon: "ic-medical", title: "Sug'urta narxga kiritilgan", text: "Har bir turga tibbiy sug'urta kiritilgan." },
    { icon: "ic-gift", title: "Sovg'a ekskursiyalar", text: "Obzor ekskursiyalar va rus tilida so'zlashuvchi gid-tarixchilar — turga bonus sifatida." },
    { icon: "ic-family", title: "Butun oila uchun", text: "Oilalar, do'stlar va ota-onalar uchun har qanday byudjet va yoshga mos dasturlar." },
  ],
};

const howSteps = {
  ru: [
    { title: "Оставляете заявку", text: "Через Telegram или по телефону — расскажите, куда и когда хотите полететь." },
    { title: "Подбираем тур", text: "Менеджер предложит варианты под ваш бюджет и пожелания." },
    { title: "Бронируем и оформляем", text: "Авиабилеты, отель, страховку и трансфер оформляем за вас." },
    { title: "Летите отдыхать", text: "Мы остаёмся на связи весь отдых — от вылета до возвращения." },
  ],
  uz: [
    { title: "So'rov qoldiring", text: "Telegram yoki telefon orqali — qayerga va qachon uchmoqchi ekaningizni ayting." },
    { title: "Tur tanlaymiz", text: "Menejer byudjet va istaklaringizga mos variantlarni taklif qiladi." },
    { title: "Bron qilamiz va rasmiylashtiramiz", text: "Aviachipta, mehmonxona, sug'urta va transferni siz uchun tayyorlaymiz." },
    { title: "Dam olishga uching", text: "Butun sayohat davomida siz bilan aloqadamiz — parvozdan qaytishgacha." },
  ],
};

export const translations = {
  ru: {
    nav: {
      links: { destinations: "Направления", why: "Почему мы", how: "Как это работает", contact: "Контакты" },
      cta: "Telegram",
    },
    hero: {
      eyebrow: "600+ туристов уже доверились нам",
      titleLine1: "Отдых под ключ.",
      titleAccent: "Туры без стресса.",
      lead: "Авиабилеты, отель, трансфер, страховка и экскурсии — одним пакетом. Подберём тур под ваш бюджет и мечту о путешествии.",
      ctaPrimary: "Подобрать тур",
      ctaSecondary: "Позвонить",
      stats: [
        { value: "15+", label: "направлений" },
        { value: "600+", label: "довольных туристов" },
        { value: "24/7", label: "на связи весь отдых" },
      ],
    },
    destinations: {
      eyebrow: "Направления",
      heading: "Куда полетим?",
      sub: "Подборка самых популярных туров — маршруты, авторские программы и цены «от», актуальные на момент публикации.",
      items: destinationItems.ru,
      priceNote: "Цены указаны на человека при двухместном размещении и могут меняться — точную стоимость уточнит менеджер.",
      filterAll: "Все",
    },
    search: {
      heading: "Куда хотите полететь?",
      destLabel: "Направление",
      destAny: "Любое направление",
      peopleLabel: "Количество человек",
      peopleUnit: "чел.",
      cta: "Подобрать тур",
      messageAny: "Здравствуйте! Подскажите, пожалуйста, варианты туров.",
      messageFor: (dest, people) => `Здравствуйте! Хочу тур в ${dest} на ${people} чел.`,
    },
    hotDeals: {
      eyebrow: "Горящие туры",
      heading: "Лучшие цены этой недели",
      sub: "Подборка обновляется по нашему Telegram-каналу — успейте забронировать по текущей цене.",
      hitLabel: "Хит",
      items: hotDeals.ru,
    },
    why: {
      eyebrow: "Почему мы",
      heading: "Путешествие без лишних забот",
      sub: "Мы с вами на связи весь отдых — от бронирования до возвращения домой.",
      items: whyItems.ru,
    },
    how: {
      eyebrow: "Как это работает",
      heading: "4 шага до отпуска",
      steps: howSteps.ru,
    },
    faq: {
      eyebrow: "Вопросы и ответы",
      heading: "Частые вопросы",
      items: faqItems.ru,
    },
    social: {
      eyebrow: "Мы в соцсетях",
      heading: "Следите за горящими турами",
      sub: "Новые направления, скидки и отзывы туристов публикуем каждый день.",
      instagramLabel: "подписчиков в Instagram",
      telegramLabel: "подписчиков в Telegram",
      ctaInstagram: "Подписаться",
      ctaTelegram: "Подписаться",
    },
    promo: {
      heading: "Готовы к путешествию?",
      sub: "Напишите нам в Telegram или позвоните — подберём тур без риска уже сегодня.",
      ctaPrimary: "Написать в Telegram",
      ctaSecondary: "Позвонить",
    },
    footer: {
      blurbLine1: "Отдых под ключ. Туры без стресса.",
      blurbLine2: "Семьи · друзья · родители — мы с вами на связи весь отдых.",
      colNav: "Навигация",
      colContact: "Контакты",
      copyright: "Все права защищены.",
    },
  },
  uz: {
    nav: {
      links: { destinations: "Yo'nalishlar", why: "Nega aynan biz", how: "Qanday ishlaydi", contact: "Aloqa" },
      cta: "Telegram",
    },
    hero: {
      eyebrow: "600+ sayohatchi allaqachon bizga ishonadi",
      titleLine1: "Kalitga tayyor dam olish.",
      titleAccent: "Stresssiz turlar.",
      lead: "Aviachipta, mehmonxona, transfer, sug'urta va ekskursiyalar — bitta paketda. Byudjetingiz va sayohat orzuingizga mos turni tanlaymiz.",
      ctaPrimary: "Tur tanlash",
      ctaSecondary: "Qo'ng'iroq qilish",
      stats: [
        { value: "15+", label: "yo'nalish" },
        { value: "600+", label: "mamnun mijoz" },
        { value: "24/7", label: "dam olish davomida aloqada" },
      ],
    },
    destinations: {
      eyebrow: "Yo'nalishlar",
      heading: "Qayerga uchamiz?",
      sub: "Eng ommabop turlar to'plami — marshrutlar, muallif dasturlari va e'lon vaqtidagi \"dan\" narxlar.",
      items: destinationItems.uz,
      priceNote: "Narxlar 1 kishi uchun, ikki kishilik xonada joylashishda ko'rsatilgan va o'zgarishi mumkin — aniq narxni menejer tasdiqlaydi.",
      filterAll: "Barchasi",
    },
    search: {
      heading: "Qayerga uchmoqchisiz?",
      destLabel: "Yo'nalish",
      destAny: "Istalgan yo'nalish",
      peopleLabel: "Kishilar soni",
      peopleUnit: "kishi",
      cta: "Tur tanlash",
      messageAny: "Assalomu alaykum! Tur variantlarini aytib bera olasizmi?",
      messageFor: (dest, people) => `Assalomu alaykum! Menga ${dest} yo'nalishi bo'yicha ${people} kishiga tur kerak edi.`,
    },
    hotDeals: {
      eyebrow: "Qaynoq takliflar",
      heading: "Shu haftaning eng yaxshi narxlari",
      sub: "To'plam Telegram kanalimiz asosida yangilanadi — joriy narxda bron qilishga ulguring.",
      hitLabel: "Xit",
      items: hotDeals.uz,
    },
    why: {
      eyebrow: "Nega aynan biz",
      heading: "Ortiqcha tashvishsiz sayohat",
      sub: "Butun dam olish davomida siz bilan aloqadamiz — bron qilishdan uyga qaytishgacha.",
      items: whyItems.uz,
    },
    how: {
      eyebrow: "Qanday ishlaydi",
      heading: "Ta'tilgacha 4 qadam",
      steps: howSteps.uz,
    },
    faq: {
      eyebrow: "Savol-javob",
      heading: "Ko'p beriladigan savollar",
      items: faqItems.uz,
    },
    social: {
      eyebrow: "Ijtimoiy tarmoqlarda",
      heading: "Qaynoq turlarni kuzatib boring",
      sub: "Har kuni yangi yo'nalishlar, chegirmalar va sayohatchilar fikrlarini e'lon qilamiz.",
      instagramLabel: "Instagram obunachi",
      telegramLabel: "Telegram obunachi",
      ctaInstagram: "Obuna bo'lish",
      ctaTelegram: "Obuna bo'lish",
    },
    promo: {
      heading: "Sayohatga tayyormisiz?",
      sub: "Telegram orqali yozing yoki qo'ng'iroq qiling — bugunoq xatarsiz tur tanlaymiz.",
      ctaPrimary: "Telegram orqali yozish",
      ctaSecondary: "Qo'ng'iroq qilish",
    },
    footer: {
      blurbLine1: "Kalitga tayyor dam olish. Stresssiz turlar.",
      blurbLine2: "Oilalar · do'stlar · ota-onalar — dam olish davomida siz bilan aloqadamiz.",
      colNav: "Navigatsiya",
      colContact: "Aloqa",
      copyright: "Barcha huquqlar himoyalangan.",
    },
  },
};
