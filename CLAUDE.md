# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the 든든케어 (DunDun Care) website - a one-page landing site for 대구사랑간병협회 (Daegu Love Care Association).

### Business Context
- **Service**: Family care insurance registration, caregiver application, hospital accompaniment services
- **Key differentiator**: Professional care business code holder approved by all insurance companies
- **Target**: Insurance policyholders and insurance agents
- **Contact**: 010-5342-0200

## Tech Stack

The website will be a simple, SEO-optimized one-page site focused on conversions.

### Frontend
- HTML5 with semantic markup
- CSS3 with responsive design (mobile-first approach)
- Vanilla JavaScript for interactions
- No heavy frameworks to ensure fast loading

### Key Requirements
1. **Performance**: Page load < 2 seconds, PageSpeed Score > 90
2. **Mobile-first**: Optimized for mobile users
3. **SEO**: Strong focus on local search terms (대구 간병, 가족간병보험)
4. **Conversion**: Clear CTAs, prominent phone number

## Development Commands

```bash
# Start local development server
npx live-server

# Build for production (minify assets)
npm run build

# Test SEO and performance
npm run lighthouse
```

## Project Structure

```
/dundun
├── index.html          # Main single-page website
├── css/
│   └── style.css      # Main stylesheet  
├── js/
│   └── main.js        # Minimal JavaScript for interactions
├── images/            # Optimized images (WebP format)
└── assets/           # Fonts and other assets
```

## Key Design Elements

### Color Scheme
- Primary: `#2E7D32` (trustworthy green)
- CTA: `#FF6B35` (attention-grabbing orange)
- Background: `#FFFFFF`
- Text: `#212121`

### Typography
- Font: Noto Sans KR
- Sizes: Headers 32-40px, Body 16-18px

### Floating Elements
- Phone button (60x60px, red) - bottom right
- KakaoTalk button (50x50px, yellow) - bottom right

## SEO Keywords

Primary keywords to optimize for:
- 가족간병보험
- 가족간병등록
- 대구 간병인
- 전문간병사업자코드
- 간병보험 신청

## Important Implementation Notes

1. **Simplicity**: Keep the design clean and focused on conversions
2. **Phone number prominence**: 010-5342-0200 should be highly visible
3. **Trust signals**: Emphasize the professional business code and insurance company experience
4. **Local SEO**: Include structured data for local business
5. **Accessibility**: Ensure WCAG AA compliance

## Content Sections

The page follows this structure (single-page scroll):

1. **Hero Section**: Main value proposition with CTA
2. **Trust Building**: Why choose 든든케어
3. **Services**: 
   - Family care insurance application
   - Professional caregiver service
   - Hospital accompaniment
4. **Simple Process**: 4-step application flow
5. **Company Info**: Brief about section with blog link
6. **Footer**: Contact information

## Performance Optimization

- Use WebP images with fallbacks
- Implement lazy loading for images
- Minify CSS/JS
- Enable gzip compression
- Use proper cache headers
- Inline critical CSS

## Testing Checklist

Before deployment:
- [ ] Mobile responsiveness (320px to 2560px)
- [ ] Cross-browser testing (Chrome, Safari, Samsung Internet)
- [ ] PageSpeed Insights score > 90
- [ ] Phone number clicks work on mobile
- [ ] SEO meta tags are properly set
- [ ] Structured data validates
- [ ] Forms/CTAs are tracked
- 맥을 쓰기 때문에 npx live-server 필요 없다.