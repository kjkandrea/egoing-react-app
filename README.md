# 생활코딩 React 강의
머리 아플때 듣는 React 수업 레포지토리 입니다.

[수업 바로가기](https://www.youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)

## CommandLine

```
npx serve -s build
```

build환경에서 일회용으로(npx) 서버 실행

## 개념 정의

### Props와 State

React는 컴포넌트를 외부에서 조작할 때는 props를 내부적으로 상태를 관리할 때는 state를 사용한다.

Props와 State는 철저히 분리되어야 한다.

#### Props

* 컴포넌트를 사용하는 입장에서 중요한것 
* 컴포넌트 외부에 존재

#### State(data)

* Props의 값에 따라서 구현에 필요한 데이터
* 컴포넌트 내부에 존재

### Key

#### Key가 필요한 이유

반복문을 사용하여 목록을 자동으로 생성하거나 할 때에 각각의 목록을 구분할 수 있는 **식별자**가 필요하다.
이 값은 개발자가 외부에서 사용하는 것이 아니라 React가 내부적으로 필요에 따라 요청하는 것이다.

### state(data)값을 변경할때에는 어떻게 해야하나요?

제가 좋아하는 Vue처럼 이렇게 하면 될까요?

```
this.state.name = '멈무'
```

위와 같은 코드를 실행하면 아무런 변경도 되지 않는것처럼 보입니다.
이유는 React에서 다음과 같이 state를 변경하면 알아차리지 못하기 때문입니다.

React는 state를 업데이트할 때에 다음과 같이 setState를 사용합니다.

```
this.setState({name:'멈무'})
```

[참고 자료 : React와 Vue에서 똑같은 앱을 만들어보고 그 차이점에 대해 썼다.(번역글)](https://medium.com/@erwinousy/%EB%82%9C-react%EC%99%80-vue%EC%97%90%EC%84%9C-%EC%99%84%EC%A0%84%ED%9E%88-%EA%B0%99%EC%9D%80-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4-%EC%9D%B4%EA%B2%83%EC%9D%80-%EA%B7%B8-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%B4%EB%8B%A4-5cffcbfe287f)

#### Vue를 사용한 경험에 대해 더 이야기해보겠습니다.

Vue도 setState와 비슷한 `$Set`을 사용할 일이 종종 있었습니다. data가 배열일때 상태값이 바뀌지 않아 종종 사용하곤 했습니다.
그때는 정확하게 이러한 인스턴스 메소드를 왜 사용하여야 하는지 고찰이없이 사용하곤 했지만 이제 조금 이해가 갑니다.
Vue의 `$Set`은 React의 `setState`와 유사한 역할을 하며 Vue는 개발자가 data를 업데이트 할 때에 어느정도의 편의를 제공해줍니다. `setState`를 '어느정도 알아서 넣어주는' 것이라고 봅니다. 하지만 이러한 편의도 만능이 아니며, 그렇기 때문에 Vue에서도 `$Set`같은 메소드를 제공하는 것이겠죠.
[Vue : 반응형에 대해 깊이 알아보기](https://kr.vuejs.org/v2/guide/reactivity.html)