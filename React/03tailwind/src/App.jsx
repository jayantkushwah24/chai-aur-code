import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl'>Jayant </h1>
      <Card username="jayant" btnText = "click me" />
      <Card username = "kushwah" btnText = "visit me" />
    </>
  )
}

export default App
