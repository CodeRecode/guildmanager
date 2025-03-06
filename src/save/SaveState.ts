import { CCharacterState } from "../character/CharacterState"
import { CInventoryState } from "../inventory/InventoryState";


export var CharacterState: CCharacterState = new CCharacterState();
export var InventoryState: CInventoryState = new CInventoryState();

export function LoadState () {
    let json = null;
    if (json = localStorage.getItem("LastState")) {
        var saveObject = JSON.parse(json);

        CharacterState = Object.assign(CharacterState, saveObject.CharacterState);
        InventoryState = Object.assign(InventoryState, saveObject.InventoryState);
    }
}

export function SaveState () {
    let LastState = {
        CharacterState,
        InventoryState
    };

    localStorage.setItem("LastState", JSON.stringify(LastState));
}

setInterval(SaveState, 10 * 1000);