import { create } from "zustand";

export class InventoryState {
    coins: number = 0;
}

interface IInventoryStateStore {
    inventory: InventoryState,
    Update: (newState: InventoryState) => void,
    GainCoins: (coinDelta: number) => void
}

export var InventoryStateStore = create<IInventoryStateStore>((set) => ({
    inventory: new InventoryState(),
    Update: (newState) => set({ inventory: newState }),
    GainCoins: (coinDelta) => set((state) => ({ inventory: {...state.inventory, coins: state.inventory.coins + coinDelta }})),
}));