import { useState } from "react";
import './App.css';

// Input 컴포넌트에 유효성을 참조하기 위해 validator 추가
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    // es6 문법
    // const value = event.target.value;
    const { target: { value } } = event;
    let willUpdate = true;

    console.log(value);

    if (typeof validator === "function") {
      willUpdate = validator(value);
      console.log(willUpdate);
    }

    if (willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
};

// {...name}은 spread operator로, value={name.value}, onChange={name.onChange}와 같다.
// 즉, name안에 있는 속성들을 unpack해준다.
function App() {
  const reStr = (val) => !val.includes("@");
  const maxLen = (val) => val.length <= 10;
  const name = useInput("Mr. ", reStr);
  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;