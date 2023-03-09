import {useState} from 'react'
import axios from 'axios'

export default function App() {
  const [text, setText] = useState("")
  const submitHandler = async (e) => {
    e.preventDefault()
    axios.post("https://ai-frontend-alpha.vercel.app/api/secret", {input: text})
  .then(resp => window.alert(resp.data.message))
  .catch(e => console.error(e))
  }
  return (
    <div>
      <h1>AI response</h1>
    <form
    onSubmit={submitHandler}
    >
      <textarea 
      className="AiInput"
      value={text}
      onChange={e => setText(e.target.value)}
      ></textarea>
      <input type="submit"/>
    </form>
    </div>
  );
}