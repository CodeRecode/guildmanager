import { Card } from "../components/Card";
import { CInventoryState } from "./InventoryState";

interface InventoryProps {
    inventoryState: CInventoryState
}

export function Inventory({inventoryState}: InventoryProps) {
    let copper = inventoryState.coins % 100;
    let silver = Math.floor((inventoryState.coins / 100) % 100);
    let gold = Math.floor(inventoryState.coins / 100 / 100);
    
    return (
        <Card>
            <div className="text-center font-bold">Inventory</div>
            {gold} gold {silver} silver {copper} copper
            <div>
            <button className="rounded bg-amber-300">Get coins</button>
            </div>
        </Card>
    );
}