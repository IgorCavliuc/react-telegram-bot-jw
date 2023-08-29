import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    // Make sure window.Telegram.WebApp is defined before using it
    if (window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      setName(WebApp.WebAppUser.username);
      WebApp.showAlert(`Добро пожаловать, @${name}.`);
    }
  }, []);

  return (
    <div className="App">
      <p>hi {name}</p>
    </div>
  );
}

export default App;
