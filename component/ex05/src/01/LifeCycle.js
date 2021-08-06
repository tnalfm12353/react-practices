import React from 'react'

export default class LifeCycle extends React.Component {

    constructor() {
        super(...arguments);
        this.h3Ref = null;
        this.state = {
            color: null
        }
        console.log("[Mount 1] : constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`[Mount 2][Update 1] : getDerivedStateFromProps()`);
        return props.color !== state.color ? {color: props.color} : null;
    }

      /**
     * state가 변경 되었을때, re-rendering 여부를 결정한다.
     * 현재 데이터: this.props, this.state
     * 변경될 데이터: nextProps, nextState
     * 로 접근이 가능하다.
     * 
     * 컴포넌트 성능 최적화(튜닝)에 사용할 수 있다.
     */
       shouldComponentUpdate(nextProps, nextState) {
        console.log(`[Update 2] : shouldComponentUpdate(nextProps = ${nextProps.color}, nextState = ${nextState.color})`);
        this.props
        this.state
        return true;
    }

    /**
     * render 메소드 호출 직 후, DOM에 변화를 반영하기 직전에 호출 [v16.3]
     * 반환 값은 다음 메소드 componentDidUpdate() 세번째 파라마터(snapshot)로 전달
     * 변경 전의 props, state 접근이 가능하다.
     * 주로 업데이트 직전의 값을 참고해서 할 일이 있을 때 오버라이딩을 한다.
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`[Update 4] : getSnapshotBeforeUpdate(prevProps = ${prevProps.color}, prevState = ${prevState.color})`);
        return prevProps.color !== this.state.color ? this.h3Ref.style.backgroundColor : null;
    }
    
    /**
     * DOM 업데이트가 끝난 직 후, DOM 작업이 가능하다.
     * 변경 전의 props, state 접근이 가능하다.
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        // const hexColor = 
        // "10,20,30" -> [10,20,30] -> reduce('#' ->  '#0a' -> '#0af5' -> '#0xf5ee')
        console.log(`[Update 5] : componentDidUpdate(prevProps = ${prevProps.color}, prevState = ${prevState.color}, snapshot = ${snapshot})`);
        return true;
    }

    /**
     * 컴포넌트 생성을 마치고 첫 랜더링 작업이 끝난 후
     * 다른 자바스크립트 라이브버리 또는 프레임워크 함수 호출 또는 
     *  1. 이벤트 등록
     *  2. 타이머 설정
     *  3. 네트워크 통신
     * 등을 할 수 있다.
     */
     componentDidMount() {
        console.log(`[Mount 4] : componentDidMount()`);
    }

    /**
     * 컴포넌트를 DOM에서 제거 할 때
     * componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM 엘리먼트등을 제거(Clean-Up)
     * 작업을 한다.
     */
    componentWillUnmount() {
        console.log(`[Unmount] : componentWillUnmount()`);
    }

    
    render() {
        console.log(`[Mount 3][Update 3] : render()`);
        return(
            <h3 
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: this.state.color 
                }} 

                ref={(ref) => this.h3Ref = ref}
            />
        )
    }


}