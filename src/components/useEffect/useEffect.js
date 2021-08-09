import { useEffect, useState } from 'react';

/*
  [useEffect]
  - componentWillUnmount, componentDidMount, componentWillUpdate와 비슷한 기능을 한다.
  - useEffect의 첫 번째 인자는 컴포넌트가 마운트되거나 업데이트할 때 실행하고자 하는 function => componentDidMount
  - useEffect의 두 번째 인자는 []로 넘겨주면 아무 반응이 없지만, 값을 넣게되면 해당되는 값이 업데이트되면 function이 실행됨. => componentWillUpdate
*/

function Effect() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);

  // useEffect(sayHello, []);
  // useEffect(sayHello, [number]);
  useEffect(sayHello, [aNumber]);

  return (
    <>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
    </>
  );
}

export default Effect;