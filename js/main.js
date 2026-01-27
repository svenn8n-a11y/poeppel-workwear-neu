/**
 * Pöppel Workwear Management - Main JavaScript
 * GSAP Animations & Interactive Features
 */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all modules
    initNavigation();
    initHeroAnimations();
    initVideoPlayer();
    initStickyCards();
    initHorizontalScroll();
    initStepAnimations();
    initTestimonialsScroll();
    initCTAAnimations();
    initScrollProgress();
    initModularCards();
    initUSPsCarousel();
    initOnboardingTreppe();
    initFAQAccordion();
    initGewinnCards();
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const mobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Navbar background on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: { className: 'nav-scrolled', targets: nav }
    });

    // Mobile menu toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-links-open');
            mobileToggle.classList.toggle('nav-toggle-active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Close mobile menu if open
                    if (navLinks) navLinks.classList.remove('nav-links-open');

                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: 'power2.inOut'
                    });
                }
            }
        });
    });
}

// ========================================
// HERO ANIMATIONS
// ========================================
function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.8 })
      .from('.hero-headline', { opacity: 0, y: 50, duration: 1 }, '-=0.4')
      .from('.hero-subline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.5')
      .from('.hero-cta-group', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
      .from('.hero-scroll-indicator', { opacity: 0, duration: 0.6 }, '-=0.2');

    // Parallax effect on hero background
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.5
    });

    // Scroll indicator bounce
    gsap.to('.hero-scroll-indicator', {
        y: 10,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
    });
}

// ========================================
// VIDEO PLAYER
// ========================================
function initVideoPlayer() {
    const videoSection = document.querySelector('.video-section');
    if (!videoSection) return;

    const video = videoSection.querySelector('video');
    const playBtn = videoSection.querySelector('.video-play-btn');

    if (video && playBtn) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playBtn.classList.add('video-playing');
            } else {
                video.pause();
                playBtn.classList.remove('video-playing');
            }
        });

        video.addEventListener('ended', () => {
            playBtn.classList.remove('video-playing');
        });
    }

    // Fade in video section on scroll
    gsap.from('.video-wrapper', {
        scrollTrigger: {
            trigger: videoSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out'
    });
}

