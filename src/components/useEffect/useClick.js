import { useEffect, useRef } from 'react';

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      console.log("ComponentDidMount!!")
      element.current.addEventListener("click", onClick);
    }
    // useEffect가 호출된다는 것은 componentDidMount가 실행된 것이며, componentWillUnMount가 될 때는 위의 event를 삭제해줘야 한다.
    // 만약 useEffect의 dependency가 존재한다면, 한 번 호출된 순간 click 이벤트가 생성되고 삭제된 componentWillUnMount 상태를 받게 될 것이다.
    // 그렇지 않고 dependency가 존재하지 않다면, 매번 업데이트될 때마다 eventListener가 추가될 것이므로 좋지 않은 코드이다.

    // useEffect 안에 function을 넣으면, dependency가 존재하지 않는 한 componentDidMout, componentDidUpdate에 호출될 것임.
    // dependency가 존재한다면 componentDidMount만 호출될 것임.
    // return 받은 함수는 componentWillUnmount일 때 호출될 것임.
    return () => {
      if (element.current) { 
        console.log("componentWillUnMount!!")
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);

  if (typeof onClick !== "function") {
    return;
  }

  return element;
}

function Click() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <>
      <h1 ref={title}>Hi</h1>
    </>
  );
}

export default Click;