import { CharacterStateStore } from "../character/CharacterState"
import { CInventoryState } from "../inventory/InventoryState";

export var InventoryState: CInventoryState = new CInventoryState();

export function LoadState () {
    let json = null;
    if (json = localStorage.getItem("LastState")) {
        var saveObject = JSON.parse(json);

        //const character = CharacterStateStore((state) => state.character);
        //const updateCharacter = CharacterStateStore.((state) => state.update);
        //updateCharacter(Object.assign(character, saveObject.CharacterState));

        InventoryState = Object.assign(InventoryState, saveObject.InventoryState);
    }
}

export function SaveState () {
    const CharacterState = CharacterStateStore.getState().character;
    let LastState = {
        CharacterState,
        InventoryState
    };

    localStorage.setItem("LastState", JSON.stringify(LastState));
}

setInterval(SaveState, 10 * 1000);