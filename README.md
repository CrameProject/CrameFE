# CrameFE

React + TypeScript + Vite 프로젝트

## 기술 스택

- **React** 18.3
- **TypeScript** 5.9
- **Vite** 5.4
- **pnpm** 10.22

## 시작하기

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
pnpm build
```

빌드 결과물은 `dist` 디렉토리에 생성됩니다.

### 미리보기

```bash
pnpm preview
```

### 린트

```bash
pnpm lint
```

### 테스트

```bash
pnpm test
```

## 프로젝트 구조

```
CrameFE/
├── src/           # 소스 코드
│   ├── App.tsx    # 메인 앱 컴포넌트
│   ├── main.tsx   # 진입점
│   └── ...
├── public/        # 정적 파일
├── index.html     # HTML 템플릿
├── vite.config.ts # Vite 설정
├── tsconfig.json  # TypeScript 설정
└── package.json   # 프로젝트 설정 및 의존성

```

## CI/CD

- **CI**: `develop` 및 `main` 브랜치에서 빌드 및 테스트 실행
- **CD**: `main` 브랜치에 push 시 자동 배포
