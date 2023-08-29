import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Make sure window.Telegram.WebApp is defined before using it
    if (window.Telegram && window.Telegram.WebApp) {
      const WebApp = window.Telegram.WebApp;
      const username = WebApp.WebAppUser.username;
      WebApp.showAlert(`Добро пожаловать, @${username}.`);
    }
  }, []);

  return (
    <div className="App">
      <button>Toggle</button>
    </div>
  );
}

export default App;
