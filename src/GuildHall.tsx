import { useState } from 'react';
import data from './data/guildhall.json'
import Modal from './components/Modal';

export function GuildHall() {
    const [hallLevel, setHallLevel] = useState(0)
    let currentHallName = data[hallLevel].name;

    function Upgrade() {
        setHallLevel(hallLevel + 1);
    }

    return (<>
        <Modal display={false}>asdaaadfasdfasdfasdff</Modal>
        <div className="text-2xl p-6 border border-gray-600 bg-gray-800 rounded-md gap-x-4">
            <p>Your current guildhall is: {currentHallName}</p>
            {
                hallLevel + 1 < data.length &&
                <button className='font-bold py-2 px-4 rounded bg-zinc-600' onClick={Upgrade}>Upgrade: {data[hallLevel + 1].cost} gold</button>
            }
        </div>
    </>)
}