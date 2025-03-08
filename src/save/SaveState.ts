import { CharacterState, CharacterStateStore } from "../character/CharacterState"
import { InventoryState, InventoryStateStore } from "../inventory/InventoryState";

interface SaveState {
    CharacterState: CharacterState,
    InventoryState: InventoryState
}

export function LoadState () {
    let json = null;
    if (json = localStorage.getItem("LastState")) {
        var saveObject: SaveState = JSON.parse(json);

        //const CharacterState: CharacterState = CharacterStateStore.getState().character;
        CharacterStateStore.setState({character: Object.assign(new CharacterState(), saveObject.CharacterState)});
        InventoryStateStore.setState({inventory: Object.assign(new InventoryState(), saveObject.InventoryState)});
    }
}

export function SaveState () {
    let LastState: SaveState = {
        CharacterState: CharacterStateStore.getState().character,
        InventoryState: InventoryStateStore.getState().inventory
    };

    localStorage.setItem("LastState", JSON.stringify(LastState));
}

setInterval(SaveState, 10 * 1000);