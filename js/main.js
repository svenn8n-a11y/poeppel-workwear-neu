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

    // Non-ScrollTrigger inits (sofort)
    initNavigation();
    initScrollToTop();
    initVideoPlayer();
    initModularCards();
    initFAQAccordion();

    // ALL ScrollTrigger inits nach Layout-Ready (deferred)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            initHeroAnimations();
            initStickyCards();
            initHorizontalScroll();    // Sektion 4 (pin)
            initStepAnimations();      // Sektion 6
            initPartnerSection();      // Sektion 7 (Partner)
            initTestimonialsScroll();  // Sektion 8 (Testimonials)
            initCTAAnimations();
            initScrollProgress();
            initUSPsHoneycomb();       // Sektion 10 (Wabenstruktur)
            initOnboardingTreppe();    // Sektion 12 (pin)
            initGewinnCards();
            ScrollTrigger.refresh();
        });
    });
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
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('nav-links-open');
            mobileToggle.classList.toggle('nav-toggle-active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && navLinks.classList.contains('nav-links-open')) {
                navLinks.classList.remove('nav-links-open');
                mobileToggle.classList.remove('nav-toggle-active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Close mobile menu if open
                    if (navLinks) {
                        navLinks.classList.remove('nav-links-open');
                        if (mobileToggle) mobileToggle.classList.remove('nav-toggle-active');
                    }

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
// SCROLL TO TOP BUTTON
// ========================================
function initScrollToTop() {
    const button = document.getElementById('scrollToTop');
    if (!button) return;

    // Show/hide button based on scroll position
    ScrollTrigger.create({
        start: 'top -200',
        end: 99999,
        onUpdate: (self) => {
            if (self.direction === 1 && window.scrollY > 200) {
                button.classList.add('visible');
            } else if (window.scrollY <= 200) {
                button.classList.remove('visible');
            }
        }
    });

    // Smooth scroll to top on click
    button.addEventListener('click', () => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: 0 },
            ease: 'power2.inOut'
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

    /* 
    // Video Player Logic removed - replaced by YouTube iframe
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
    */

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

    // Animate section header - REMOVED for better stability
    /*
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
    */

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

        // Animate card into view - OPTIMIZED
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 95%',  // Sehr früh triggern - flüssiger Scroll
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            // y: 50, REMOVED to prevent conflict with sticky positioning
            duration: 0.6, // Slightly faster
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
                start: 'top 90%', // Früher für flüssigeren Scroll
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20, // Reduced from 30
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

    // Ensure all cards are visible immediately (no animation hiding)
    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
    });

    // Calculate scroll distance - always use explicit calculation for reliability
    const getScrollDistance = () => {
        const viewportWidth = window.innerWidth;
        const cardCount = cards.length;
        const cardWidth = 420;
        const gap = 32;
        const leftPad = Math.max(viewportWidth / 2 - 210, 80);
        const totalTrackWidth = (cardCount * cardWidth) + ((cardCount - 1) * gap) + leftPad;
        // Mobile: weniger Excess, damit 5. Karte vollständig sichtbar ist
        const excess = viewportWidth <= 768 ? 0 : 100;
        return totalTrackWidth - viewportWidth + excess;
    };

    // GSAP ScrollTrigger handles all pinning and height
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
            }
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
                x: 50, // Changed from -50 (Left) to 50 (Right) to "fly in from right"
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.2')
            .from(visual, {
                opacity: 0,
                x: 50, // Image also from right
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.6');
    });
}

