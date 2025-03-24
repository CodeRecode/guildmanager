import { Location } from './location/Location'
import { Character } from './character/Character'
import { Inventory } from './inventory/Inventory'
import './App.css'
import { LoadState } from './save/SaveState'
import Modal from './components/Modal'
import { Log } from './log/Log'
import { ResetDate } from './activity/ResetDate'

function App() {
  LoadState();
  return (
    <>
      <Modal display={false}>asdaaadfasdfasdfasdff</Modal>
      <div className='grid grid-cols-3 gap-4 p-5 min-w-[1000px]'>
        <div className='col-span-3'>
          <ResetDate />
        </div>
        <div className='row-span-2'>
          <Character />
        </div>
        <Inventory />
        <Location />
        <Log />
      </div>
    </>
  )
}

export default App
