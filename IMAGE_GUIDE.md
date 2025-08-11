# 든든케어 웹사이트 이미지 가이드

## 📸 필요한 이미지 목록

### 1. 로고 이미지
| 위치 | 크기 | 파일명 | 설명 | data-image 속성 |
|------|------|--------|------|-----------------|
| 헤더 (데스크톱) | 200x60px | logo-header.png | 메인 로고 | logo-header |
| 헤더 (모바일) | 120x40px | logo-mobile.png | 모바일 로고 | logo-mobile |
| 푸터 | 150x45px | logo-footer.png | 푸터 로고 (흰색 버전) | logo-footer |

### 2. 히어로 섹션
| 위치 | 크기 | 파일명 | 설명 | data-image 속성 |
|------|------|--------|------|-----------------|
| 배경 이미지 | 1920x800px | hero-bg.jpg | 간병 서비스 관련 이미지 | hero-background |

### 3. 서비스 섹션 이미지
| 위치 | 크기 | 파일명 | 설명 | data-image 속성 |
|------|------|--------|------|-----------------|
| 가족간병보험 | 600x400px | service-family.jpg | 가족이 간병하는 이미지 | service-family |
| 전문간병인 | 600x400px | service-caregiver.jpg | 전문 간병인 이미지 | service-caregiver |
| 병원동행 | 600x400px | service-companion.jpg | 병원 동행 서비스 이미지 | service-companion |

### 4. 신뢰도 섹션 아이콘
| 위치 | 크기 | 파일명 | 설명 | 
|------|------|--------|------|
| 전문사업자코드 | 100x100px | icon-certificate.svg | 인증서 아이콘 |
| 경험 10년 | 100x100px | icon-experience.svg | 경험 아이콘 |
| 즉시 처리 | 100x100px | icon-fast.svg | 시계 아이콘 |

### 5. 기타 이미지
| 위치 | 크기 | 파일명 | 설명 |
|------|------|--------|------|
| OG 이미지 | 1200x630px | og-image.jpg | SNS 공유시 표시될 이미지 |
| 파비콘 | 32x32px | favicon.ico | 브라우저 탭 아이콘 |

## 🎨 이미지 제작 가이드라인

### 색상 팔레트
- 주색상: #2E7D32 (신뢰감 있는 녹색)
- 보조색상: #FF6B35 (CTA 오렌지)
- 배경: #FFFFFF (흰색)
- 텍스트: #212121 (진한 회색)

### 이미지 스타일
1. **밝고 친근한 톤** - 의료 서비스의 딱딱함을 피하고 따뜻한 느낌
2. **실제 한국인 모델** - 타겟 고객층과 동일한 연령대
3. **깔끔한 배경** - 병원이나 가정 환경
4. **고화질** - 최소 72dpi, 웹 최적화

### 파일 형식
- 사진: JPG (품질 85%)
- 로고/아이콘: PNG (투명 배경) 또는 SVG
- 애니메이션: WebP 또는 GIF

## 📁 파일 구조
```
/images
├── logos/
│   ├── logo-header.png
│   ├── logo-mobile.png
│   └── logo-footer.png
├── hero/
│   └── hero-bg.jpg
├── services/
│   ├── service-family.jpg
│   ├── service-caregiver.jpg
│   └── service-companion.jpg
├── icons/
│   ├── icon-certificate.svg
│   ├── icon-experience.svg
│   └── icon-fast.svg
└── meta/
    ├── og-image.jpg
    └── favicon.ico
```

## 🔄 이미지 교체 방법

### HTML에서 이미지 찾기
```html
<!-- data-image 속성으로 쉽게 찾기 -->
<img data-image="logo-header" src="...">
```

### JavaScript로 일괄 교체
```javascript
// 모든 placeholder 이미지를 실제 이미지로 교체
document.querySelectorAll('[data-image]').forEach(img => {
    const imageType = img.dataset.image;
    // 실제 이미지 경로로 변경
    switch(imageType) {
        case 'logo-header':
            img.src = '/images/logos/logo-header.png';
            break;
        // ... 나머지 이미지들
    }
});
```

## ⚡ 성능 최적화

### 이미지 최적화 체크리스트
- [ ] WebP 포맷 변환 (fallback 포함)
- [ ] 적절한 압축률 적용 (품질 85%)
- [ ] lazy loading 속성 추가
- [ ] srcset으로 반응형 이미지 제공
- [ ] CDN 사용 고려

### 권장 도구
- **압축**: TinyPNG, ImageOptim
- **변환**: CloudConvert, Squoosh
- **CDN**: Cloudflare, AWS CloudFront

## 📝 참고사항
- 모든 이미지는 저작권 문제가 없는 것을 사용
- 의료 관련 이미지는 신뢰감을 줄 수 있는 것으로 선택
- 고령층도 쉽게 인식할 수 있는 명확한 이미지 사용