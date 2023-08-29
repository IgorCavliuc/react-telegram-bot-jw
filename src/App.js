import { useEffect, useState } from "react";

const td = window.Telegram.WebApp;
const onlTg = window.Telegram;
function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    tg.ready();
    setName(WebApp.WebAppUser.username);
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
      <p>hi {name}</p>
    </div>
  );
}

export default App;
