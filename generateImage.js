// To run this code you need to install the following dependencies:
// npm install @google/generative-ai (for fallback text generation)

import { writeFile, mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { existsSync } from 'fs';

// 내부용 API 키
const GEMINI_API_KEY = "AIzaSyAqLeiced3FwFyoesDRuZQXu4RGHaoQ-ZQ";

// 지원되는 aspect ratio 목록
const VALID_ASPECT_RATIOS = ['1:1', '9:16', '16:9', '4:3', '3:4'];

async function ensureDirectoryExists(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

async function saveBinaryFile(fileName, content) {
  try {
    const filePath = resolve(fileName);
    await ensureDirectoryExists(filePath);
    await writeFile(filePath, content);
    console.log(`File ${fileName} saved successfully.`);
    return filePath;
  } catch (err) {
    console.error(`Error writing file ${fileName}:`, err);
    throw err;
  }
}

async function generateImage(prompt, options = {}) {
  const {
    numberOfImages = 1,
    outputMimeType = 'image/jpeg',
    aspectRatio = '1:1',
    outputFileName = 'generated_image',
    saveToAssets = true,  // 기본적으로 assets 폴더에 저장
    personGeneration = 'ALLOW_ADULT'  // 인물 생성 허용 옵션
  } = options;

  // aspect ratio 유효성 검사
  const validAspectRatio = VALID_ASPECT_RATIOS.includes(aspectRatio) ? aspectRatio : '1:1';

  try {
    console.log('🎨 Generating image with Imagen 4.0...');
    console.log('📝 Prompt:', prompt);
    console.log('📐 Aspect ratio:', validAspectRatio);
    
    // REST API 엔드포인트
    const MODEL_ID = 'models/imagen-4.0-generate-preview-06-06';
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/${MODEL_ID}:predict?key=${GEMINI_API_KEY}`;
    
    // 요청 본문 구성
    const requestBody = {
      instances: [
        {
          prompt: prompt
        }
      ],
      parameters: {
        outputMimeType: outputMimeType,
        sampleCount: numberOfImages,
        personGeneration: personGeneration,
        aspectRatio: validAspectRatio
      }
    };

    // API 호출
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // predictions 배열에서 이미지 추출
    if (!data.predictions || data.predictions.length === 0) {
      console.error('No predictions in response');
      return [];
    }

    const savedFiles = [];
    
    // 각 prediction에서 base64 이미지 저장
    for (let i = 0; i < data.predictions.length; i++) {
      const prediction = data.predictions[i];
      
      if (prediction.bytesBase64Encoded) {
        const buffer = Buffer.from(prediction.bytesBase64Encoded, 'base64');
        const extension = outputMimeType.split('/')[1] || 'jpeg';
        
        // 파일명 생성
        let fileName;
        if (data.predictions.length === 1) {
          fileName = `${outputFileName}.${extension}`;
        } else {
          fileName = `${outputFileName}_${i + 1}.${extension}`;
        }
        
        // assets 폴더에 저장
        if (saveToAssets) {
          fileName = `assets/${fileName}`;
        }
        
        const filePath = await saveBinaryFile(fileName, buffer);
        savedFiles.push(filePath);
        console.log(`✅ Saved image ${i + 1}/${data.predictions.length}`);
      }
    }

    if (savedFiles.length > 0) {
      console.log(`🎉 Successfully generated ${savedFiles.length} image(s)`);
    }

    return savedFiles;
  } catch (error) {
    console.error('Error generating image:', error.message);
    
    // API 키 또는 모델 접근 문제일 가능성
    if (error.message.includes('403') || error.message.includes('401')) {
      console.log('\n⚠️  Authentication issue. Please check your API key and permissions.');
    } else if (error.message.includes('404')) {
      console.log('\n⚠️  Model not found. The Imagen 4.0 API might not be available yet.');
    }
    
    throw error;
  }
}

// 든든케어 이미지 생성 함수들
async function generateDundunCareHeroImage() {
  console.log('🏥 Generating 든든케어 Hero Image (16:9)...');
  const heroImage = await generateImage(
    'Warm and caring Korean elderly care scene, professional Korean female caregiver in medical uniform gently assisting elderly Korean grandmother with walking in bright modern Korean hospital corridor, family members (middle-aged Korean daughter) watching with relief and gratitude, soft natural lighting through windows, clean medical environment, warm color tones suggesting trust and care, photorealistic style, professional healthcare setting in Korea',
    {
      aspectRatio: '16:9',
      outputFileName: 'hero-background',
      saveToAssets: true
    }
  );
  return heroImage;
}

async function generateServiceImages() {
  const serviceImages = [];
  
  // 1. 가족간병보험 신청 이미지 - 가족간의 사랑 표현
  console.log('📋 Generating Family Care Insurance Image (4:3)...');
  const insuranceImage = await generateImage(
    'Heartwarming photo of Korean multi-generational family showing love and care, adult daughter holding hands with elderly mother sitting together on comfortable sofa, son and grandchildren nearby showing affection, warm home interior with family photos on walls, expressing deep family bonds and love, soft natural lighting through window, genuine emotional connection, photorealistic style',
    {
      aspectRatio: '4:3',
      outputFileName: 'service-insurance-v2',
      saveToAssets: true
    }
  );
  serviceImages.push(insuranceImage);
  
  // 2. 전문 간병인 서비스 이미지 - 경험많고 따뜻한 간병인 (의료인 아님)
  console.log('👩‍⚕️ Generating Professional Caregiver Service Image (4:3)...');
  const caregiverImage = await generateImage(
    'Experienced and warm Korean female caregiver (not medical professional) in casual comfortable clothing helping elderly Korean woman with daily activities, assisting with walking support in bright living room, showing genuine care and patience, NO medical equipment, NO nurse uniform, friendly everyday helper appearance, warm smile and kind expression, home care setting not hospital, photorealistic style',
    {
      aspectRatio: '4:3',
      outputFileName: 'service-caregiver-v2',
      saveToAssets: true
    }
  );
  serviceImages.push(caregiverImage);
  
  // 3. 병원 동행 서비스 이미지 - 한국 병원
  console.log('🚶 Generating Hospital Accompaniment Service Image (4:3)...');
  const accompanimentImage = await generateImage(
    'Photo of modern Korean hospital exterior or entrance, clear Korean hospital signage with Korean text visible (병원), typical Korean medical facility architecture, patients and visitors entering building, clean and well-maintained Korean healthcare facility in urban setting, daytime with clear sky, recognizable as Korean hospital, photorealistic style',
    {
      aspectRatio: '4:3',
      outputFileName: 'service-accompaniment-v2',
      saveToAssets: true
    }
  );
  serviceImages.push(accompanimentImage);
  
  return serviceImages;
}

async function generateTrustImages() {
  const trustImages = [];
  
  // 신뢰 섹션 이미지 - 전문성
  console.log('🏆 Generating Trust/Professional Image (4:3)...');
  const professionalImage = await generateImage(
    'Professional Korean care team meeting in modern conference room, displaying insurance company certifications and professional licenses on wall, team of 4-5 Korean healthcare professionals in business attire reviewing care plans, charts and documents on table, conveying expertise and reliability, bright Korean office setting, photorealistic style',
    {
      aspectRatio: '4:3',
      outputFileName: 'trust-professional',
      saveToAssets: true
    }
  );
  trustImages.push(professionalImage);
  
  // 회사 소개 이미지
  console.log('🏢 Generating Company Image (4:3)...');
  const companyImage = await generateImage(
    'Modern Korean healthcare company office reception area with 든든케어 branding, clean and professional interior design, reception desk with friendly Korean staff member, comfortable waiting area with elderly Korean clients being greeted warmly, certificates and awards on walls, bright and welcoming atmosphere, photorealistic style',
    {
      aspectRatio: '4:3',
      outputFileName: 'company-office',
      saveToAssets: true
    }
  );
  trustImages.push(companyImage);
  
  return trustImages;
}

// 든든케어 웹사이트 이미지 생성 메인 함수
async function main() {
  try {
    console.log('🚀 Starting 든든케어 website image generation...\n');
    console.log('📍 Generating images for Daegu Love Care Association website\n');
    
    // Hero 이미지 생성 (16:9)
    const heroImage = await generateDundunCareHeroImage();
    console.log('✅ Hero image generated:', heroImage, '\n');
    
    // 서비스 이미지 생성 (4:3)
    console.log('🔧 Generating Service Images...\n');
    const serviceImages = await generateServiceImages();
    console.log('✅ Service images generated:', serviceImages, '\n');
    
    // 신뢰 구축 섹션 이미지 생성 (4:3)
    console.log('🤝 Generating Trust Building Images...\n');
    const trustImages = await generateTrustImages();
    console.log('✅ Trust images generated:', trustImages, '\n');
    
    console.log('🎉 All 든든케어 website images generated successfully!');
    console.log('📁 Images saved to: /Users/roy/Documents/Development/dundun/assets/');
    console.log('\n📌 Generated images:');
    console.log('  - Hero Background (16:9): hero-background.jpeg');
    console.log('  - Insurance Service (4:3): service-insurance.jpeg');
    console.log('  - Caregiver Service (4:3): service-caregiver.jpeg');
    console.log('  - Accompaniment Service (4:3): service-accompaniment.jpeg');
    console.log('  - Professional Trust (4:3): trust-professional.jpeg');
    console.log('  - Company Office (4:3): company-office.jpeg');
    
  } catch (error) {
    console.error('Failed to generate 든든케어 images:', error);
  }
}

// 모듈로 export
export { generateImage, saveBinaryFile };

// 직접 실행시 예제 실행
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}