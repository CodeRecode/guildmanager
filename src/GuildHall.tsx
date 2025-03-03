import { useState } from 'react';
import data from './data/guildhall.json'

function GuildHall() {
    const [hallLevel, setHallLevel] = useState(0)
    let currentHallName = data[hallLevel].name;

    function Upgrade() {
        setHallLevel(hallLevel + 1);
    }

    return (<>
        <div className="text-2xl p-6 border border-gray-600 bg-gray-800 rounded-md gap-x-4">
            <p>Your current guildhall is: {currentHallName}</p>
            {
                hallLevel + 1 < data.length &&
                <button onClick={Upgrade}>Upgrade: {data[hallLevel + 1].cost} gold</button>
            }
        </div>
    </>)
}

export default GuildHall