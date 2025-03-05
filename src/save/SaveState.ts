import { CCharacterState } from "../character/CharacterState"


export var CharacterState: CCharacterState = new CCharacterState();

export function LoadState () {
    let json = null;
    if (json = localStorage.getItem("CharacterState")) {
        CharacterState = Object.assign(CharacterState, JSON.parse(json));
    }
    localStorage.setItem("CharacterState", JSON.stringify(CharacterState));
}