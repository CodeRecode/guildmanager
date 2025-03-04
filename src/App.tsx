import { useState } from 'react'
import { GuildHall } from './guildhall/GuildHall'
import { Character } from './character/Character'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-3 gap-4 p-5'>
        <Character />
        <GuildHall />
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
