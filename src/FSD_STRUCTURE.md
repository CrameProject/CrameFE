# FSD (Feature-Sliced Design) 폴더 구조 가이드

## 📁 전체 구조

```
src/
├── app/          # 애플리케이션 초기화 및 설정
├── pages/        # 페이지 컴포넌트
├── widgets/      # 독립적인 UI 블록
├── features/     # 비즈니스 기능
├── entities/     # 비즈니스 엔티티
└── shared/       # 공유 리소스
    ├── ui/       # 공통 UI 컴포넌트
    ├── lib/      # 유틸리티 함수 및 라이브러리
    ├── api/      # API 설정
    └── config/   # 설정 파일
```

## 🔄 레이어 간 의존성 규칙

```
app
  ↓
pages
  ↓
widgets
  ↓
features
  ↓
entities
  ↓
shared
```

**규칙:**
- 상위 레이어는 하위 레이어를 import할 수 있음
- 하위 레이어는 상위 레이어를 import하면 안 됨
- 같은 레이어 내에서는 import 가능 (의존성 최소화 권장)

## 📋 각 레이어별 세부 설명

### 1. app/ (애플리케이션 레이어)
- **역할**: 애플리케이션의 진입점 및 전역 설정
- **포함 내용**: 프로바이더, 라우터, 전역 스타일, 전역 상태 관리
- **예시**: `App.tsx`, `providers.tsx`, `router.tsx`

### 2. pages/ (페이지 레이어)
- **역할**: 라우팅과 연결되는 페이지 컴포넌트
- **포함 내용**: 페이지별 컴포넌트
- **예시**: `HomePage/`, `AboutPage/`, `ProductPage/`

### 3. widgets/ (위젯 레이어)
- **역할**: 독립적이고 복합적인 UI 블록
- **포함 내용**: 여러 features와 entities를 조합한 UI 블록
- **예시**: `Header/`, `Sidebar/`, `ProductCard/`, `UserProfile/`

### 4. features/ (기능 레이어)
- **역할**: 사용자와의 상호작용을 처리하는 비즈니스 기능
- **포함 내용**: UI 컴포넌트, 비즈니스 로직, API 호출
- **예시**: `auth/`, `product-search/`, `add-to-cart/`, `like-product/`

### 5. entities/ (엔티티 레이어)
- **역할**: 비즈니스 도메인의 핵심 개념
- **포함 내용**: 엔티티 타입, UI 컴포넌트, API 호출
- **예시**: `user/`, `product/`, `order/`, `category/`

### 6. shared/ (공유 레이어)
- **역할**: 프로젝트 전반에서 재사용되는 리소스
- **포함 내용**: 
  - `ui/`: 공통 UI 컴포넌트 (Button, Input 등)
  - `lib/`: 유틸리티 함수, 커스텀 훅, 상수
  - `api/`: API 인스턴스, 인터셉터
  - `config/`: 설정 파일

## 📝 각 슬라이스(폴더) 내부 구조

각 레이어의 슬라이스(예: `features/auth/`)는 다음과 같은 구조를 가질 수 있습니다:

```
feature-name/
├── ui/           # UI 컴포넌트
├── model/        # 비즈니스 로직, 상태 관리
├── api/          # API 호출
├── lib/          # 유틸리티 함수
└── index.ts      # Public API (export)
```

**참고**: 모든 폴더가 필수는 아니며, 필요한 것만 사용합니다.

## ✅ Best Practices

1. **Public API**: 각 슬라이스는 `index.ts`를 통해 Public API를 제공
2. **의존성 최소화**: 같은 레이어 내 import는 최소화
3. **명확한 책임**: 각 슬라이스는 하나의 명확한 책임만 가짐
4. **재사용성**: shared 레이어는 비즈니스 로직과 무관하게 작성
5. **타입 안정성**: TypeScript를 활용하여 타입 안정성 확보

## 🔗 참고 자료

- [Feature-Sliced Design 공식 문서](https://feature-sliced.design/)
- [FSD GitHub](https://github.com/feature-sliced/documentation)
