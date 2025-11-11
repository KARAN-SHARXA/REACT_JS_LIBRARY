import React from 'react'
import Header from './assets/Header'
import App1 from './assets/App1'

function App() {
  const name = "karan sharma8"
  const age = 43
  return (
    <div>
      <h1>Hello</h1>
      <h2>how are you</h2>
      <Header></Header>
      <App1></App1>
      <h1>my name is {name}</h1>
      <h2>my age is {age} </h2>
      <button onClick={()=>{alert("hi dude")}} ></button>
    </div>
  )
}

export default App
