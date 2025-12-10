import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Brain, 
  FileText, 
  Star, 
  ArrowRight, 
  ChevronDown,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';

const ResugenLanding = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    { name: "Анна Соколова", role: "Product Manager", text: "ATS Score вырос с 42% до 87%. Получила 3 приглашения на собеседования за неделю!", rating: 5 },
    { name: "Дмитрий Волков", role: "Frontend Developer", text: "Резюме прошло скрининг в Яндексе. Экономия времени — 3 часа написания превратились в 15 минут.", rating: 5 },
    { name: "Елена Морозова", role: "HR-специалист", text: "Использую для клиентов. 80% резюме теперь проходят первичный отбор. Рекомендую!", rating: 5 }
  ];

  const features = [
    { icon: <Brain size={32} />, title: "Гибридный ИИ", desc: "YandexGPT + NLP-алгоритмы для оптимизации под российский рынок" },
    { icon: <TrendingUp size={32} />, title: "ATS Score в реальном времени", desc: "Видите, как изменения влияют на проходимость скрининга" },
    { icon: <Zap size={32} />, title: "15 минут до результата", desc: "Умные подсказки и автозаполнение экономят часы времени" },
    { icon: <Shield size={32} />, title: "Безопасность данных", desc: "Соответствие 152-ФЗ, серверы в РФ, шифрование" }
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "0₽",
      period: "навсегда",
      features: ["1 резюме", "Базовый ATS-анализ", "3 шаблона", "Экспорт в PDF"],
      cta: "Начать бесплатно",
      highlight: false
    },
    {
      name: "Про",
      price: "499₽",
      period: "месяц",
      features: ["Безлимит резюме", "Продвинутый ATS-анализ", "20+ премиум шаблонов", "Сопроводительные письма", "Приоритетная поддержка"],
      cta: "Попробовать 7 дней бесплатно",
      highlight: true
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      period: "",
      features: ["Для HR-агентств", "API-интеграция", "Белая метка", "Персональный менеджер"],
      cta: "Связаться с нами",
      highlight: false
    }
  ];

  const stats = [
    { value: "75%", label: "резюме отсеиваются ATS" },
    { value: "15 мин", label: "до готового резюме" },
    { value: "+20%", label: "средний прирост ATS Score" },
    { value: "152-ФЗ", label: "соответствие законодательству" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resugen</span>
          </div>
          
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="hover:text-purple-400 transition-colors">Возможности</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Тарифы</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Отзывы</a>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Войти
            </button>
          </div>

          <button 
            className="md:hidden text-2xl"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>
        </nav>

        {showMobileMenu && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#features" className="hover:text-purple-400">Возможности</a>
              <a href="#pricing" className="hover:text-purple-400">Тарифы</a>
              <a href="#testimonials" className="hover:text-purple-400">Отзывы</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full">
                Войти
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full text-sm">
            <Zap className="text-yellow-400" />
            <span>75% резюме отсеиваются до просмотра рекрутером</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Создайте резюме, которое <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">проходит ATS</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            ИИ-платформа для создания резюме с гарантированным прохождением автоматического скрининга. За 15 минут получите резюме с ATS Score 80+%
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              Создать резюме бесплатно
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border border-purple-400 px-8 py-4 rounded-full text-lg hover:bg-purple-500/20 transition-all">
              Посмотреть примеры
            </button>
          </div>

          <div className="pt-8 animate-bounce">
            <ChevronDown className="mx-auto text-purple-400 opacity-50" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800/50 backdrop-blur-lg py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Почему ваше резюме не работает?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="text-4xl mb-4">❌</div>
              <h3 className="text-xl font-bold mb-3">Обычное резюме</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• ATS не распознает форматирование</li>
                <li>• Отсутствуют ключевые слова</li>
                <li>• Неправильная структура данных</li>
                <li>• 3-5 часов на создание</li>
                <li>• Нет обратной связи об эффективности</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3">Резюме от Resugen</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 100% совместимо с любыми ATS</li>
                <li>• Автоматическая оптимизация ключевых слов</li>
                <li>• Валидация структуры в реальном времени</li>
                <li>• Готово за 15 минут</li>
                <li>• ATS Score с рекомендациями</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Технологии, которые работают
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Гибридный ИИ и NLP-алгоритмы для максимальной проходимости скрининга
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-4xl text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          От идеи до собеседования за 3 шага
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { step: "1", title: "Заполните базовую информацию", desc: "ИИ анализирует ваш опыт и предлагает оптимальную структуру", icon: <FileText size={24} /> },
            { step: "2", title: "Получите рекомендации ИИ", desc: "Умные подсказки по ключевым словам, формулировкам и достижениям", icon: <Brain size={24} /> },
            { step: "3", title: "Проверьте ATS Score", desc: "Видите проходимость в реальном времени и экспортируете готовое резюме", icon: <Rocket size={24} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-slate-800/30 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-3">
                  {item.title}
                  <span className="text-purple-400">{item.icon}</span>
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
            Начать создание резюме
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Истории успеха
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Тысячи специалистов уже получили приглашения на собеседования
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
              <div className="flex gap-1 mb-4 text-yellow-400 text-xl">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <p className="text-lg md:text-xl mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
              <div>
                <div className="font-bold">{testimonials[activeTestimonial].name}</div>
                <div className="text-slate-400">{testimonials[activeTestimonial].role}</div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeTestimonial ? 'bg-purple-500 w-8' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Прозрачные тарифы
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Начните бесплатно, обновитесь когда будете готовы
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border ${
                plan.highlight
                  ? 'bg-gradient-to-b from-purple-900/50 to-slate-800/50 border-purple-500 shadow-xl shadow-purple-500/20 scale-105'
                  : 'bg-slate-800/30 border-slate-700'
              }`}
            >
              {plan.highlight && (
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-center py-2 rounded-full mb-4 text-sm font-bold">
                  Самый популярный
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-slate-400"> / {plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50'
                    : 'border border-purple-400 hover:bg-purple-500/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Ваши данные под надёжной защитой
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="text-purple-400 mx-auto mb-4" size={48} />
                <h3 className="font-bold mb-2">152-ФЗ</h3>
                <p className="text-slate-400 text-sm">Полное соответствие российскому законодательству</p>
              </div>
              <div className="text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="font-bold mb-2">Серверы в РФ</h3>
                <p className="text-slate-400 text-sm">Данные не покидают территорию России</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mx-auto mb-4">🔒</div>
                <h3 className="font-bold mb-2">Шифрование</h3>
                <p className="text-slate-400 text-sm">SSL/TLS для всех соединений</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Готовы получить работу мечты?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам специалистов, которые уже увеличили свои шансы на 3x
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all hover:scale-105">
            Создать резюме за 15 минут
          </button>
          <p className="mt-4 text-sm opacity-75">Кредитная карта не требуется</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Sparkles className="text-purple-400" />
                <span>Resugen</span>
              </div>
              <p className="text-slate-400 text-sm">
                ИИ-платформа для создания ATS-оптимизированных резюме
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">Возможности</a></li>
                <li><a href="#" className="hover:text-purple-400">Тарифы</a></li>
                <li><a href="#" className="hover:text-purple-400">Примеры</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">О нас</a></li>
                <li><a href="#" className="hover:text-purple-400">Блог</a></li>
                <li><a href="#" className="hover:text-purple-400">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400">Помощь</a></li>
                <li><a href="#" className="hover:text-purple-400">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-purple-400">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 Resugen. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResugenLanding;
