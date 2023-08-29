import "./App.css";
import { useEffect } from "react";

function App() {
  var WebApp = window.Telegram.WebApp;

  WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);

  return (
    <div className="App">
      <button>Toggle</button>
    </div>
  );
}

export default App;
