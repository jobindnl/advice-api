import axios from 'axios'
import { useState } from 'react'
import './App.css';

function App() {
  const [loading, setLoading] = useState(false)
  const getAdvice = async () => {
    try {
      setLoading(status => !status) //sets loading to true
      const message = await axios('https://api.adviceslip.com/advice')
      setLoading(status => !status) //sets loading to false
      console.log(message.data.slip.advice)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      I'm here
      {!loading ? 
        <button onClick={getAdvice}>click here for advice</button>
        :
        <p>loading</p>
      }
      
    </div>
  );
}

export default App;
