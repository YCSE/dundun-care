# 든든케어 컴포넌트 구조

## 1. 레이아웃 컴포넌트

### Header
```html
<!-- 모바일/데스크톱 반응형 헤더 -->
<header class="fixed w-full bg-white z-50">
  <!-- 모바일 헤더 (md:hidden) -->
  <div class="h-[72px] flex items-center justify-between px-5">
    <img src="/logo.png" alt="든든케어" class="h-[30px]">
    <button class="font-bold">문의하기</button>
  </div>
  
  <!-- 데스크톱 헤더 (hidden md:flex) -->
  <div class="hidden md:flex h-[80px] max-w-[1280px] mx-auto">
    <img src="/logo.png" alt="든든케어" class="w-[76px]">
    <nav class="flex gap-10">
      <a href="#service">서비스</a>
      <a href="#process">이용방법</a>
      <a href="#contact">문의하기</a>
    </nav>
  </div>
</header>
```

### Footer
```html
<footer class="bg-[#17202A]">
  <div class="max-w-[1280px] mx-auto px-4">
    <!-- 연락처 정보 -->
    <div class="bg-[#202A38] rounded-2xl p-[30px]">
      <h3 class="text-white text-xl font-bold">전화/카카오 문의</h3>
      <p class="text-white">010-5342-0200</p>
      <p class="text-white">월~금 (오전9시~오후6시)</p>
    </div>
    
    <!-- 회사 정보 -->
    <div class="text-[#A1A1AA] text-xs mt-5">
      <p>대표자: [이름]</p>
      <p>사업자등록번호: [번호]</p>
      <p>주소: 대구광역시 [상세주소]</p>
    </div>
  </div>
</footer>
```

## 2. 주요 섹션 컴포넌트

### HeroSection
```html
<section class="relative h-[424px] md:h-[677px]">
  <img src="/hero-bg.jpg" alt="배경" class="w-full h-full object-cover">
  <div class="absolute inset-0 flex flex-col items-center justify-center">
    <h1 class="text-white text-[26px] md:text-[60px] font-normal">
      가족간병,
    </h1>
    <h2 class="text-white text-[26px] md:text-[60px] font-semibold">
      신청부터 서류 발급까지 한번에!
    </h2>
    <button class="bg-[#2E7D32] text-white text-xl md:text-[30px] 
                   px-5 py-4 md:px-[60px] md:py-[26px] 
                   rounded-xl mt-[30px] hover:scale-105">
      가족간병 신청하기
    </button>
  </div>
</section>
```

### ServiceSection
```html
<section class="bg-[#F3F7FB] py-[60px] md:py-[100px]">
  <div class="max-w-[1280px] mx-auto px-5">
    <h2 class="text-[26px] md:text-[40px] font-bold">
      신청내역을 확인하세요!
    </h2>
    
    <div class="bg-white rounded-2xl p-[30px] mt-[50px]">
      <h3 class="font-bold text-xl">진행현황 확인</h3>
      <p>언제든 서류를 발급받을 수 있습니다</p>
      <button class="flex items-center gap-2 px-4 py-2.5 
                     border border-black rounded-md mt-5">
        신청내역 확인하기 →
      </button>
    </div>
  </div>
</section>
```

### BenefitsSection
```html
<section class="bg-[#2E7D32] py-[60px] md:py-[100px]">
  <div class="max-w-[1280px] mx-auto px-4">
    <h2 class="text-white text-[26px] md:text-[40px] font-bold">
      든든케어를 이용하는 이유
    </h2>
    
    <div class="grid md:grid-cols-3 gap-5 mt-10">
      <!-- 카드 1 -->
      <div class="bg-[#236b26] rounded-2xl p-[30px]">
        <div class="w-[72px] h-[72px] bg-[#1a5a1d] rounded-full 
                    flex items-center justify-center">
          <svg><!-- 아이콘 --></svg>
        </div>
        <h3 class="text-white text-xl font-bold mt-4">간편하고</h3>
        <p class="text-white mt-4">
          누구나 쉽게 사용할 수 있는 간편한 신청 방법
        </p>
      </div>
      
      <!-- 카드 2, 3 동일 구조 -->
    </div>
  </div>
</section>
```

### ProcessSection
```html
<section class="bg-white py-[60px] md:py-[80px]">
  <div class="max-w-[1280px] mx-auto px-4">
    <h2 class="text-[26px] md:text-[40px] font-semibold">
      간편한 이용 절차
    </h2>
    
    <div class="grid md:grid-cols-3 gap-5 mt-[50px]">
      <!-- Step 1 -->
      <div class="bg-[#E5F2FF] rounded-2xl p-[30px]">
        <div class="bg-white w-[72px] h-[72px] rounded-full 
                    flex items-center justify-center">
          <span class="text-[#2E7D32] font-bold">1</span>
        </div>
        <h3 class="font-bold text-[26px] mt-2">1단계</h3>
        <p>가족간병 신청서 제출</p>
      </div>
      
      <!-- Step 2, 3 동일 구조 -->
    </div>
  </div>
</section>
```

