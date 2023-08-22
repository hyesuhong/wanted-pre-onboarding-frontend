# 2023 원티드 프리온보딩 프론트엔드 사전 과제

## 지원자 정보

- 이름: 홍혜수

## 실행 방법

```shell
npm install & npm start
```

## 배포된 사이트

[👉링크](https://fancy-baklava-ed3ee5.netlify.app/)

## 스택

### 언어

- <code><img height="24" width="24" src="https://cdn.simpleicons.org/typescript/3178C6" /></code> Typescript

### 라이브러리

- <code><img height="24" width="24" src="https://cdn.simpleicons.org/reactrouter/CA4245" /></code> React Router Dom
- <code><img height="24" width="24" src="https://cdn.simpleicons.org/axios/5A29E4/" /></code> Axios
- <code><img height="24" width="24" src="https://cdn.simpleicons.org/styledcomponents/DB7093" /></code> Styled Components
- Pretendard(Font)

## 프로젝트 구성

### 디렉토리

```
src
├─ components
│	└─ ui
├─ contexts
├─ hooks
├─ pages
├─ services
├─ storage
└─ styles
```

- **components**: `ui 컴포넌트`들을 모아둔 폴더입니다. 재사용 가능한 컴포넌트는 하위에 있는 ui 폴더에 넣어 구분했으며, 페이지에서 바로 넣을 수 있는 컴포넌트는 하위 폴더 없이 components 폴더 바로 아래에 위치합니다.
- **contexts**: `Context API`를 사용한 파일을 모아둡니다.
- **hooks**: `커스텀한 훅` 파일이 위치합니다.
- **pages**: 라우터에서 호출할 `페이지 컴포넌트`를 모은 폴더입니다.
- **services**: `서버와 소통`하는 부분을 담당하는 폴더입니다. constans 파일은 변하지 않는 url 등을 따로 분리하기 위해 만들었습니다.
- **storage**: `localStorage`의 사용을 담당합니다.
- **styles**: `글로벌한 CSS 스타일`을 모아둔 폴더입니다.

### 설계

- auth를 통해 받아온 토큰을 todo에서도 사용하기 때문에 Context API를 활용해 어느 컴포넌트에서든 토큰을 사용할 수 있도록 했습니다.
- axios를 사용하는 서비스 로직은 클래스를 통해 관리했습니다. 컴포넌트에서는 클래스의 함수만 호출하는 방식으로 분리했습니다.

## 고민한 부분

- sign in 과 sign up 페이지가 거의 동일한 방식에 사용하는 함수, 선언한 id 정도만 다르기 때문에, 하나의 페이지 컴포넌트에 url에 따라 다른 함수를 사용할까 싶었습니다.
  - 혹시 모를 문제가 발생할 수도 있으니, 확실한 분리를 위해 페이지를 나눠서 작업하기로 결정했습니다.
-

## 아쉬운 지점

-

---

## 추가할 수 있는 사항

- [ ] sign out
- [ ] sign out, todo delete 등 알림이 필요한 경우 확인창 보여주기
- [ ] todo get, create, update 시 로딩 화면 보여주기
- [ ] outdated token 삭제하기
