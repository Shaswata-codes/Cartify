import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div>
        <h1>Message from FastAPI:</h1>
        <p>{message || 'Loading...'}</p>
    </div>
  )
  
}
export default App;