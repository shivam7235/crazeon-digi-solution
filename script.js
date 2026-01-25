// 🔥 CRAZEON DIGI SOLUTION - PERFECT JAVASCRIPT (All Pages Compatible)
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 Crazeon Digi Solution - Script Loaded Perfectly!');

    // 1. AOS ANIMATION INIT
    if (AOS) {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // 2. NAVBAR SCROLL EFFECT (Glassmorphism)
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(25px)';
                navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }
        }
    });

    // 3. PRICING TABS - MAIN FIX 🔥
    function initPricingTabs() {
        const tabs = document.querySelectorAll('[data-tab]');
        const sections = document.querySelectorAll('.pricing-section');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = this.getAttribute('data-tab');
                
                // Reset all tabs
                tabs.forEach(t => {
                    t.classList.remove('active-pricing-tab');
                    t.style.transform = 'scale(1)';
                });
                
                // Reset all sections
                sections.forEach(s => {
                    s.classList.remove('active');
                    s.style.display = 'none';
                });
                
                // Activate clicked tab
                this.classList.add('active-pricing-tab');
                this.style.transform = 'scale(1.05)';
                
                // Show target section
                const targetSection = document.getElementById(target + '-pricing');
                if (targetSection) {
                    targetSection.style.display = 'block';
                    targetSection.classList.add('active');
                    setTimeout(() => {
                        targetSection.style.opacity = '1';
                        targetSection.style.transform = 'translateY(0)';
                    }, 100);
                }
            });
        });

        // Show first tab by default
        if (tabs[0]) {
            tabs[0].click();
        }
    }

    initPricingTabs();

    // 4. SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. COUNTER ANIMATION (247+, ₹2.4Cr+)
    function animateCounters() {
        const counters = document.querySelectorAll('.h1, .h2, .h3, .h4');
        counters.forEach(counter => {
            if (counter.classList.contains('animated')) return;
            
            const target = parseFloat(counter.getAttribute('data-target') || counter.textContent.replace(/[^\d.]/g, ''));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString() + (counter.textContent.includes('₹') ? '₹' : '') + (counter.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + (counter.textContent.includes('₹') ? '₹' : '') + (counter.textContent.includes('+') ? '+' : '');
                    counter.classList.add('animated');
                }
            };
            
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                updateCounter();
            }
        });
    }

    // Trigger counters on scroll
    let countersTriggered = false;
    window.addEventListener('scroll', function() {
        if (!countersTriggered) {
            animateCounters();
            countersTriggered = true;
        }
    });

    // 6. FORM ENHANCEMENT
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = '🚀 Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = '✅ Enquiry Sent! <i class="fas fa-check ms-2"></i>';
                    setTimeout(() => {
                        btn.innerHTML = 'Send Enquiry <i class="fas fa-paper-plane ms-2"></i>';
                        btn.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    });

    // 7. WHATSAPP PERSONALIZATION
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        const pageName = document.title.split(' | ')[0];
        let text = link.getAttribute('href').match(/text=([^&]+)/);
        if (text) {
            text = decodeURIComponent(text[1]);
            link.setAttribute('href', link.getAttribute('href').replace(text, `Hi Crazeon! ${pageName} ke baare mein jaanna hai`));
        }
    });

    // 8. SERVICE CARDS HOVER EFFECT
    document.querySelectorAll('.service-card, .pricing-card, .contact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 9. MOBILE NAVBAR COLLAPSE
    document.querySelectorAll('.navbar-toggler').forEach(toggler => {
        toggler.addEventListener('click', function() {
            setTimeout(() => {
                document.querySelector('.navbar-collapse').classList.remove('show');
            }, 300);
        });
    });

    // 10. BACK TO TOP BUTTON (Auto)
    let backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 90px;
        width: 50px;
        height: 50px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 9998;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 20px rgba(59,130,246,0.4);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 11. PRICING SECTION SHOW/HIDE CSS (CRITICAL FIX)
    const style = document.createElement('style');
    style.textContent = `
        .pricing-section {
            display: none !important;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pricing-section.active {
            display: block !important;
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .pricing-tabs .btn {
            transition: all 0.3s ease !important;
        }
        .pricing-tabs .active-pricing-tab {
            background: linear-gradient(45deg, #3b82f6, #1d4ed8) !important;
            color: white !important;
            border-color: #3b82f6 !important;
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(59,130,246,0.4);
        }
        .back-to-top:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(59,130,246,0.5);
        }
    `;
    document.head.appendChild(style);

    // 12. PERFECT LOAD
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        console.log('✅ Crazeon Website - All Features Active!');
    });

});
