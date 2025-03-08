import { Card } from "../components/Card";
import { InventoryState, InventoryStateStore } from "./InventoryState";


export function Inventory() {
    const inventory: InventoryState = InventoryStateStore(state => (state.inventory))
    const GainCoins = InventoryStateStore(state => state.GainCoins);
    let copper = inventory.coins % 100;
    let silver = Math.floor((inventory.coins / 100) % 100);
    let gold = Math.floor(inventory.coins / 100 / 100);
    
    return (
        <Card>
            <div className="text-center font-bold">Inventory</div>
            {gold} gold {silver} silver {copper} copper
            <div>
            <button className="rounded bg-amber-300" onClick={() => GainCoins(5)}>Get coins</button>
            </div>
        </Card>
    );
}