// ========================================
// STICKY CARDS (Problem Section)
// ========================================
function initStickyCards() {
    const container = document.querySelector('.sticky-cards-container');
    if (!container) return;

    const cards = gsap.utils.toArray('.sticky-card');

    // Animate section header
    gsap.from('#problem .section-header', {
        scrollTrigger: {
            trigger: '#problem',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Card stacking animations
    cards.forEach((card, i) => {
        const inner = card.querySelector('.sticky-card-inner');

        // Initial state for cards 2 and 3
        if (i > 0) {
            gsap.set(inner, {
                scale: 0.95,
                opacity: 0.8,
                transformOrigin: 'center top'
            });
        }

        // Animate card into view
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 100,
            duration: 0.8,
            ease: 'power2.out'
        });

        // Scale up effect when card becomes "active"
        if (i > 0) {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => {
                    gsap.to(inner, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                },
                onLeaveBack: () => {
                    gsap.to(inner, {
                        scale: 0.95,
                        opacity: 0.8,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });
        }

        // Card items stagger animation
        const items = card.querySelectorAll('.sticky-card-item');
        gsap.from(items, {
            scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}

// ========================================
// HORIZONTAL SCROLL (Potentiale Section) - Pinned with GSAP
// ========================================
function initHorizontalScroll() {
    const section = document.querySelector('.potentiale-section');
    if (!section) return;

    const viewport = section.querySelector('.potentiale-viewport');
    const track = document.getElementById('potentialeTrack');
    const progressBar = document.getElementById('potentialeProgressBar');
    const cards = section.querySelectorAll('.potential-card');

    if (!track || !viewport) return;

    // Calculate scroll distance
    const getScrollDistance = () => {
        return track.scrollWidth - window.innerWidth + 100;
    };

    // Set section height dynamically based on content
    const updateSectionHeight = () => {
        const scrollDistance = getScrollDistance();
        section.style.height = `${scrollDistance + window.innerHeight}px`;
    };

    updateSectionHeight();
    window.addEventListener('resize', debounce(updateSectionHeight, 100));

    // Main horizontal scroll animation
    gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollDistance()}`,
            pin: viewport,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                if (progressBar) {
                    progressBar.style.width = `${self.progress * 100}%`;
                }
            },
            onRefresh: updateSectionHeight
        }
    });

    // Header animation on enter
    gsap.from('.potentiale-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Cards stagger animation
    gsap.from(cards, {
        scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 80,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out'
    });
}

// ========================================
// STEP ANIMATIONS (Lösungsweg Section)
// ========================================
function initStepAnimations() {
    const section = document.querySelector('.loesung-section');
    if (!section) return;

    const steps = gsap.utils.toArray('.step');
    const line = section.querySelector('.steps-line');

    // Animate section header
    gsap.from('.loesung-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Animate connecting line
    if (line) {
        gsap.from(line, {
            scrollTrigger: {
                trigger: section,
                start: 'top 60%',
                end: 'bottom 60%',
                scrub: 1
            },
            scaleY: 0,
            transformOrigin: 'top center'
        });
    }

    // Animate each step
    steps.forEach((step, i) => {
        const marker = step.querySelector('.step-marker');
        const content = step.querySelector('.step-content');
        const visual = step.querySelector('.step-visual');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: step,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(marker, {
            scale: 0,
            duration: 0.5,
            ease: 'back.out(1.7)'
        })
        .from(content, {
            opacity: 0,
            x: -50,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2')
        .from(visual, {
            opacity: 0,
            x: 50,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4');
    });
}

// ========================================
// TESTIMONIALS AUTO-SCROLL
// ========================================
function initTestimonialsScroll() {
    const section = document.querySelector('.testimonials-section');
    if (!section) return;

    const track = section.querySelector('.testimonials-track');
    if (!track) return;

    // Clone testimonials for seamless loop
    const cards = track.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Calculate total width
    const totalWidth = () => track.scrollWidth / 2;

    // Infinite scroll animation
    const scrollAnim = gsap.to(track, {
        x: () => -totalWidth(),
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth())
        }
    });

    // Pause on hover
    track.addEventListener('mouseenter', () => scrollAnim.pause());
    track.addEventListener('mouseleave', () => scrollAnim.play());

    // Animate section header
    gsap.from('.testimonials-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
}

// ========================================
// CTA ANIMATIONS
// ========================================
function initCTAAnimations() {
    const ctaSections = gsap.utils.toArray('.cta-section');

    ctaSections.forEach(section => {
        gsap.from(section.querySelector('.cta-content'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 1,
            ease: 'power2.out'
        });
    });
}

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
function initScrollProgress() {
    // Create progress bar if it doesn't exist
    let progressContainer = document.querySelector('.scroll-progress');
    if (!progressContainer) {
        progressContainer = document.createElement('div');
        progressContainer.className = 'scroll-progress';
        progressContainer.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressContainer);
    }

    const progressBar = progressContainer.querySelector('.scroll-progress-bar');

    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
}

// ========================================
// MODULAR CARDS (Section 9)
// ========================================
function initModularCards() {
    const cards = document.querySelectorAll('.modular-card');
    if (!cards.length) return;

    cards.forEach(card => {
        const header = card.querySelector('.modular-card-header');

        header.addEventListener('click', () => {
            const isExpanded = card.dataset.expanded === 'true';

            // Close all other cards
            cards.forEach(c => {
                if (c !== card) {
                    c.dataset.expanded = 'false';
                }
            });

            // Toggle current card
            card.dataset.expanded = isExpanded ? 'false' : 'true';
        });
    });

    // Animate section on scroll
    gsap.from('.modular-section .section-header', {
        scrollTrigger: {
            trigger: '.modular-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from('.modular-card', {
        scrollTrigger: {
            trigger: '.modular-cards',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8
    });
}

// ========================================
// USPs CAROUSEL (Section 10) - 3D Rondell with Auto-Scroll
// ========================================
function initUSPsCarousel() {
    const section = document.querySelector('.usps-section');
    const container = document.querySelector('.usps-carousel-container');
    if (!container || !section) return;

    const carousel = container.querySelector('.usps-carousel');
    const cards = carousel.querySelectorAll('.usp-card');
    const prevBtn = document.querySelector('.usps-prev');
    const nextBtn = document.querySelector('.usps-next');
    const dotsContainer = document.getElementById('uspsDots');

    let currentIndex = 0;
    const totalCards = cards.length;
    const cardWidth = 320;
    const gap = 32;

    // Create dots for all 8 cards
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.className = 'usps-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.usps-dot');

    function updateCardStyles() {
        cards.forEach((card, i) => {
            card.classList.remove('active', 'adjacent');

            if (i === currentIndex) {
                card.classList.add('active');
            } else if (i === currentIndex - 1 || i === currentIndex + 1) {
                card.classList.add('adjacent');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, totalCards - 1));

        // Center the current card in the viewport
        const containerWidth = container.offsetWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;
        // Calculate position of current card's left edge, then subtract centerOffset to center it
        const cardPosition = currentIndex * (cardWidth + gap);
        const offset = cardPosition - centerOffset;

        gsap.to(carousel, {
            x: -offset,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Update card styles
        updateCardStyles();

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Initialize first card as active
    updateCardStyles();
    goToSlide(0);

    prevBtn?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Animate section header
    gsap.from('.usps-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Auto-scroll carousel on page scroll (rotate through all 8 cards)
    ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
        onUpdate: (self) => {
            // Progress from 0 to 1 maps to cards 0 to 7
            const targetIndex = Math.round(self.progress * (totalCards - 1));
            if (targetIndex !== currentIndex) {
                goToSlide(targetIndex);
            }
        }
    });
}

// ========================================
// ONBOARDING TREPPE (Section 12)
// ========================================
function initOnboardingTreppe() {
    const section = document.querySelector('.onboarding-section');
    if (!section) return;

    const viewport = section.querySelector('.onboarding-viewport');
    const wrapper = document.getElementById('onboardingWrapper');
    const progressFill = document.getElementById('onboardingProgress');
    const bgGrid = section.querySelector('.onboarding-bg-grid');

    if (!wrapper) return;

    // Main Timeline for Diagonal Staircase Movement
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=300%',
            scrub: 1,
            pin: viewport,
            anticipatePin: 1,
            onUpdate: (self) => {
                if (progressFill) {
                    progressFill.style.width = (self.progress * 100) + '%';
                }
            }
        }
    });

    // Diagonal staircase animation: x → y → x
    tl.to(wrapper, { x: '-100vw', duration: 1, ease: 'power2.inOut' })
      .to(wrapper, { y: '-100vh', duration: 1, ease: 'power2.inOut' })
      .to(wrapper, { x: '-200vw', duration: 1, ease: 'power2.inOut' });

    // Background Grid Animation
    if (bgGrid) {
        gsap.to(bgGrid, {
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=300%',
                scrub: 1
            },
            x: -300,
            y: -300
        });
    }
}

// ========================================
// FAQ ACCORDION (Section 15)
// ========================================
function initFAQAccordion() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isExpanded = item.dataset.expanded === 'true';

            // Close all other items
            items.forEach(i => {
                if (i !== item) {
                    i.dataset.expanded = 'false';
                    i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.dataset.expanded = isExpanded ? 'false' : 'true';
            question.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        });
    });

    // Animate section
    gsap.from('.faq-section .section-header', {
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '.faq-accordion',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6
    });
}

// ========================================
// GEWINN CARDS (Section 13)
// ========================================
function initGewinnCards() {
    const section = document.querySelector('.gewinn-section');
    if (!section) return;

    gsap.from('.gewinn-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from('.gewinn-card', {
        scrollTrigger: {
            trigger: '.gewinn-cards',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    });
}

// ========================================
// UTILITY: Debounce function
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// REFRESH SCROLL TRIGGER ON LOAD
// ========================================
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
