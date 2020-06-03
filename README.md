# 생활코딩 React 강의
머리 아플때 듣는 React 수업 레포지토리 입니다.

[수업 바로가기](https://www.youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)

## CommandLine

`npx serve -s build`

build환경에서 일회용으로(npx) 서버 실행

## 개념 정의

### Props와 State

React는 컴포넌트를 외부에서 조작할 때는 props를 내부적으로 상태를 관리할 때는 state를 사용한다.

Props와 State는 철저히 분리되어야 한다.

#### Props

* 컴포넌트를 사용하는 입장에서 중요한것 
* 컴포넌트 외부에 존재

#### State

* Props의 값에 따라서 구현에 필요한 데이터
* 컴포넌트 내부에 존재

### Key

#### Key가 필요한 이유

반복문을 사용하여 목록을 자동으로 생성하거나 할 때에 각각의 목록을 구분할 수 있는 **식별자**가 필요하다.
이 값은 개발자가 외부에서 사용하는 것이 아니라 React가 내부적으로 필요에 따라 요청하는 것이다.