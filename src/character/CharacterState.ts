import { create } from "zustand";

export class CharacterState {
    str: number = 10;
    con: number = 10;
    agi: number = 10;
    ref: number = 10;
    int: number = 10;
    wil: number = 10;
}

interface ICharacterStateStore {
    character: CharacterState
    update: (newState: CharacterState) => void
}

export var CharacterStateStore = create<ICharacterStateStore>((set) => ({
    character: new CharacterState(),
    update: (newState) => set({ character: newState })
}));