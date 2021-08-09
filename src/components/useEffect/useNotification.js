export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission === "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          console.log(new Notification(title, options));
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  }

  return { fireNotif };
}

function Notification() {
  const { fireNotif } = useNotification("Is there anybody?", {
    body: "My Name is JMH"
  })
  return (
    <>
      <button onClick={fireNotif}>Click me!</button>
    </>
  );
}

export default Notification;