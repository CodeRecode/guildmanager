import { useState } from 'react'
import { GuildHall } from './GuildHall'
import { Character } from './Character'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Character />
      <GuildHall />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
