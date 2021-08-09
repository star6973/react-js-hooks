import { useEffect, useState, Fragment } from 'react';

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({y: window.scrollY, x: window.scrollX});
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return state;
};

function Scroll() {
  const { y } = useScroll();
  return (
    <Fragment style={{height: "1000vh"}}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </Fragment>
  );
}

export default Scroll;