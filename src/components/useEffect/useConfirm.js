export const useConfirm = (message="", onConfirm, onCancel) => {
    if (typeof onConfirm !== "function") {
        return;
    }

    if (typeof onCancel !== "function") {
        return;
    }
  
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        try {
          onCancel();
        } catch (error) {
          return;
        }
      }
    }
  
    return confirmAction;
  }
  
  function Confirm() {
    const deleteWorld = () => console.log("Deleteing the world");
    const abort = () => console.log("Aborted");
  
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return (
      <>
        <button onClick={confirmDelete}>Delete the world</button>
      </>
    );
  }
  
  export default Confirm;