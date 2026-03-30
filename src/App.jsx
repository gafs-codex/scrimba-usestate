import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import React from 'react'
import './App.css'
import './state.css'

// Learning useState
// function App() {
//   // simply changing a local variable wont make react rerun the
//   // componet i.e it wont react the change hence { useState}
//   // let state = "Yes"
//   // function handleClick() {
//   //   state = "Heck yes"
//   // }

//   const [result, setResult] = React.useState("Yes")
//   function handleClick() {
//     setResult("No")
//   }
//   // console.log(result);


//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       <button onClick={handleClick} className="value">{result}</button>
//     </main>
//   )
// }


function App() {
  let [count, setCount] = React.useState(0)

  function add() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={minus } className="minus" aria-label="Decrease count">–</button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
}

export default App