// ========================================
// PARTNER SECTION ANIMATION
// ========================================
function initPartnerSection() {
    const section = document.querySelector('.partner-section');
    if (!section) return;

    // Animate section header
    gsap.from('.partner-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Animate cards with stagger
    gsap.from('.partner-card', {
        scrollTrigger: {
            trigger: '.partner-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });
}

// ========================================
// TESTIMONIALS FEATURED QUOTE SLIDER
// ========================================
function initTestimonialsScroll() {
    const section = document.querySelector('.testimonials-section');
    if (!section) return;

    const quotes = section.querySelectorAll('.featured-quote');
    const dots = section.querySelectorAll('.quote-dot');
    const progressBar = section.querySelector('.quote-progress-bar');

    if (quotes.length === 0) return;

    let currentIndex = 0;
    let autoplayInterval;
    let progressInterval;
    const autoplayDelay = 6000; // 6 Sekunden pro Zitat
    const progressStep = 50; // Update alle 50ms

    // Switch to specific quote
    function goToQuote(index) {
        // Update quotes
        quotes.forEach((quote, i) => {
            quote.classList.toggle('active', i === index);
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentIndex = index;
        resetProgress();
    }

    // Next quote
    function nextQuote() {
        const next = (currentIndex + 1) % quotes.length;
        goToQuote(next);
    }

    // Progress bar animation
    function resetProgress() {
        if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';

            // Force reflow
            progressBar.offsetHeight;

            progressBar.style.transition = `width ${autoplayDelay}ms linear`;
            progressBar.style.width = '100%';
        }
    }

    // Start autoplay
    function startAutoplay() {
        stopAutoplay();
        resetProgress();
        autoplayInterval = setInterval(nextQuote, autoplayDelay);
    }

    // Stop autoplay
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToQuote(index);
            startAutoplay(); // Restart autoplay from new position
        });
    });

    // Pause on hover
    const slider = section.querySelector('.featured-quote-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            stopAutoplay();
            if (progressBar) {
                const computed = getComputedStyle(progressBar);
                progressBar.style.width = computed.width;
                progressBar.style.transition = 'none';
            }
        });

        slider.addEventListener('mouseleave', startAutoplay);
    }

    // Start autoplay when section comes into view
    ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: startAutoplay,
        onLeave: stopAutoplay,
        onEnterBack: startAutoplay,
        onLeaveBack: stopAutoplay
    });

    // Animate section header
    gsap.from('.testimonials-section .section-header', {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Animate featured quote icon
    gsap.from('.featured-quote-icon', {
        scrollTrigger: {
            trigger: '.featured-quote-slider',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    // Animate quote container
    gsap.from('.quote-container', {
        scrollTrigger: {
            trigger: '.featured-quote-slider',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Animate navigation dots
    gsap.from('.quote-navigation', {
        scrollTrigger: {
            trigger: '.featured-quote-slider',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
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
// MODULE CONFIGURATOR (Section 13) - Option B: Toggle-Liste / Option C: Paket-Builder
// ========================================
function initModularCards() {
    // Option B: Vertical Configurator with Toggle Switches
    const configurator = document.querySelector('.module-configurator');
    if (configurator) {
        const rows = configurator.querySelectorAll('.module-row:not(.base)');

        rows.forEach(row => {
            const toggle = row.querySelector('.toggle-switch input');

            // Click on row toggles the switch
            row.addEventListener('click', (e) => {
                if (e.target.closest('.toggle-switch')) return; // Let checkbox handle itself
                toggle.checked = !toggle.checked;
                toggle.dispatchEvent(new Event('change'));
            });

            // Toggle change handler
            toggle.addEventListener('change', () => {
                if (toggle.checked) {
                    row.classList.add('active');
                    gsap.from(row, {
                        x: -10,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                } else {
                    row.classList.remove('active');
                }
            });
        });

        // Animate section
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

        gsap.from('.module-configurator', {
            scrollTrigger: {
                trigger: '.module-configurator',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8
        });

        gsap.from('.module-row', {
            scrollTrigger: {
                trigger: '.module-configurator',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -20,
            stagger: 0.1,
            duration: 0.5
        });

        return;
    }

    // Option C: Package Builder with Progress Bars
    const builder = document.querySelector('.package-builder');
    if (builder) {
        const modules = builder.querySelectorAll('.package-module:not(.base)');
        const totalBarFill = builder.querySelector('.total-bar-fill');
        const totalPercent = builder.querySelector('.total-percent');

        function updateTotal() {
            const activeModules = builder.querySelectorAll('.package-module.active');
            let total = 0;
            activeModules.forEach(m => {
                total += parseInt(m.dataset.value) || 0;
            });

            gsap.to(totalBarFill, {
                width: total + '%',
                duration: 0.5,
                ease: 'power2.out'
            });

            totalPercent.textContent = total + '%';
        }

        modules.forEach(module => {
            module.addEventListener('click', () => {
                module.classList.toggle('active');

                const barFill = module.querySelector('.module-bar-fill');
                if (module.classList.contains('active')) {
                    gsap.to(barFill, {
                        width: '100%',
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(barFill, {
                        width: '0%',
                        duration: 0.3,
                        ease: 'power2.in'
                    });
                }

                updateTotal();
            });
        });

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

        gsap.from('.package-builder', {
            scrollTrigger: {
                trigger: '.package-builder',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8
        });

        gsap.from('.package-module', {
            scrollTrigger: {
                trigger: '.package-modules',
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -30,
            stagger: 0.1,
            duration: 0.6
        });
    }
}

// ========================================
// USPs HONEYCOMB (Section 10) - Bienenwaben mit Horizontal Scroll
// ========================================
function initUSPsHoneycomb() {
    const section = document.querySelector('.usps-section');
    if (!section) return;

    const viewport = section.querySelector('.usps-viewport');
    const track = document.getElementById('honeycombTrack');
    const cells = section.querySelectorAll('.honeycomb-cell-wrap');

    if (!track || !viewport) return;

    // Ensure cells are visible
    cells.forEach(cell => {
        cell.style.opacity = '1';
        cell.style.visibility = 'visible';
    });

    // Calculate scroll distance
    const getScrollDistance = () => {
        const viewportWidth = window.innerWidth;
        const cellCount = cells.length;
        const cellWidth = 335;  // war 268, +25%
        const overlap = 42;  // war 34, +25% (negative margin overlap)
        const leftPad = Math.max(viewportWidth / 2 - 167, 100);  // angepasst für neue Breite
        const totalTrackWidth = (cellCount * cellWidth) - ((cellCount - 1) * overlap) + leftPad;
        return totalTrackWidth - viewportWidth + 100;
    };

    // GSAP horizontal scroll with pin (same pattern as Sektion 4)
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
                const activeIndex = Math.min(
                    Math.floor(self.progress * cells.length),
                    cells.length - 1
                );
                cells.forEach((cell, i) => {
                    cell.classList.toggle('honeycomb-cell-active', i === activeIndex);
                });
            }
        }
    });

    // Header animation on enter
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
            start: 'top top',  // Start when section top meets viewport top - ensures heading is fully visible
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


    // Animated SVG path (draws along with scroll) - Desktop ODER Mobile
    const isMobile = window.innerWidth <= 768;
    const pathId = isMobile ? 'onboardingPathMobile' : 'onboardingPath';
    const path = document.getElementById(pathId);
    const dot = document.getElementById('onboardingPathDot');

    if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });
        tl.to(path, {
            strokeDashoffset: 0,
            duration: 3,
            ease: 'none'
        }, 0); // start at time 0, synced with full timeline

        // Animate the dot along the path
        if (dot) {
            // SVG viewBox is 300x300, wrapper is 300vw x 300vh
            // Convert SVG coordinates to percentage of wrapper
            const svgViewBoxW = 300;
            const svgViewBoxH = 300;

            // Set initial position at path start
            const startPoint = path.getPointAtLength(0);
            dot.style.left = (startPoint.x / svgViewBoxW * 100) + '%';
            dot.style.top = (startPoint.y / svgViewBoxH * 100) + '%';

            // Animate dot position along path synced with scroll
            tl.to({ progress: 0 }, {
                progress: 1,
                duration: 3,
                ease: 'none',
                onUpdate: function () {
                    const p = this.targets()[0].progress;
                    const point = path.getPointAtLength(p * pathLength);
                    dot.style.left = (point.x / svgViewBoxW * 100) + '%';
                    dot.style.top = (point.y / svgViewBoxH * 100) + '%';
                }
            }, 0);
        }
    }

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
    // Refresh after full load to recalculate all pin spacings
    ScrollTrigger.refresh();
    // Second refresh after short delay for any late-loading assets
    setTimeout(() => ScrollTrigger.refresh(), 500);
});

/* =========================================
   ICEBERG ANIMATION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const icebergModule = document.getElementById('icebergModule');

    if (icebergModule) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    icebergModule.classList.add('animate-in');
                    // Add floating class after initial slide-in
                    setTimeout(() => {
                        icebergModule.querySelector('.iceberg-container').classList.add('floating');
                    }, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(icebergModule);
    }
});

/* =========================================
   ROI CALCULATOR LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const rangeEmp = document.getElementById('range-emp');
    const rangeHours = document.getElementById('range-hours');

    if (rangeEmp && rangeHours) {
        const dispEmp = document.getElementById('disp-emp');
        const dispHours = document.getElementById('disp-hours');

        const resCurrent = document.getElementById('res-current');
        const resPoeppel = document.getElementById('res-poeppel');
        const resSavings = document.getElementById('res-savings');

        // Konstanten
        const HOURLY_RATE = 50; // Interner Verrechnungssatz
        const WEEKS_PER_YEAR = 52;
        const EFFICIENCY_FACTOR = 0.20; // Pöppel reduziert Kosten auf 20% (80% Ersparnis)

        // Formatierungsfunktion für Euro
        function formatEuro(num) {
            return num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
        }

        // Die Rechenfunktion
        function calculate() {
            // Werte holen
            const employees = parseInt(rangeEmp.value);
            const hours = parseFloat(rangeHours.value);

            // Anzeigen aktualisieren
            dispEmp.innerText = employees;
            dispHours.innerText = hours.toFixed(1) + " h";

            // Logik:
            // Aktuelle Kosten = Stunden * 52 Wochen * 50€
            const currentCost = hours * WEEKS_PER_YEAR * HOURLY_RATE;
            const poeppelCost = currentCost * EFFICIENCY_FACTOR;
            const savings = currentCost - poeppelCost;

            // Ergebnisse ins DOM schreiben
            resCurrent.innerText = formatEuro(currentCost);
            resPoeppel.innerText = formatEuro(poeppelCost);
            resSavings.innerText = formatEuro(savings);
        }

        // Event Listener hinzufügen
        rangeEmp.addEventListener('input', calculate);
        rangeHours.addEventListener('input', calculate);

        // Initial einmal berechnen beim Laden
        calculate();
    }
});

/* =========================================
   CALCULATOR REVEAL & CLOSE LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const revealBtn = document.getElementById('revealCalculatorBtn');
    const closeBtn = document.getElementById('closeCalculatorBtn');
    const calculatorSection = document.getElementById('calculator');
    const triggerContainer = document.querySelector('.calculator-reveal-trigger');

    // Reveal Calculator
    if (revealBtn && calculatorSection) {
        revealBtn.addEventListener('click', () => {
            calculatorSection.classList.remove('hidden-calculator');
            calculatorSection.classList.add('visible-calculator');

            // ANIMATION FIX: Bar width
            const barFill = document.querySelector('.bar-fill');
            if (barFill) {
                barFill.style.width = '0%';
                setTimeout(() => { barFill.style.width = '80%'; }, 200);
            }

            // Hide trigger button
            if (triggerContainer) {
                triggerContainer.style.opacity = '0';
                setTimeout(() => {
                    triggerContainer.style.display = 'none';
                }, 500);
            }

            // Scroll to calculator
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: calculatorSection, offsetY: 20 },
                ease: 'power2.out'
            });
        });
    }

    // Close Calculator
    if (closeBtn && calculatorSection) {
        closeBtn.addEventListener('click', () => {
            calculatorSection.classList.remove('visible-calculator');
            calculatorSection.classList.add('hidden-calculator');

            // RESET BAR
            const barFill = document.querySelector('.bar-fill');
            if (barFill) barFill.style.width = '0%';

            // Show trigger button again
            if (triggerContainer) {
                triggerContainer.style.display = 'block';
                // Small delay to allow display:block to apply before opacity fade-in
                setTimeout(() => {
                    triggerContainer.style.opacity = '1';
                }, 50);
            }

            // Scroll back up to Iceberg
            gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: "#eisberg", offsetY: 50 },
                ease: 'power2.out'
            });
        });
    }
});

/* =========================================
   TIME EFFICIENCY TIMELINE ANIMATION
   ========================================= */
function initTimeTimeline() {
    // Check if section exists
    const timeSection = document.querySelector('.time-efficiency-section');
    if (!timeSection) return;

    // Animate Timeline Steps (Staggered)
    const steps = document.querySelectorAll('.timeline-step');
    gsap.from(steps, {
        scrollTrigger: {
            trigger: '.timeline-vertical',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Animate Result Box (Scale Up)
    gsap.from('.time-result-box', {
        scrollTrigger: {
            trigger: '.time-result-box',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        ease: 'back.out(1.7)'
    });

    // Animate Solution Side (Fade In Right)
    gsap.from('.time-solution', {
        scrollTrigger: {
            trigger: '.time-solution',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.3 // Wait for timeline slightly
    });
}

// Init on Load
document.addEventListener('DOMContentLoaded', initTimeTimeline);
