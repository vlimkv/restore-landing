// RE:STORE WOMAN - FEMIN Style JavaScript

// ============= PRELOADER (FIXED) =============
// Прелоадер исчезнет либо после загрузки, либо через 3 секунды (что наступит раньше)
let preloaderHidden = false;

function hidePreloader() {
  if (preloaderHidden) return;
  preloaderHidden = true;

  const preload = document.querySelector('.preload');
  if (!preload) return;

  preload.classList.add('hidden');
  setTimeout(() => {
    preload.remove();
  }, 600);
}

// Скрываем прелоадер при загрузке DOM (быстрее)
document.addEventListener('DOMContentLoaded', () => {
  const preload = document.querySelector('.preload');
  const preloadLine = document.querySelector('.preload__status-line');

  if (!preload) return;

  // Анимация линии загрузки
  if (preloadLine) {
    setTimeout(() => {
      preloadLine.style.width = '100%';
    }, 100);
  }

  // Скрываем через 2.5 секунды после загрузки DOM
  setTimeout(hidePreloader, 2500);
});

// Резервное скрытие через 3 секунды от начала (если что-то пошло не так)
setTimeout(hidePreloader, 3000);

// Дополнительная страховка - скрываем при полной загрузке страницы
window.addEventListener('load', () => {
  setTimeout(hidePreloader, 500);
});

// ============= SWIPER INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    
    // Want Swiper
    const wantSwiper = new Swiper('.want__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    
    navigation: {
        nextEl: '.want-arrow-next',
        prevEl: '.want-arrow-prev',
    },
    
    breakpoints: {
        320: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        },
        768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        },
    },
    });

    // Result Section Swiper
    const resultSwiper = new Swiper('.result__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.result-arrow-next',
            prevEl: '.result-arrow-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    // Uroki/Library Swiper - с показом части следующей карточки
    const urokiSwipers = document.querySelectorAll('.uroki__swiper');
    urokiSwipers.forEach(swiper => {
        new Swiper(swiper, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            grabCursor: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2.3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
            },
        });
    });

    // Gaid Swiper
    const gaidSwipers = document.querySelectorAll('.gaid__swiper');
    gaidSwipers.forEach(swiper => {
        new Swiper(swiper, {
            slidesPerView: 1,
            spaceBetween: 48,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                },
            },
        });
    });

    // Workout Swiper - показываем часть следующей карточки
    const workoutSwipers = document.querySelectorAll('.workout__swiper');
    workoutSwipers.forEach(swiper => {
        new Swiper(swiper, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            freeMode: true,
            grabCursor: true,
            breakpoints: {
                320: {
                    slidesPerView: 1.15,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4.3,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 5.5,
                    spaceBetween: 20,
                },
            },
        });
    });

    // Format Swiper
    const formatSwiper = new Swiper('.format__swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.format-arrow-next',
            prevEl: '.format-arrow-prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
        },
    });
});

// ============= PROGRAM TABS - ИСПРАВЛЕНО =============
document.addEventListener('DOMContentLoaded', () => {
  const programTabs = document.querySelectorAll('.program__tab-item');
  const modulWrapper = document.querySelector('.modul__wrapper');
  const workoutWrapper = document.querySelector('.workout__wrapper');
  const tabBg = document.querySelector('.program__tab-bg');
  const programSection = document.querySelector('.program');

  // если нет программы — выходим
  if (!programTabs.length || !modulWrapper || !workoutWrapper || !programSection) return;

  programTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      programTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tabBg) tabBg.style.transform = `translateX(${index * 100}%)`;

      if (index === 0) {
        modulWrapper.style.display = 'block';
        workoutWrapper.style.display = 'none';

        const activeSubtab = programSection.querySelector('.subtabs__item.active');
        const isGifts = activeSubtab?.getAttribute('data-modul') === 'gifts';
        programSection.classList.toggle('gift-theme', !!isGifts);
      } else {
        modulWrapper.style.display = 'none';
        workoutWrapper.style.display = 'block';
        programSection.classList.remove('gift-theme');
      }
    });
  });

    // Subtabs for modules - с темой подарков
    const subtabs = document.querySelectorAll('.subtabs__item');
    const moduls = document.querySelectorAll('.modul');

    subtabs.forEach((subtab) => {
        subtab.addEventListener('click', () => {
            const modulId = subtab.getAttribute('data-modul');
            
            // Remove active from all tabs
            subtabs.forEach(t => t.classList.remove('active'));
            subtab.classList.add('active');

            // Hide all moduls
            moduls.forEach(m => m.classList.remove('active'));
            
            // Show selected modul
            const targetModul = document.querySelector(`[data-modul-content="${modulId}"]`);
            if (targetModul) {
                // включаем
                targetModul.classList.add('active');

                // === GIFTS: restart banner animations every time ===
                if (modulId === 'gifts') {
                const oldBanner = targetModul.querySelector('.gift-banner');
                if (oldBanner) {
                    const newBanner = oldBanner.cloneNode(true); // пересоздаем DOM => анимации заново
                    oldBanner.replaceWith(newBanner);
                }
                }


                // форсим перезапуск CSS-анимации (fadeIn) каждый раз
                targetModul.style.animation = 'none';
                targetModul.offsetHeight;
                targetModul.style.animation = '';
            }

            // Toggle gift theme
            if (modulId === 'gifts') {
                programSection.classList.add('gift-theme');
            } else {
                programSection.classList.remove('gift-theme');
            }
        });
    });

    // Subtabs for workouts
    const subtabsW = document.querySelectorAll('.subtabsW__item');
    const workouts = document.querySelectorAll('.workout');

    subtabsW.forEach((subtab) => {
        subtab.addEventListener('click', () => {
            const workoutId = subtab.getAttribute('data-workout');
            
            // Remove active from all tabs
            subtabsW.forEach(t => t.classList.remove('active'));
            subtab.classList.add('active');

            // Hide all workouts
            workouts.forEach(w => w.classList.remove('active'));
            
            // Show selected workout
            const targetWorkout = document.querySelector(`[data-workout-content="${workoutId}"]`);
            if (targetWorkout) {
                targetWorkout.classList.add('active');
            }
        });
    });
});

