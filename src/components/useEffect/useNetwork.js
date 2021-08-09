import { useEffect, useState } from 'react';

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }

  }, []);

  return status;
}

function Network() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  console.log("useNetwork ", onLine);

  return (
    <>
      <h1>{ onLine ? "Online" : "Offline" }</h1>
    </>
  );
}

export default Network;