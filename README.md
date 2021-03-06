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

#### 참고

> 1. props는 스마트폰의 볼륨버튼이라면 사용자가 볼륨버튼을 누르면 state는 스마트폰안에서 스스로의 상태인 볼륨이 바뀌게 해놓은 모든 조치(회로,프로그래밍 등등)라고 할 수 있습니다.
> 2. 상위 컴포넌트는 하위 컴포넌트에게 props를 통해 값을 전달해 내부의 state를 바꾸기 때문에 컴포넌트 스스로 외부에서 전달되는 props를 변경하는 것은 금지되어 있습니다. 또한 하위 컴포넌트가 상위 컴포넌트를 동작시키려면 props를 전달하는 것이 아니라 상위 컴포넌트 안에 이벤트를 심고 그 안에 setState로 값을 바꿔야 합니다.
> -- [SungMin Joo](https://youtu.be/11mTvRtXx4g?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)

### Key

#### Key가 필요한 이유

반복문을 사용하여 목록을 자동으로 생성하거나 할 때에 각각의 목록을 구분할 수 있는 **식별자**가 필요하다.

이 값을 필요로 하는 이유는, 개발자가 외부에서 사용하는 것이 아니라 React가 내부적으로 필요에 따라 요청하는 것이다.



### state(data)값을 변경할때에는 어떻게 해야하나요?

제가 좋아하는 Vue처럼 이렇게 하면 될까요?

```
this.state.name = '멈무'
```

위와 같은 코드를 실행하면 아무런 변경도 되지 않는것처럼 보입니다.
이유는 React에서 위와 같이 state를 변경하면 알아차리지 못하기 때문입니다.

React는 state를 업데이트할 때에 다음과 같이 setState를 사용합니다.

```
this.setState({name:'멈무'})
```

[참고 자료 : React와 Vue에서 똑같은 앱을 만들어보고 그 차이점에 대해 썼다.(번역글)](https://medium.com/@erwinousy/%EB%82%9C-react%EC%99%80-vue%EC%97%90%EC%84%9C-%EC%99%84%EC%A0%84%ED%9E%88-%EA%B0%99%EC%9D%80-%EC%95%B1%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%97%88%EB%8B%A4-%EC%9D%B4%EA%B2%83%EC%9D%80-%EA%B7%B8-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%B4%EB%8B%A4-5cffcbfe287f)


#### Vue를 사용한 경험에 대해 더 이야기해보겠습니다.

Vue도 setState와 비슷한 `$Set`을 사용할 일이 종종 있었습니다. 
data가 배열일때에 통상의 방식대로 변경하면 상태가 최신화 되지않아 종종 사용하곤 했습니다.

그때는 정확하게 이러한 인스턴스 메소드를 왜 사용하여야 하는지 통찰이 없이 사용하였지만 이제 조금 이해가 갑니다.

* Vue의 `$Set`은 React의 `setState`와 유사한 역할을 합니다. 
* Vue는 개발자가 data를 업데이트 할 때에 어느정도의 편의를 제공해줍니다. 이는 `setState`를 Vue에서 '어느정도 알아서 넣어주는' 것이라고 봅니다. 
* 하지만 이러한 편의도 만능이 아니며, 그렇기 때문에 Vue에서도 `$Set`같은 메소드를 제공하는 것이겠죠.

[Vue : 반응형에 대해 깊이 알아보기](https://kr.vuejs.org/v2/guide/reactivity.html)


### 성능향상

#### shouldComponentUpdate

불필요한 렌더(`render()`)를 막기위해 `shouldComponentUpdate()` 를 사용할 수 있다.

매개변수는 `newProps`, `newState`로 약속이 되어 있다. 

```
// TOC.js

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log(newProps, 'A');
    console.log(this.props.data, 'B');
  }
  ...
}
```

B에서는 **render()가 호출되지 못하였기 때문에 state.content[] 값을 그대로 갖고온다.** 하지만 newProps는 추가된 값까지 가져오는 것을 볼 수 있다. 즉, 전자는 배열값을 가져오지만 후자는 변경값을 갖고온다. 

따라서 불필요한 렌더를 막기위해 렌더가 실행되기 전 props의 변경을 체크하면 된다. 다음과 같이 false 를 리턴하면 렌더가 실행 되지 않는다.

```
shouldComponentUpdate(newProps, newState){
  if(this.props.data === newProps.data){
    return false;
  }
  return true;
}
```