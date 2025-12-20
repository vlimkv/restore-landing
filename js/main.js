// RE:STORE WOMAN - FEMIN Style JavaScript

// ============= PRELOADER =============
window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  const preloadLine = document.querySelector('.preload__status-line');

  // если прелоадера нет — выходим спокойно
  if (!preload) return;

  // линия — необязательная
  if (preloadLine) {
    setTimeout(() => {
      preloadLine.style.width = '100%';
    }, 100);
  }

  setTimeout(() => {
    preload.classList.add('hidden');

    setTimeout(() => {
      preload.remove(); // лучше чем display none
    }, 600);
  }, 2500);
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

    programTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class
            programTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Move background
            tabBg.style.transform = `translateX(${index * 100}%)`;

            if (index === 0) {
                // Теория
                modulWrapper.style.display = 'block';
                workoutWrapper.style.display = 'none';

                // вернуть тему по активному сабтабу (если сейчас "подарки")
                const activeSubtab = document.querySelector('.subtabs__item.active');
                const isGifts = activeSubtab && activeSubtab.getAttribute('data-modul') === 'gifts';
                programSection.classList.toggle('gift-theme', !!isGifts);

            } else {
                // Тренировки
                modulWrapper.style.display = 'none';
                workoutWrapper.style.display = 'block';

                // на тренировках красной темы быть НЕ должно
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

// ============= SMOOTH SCROLL FOR TABS =============
document.addEventListener('DOMContentLoaded', () => {
    const tabsContainers = document.querySelectorAll('.subtabs, .subtabsW');
    
    tabsContainers.forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
    });
});

// ============= FAQ ACCORDION =============
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
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

// ============= COUNTDOWN TIMER =============
document.addEventListener('DOMContentLoaded', () => {
    const timerElements = {
        days: document.querySelector('.timer__item-n:nth-of-type(1)'),
        hours: document.querySelector('.timer__item-n:nth-of-type(2)'),
        minutes: document.querySelector('.timer__item-n:nth-of-type(3)'),
        seconds: document.querySelector('.timer__item-n:nth-of-type(4)')
    };

    // Целевая дата: 25 января 2025
    const targetDate = new Date('2025-01-25T23:59:59').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Таймер закончился
            if (timerElements.days) timerElements.days.textContent = '00';
            if (timerElements.hours) timerElements.hours.textContent = '00';
            if (timerElements.minutes) timerElements.minutes.textContent = '00';
            if (timerElements.seconds) timerElements.seconds.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (timerElements.days) {
            timerElements.days.textContent = String(days).padStart(2, '0');
        }
        if (timerElements.hours) {
            timerElements.hours.textContent = String(hours).padStart(2, '0');
        }
        if (timerElements.minutes) {
            timerElements.minutes.textContent = String(minutes).padStart(2, '0');
        }
        if (timerElements.seconds) {
            timerElements.seconds.textContent = String(seconds).padStart(2, '0');
        }
    }

    // Обновляем сразу и каждую секунду
    updateTimer();
    setInterval(updateTimer, 1000);
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
            const swiper = parent.querySelector('.uroki__swiper').swiper;
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

// Таймер обратного отсчета
function initTimer() {
    // Установи дату окончания (25 декабря 2024, 23:59:59)
    const endDate = new Date('2025-12-21T23:59:59').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        // Добавляем анимацию при изменении
        if (daysEl.textContent !== String(days).padStart(2, '0')) {
            daysEl.classList.add('tick');
            setTimeout(() => daysEl.classList.remove('tick'), 300);
        }
        if (hoursEl.textContent !== String(hours).padStart(2, '0')) {
            hoursEl.classList.add('tick');
            setTimeout(() => hoursEl.classList.remove('tick'), 300);
        }
        if (minutesEl.textContent !== String(minutes).padStart(2, '0')) {
            minutesEl.classList.add('tick');
            setTimeout(() => minutesEl.classList.remove('tick'), 300);
        }
        secondsEl.classList.add('tick');
        setTimeout(() => secondsEl.classList.remove('tick'), 300);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Запуск после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    initTimer();
});

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