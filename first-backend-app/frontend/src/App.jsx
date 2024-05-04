import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [jokes , setJokes] = useState("");

useEffect(() => {
  axios.get('api/jokes')
  .then((response) => {
    setJokes(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
})

return (
  <>
  <h1>Jokes: {jokes.length}</h1>

  {
    jokes.map((joke,index) => (
      <div key={joke.id}>
        <h4>{joke.title}</h4>
        <p>{joke.content}</p>
      </div>
    ))
  }
  </>
)


}
export default App;