## Class Component LifeCycle

1. Mound LifeCycle
    - constructor()
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [React Ver16.3]
    - render
    - ***componentDidMount**: 컴포넌트 생성을 마치고 첫 랜더링 작업이 끝남.
2. Update LifeCycle
    - getDerivedStateFromProps: props로 받아온 값을 state에 동기화 한다. [React Ver16.3]
    - shouldComponentUpdates: state이 변경 되었을 때, 랜더링 여부를 결정한다.
    - render
    - getSnapshotBeforeUpdate: render 메소드 호출 후, DOM에 변화를 반영하기 직전에 호출
    - ***componentDidUpdate**: DOM 업데이트가 끝난 직 후, DOM 작업이 가능하다.
3. Unmount LifeCycle
    - componentWillUnmount: 컴포넌트가 DOM에서 사라질 때
4. 예제 : src/01 

## Function Component LifeCycle

1. Alternative 1: getDerivedStateFromProps
2. After Rendering 함수 ( 상태에 변화 -> 랜더링 -> 함수 )
3. 어떤 특정 상태의 변화에 반응하는 After Rendering 함수 ( 어떤 특정 상태값이 변화 -> 랜더링 -> 함수)
4. Alternative 2: componentDidMount
5. Alternative 3: componentDidUpdate
6. Alternative 4: componentWillUnmount