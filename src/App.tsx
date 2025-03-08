import { Location } from './location/Location'
import { Character } from './character/Character'
import { Inventory } from './inventory/Inventory'
import './App.css'
import { InventoryState, LoadState } from './save/SaveState'
import Modal from './components/Modal'

function App() {
  LoadState();
  return (
    <>
      <Modal display={false}>asdaaadfasdfasdfasdff</Modal>
      <div className='grid grid-cols-3 gap-4 p-5 min-w-[1000px]'>
        <Character />
        <Inventory inventoryState={InventoryState} />
        <Location />
      </div>
    </>
  )
}

export default App
