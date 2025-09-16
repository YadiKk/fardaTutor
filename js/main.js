// Smooth scroll for in-page links
document.addEventListener('click', function (e) {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  const target = document.querySelector(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Contact form: open mail client with prefilled content
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString();
    const email = (data.get('email') || '').toString();
    const message = (data.get('message') || '').toString();

    const subject = encodeURIComponent('Lesson inquiry');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const defaultTheme = localStorage.getItem('theme') || 'light';
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }
  
  // Initialize theme
  applyTheme(defaultTheme);
  
  // Add event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
})();

// --- i18n ---
(function () {
  const translations = {
    en: {
      // Hero
      'hero.title': 'English with Farida',
      'hero.subtitle': 'General English, Speaking Club, IELTS etc.',
      'hero.cta': 'Contact',

      // Nav
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.courses': 'Courses',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',
      'nav.sc': 'Speaking Club',
      'nav.ielts': 'IELTS Prep',

      // Courses
      'courses.title': 'Courses',
      'courses.c1.badge': 'Free',
      'courses.c1.title': 'Trial Lesson (25 min)',
      'courses.c1.p': 'Meet, set goals, check your level, and build a plan together.',
      'courses.c2.title': 'Speaking Club (60 min, group)',
      'courses.c2.p': 'Discuss psychology, science, and cutting-edge topics; have real conversations; and get feedback to boost your fluency',
      'courses.c2.button': 'View details',
      'courses.c3.badge': 'Best for 1:1',
      'courses.c3.title': '1:1 Lessons (45–60 min)',
      'courses.c3.p': 'Tailored classes for grammar, vocabulary, and confident speaking.',
      'courses.c4.badge': 'Popular',
      'courses.c4.title': 'Group English Classes (60-80 min)',
      'courses.c4.p': 'Available for all levels: beginner, pre-intermediate, intermediate, upper-intermediate, and advanced C1.',
      'courses.c5.title': 'IELTS Prep (1:1)',
      'courses.c5.p': 'Score-focused program with mock tests and task-by-task guidance.',
      'courses.c5.button': 'View details',
      'courses.c6.title': 'Reading Club',
      'courses.c6.p': 'Improve reading comprehension and vocabulary through engaging texts and discussions.',
      'courses.c9.title': 'Speaking Lesson 1:1 (30–60 min)',
      'courses.c9.p': 'Boost your English, expand your vocabulary, and speak confidently!',
      'courses.c7.title': 'ЕГЭ / ОГЭ по английскому языку',
      'courses.c7.p': 'Углублённый разбор формата экзамена, тренировка ключевых стратегий и повышение уровня владения языком.',
      'courses.c8.title': 'Abturyent Hazırlığı',
      'courses.c8.p': '9 və 11-ci sinif üzrə buraxılış imtahanına (DİM) ingilis dili hazırlığı – dərslər həftədə 3 dəfə, 6–12 nəfərlik qruplarda keçirilir.',

      // About
      'about.title': 'About Farida',
      'about.p': 'Hi, I\'m Farida — an English tutor helping teens and adults reach their goals. My lessons focus on real-life speaking, clear grammar, and vocabulary you\'ll actually use. I keep classes friendly, structured, and motivating.',
      'about.li1': 'Beginner to advanced levels',
      'about.li2': 'Personal study plan and homework',
      'about.li3': 'Flexible schedule (online)',

      // Experience
      'exp.title': 'Experience',
      'exp.p': 'I’ve guided learners through speaking clubs, exam prep, and day‑to‑day English for study and work. Students say they feel safe to speak, make mistakes, and improve fast.',
      'exp.c1.title': 'Speaking Club Host',
      'exp.c1.p': 'Weekly small-group sessions to unlock fluency, pronunciation, and confidence.',
      'exp.c2.title': 'IELTS Preparation',
      'exp.c2.p': 'Targeted practice for Reading, Listening, Writing, and Speaking with proven strategies.',
      'exp.c3.title': '1:1 Coaching',
      'exp.c3.p': 'Custom programs for travel, work interviews, or university study abroad.',

      // Pricing
      'pricing.title': 'Pricing',
      'pricing.trial.title': 'Trial Lesson',
      'pricing.trial.amount': 'Free',
      'pricing.trial.note': '25 minutes',
      'pricing.sc.badge': 'Popular',
      'pricing.sc.title': 'Speaking Club',
      'pricing.sc.amount': '$10',
      'pricing.sc.note': 'per session (group)',
      'pricing.one.badge': 'Best value',
      'pricing.one.title': '1:1 Lesson',
      'pricing.one.amount': '$18',
      'pricing.one.note': '45 minutes online',
      'pricing.ielts.title': 'IELTS Prep',
      'pricing.ielts.amount': '$22',
      'pricing.ielts.note': '60 minutes 1:1',
      'pricing.group.title': 'Group English Classes',
      'pricing.group.amount': '$12',
      'pricing.group.note': '60-80 minutes (group)',
      'pricing.reading.title': 'Reading Club',
      'pricing.reading.amount': '$8',
      'pricing.reading.note': 'per session (group)',
      'pricing.speaking.title': 'Speaking Lesson 1:1',
      'pricing.speaking.amount': '$15',
      'pricing.speaking.note': '30-60 minutes',
      'pricing.note.pre': 'Need a custom plan (packages or corporate)?',
      'pricing.note.link': 'Contact me',
      'pricing.disclaimer': '⚠️ Pricing may vary by country and region. Please contact me for accurate pricing in your location.',

      // Contact
      'contact.title': 'Contact',
      'contact.p': 'Have a question or want to book a trial? Send a message — I usually reply within 24 hours.',
      'contact.whatsapp': 'WhatsApp',
      'contact.telegram': 'Telegram',

      // Speaking Club page
      'back': 'Back',
      'sc.title': 'Speaking Club flow',
      'sc.subtitle': 'TG @AMUR_ENGLISH — Speaking and Movie Clubs',
      'sc.suitable': 'Suitable for you',
      'sc.t5': '5min',
      'sc.t10': '10min',
      'sc.t30': '30min',
      'sc.left1.title': 'SHARE IMPRESSIONS AFTER WATCHING',
      'sc.left1.note': 'what you liked/did not like, what was difficult, etc.',
      'sc.left2.title': 'COMMUNICATION TASKS',
      'sc.left2.note': 'questions, make a ranking, solve a problem, etc.',
      'sc.right1.title': 'INTRO / SMALL TALK',
      'sc.right1.note': 'Short greetings',
      'sc.right2.title': 'VOCABULARY WORK',
      'sc.right2.note': 'match words with descriptions, fill in gaps, etc.',
      'sc.right3.title': 'FEEDBACK',
      'sc.right3.note': 'error review, feedback, share impressions',

      // Telegram buttons
      'telegram.join': 'Join Telegram',

      // Alt texts and labels
      'alt.logo': 'Farida logo',
      'alt.profile': 'Portrait of Farida, English tutor',
      'aria.language': 'Language',
      'aria.menu': 'Toggle menu',
      'aria.theme': 'Toggle dark mode',

      // Footer
      'footer.role': 'English Tutor',

      // IELTS Preparation page
      'ielts.title': 'IELTS Test Structure & Preparation',
      'ielts.subtitle': 'Comprehensive guide to IELTS success with proven strategies',
      'ielts.overview': 'IELTS Test Overview',
      'ielts.academic': 'Academic IELTS',
      'ielts.academic.desc': 'For university admission and professional registration',
      'ielts.general': 'General Training',
      'ielts.general.desc': 'For immigration and work purposes',
      'ielts.sections': 'IELTS Test Sections',
      'ielts.listening.time': '30 min',
      'ielts.listening.title': 'LISTENING',
      'ielts.listening.desc': '4 sections, 40 questions. Academic and everyday contexts.',
      'ielts.listening.tip1': 'Listen for specific information and main ideas',
      'ielts.listening.tip2': 'Practice with different accents (British, Australian, American)',
      'ielts.listening.tip3': 'Read questions before listening',
      'ielts.reading.time': '60 min',
      'ielts.reading.title': 'READING',
      'ielts.reading.desc': '3 passages, 40 questions. Academic texts and general interest articles.',
      'ielts.reading.tip1': 'Skim and scan techniques for time management',
      'ielts.reading.tip2': 'Identify keywords and synonyms',
      'ielts.reading.tip3': 'Practice with authentic IELTS materials',
      'ielts.writing.time': '60 min',
      'ielts.writing.title': 'WRITING',
      'ielts.writing.desc': 'Task 1: 150 words, Task 2: 250 words. Academic and general formats.',
      'ielts.writing.tip1': 'Plan your essay structure before writing',
      'ielts.writing.tip2': 'Use formal academic language and linking words',
      'ielts.writing.tip3': 'Practice different essay types and graph descriptions',
      'ielts.speaking.time': '11-14 min',
      'ielts.speaking.title': 'SPEAKING',
      'ielts.speaking.desc': '3 parts: Introduction, Individual long turn, Two-way discussion.',
      'ielts.speaking.tip1': 'Speak naturally and fluently',
      'ielts.speaking.tip2': 'Use a range of vocabulary and grammar structures',
      'ielts.speaking.tip3': 'Practice with sample questions and topics',
      'ielts.levels': 'English Proficiency Levels & IELTS Band Scores',
      'ielts.level.a1': 'A1 - Beginner',
      'ielts.level.a1.score': 'IELTS 3.0',
      'ielts.level.a1.desc': 'Basic everyday expressions and simple phrases',
      'ielts.level.a2': 'A2 - Elementary',
      'ielts.level.a2.score': 'IELTS 3.5',
      'ielts.level.a2.desc': 'Simple conversations about familiar topics',
      'ielts.level.b1': 'B1 - Intermediate',
      'ielts.level.b1.score': 'IELTS 4.0 - 5.0',
      'ielts.level.b1.desc': 'Clear communication on familiar matters',
      'ielts.level.b2': 'B2 - Upper Intermediate',
      'ielts.level.b2.score': 'IELTS 5.5 - 6.5',
      'ielts.level.b2.desc': 'Complex ideas and abstract concepts',
      'ielts.level.c1': 'C1 - Advanced',
      'ielts.level.c1.score': 'IELTS 7.0 - 8.0',
      'ielts.level.c1.desc': 'Fluent and spontaneous communication',
      'ielts.level.c2': 'C2 - Proficient',
      'ielts.level.c2.score': 'IELTS 8.5 - 9.0',
      'ielts.level.c2.desc': 'Native-like proficiency and precision',
      'ielts.tips': 'IELTS Preparation Tips',
      'ielts.tip1.time': 'Week 1-2',
      'ielts.tip1.title': 'ASSESS YOUR CURRENT LEVEL',
      'ielts.tip1.desc': 'Take a practice test to identify your strengths and weaknesses',
      'ielts.tip2.time': 'Week 3-4',
      'ielts.tip2.title': 'SET REALISTIC GOALS',
      'ielts.tip2.desc': 'Determine your target band score based on your requirements',
      'ielts.tip3.time': 'Week 5-8',
      'ielts.tip3.title': 'DEVELOP TEST STRATEGIES',
      'ielts.tip3.desc': 'Learn specific techniques for each section and practice regularly',
      'ielts.tip4.time': 'Week 9-12',
      'ielts.tip4.title': 'MOCK TESTS & FEEDBACK',
      'ielts.tip4.desc': 'Take full practice tests under exam conditions and get professional feedback',
      'ielts.contact': 'Ready to Start Your IELTS Journey?',
      'ielts.contact.title': 'Get Professional Guidance',
      'ielts.contact.desc': 'Personalized IELTS preparation with expert feedback',
      'ielts.contact.button': 'Contact Me',
      'ielts.contact.trial': 'Free Trial Lesson',
      'ielts.contact.trial.desc': '25-minute assessment and personalized study plan',
      'ielts.contact.trial.button': 'Book Trial',
    },
    ru: {
      // Hero
      'hero.title': 'Английский с Фаридой',
      'hero.subtitle': 'Общий английский, разговорный клуб, IELTS и т.д.',
      'hero.cta': 'Связаться',

      // Nav
      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.courses': 'Курсы',
      'nav.pricing': 'Цены',
      'nav.contact': 'Контакты',
      'nav.sc': 'Разговорный клуб',
      'nav.ielts': 'IELTS',

      // Courses
      'courses.title': 'Курсы',
      'courses.c1.badge': 'Бесплатно',
      'courses.c1.title': 'Пробный урок (25 мин)',
      'courses.c1.p': 'Познакомимся, определим цели и уровень и составим план.',
      'courses.c2.title': 'Разговорный клуб (60 мин, группа)',
      'courses.c2.p': 'Интересные темы, настоящие диалоги и обратная связь для роста беглости.',
      'courses.c2.button': 'Подробнее',
      'courses.c3.badge': 'Лучше для 1:1',
      'courses.c3.title': 'Индивидуальные уроки (45–60 мин)',
      'courses.c3.p': 'Занятия по вашим целям: грамматика, словарь и уверенная речь.',
      'courses.c4.badge': 'Популярно',
      'courses.c4.title': 'Групповые занятия по английскому (60-80 мин)',
      'courses.c4.p': 'Доступно для всех уровней: начальный, пред-средний, средний, выше среднего и продвинутый C1.',
      'courses.c5.title': 'IELTS (индивидуально)',
      'courses.c5.p': 'Подготовка к баллу: пробные тесты и пошаговые задания.',
      'courses.c5.button': 'Подробнее',
      'courses.c6.title': 'Клуб чтения',
      'courses.c6.p': 'Улучшайте понимание прочитанного и словарный запас через интересные тексты и обсуждения.',
      'courses.c9.title': 'Разговорный урок 1:1 (30–60 мин)',
      'courses.c9.p': 'Повысьте уровень английского, расширьте словарный запас и говорите уверенно!',
      'courses.c7.title': 'ЕГЭ / ОГЭ по английскому языку',
      'courses.c7.p': 'Углублённый разбор формата экзамена, тренировка ключевых стратегий и повышение уровня владения языком.',
      'courses.c8.title': 'Abturyent Hazırlığı',
      'courses.c8.p': '9 və 11-ci sinif üzrə buraxılış imtahanına (DİM) ingilis dili hazırlığı – dərslər həftədə 3 dəfə, 6–12 nəfərlik qruplarda keçirilir.',

      // About
      'about.title': 'О Фариде',
      'about.p': 'Привет, я Фарида — преподаватель английского языка, помогающий подросткам и взрослым достигать своих целей. Мои уроки сосредоточены на реальном общении, четкой грамматике и словаре, который вы действительно будете использовать. Я делаю занятия дружелюбными, структурированными и мотивирующими.',
      'about.li1': 'От начального до продвинутого уровня',
      'about.li2': 'Персональный план обучения и домашние задания',
      'about.li3': 'Гибкий график (онлайн)',

      // Experience
      'exp.title': 'Опыт',
      'exp.p': 'Я веду разговорные клубы, готовлю к экзаменам и помогаю с повседневным английским для учёбы и работы. Ученики отмечают комфортную атмосферу, где не страшно говорить и легко прогрессировать.',
      'exp.c1.title': 'Ведущая разговорного клуба',
      'exp.c1.p': 'Небольшие группы каждую неделю для развития беглости, произношения и уверенности.',
      'exp.c2.title': 'Подготовка к IELTS',
      'exp.c2.p': 'Точечная практика чтения, аудирования, письма и речи с проверенными стратегиями.',
      'exp.c3.title': 'Индивидуальный коучинг',
      'exp.c3.p': 'Программы под поездки, собеседования и учёбу за рубежом.',

      // Pricing
      'pricing.title': 'Цены',
      'pricing.trial.title': 'Пробный урок',
      'pricing.trial.amount': 'Бесплатно',
      'pricing.trial.note': '25 минут',
      'pricing.sc.badge': 'Популярно',
      'pricing.sc.title': 'Разговорный клуб',
      'pricing.sc.amount': '$10',
      'pricing.sc.note': 'за занятие (группа)',
      'pricing.one.badge': 'Выгодно',
      'pricing.one.title': 'Индивидуальный урок',
      'pricing.one.amount': '$18',
      'pricing.one.note': '45 минут онлайн',
      'pricing.ielts.title': 'IELTS',
      'pricing.ielts.amount': '$22',
      'pricing.ielts.note': '60 минут 1:1',
      'pricing.group.title': 'Групповые занятия по английскому',
      'pricing.group.amount': '$12',
      'pricing.group.note': '60-80 минут (группа)',
      'pricing.reading.title': 'Клуб чтения',
      'pricing.reading.amount': '$8',
      'pricing.reading.note': 'за занятие (группа)',
      'pricing.speaking.title': 'Разговорный урок 1:1',
      'pricing.speaking.amount': '$15',
      'pricing.speaking.note': '30-60 минут',
      'pricing.note.pre': 'Нужен индивидуальный план (пакеты или корпоратив)?',
      'pricing.note.link': 'Свяжитесь со мной',
      'pricing.disclaimer': '⚠️ Цены могут отличаться в зависимости от страны и региона. Пожалуйста, свяжитесь со мной для получения точных цен в вашем регионе.',

      // Contact
      'contact.title': 'Контакты',
      'contact.p': 'Есть вопрос или хотите записаться на пробный урок? Напишите — обычно отвечаю в течение 24 часов.',
      'contact.whatsapp': 'WhatsApp',
      'contact.telegram': 'Telegram',

      // Speaking Club page
      'back': 'Назад',
      'sc.title': 'Ход Speaking club',
      'sc.subtitle': 'TG @AMUR_ENGLISH — Speaking and Movie Clubs',
      'sc.suitable': 'Подойдет для вас',
      'sc.t5': '5мин',
      'sc.t10': '10мин',
      'sc.t30': '30мин',
      'sc.left1.title': 'ОБМЕН ВПЕЧАТЛЕНИЯМИ ОТ ПРОСМОТРА',
      'sc.left1.note': 'что понравилось/не понравилось, что было сложно и т.д.',
      'sc.left2.title': 'ЗАДАНИЯ НА КОММУНИКАЦИЮ',
      'sc.left2.note': 'вопросы, составить рейтинг, решить проблему и т.д.',
      'sc.right1.title': 'ЗНАКОМСТВО / SMALL TALK',
      'sc.right1.note': 'Краткое приветствие',
      'sc.right2.title': 'РАБОТА С ЛЕКСИКОЙ',
      'sc.right2.note': 'совместить слово с описанием, вставить пропуски и т.д.',
      'sc.right3.title': 'FEEDBACK',
      'sc.right3.note': 'разбор ошибок, обратная связь, обмен впечатлениями',

      // Telegram buttons
      'telegram.join': 'Присоединиться к Telegram',

      // Alt texts and labels
      'alt.logo': 'Логотип Фариды',
      'alt.profile': 'Портрет Фариды, преподавателя английского языка',
      'aria.language': 'Язык',
      'aria.menu': 'Переключить меню',
      'aria.theme': 'Переключить темную тему',

      // Footer
      'footer.role': 'Преподаватель английского',

      // IELTS Preparation page
      'ielts.title': 'Структура теста IELTS и подготовка',
      'ielts.subtitle': 'Полное руководство к успеху IELTS с проверенными стратегиями',
      'ielts.overview': 'Обзор теста IELTS',
      'ielts.academic': 'Академический IELTS',
      'ielts.academic.desc': 'Для поступления в университет и профессиональной регистрации',
      'ielts.general': 'Общий модуль',
      'ielts.general.desc': 'Для иммиграции и работы',
      'ielts.sections': 'Разделы теста IELTS',
      'ielts.listening.time': '30 мин',
      'ielts.listening.title': 'АУДИРОВАНИЕ',
      'ielts.listening.desc': '4 раздела, 40 вопросов. Академические и повседневные контексты.',
      'ielts.listening.tip1': 'Слушайте конкретную информацию и основные идеи',
      'ielts.listening.tip2': 'Практикуйтесь с разными акцентами (британский, австралийский, американский)',
      'ielts.listening.tip3': 'Читайте вопросы перед прослушиванием',
      'ielts.reading.time': '60 мин',
      'ielts.reading.title': 'ЧТЕНИЕ',
      'ielts.reading.desc': '3 текста, 40 вопросов. Академические тексты и статьи общего интереса.',
      'ielts.reading.tip1': 'Техники беглого чтения и сканирования для управления временем',
      'ielts.reading.tip2': 'Определяйте ключевые слова и синонимы',
      'ielts.reading.tip3': 'Практикуйтесь с аутентичными материалами IELTS',
      'ielts.writing.time': '60 мин',
      'ielts.writing.title': 'ПИСЬМО',
      'ielts.writing.desc': 'Задание 1: 150 слов, Задание 2: 250 слов. Академический и общий форматы.',
      'ielts.writing.tip1': 'Планируйте структуру эссе перед написанием',
      'ielts.writing.tip2': 'Используйте формальный академический язык и связующие слова',
      'ielts.writing.tip3': 'Практикуйтесь с разными типами эссе и описаниями графиков',
      'ielts.speaking.time': '11-14 мин',
      'ielts.speaking.title': 'ГОВОРЕНИЕ',
      'ielts.speaking.desc': '3 части: Знакомство, Индивидуальное высказывание, Двустороннее обсуждение.',
      'ielts.speaking.tip1': 'Говорите естественно и бегло',
      'ielts.speaking.tip2': 'Используйте разнообразную лексику и грамматические структуры',
      'ielts.speaking.tip3': 'Практикуйтесь с образцами вопросов и тем',
      'ielts.levels': 'Уровни владения английским и баллы IELTS',
      'ielts.level.a1': 'A1 - Начальный',
      'ielts.level.a1.score': 'IELTS 3.0',
      'ielts.level.a1.desc': 'Базовые повседневные выражения и простые фразы',
      'ielts.level.a2': 'A2 - Элементарный',
      'ielts.level.a2.score': 'IELTS 3.5',
      'ielts.level.a2.desc': 'Простые разговоры на знакомые темы',
      'ielts.level.b1': 'B1 - Средний',
      'ielts.level.b1.score': 'IELTS 4.0 - 5.0',
      'ielts.level.b1.desc': 'Четкое общение по знакомым вопросам',
      'ielts.level.b2': 'B2 - Выше среднего',
      'ielts.level.b2.score': 'IELTS 5.5 - 6.5',
      'ielts.level.b2.desc': 'Сложные идеи и абстрактные концепции',
      'ielts.level.c1': 'C1 - Продвинутый',
      'ielts.level.c1.score': 'IELTS 7.0 - 8.0',
      'ielts.level.c1.desc': 'Беглое и спонтанное общение',
      'ielts.level.c2': 'C2 - Владение',
      'ielts.level.c2.score': 'IELTS 8.5 - 9.0',
      'ielts.level.c2.desc': 'Владение на уровне носителя языка',
      'ielts.tips': 'Советы по подготовке к IELTS',
      'ielts.tip1.time': 'Неделя 1-2',
      'ielts.tip1.title': 'ОЦЕНИТЕ СВОЙ ТЕКУЩИЙ УРОВЕНЬ',
      'ielts.tip1.desc': 'Пройдите пробный тест, чтобы определить свои сильные и слабые стороны',
      'ielts.tip2.time': 'Неделя 3-4',
      'ielts.tip2.title': 'УСТАНОВИТЕ РЕАЛИСТИЧНЫЕ ЦЕЛИ',
      'ielts.tip2.desc': 'Определите целевой балл на основе ваших требований',
      'ielts.tip3.time': 'Неделя 5-8',
      'ielts.tip3.title': 'РАЗРАБОТАЙТЕ СТРАТЕГИИ ТЕСТИРОВАНИЯ',
      'ielts.tip3.desc': 'Изучите конкретные техники для каждого раздела и регулярно практикуйтесь',
      'ielts.tip4.time': 'Неделя 9-12',
      'ielts.tip4.title': 'ПРОБНЫЕ ТЕСТЫ И ОБРАТНАЯ СВЯЗЬ',
      'ielts.tip4.desc': 'Проходите полные пробные тесты в условиях экзамена и получайте профессиональную обратную связь',
      'ielts.contact': 'Готовы начать свой путь к IELTS?',
      'ielts.contact.title': 'Получите профессиональное руководство',
      'ielts.contact.desc': 'Персональная подготовка к IELTS с экспертными советами',
      'ielts.contact.button': 'Связаться со мной',
      'ielts.contact.trial': 'Бесплатный пробный урок',
      'ielts.contact.trial.desc': '25-минутная оценка и персональный план обучения',
      'ielts.contact.trial.button': 'Записаться на пробный',
    },
    az: {
      // Hero
      'hero.title': 'Farida ilə İngilis dili',
      'hero.subtitle': 'Ümumi ingilis dili, Danışıq klubu, IELTS və s.',
      'hero.cta': 'Əlaqə',

      // Nav
      'nav.about': 'Haqqımda',
      'nav.experience': 'Təcrübə',
      'nav.courses': 'Kurslar',
      'nav.pricing': 'Qiymətlər',
      'nav.contact': 'Əlaqə',
      'nav.sc': 'Danışıq klubu',
      'nav.ielts': 'IELTS',

      // Courses
      'courses.title': 'Kurslar',
      'courses.c1.badge': 'Pulsuz',
      'courses.c1.title': 'Sınaq dərsi (25 dəq)',
      'courses.c1.p': 'Tanış olun, məqsədləri müəyyən edin, səviyyənizi yoxlayın və birlikdə plan qurun.',
      'courses.c2.title': 'Danışıq klubu (60 dəq, qrup)',
      'courses.c2.p': 'Psixologiya, elm və müasir mövzuları müzakirə edin; həqiqi söhbətlər aparın və səriştənizi artırmaq üçün geri bildirim alın',
      'courses.c2.button': 'Ətraflı bax',
      'courses.c3.badge': '1:1 üçün ən yaxşı',
      'courses.c3.title': 'Fərdi dərslər (45–60 dəq)',
      'courses.c3.p': 'Qrammatika, söz ehtiyatı və əmin danışıq üçün fərdi dərslər.',
      'courses.c4.badge': 'Populyar',
      'courses.c4.title': 'Qrup İngilis dili dərsləri (60-80 dəq)',
      'courses.c4.p': 'Bütün səviyyələr üçün mövcuddur: başlanğıc, orta-əvvəl, orta, orta-yuxarı və qabaqcıl C1.',
      'courses.c5.title': 'IELTS hazırlığı (fərdi)',
      'courses.c5.p': 'Sınaq testləri və addım-addım tapşırıqlarla bala yönəldilmiş proqram.',
      'courses.c5.button': 'Ətraflı bax',
      'courses.c6.title': 'Oxu klubu',
      'courses.c6.p': 'Maraqlı mətnlər və müzakirələr vasitəsilə oxuma anlayışını və söz ehtiyatını təkmilləşdirin.',
      'courses.c9.title': 'Danışıq dərsi 1:1 (30–60 dəq)',
      'courses.c9.p': 'İngilis dilinizi təkmilləşdirin, söz ehtiyatınızı genişləndirin və əmin danışın!',
      'courses.c7.title': 'ЕГЭ / ОГЭ по английскому языку',
      'courses.c7.p': 'Углублённый разбор формата экзамена, тренировка ключевых стратегий и повышение уровня владения языком.',
      'courses.c8.title': 'Abturyent Hazırlığı',
      'courses.c8.p': '9 və 11-ci sinif üzrə buraxılış imtahanına (DİM) ingilis dili hazırlığı – dərslər həftədə 3 dəfə, 6–12 nəfərlik qruplarda keçirilir.',

      // About
      'about.title': 'Farida haqqında',
      'about.p': 'Salam, mən Farida — yeniyetmələrə və böyüklərə məqsədlərinə çatmaqda kömək edən ingilis dili müəllimi. Dərslərim həqiqi həyat danışığına, aydın qrammatikaya və həqiqətən istifadə edəcəyiniz söz ehtiyatına yönəldilmişdir. Dərsləri dostlu, strukturlaşdırılmış və motivasiya verici edirəm.',
      'about.li1': 'Başlanğıcdan qabaqcıl səviyyəyə qədər',
      'about.li2': 'Şəxsi təhsil planı və ev tapşırıqları',
      'about.li3': 'Çevik cədvəl (onlayn)',

      // Experience
      'exp.title': 'Təcrübə',
      'exp.p': 'Mən tələbələri danışıq klubları, imtahan hazırlığı və təhsil və iş üçün gündəlik ingilis dili vasitəsilə rəhbərlik etmişəm. Tələbələr deyirlər ki, danışmaq, səhv etmək və sürətlə tərəqqi etmək üçün təhlükəsiz hiss edirlər.',
      'exp.c1.title': 'Danışıq klubu aparıcısı',
      'exp.c1.p': 'Səriştə, tələffüz və əminlik açmaq üçün həftəlik kiçik qrup sessiyaları.',
      'exp.c2.title': 'IELTS hazırlığı',
      'exp.c2.p': 'Oxuma, dinləmə, yazma və danışma üçün sübut edilmiş strategiyalarla hədəflənmiş təcrübə.',
      'exp.c3.title': 'Fərdi məşqçilik',
      'exp.c3.p': 'Səyahət, iş müsahibələri və ya xaricdə universitet təhsili üçün fərdi proqramlar.',

      // Pricing
      'pricing.title': 'Qiymətlər',
      'pricing.trial.title': 'Sınaq dərsi',
      'pricing.trial.amount': 'Pulsuz',
      'pricing.trial.note': '25 dəqiqə',
      'pricing.sc.badge': 'Populyar',
      'pricing.sc.title': 'Danışıq klubu',
      'pricing.sc.amount': '$10',
      'pricing.sc.note': 'sessiya başına (qrup)',
      'pricing.one.badge': 'Ən yaxşı dəyər',
      'pricing.one.title': 'Fərdi dərs',
      'pricing.one.amount': '$18',
      'pricing.one.note': '45 dəqiqə onlayn',
      'pricing.ielts.title': 'IELTS hazırlığı',
      'pricing.ielts.amount': '$22',
      'pricing.ielts.note': '60 dəqiqə fərdi',
      'pricing.group.title': 'Qrup İngilis dili dərsləri',
      'pricing.group.amount': '$12',
      'pricing.group.note': '60-80 dəqiqə (qrup)',
      'pricing.reading.title': 'Oxu klubu',
      'pricing.reading.amount': '$8',
      'pricing.reading.note': 'sessiya başına (qrup)',
      'pricing.speaking.title': 'Danışıq dərsi 1:1',
      'pricing.speaking.amount': '$15',
      'pricing.speaking.note': '30-60 dəqiqə',
      'pricing.note.pre': 'Fərdi plan lazımdır (paketlər və ya korporativ)?',
      'pricing.note.link': 'Mənimlə əlaqə',
      'pricing.disclaimer': '⚠️ Qiymətlər ölkə və regiona görə dəyişə bilər. Zəhmət olmasa, məkanınız üçün dəqiq qiymətlər üçün mənimlə əlaqə saxlayın.',

      // Contact
      'contact.title': 'Əlaqə',
      'contact.p': 'Sualınız var və ya sınaq dərsi üçün qeydiyyatdan keçmək istəyirsiniz? Mesaj göndərin — adətən 24 saat ərzində cavab verirəm.',
      'contact.whatsapp': 'WhatsApp',
      'contact.telegram': 'Telegram',

      // Speaking Club page
      'back': 'Geri',
      'sc.title': 'Danışıq klubu axını',
      'sc.subtitle': 'TG @AMUR_ENGLISH — Danışıq və Film klubları',
      'sc.suitable': 'Sizin üçün uyğundur',
      'sc.t5': '5dəq',
      'sc.t10': '10dəq',
      'sc.t30': '30dəq',
      'sc.left1.title': 'BAXIŞDAN SONRA TƏƏSSÜRATLƏRİN PAYLAŞILMASI',
      'sc.left1.note': 'nəyi bəyəndiniz/bəyənmədiniz, nə çətin idi və s.',
      'sc.left2.title': 'ÜNsiyyət TAPŞIRIQLARI',
      'sc.left2.note': 'suallar, reytinq hazırlamaq, problem həll etmək və s.',
      'sc.right1.title': 'TANIŞLIQ / KIÇIK SÖHBƏT',
      'sc.right1.note': 'Qısa salamlaşma',
      'sc.right2.title': 'SÖZ EHTİYATI İŞİ',
      'sc.right2.note': 'sözləri təsvirlərlə uyğunlaşdırmaq, boşluqları doldurmaq və s.',
      'sc.right3.title': 'GERİ BİLDİRİM',
      'sc.right3.note': 'səhv analizi, geri bildirim, təəssüratların mübadiləsi',

      // Telegram buttons
      'telegram.join': 'Telegram-a qoşul',

      // Alt texts and labels
      'alt.logo': 'Farida loqosu',
      'alt.profile': 'Faridanın portreti, İngilis dili müəllimi',
      'aria.language': 'Dil',
      'aria.menu': 'Menyunu dəyiş',
      'aria.theme': 'Qaranlıq rejimi dəyiş',

      // Footer
      'footer.role': 'İngilis dili müəllimi',

      // IELTS Preparation page
      'ielts.title': 'IELTS Test Strukturu və Hazırlıq',
      'ielts.subtitle': 'IELTS uğuruna sübut edilmiş strategiyalarla hərtərəfli bələdçi',
      'ielts.overview': 'IELTS Testinə Ümumi Baxış',
      'ielts.academic': 'Akademik IELTS',
      'ielts.academic.desc': 'Universitetə qəbul və peşəkar qeydiyyat üçün',
      'ielts.general': 'Ümumi Hazırlıq',
      'ielts.general.desc': 'İmmiqrasiya və iş məqsədləri üçün',
      'ielts.sections': 'IELTS Test Bölmələri',
      'ielts.listening.time': '30 dəq',
      'ielts.listening.title': 'DİNLƏMƏ',
      'ielts.listening.desc': '4 bölmə, 40 sual. Akademik və gündəlik kontekslər.',
      'ielts.listening.tip1': 'Xüsusi məlumat və əsas ideyaları dinləyin',
      'ielts.listening.tip2': 'Müxtəlif aksentlərlə (Britaniya, Avstraliya, Amerika) məşq edin',
      'ielts.listening.tip3': 'Dinləmədən əvvəl sualları oxuyun',
      'ielts.reading.time': '60 dəq',
      'ielts.reading.title': 'OXUMA',
      'ielts.reading.desc': '3 mətn, 40 sual. Akademik mətnlər və ümumi maraq məqalələri.',
      'ielts.reading.tip1': 'Vaxt idarəetməsi üçün sürətli oxuma və skan texnikaları',
      'ielts.reading.tip2': 'Açar sözləri və sinonimləri müəyyən edin',
      'ielts.reading.tip3': 'Əsl IELTS materialları ilə məşq edin',
      'ielts.writing.time': '60 dəq',
      'ielts.writing.title': 'YAZMA',
      'ielts.writing.desc': 'Tapşırıq 1: 150 söz, Tapşırıq 2: 250 söz. Akademik və ümumi formatlar.',
      'ielts.writing.tip1': 'Yazmadan əvvəl esse strukturunu planlaşdırın',
      'ielts.writing.tip2': 'Formal akademik dil və bağlayıcı sözlər istifadə edin',
      'ielts.writing.tip3': 'Müxtəlif esse növləri və qrafik təsvirləri ilə məşq edin',
      'ielts.speaking.time': '11-14 dəq',
      'ielts.speaking.title': 'DANışıQ',
      'ielts.speaking.desc': '3 hissə: Təqdimat, Fərdi uzun çıxış, İki tərəfli müzakirə.',
      'ielts.speaking.tip1': 'Təbii və sərbəst danışın',
      'ielts.speaking.tip2': 'Geniş söz ehtiyatı və qrammatik strukturlar istifadə edin',
      'ielts.speaking.tip3': 'Nümunə suallar və mövzularla məşq edin',
      'ielts.levels': 'İngilis Dili Səviyyələri və IELTS Bal Sistemi',
      'ielts.level.a1': 'A1 - Başlanğıc',
      'ielts.level.a1.score': 'IELTS 3.0',
      'ielts.level.a1.desc': 'Əsas gündəlik ifadələr və sadə cümlələr',
      'ielts.level.a2': 'A2 - Elementar',
      'ielts.level.a2.score': 'IELTS 3.5',
      'ielts.level.a2.desc': 'Tanış mövzular haqqında sadə söhbətlər',
      'ielts.level.b1': 'B1 - Orta',
      'ielts.level.b1.score': 'IELTS 4.0 - 5.0',
      'ielts.level.b1.desc': 'Tanış məsələlər üzrə aydın ünsiyyət',
      'ielts.level.b2': 'B2 - Orta-Yuxarı',
      'ielts.level.b2.score': 'IELTS 5.5 - 6.5',
      'ielts.level.b2.desc': 'Mürəkkəb ideyalar və mücərrəd anlayışlar',
      'ielts.level.c1': 'C1 - Qabaqcıl',
      'ielts.level.c1.score': 'IELTS 7.0 - 8.0',
      'ielts.level.c1.desc': 'Sərbəst və spontan ünsiyyət',
      'ielts.level.c2': 'C2 - Səriştəli',
      'ielts.level.c2.score': 'IELTS 8.5 - 9.0',
      'ielts.level.c2.desc': 'Ana dili səviyyəsində səriştə və dəqiqlik',
      'ielts.tips': 'IELTS Hazırlıq Məsləhətləri',
      'ielts.tip1.time': 'Həftə 1-2',
      'ielts.tip1.title': 'CARI SƏVİYYƏNİZİ MÜƏYYƏN EDİN',
      'ielts.tip1.desc': 'Güclü və zəif tərəflərinizi müəyyən etmək üçün sınaq testi keçin',
      'ielts.tip2.time': 'Həftə 3-4',
      'ielts.tip2.title': 'REALİSTİK MƏQSƏDLƏR QOYUN',
      'ielts.tip2.desc': 'Tələblərinizə əsaslanaraq hədəf balınızı müəyyən edin',
      'ielts.tip3.time': 'Həftə 5-8',
      'ielts.tip3.title': 'TEST STRATEJİYALARI İNKİŞAF ETDİRİN',
      'ielts.tip3.desc': 'Hər bölmə üçün xüsusi texnikalar öyrənin və müntəzəm məşq edin',
      'ielts.tip4.time': 'Həftə 9-12',
      'ielts.tip4.title': 'SINAQ TESTLƏRİ VƏ GERİ BİLDİRİM',
      'ielts.tip4.desc': 'İmtahan şəraitində tam sınaq testləri keçin və peşəkar geri bildirim alın',
      'ielts.contact': 'IELTS Səyahətinizi Başlatmağa Hazırsınız?',
      'ielts.contact.title': 'Peşəkar Rəhbərlik Alın',
      'ielts.contact.desc': 'Ekspert geri bildirimi ilə fərdi IELTS hazırlığı',
      'ielts.contact.button': 'Mənimlə Əlaqə',
      'ielts.contact.trial': 'Pulsuz Sınaq Dərsi',
      'ielts.contact.trial.desc': '25 dəqiqəlik qiymətləndirmə və fərdi təhsil planı',
      'ielts.contact.trial.button': 'Sınaq Dərsinə Qeydiyyat',
    }
  };

  const langSelect = document.getElementById('lang');
  const defaultLang = localStorage.getItem('lang') || 'en';

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descriptions = {
        en: 'English with Farida — friendly 1:1 lessons, Speaking Club, and IELTS prep. Clear, minimalist site to discover courses, prices, and contact.',
        ru: 'Английский с Фаридой — дружелюбные индивидуальные уроки, разговорный клуб и подготовка к IELTS. Четкий минималистичный сайт для изучения курсов, цен и контактов.',
        az: 'Farida ilə İngilis dili — dostlu fərdi dərslər, Danışıq klubu və IELTS hazırlığı. Kursları, qiymətləri və əlaqəni öyrənmək üçün aydın minimalistik sayt.'
      };
      
      // IELTS page specific descriptions
      if (window.location.pathname.includes('ielts-preparation')) {
        const ieltsDescriptions = {
          en: 'Comprehensive IELTS preparation guide: test structure, sections, band scores, and proven strategies for success.',
          ru: 'Полное руководство по подготовке к IELTS: структура теста, разделы, баллы и проверенные стратегии успеха.',
          az: 'IELTS hazırlığı üçün hərtərəfli bələdçi: test strukturu, bölmələr, bal sistemi və uğur üçün sübut edilmiş strategiyalar.'
        };
        if (ieltsDescriptions[lang]) {
          metaDesc.setAttribute('content', ieltsDescriptions[lang]);
        }
      } else {
        metaDesc.setAttribute('content', descriptions[lang] || descriptions.en);
      }
    }
    
    // Apply translations to all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (!value) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else if (el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', value);
      } else if (el.hasAttribute('alt')) {
        el.setAttribute('alt', value);
      } else {
        el.textContent = value;
      }
    });
    
    // Show/hide language-specific course cards
    document.querySelectorAll('.lang-specific').forEach((el) => {
      const cardLang = el.getAttribute('data-lang');
      if (cardLang === lang) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }

  applyTranslations(defaultLang);
  if (langSelect) {
    langSelect.value = defaultLang;
    langSelect.addEventListener('change', function () {
      const lang = langSelect.value;
      localStorage.setItem('lang', lang);
      applyTranslations(lang);
    });
  }
})();

// Enhanced Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      mobileMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 600) {
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }
  
  // Close mobile menu on any link tap (no dropdowns on mobile)
  const mobileNavList = document.querySelector('.mobile-nav-list');
  if (mobileNavList) {
    mobileNavList.addEventListener('click', function(e) {
      const anyLink = e.target.closest('a');
      if (!anyLink) return;
      mobileMenu.classList.remove('active');
      if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    });
  }
});

// Close dropdown if clicked outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  }
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function(e) {
    // only for mobile
    if (window.innerWidth <= 767) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('active');
    }
  });
});
