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

// --- i18n ---
(function () {
  const translations = {
    en: {
      // Hero
      'hero.title': 'English with Farida',
      'hero.subtitle': 'General English, Speaking Club, IELTS etc.',
      'hero.cta': 'Contact',

      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.courses': 'Courses',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',

      'about.title': 'About Farida',
      'about.p': 'Hi, I’m Farida — an English tutor helping teens and adults reach their goals. My lessons focus on real-life speaking, clear grammar, and vocabulary you’ll actually use. I keep classes friendly, structured, and motivating.',
      'about.li1': 'Beginner to advanced levels',
      'about.li2': 'Personal study plan and homework',
      'about.li3': 'Flexible schedule (online)',

      'exp.title': 'Experience',
      'exp.p': 'I’ve guided learners through speaking clubs, exam prep, and day‑to‑day English for study and work. Students say they feel safe to speak, make mistakes, and improve fast.',
      'exp.c1.title': 'Speaking Club Host',
      'exp.c1.p': 'Weekly small-group sessions to unlock fluency, pronunciation, and confidence.',
      'exp.c2.title': 'IELTS Preparation',
      'exp.c2.p': 'Targeted practice for Reading, Listening, Writing, and Speaking with proven strategies.',
      'exp.c3.title': '1:1 Coaching',
      'exp.c3.p': 'Custom programs for travel, work interviews, or university study abroad.',

      'courses.title': 'Courses',
      'courses.c1.title': 'Trial Lesson (25 min)',
      'courses.c1.p': 'Meet, set goals, check your level, and build a plan together.',
      'courses.c2.badge': 'Popular',
      'courses.c2.title': 'Speaking Club (60 min, group)',
      'courses.c2.p': 'Fun topics, real conversation, and feedback to boost fluency.',
      'courses.c3.badge': 'Best for 1:1',
      'courses.c3.title': '1:1 Lessons (45–60 min)',
      'courses.c3.p': 'Tailored classes for grammar, vocabulary, and confident speaking.',
      'courses.c4.title': 'IELTS Prep (1:1)',
      'courses.c4.p': 'Score-focused program with mock tests and task-by-task guidance.',

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
      'pricing.note.pre': 'Need a custom plan (packages or corporate)?',
      'pricing.note.link': 'Contact me',

      'contact.title': 'Contact',
      'contact.p': 'Have a question or want to book a trial? Send a message — I usually reply within 24 hours.',
      'contact.whatsapp': 'WhatsApp',
      'contact.telegram': 'Telegram',

      'footer.role': 'English Tutor',
    },
    ru: {
      // Hero
      'hero.title': 'Английский с Фаридой',
      'hero.subtitle': 'Общий английский, разговорный клуб, IELTS и т.д.',
      'hero.cta': 'Связаться',

      'nav.about': 'Обо мне',
      'nav.experience': 'Опыт',
      'nav.courses': 'Курсы',
      'nav.pricing': 'Цены',
      'nav.contact': 'Контакты',

      'about.title': 'О Фариде',
      'about.p': 'Я Фарида — преподаватель английского. Помогаю подросткам и взрослым достигать целей. На уроках мы делаем упор на живую речь, понятную грамматику и полезную лексику. Атмосфера доброжелательная, занятия структурированные и мотивирующие.',
      'about.li1': 'Уровни от начального до продвинутого',
      'about.li2': 'Индивидуальный план обучения и домашние задания',
      'about.li3': 'Гибкое расписание (онлайн)',

      'exp.title': 'Опыт',
      'exp.p': 'Я веду разговорные клубы, готовлю к экзаменам и помогаю с повседневным английским для учёбы и работы. Ученики отмечают комфортную атмосферу, где не страшно говорить и легко прогрессировать.',
      'exp.c1.title': 'Ведущая разговорного клуба',
      'exp.c1.p': 'Небольшие группы каждую неделю для развития беглости, произношения и уверенности.',
      'exp.c2.title': 'Подготовка к IELTS',
      'exp.c2.p': 'Точечная практика чтения, аудирования, письма и речи с проверенными стратегиями.',
      'exp.c3.title': 'Индивидуальный коучинг',
      'exp.c3.p': 'Программы под поездки, собеседования и учёбу за рубежом.',

      'courses.title': 'Курсы',
      'courses.c1.title': 'Пробный урок (25 мин)',
      'courses.c1.p': 'Познакомимся, определим цели и уровень и составим план.',
      'courses.c2.badge': 'Популярно',
      'courses.c2.title': 'Разговорный клуб (60 мин, группа)',
      'courses.c2.p': 'Интересные темы, настоящие диалоги и обратная связь для роста беглости.',
      'courses.c3.badge': 'Лучше для 1:1',
      'courses.c3.title': 'Индивидуальные уроки (45–60 мин)',
      'courses.c3.p': 'Занятия по вашим целям: грамматика, словарь и уверенная речь.',
      'courses.c4.title': 'IELTS (индивидуально)',
      'courses.c4.p': 'Подготовка к баллу: пробные тесты и пошаговые задания.',

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
      'pricing.note.pre': 'Нужен индивидуальный план (пакеты или корпоратив)?',
      'pricing.note.link': 'Свяжитесь со мной',

      'contact.title': 'Контакты',
      'contact.p': 'Есть вопрос или хотите записаться на пробный урок? Напишите — обычно отвечаю в течение 24 часов.',
      'contact.whatsapp': 'WhatsApp',
      'contact.telegram': 'Telegram',

      'footer.role': 'Преподаватель английского',
    }
  };

  const langSelect = document.getElementById('lang');
  const defaultLang = localStorage.getItem('lang') || 'en';

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (!value) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
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


