<img alt="Youtube" src="https://img.shields.io/badge/YouTube Clone%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>

# React를 활용한 Youtube Clone 사이트

_Youtube API를 활용 (비디오 리스트, 검색, 채널)_

Demo Link ⇒ [준비중](준비중)

---

## 🔗 목차

1. [프로젝트 개발 목적](#1-프로젝트-개발-목적)
2. [기술 스택](#2-기술-스택)
3. [프로젝트 개요](#3-프로젝트-개요)
4. [About Project](#4-About-Project)
5. [아키텍쳐](#5-아키텍쳐)
6. [프로젝트를 통해 배운 점](#6-프로젝트를-통해-배운-점)
7. [개선할 점](#7-개선할-점)

## 1. 프로젝트 개발 목적

- SPA 목적에 맞는 간단한 사이트 만들기
- React를 활용하여 하나의 완성된 App 만들기
- 공공 Api를 활용하여 api 활용 능력 기르기

## 2. 기술 스택

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />

## 3. 프로젝트 개요

![main](https://user-images.githubusercontent.com/68681344/133366638-92a49b0d-7e1f-4c79-8d67-3826f17b6d9f.PNG)

## 4. About Project

Demo Link ⇒ [준비중](준비중)

### 😀 메인 페이지

![main](https://user-images.githubusercontent.com/68681344/133366638-92a49b0d-7e1f-4c79-8d67-3826f17b6d9f.PNG)

- Youtube Api(video, channel)를 활용하여 가장 인기 있는 동영상의 썸네일, 채널, 제목 등을 표시합니다.

### 🔎 검색 기능

![image](https://user-images.githubusercontent.com/68681344/133367480-4d211c3c-26b2-43a9-8778-c74c56f1464f.png)

- 입력된 키워드를 통해 Youtube API를 사용하여 목록에 있는 동영상을 키워드에 알맞는 동영상으로 변경
  합니다.

### 🌎 상세 페이지

![image](https://user-images.githubusercontent.com/68681344/133367706-510e9d30-238b-46e7-93c9-b75b4c91e480.png)

- 선택된 비디오에 관련된 비디오 플레이어, 상세 설명, 채널 리스트 등 비디오를 클릭하게 되면 나오는 페이지 입니다.

## 5. 아키텍쳐

![image](https://user-images.githubusercontent.com/68681344/133368958-73fe1ffe-4a15-460b-832b-2f3a0dd7f20c.png)

    1. Component 구성
        - navbar(로고, 검색 기능 포함된 컴포넌트)
        - video_list(비디오 목록의 틀을 잡아주는 컴포넌트)
        - video_item(비디오에 관한 썸네일, 채널 정보 등을 보여주는 컴포넌트)
        - video_detail(비디오를 선택했을 때 나오게 되는 상세 정보들을 보여주는 컴포넌트)
        - aside_menu(사이드 바를 보여주는 컴포넌트)

    2. Service 구성
        - youtube.js(유튜브 API를 활용하는 js 파일
        popular video list, search, channel)
        - (.env를 활용하여 API_KEY 보호)

    3. 메인 페이지 구성
        - useEffect()를 활용하여 처음 페이지가 렌더링 될 때 가장 인기있는 비디오 목록
          리스트를 가져옵니다.
        - useState()를 활용하여 Youtube Api로 부터 받아온 메타 데이터를 저장하고 해당
          데이터를 video_list, video_item 컴포넌트로 전달합니다.

    4. 검색 기능 구성
        - 검색 창(input)에 원하는 키워드를 입력한 후 검색을 누르면 App 컴포넌트에 있는
          state가 변경되어 다시 비디오 목록을 렌더링 합니다.

    5. 비디오 상세 페이지 구성
        - 비디오를 클릭하게 되면 비디오 마다 가지고 있는 고유한 uuid를 활용하여 해당 비디오에
          맞는 state로 변경합니다.
        - state를 통해 iframe, 상세 설명 등을 보여줍니다.

## 6. 프로젝트를 통해 배운 점

    - state와 props의 개념과 활용 방법
    - React Hook를 활용하는 방법
    - Post Css를 활용하는 방법
    - Postman을 활용하여 API를 쉽게 사용하는 방법

## 7. 개선할 점

    - 전체적인 프로젝트를 구성함에 있어 디자인 활용 능력이 미흡한 부분이 있다는 것을 알았음
    - 단순 SPA 목적에 맞는 프로젝트로 구성하였지만 Router를 활용하여 프로젝트를 쉽게 구성할 수
      있다는 것을 알았음.