## 3. 공통 컴포넌트

### FloatingButtons (플로팅 버튼)
```html
<!-- 모바일 하단 고정 CTA -->
<div class="fixed bottom-0 left-0 w-full md:hidden z-50">
  <button class="w-full h-[52px] bg-[#FF6B35] text-white font-semibold">
    가족간병 신청하기
  </button>
</div>

<!-- 데스크톱 우측 플로팅 버튼 -->
<div class="hidden md:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
  <button class="w-[82px] h-[82px] bg-[#FEE500] flex flex-col 
                 items-center justify-center">
    <img src="/kakao-icon.png" alt="카카오톡" class="w-6 h-6">
    <span class="text-sm font-bold">카카오톡</span>
  </button>
  
  <button class="w-[82px] h-[82px] bg-[#27272A] flex flex-col 
                 items-center justify-center">
    <img src="/phone-icon.png" alt="전화" class="w-6 h-6">
    <span class="text-white text-sm font-bold">전화문의</span>
  </button>
</div>
```

### CTAButton (Call-to-Action 버튼)
```html
<!-- 주요 CTA 버튼 -->
<button class="bg-[#FF6B35] text-white font-semibold 
               text-xl px-5 py-4 rounded-xl 
               hover:scale-105 transition-all duration-300 active:scale-95">
  가족간병 신청하기
</button>

<!-- 보조 CTA 버튼 -->
<button class="flex items-center gap-2 px-4 py-2.5 
               border border-black rounded-md 
               hover:bg-gray-50 transition">
  <span>자세히 보기</span>
  <svg><!-- 화살표 아이콘 --></svg>
</button>
```

### Card (정보 카드)
```html
<div class="bg-white rounded-2xl p-[30px] shadow-sm">
  <div class="w-[72px] h-[72px] bg-[#E5F2FF] rounded-full 
              flex items-center justify-center mb-4">
    <svg><!-- 아이콘 --></svg>
  </div>
  <h3 class="text-xl font-bold mb-2">제목</h3>
  <p class="text-gray-600">설명 텍스트</p>
</div>
```

## 4. 스타일 가이드

### 색상 팔레트
```css
:root {
  /* Primary Colors */
  --primary-green: #2E7D32;    /* 메인 신뢰감 있는 녹색 */
  --primary-orange: #FF6B35;   /* CTA 주목도 높은 오렌지 */
  
  /* Secondary Colors */
  --bg-light: #F3F7FB;          /* 연한 배경색 */
  --bg-dark: #17202A;           /* 어두운 배경색 */
  
  /* Text Colors */
  --text-primary: #212121;      /* 주요 텍스트 */
  --text-secondary: #71717A;    /* 보조 텍스트 */
  --text-muted: #A1A1AA;        /* 약한 텍스트 */
  
  /* Utility Colors */
  --kakao-yellow: #FEE500;      /* 카카오톡 노란색 */
  --border: #E4E4E7;            /* 테두리 색상 */
}
```

### Typography
```css
/* Headings */
.heading-xl {
  font-size: 60px;
  font-weight: 600;
  line-height: 1.2;
}

.heading-lg {
  font-size: 40px;
  font-weight: 600;
}

.heading-md {
  font-size: 26px;
  font-weight: 600;
}

/* Body Text */
.text-body {
  font-size: 16px;
  line-height: 1.75;
}

.text-small {
  font-size: 14px;
  line-height: 1.5;
}
```

### 반응형 브레이크포인트
```css
/* Mobile First Approach */
/* sm: 640px */
/* md: 768px */  /* 주요 분기점 */
/* lg: 1024px */
/* xl: 1280px */
```

## 5. 애니메이션 & 인터랙션

### Hover Effects
```css
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}

.hover-bg {
  transition: background-color 0.2s ease;
}
```

### Scroll Animations
```javascript
// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);
```

## 6. 모바일 최적화

### 터치 타겟 크기
- 최소 44x44px (iOS 가이드라인)
- 버튼 간격 최소 8px

### 모바일 네비게이션
- 하단 고정 CTA 버튼
- 햄버거 메뉴 대신 심플한 구조
- 스크롤 시 헤더 숨김/표시

## 7. SEO & 성능 최적화

### 이미지 최적화
- WebP 포맷 사용
- lazy loading 적용
- srcset으로 반응형 이미지 제공

### 메타 태그
```html
<meta name="description" content="가족간병보험 등록, 전문간병인 서비스 - 대구사랑간병협회 든든케어">
<meta property="og:title" content="든든케어 - 가족간병보험 전문">
<meta property="og:description" content="보험사 승인 전문간병사업자, 가족간병보험 신청부터 서류발급까지">
```

### 구조화된 데이터
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "든든케어",
  "description": "가족간병보험 전문 서비스",
  "telephone": "010-5342-0200",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "대구광역시"
  }
}
```