export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    console.log("enable prevent leave")
    window.addEventListener("beforeunload", listener);
  }
  const disablePrevent = () => {
    console.log("disable prevent leave")
    window.removeEventListener("beforeunload", listener);
  }

  return { enablePrevent, disablePrevent };
}

function PreventLeave() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <button onClick={ enablePrevent }>Protect</button>
      <button onClick={ disablePrevent }>UnProtect</button>
    </>
  );
}

export default PreventLeave;