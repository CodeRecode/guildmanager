import { useState } from 'react';
import data from './homedata.json'

export function LocationHome() {
    const [homeLevel, setHomeLevel] = useState(0);

    function Upgrade() {
        setHomeLevel(homeLevel + 1);
    }

    return (<>
        <p>Your current home is: {data[homeLevel].name}</p>
        {
            homeLevel + 1 < data.length &&
            <button className='font-bold py-2 px-4 rounded bg-zinc-600' onClick={Upgrade}>Upgrade: {data[homeLevel + 1].cost} gold</button>
        }
    </>)
}