// ============= FAQ ACCORDION =============
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach((item) => {
        const head = item.querySelector('.faq__item-head');
        
        head.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Закрываем все остальные
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Открываем текущий, если он был закрыт
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// ============= SMOOTH SCROLL (SAFE) =============
document.addEventListener('DOMContentLoaded', () => {
  // либо оставь как было, но важно: ТОЛЬКО #якоря
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // '#' или пусто — ничего не делаем
      if (!href || href === '#') return;

      // если это не #якорь — выходим (на всякий)
      if (!href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
  });
});


// ============= SCROLL ANIMATIONS =============
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                entry.target.style.visibility = 'visible';
            }
        });
    }, observerOptions);

    // Элементы для анимации
    const animateElements = document.querySelectorAll('.base__body, .want__head, .result h2, .program h2, .format h2, .about h2, .faq h2');
    
    animateElements.forEach(el => {
        el.style.visibility = 'hidden';
        observer.observe(el);
    });
});

// ============= UROKI TABS FILTERING =============
document.addEventListener('DOMContentLoaded', () => {
    const urokiTabs = document.querySelectorAll('.uroki__tabs-item');
    
    urokiTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.modul');
            const allTabs = parent.querySelectorAll('.uroki__tabs-item');
            const category = tab.getAttribute('data-tab');
            const items = parent.querySelectorAll('.modul__item');
            
            // Убираем active у всех табов
            allTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Фильтруем элементы
            items.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    item.style.display = itemCategory === category ? 'block' : 'none';
                }
            });
            
            // Обновляем swiper
            const swiperEl = parent.querySelector('.uroki__swiper');
            const sw = swiperEl?.swiper;
            if (sw) sw.update();

            if (swiper) {
                swiper.update();
            }
        });
    });
});

// ============= GAID TABS FILTERING =============
document.addEventListener('DOMContentLoaded', () => {
    const gaidTabs = document.querySelectorAll('.gaid__tabs-item');
    
    gaidTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const parent = tab.closest('.modul');
            const allTabs = parent.querySelectorAll('.gaid__tabs-item');
            const category = tab.getAttribute('data-tab');
            const items = parent.querySelectorAll('.gaid__item');
            
            // Убираем active у всех табов
            allTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Фильтруем элементы
            items.forEach(item => {
                if (category === 'all') {
                    item.style.display = 'block';
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    item.style.display = itemCategory === category ? 'block' : 'none';
                }
            });
            
            // Обновляем swiper
            const swiper = parent.querySelector('.gaid__swiper').swiper;
            if (swiper) {
                swiper.update();
            }
        });
    });
});

// ============= CONSOLE LOG =============
console.log('%cRE:STORE WOMAN', 'font-size: 24px; font-weight: bold; color: #000;');
console.log('%cby Seza Amankeldi', 'font-size: 14px; color: #666;');

function initTarifModals() {
  const buyBtns = document.querySelectorAll('.btn-buy');
  const modal = document.getElementById('buyModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal__close');
  const overlay = modal.querySelector('.modal__overlay');
  const whatsappLink = document.getElementById('whatsappLink');

  buyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const tarif = btn.getAttribute('data-tarif') || '';
      const price = btn.getAttribute('data-price') || '';

      document.getElementById('modalTarifName').textContent = tarif;
      document.getElementById('modalTarifPrice').textContent = price;

      const message = `Здравствуйте! Хочу приобрести тариф ${tarif} за ${price} ₸`;
      const whatsappUrl = `https://wa.me/77776776455?text=${encodeURIComponent(message)}`;

      if (whatsappLink) whatsappLink.href = whatsappUrl;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  overlay?.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.querySelector('.modal__content')?.addEventListener('click', (e) => e.stopPropagation());
}

// Запуск после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing modals...');
    initTarifModals();
});

// ============= COUNTDOWN TIMER (ONE) =============
document.addEventListener('DOMContentLoaded', () => {
  // поменяй под свою дату
  const targetDate = new Date('2025-12-21T23:59:59').getTime();

  const byId = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  const byClass = {
    days: document.querySelector('.timer__item-n:nth-of-type(1)'),
    hours: document.querySelector('.timer__item-n:nth-of-type(2)'),
    minutes: document.querySelector('.timer__item-n:nth-of-type(3)'),
    seconds: document.querySelector('.timer__item-n:nth-of-type(4)'),
  };

  // выбираем доступную разметку
  const els = (byId.days && byId.hours && byId.minutes && byId.seconds) ? byId : byClass;

  // если на странице вообще нет таймера — выходим
  if (!els.days || !els.hours || !els.minutes || !els.seconds) return;

  function setVal(el, val) {
    const next = String(val).padStart(2, '0');
    if (el.textContent !== next) {
      el.classList.add('tick');
      setTimeout(() => el.classList.remove('tick'), 300);
      el.textContent = next;
    }
  }

  function update() {
    const now = Date.now();
    const distance = targetDate - now;

    if (distance <= 0) {
      ['days','hours','minutes','seconds'].forEach(k => els[k].textContent = '00');
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setVal(els.days, days);
    setVal(els.hours, hours);
    setVal(els.minutes, minutes);
    setVal(els.seconds, seconds);
  }

  update();
  setInterval(update, 1000);
});