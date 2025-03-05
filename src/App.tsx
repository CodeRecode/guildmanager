import { Location } from './location/Location'
import { Character } from './character/Character'
import { Inventory } from './inventory/Inventory'
import './App.css'
import { CharacterState, LoadState } from './save/SaveState'

function App() {
  LoadState();
  return (
    <>
      <div className='grid grid-cols-3 gap-4 p-5 min-w-[1000px]'>
        <Character characterState={CharacterState} />
        <Inventory />
        <Location />
      </div>
    </>
  )
}

export default App
