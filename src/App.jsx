
import { useState } from 'react';
import './App.css'

function App() {



  return (
    <>
      <Board></Board>
    </>
  )
}

export default App

function Square() {
  const [value, setValue] = useState(null)

  function handelClick() {
    setValue('X')

  }
  return (

    <button onClick={handelClick} className='square'>{value}</button>

  )
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}