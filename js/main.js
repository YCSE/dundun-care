// 든든케어 Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scroll Effect - Improved
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    let didScroll = false;
    const scrollDelta = 20; // Minimum scroll distance to trigger
    
    // Mark that scroll happened
    window.addEventListener('scroll', function() {
        didScroll = true;
    });
    
    // Check scroll position periodically for better performance
    function hasScrolled() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - scrollTop) <= scrollDelta) {
            return;
        }
        
        // Add scrolled class when scrolled down
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll with improved logic
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide header
            header.classList.add('hidden');
        } else {
            // Scrolling up - show header
            if(scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
                header.classList.remove('hidden');
            }
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Run hasScrolled() and reset didScroll status
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Phone Number Click Tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone click event (can be connected to analytics)
            console.log('Phone number clicked:', this.href);
            
            // Optional: Show confirmation on desktop
            if (window.innerWidth > 768) {
                const confirmed = confirm('전화 연결: 010-5342-0200\n통화하시겠습니까?');
                if (!confirmed) {
                    event.preventDefault();
                }
            }
        });
    });
    
    // Kakao Button Click Handler
    const kakaoButtons = document.querySelectorAll('a[href="#"]');
    
    kakaoButtons.forEach(button => {
        if (button.querySelector('svg') && button.classList.contains('bg-yellow-400')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                alert('카카오톡 상담은 준비 중입니다.\n전화 상담을 이용해 주세요: 010-5342-0200');
            });
        }
    });
    
    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.bg-white.rounded-2xl');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // Add Loading State to Buttons
    const ctaButtons = document.querySelectorAll('button, a.inline-flex');
    
    ctaButtons.forEach(button => {
        if (button.href && button.href.includes('tel:')) {
            button.addEventListener('click', function() {
                // Add loading animation temporarily
                const originalContent = this.innerHTML;
                this.innerHTML = '<span class="loading"></span> 연결 중...';
                
                setTimeout(() => {
                    this.innerHTML = originalContent;
                }, 1000);
            });
        }
    });
    
    // Mobile Menu Toggle (if needed in future)
    function createMobileMenu() {
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'md:hidden';
        mobileMenuButton.innerHTML = '☰';
        // Add mobile menu functionality here if needed
    }
    
    // Performance: Lazy Load Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Active Navigation Highlighting
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('text-green-700', 'font-semibold');
                
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-green-700', 'font-semibold');
                }
            });
        });
    }
    
    highlightActiveSection();
    
    // Add Copy Phone Number Feature
    function addCopyPhoneFeature() {
        const phoneNumbers = document.querySelectorAll('.text-orange-600');
        
        phoneNumbers.forEach(phone => {
            if (phone.textContent.includes('010-5342-0200')) {
                phone.style.cursor = 'pointer';
                phone.title = '클릭하여 번호 복사';
                
                phone.addEventListener('click', function() {
                    const phoneNumber = '010-5342-0200';
                    
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(phoneNumber).then(() => {
                            const originalText = this.textContent;
                            this.textContent = '✓ 복사되었습니다!';
                            
                            setTimeout(() => {
                                this.textContent = originalText;
                            }, 2000);
                        });
                    }
                });
            }
        });
    }
    
    addCopyPhoneFeature();
    
    // Console Easter Egg
    console.log('%c든든케어', 'color: #2E7D32; font-size: 24px; font-weight: bold;');
    console.log('%c가족간병보험 전문 ☎ 010-5342-0200', 'color: #FF6B35; font-size: 16px;');
    console.log('모든 보험회사 승인 가능한 전문간병사업자코드 보유');
    
});