import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Настроить обработку входящих обновлений на вашем сервере.
        // Этот пример использует axios, но вы можете использовать другие библиотеки.
        const url = 'https://glitch.com/edit/#!/comfortable-efficacious-rubidium?path=package.json%3A21%3A26'; // Замените на ваш URL
        axios.post(url).then(response => {
            const newMessages = response.data.messages;
            setMessages(newMessages);
        });
    }, []);
    
    console.log(messages)

  return (
    <div className="App">
    </div>
  );
}

export default App;
