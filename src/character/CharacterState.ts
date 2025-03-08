import { create } from "zustand";

export class ResourceState {
    constructor(current: number, max: number) {
        this.current = current;
        this.max = max;
    }
    
    current: number = 10;
    max: number = 10;
}

export class CharacterState {
    health: ResourceState = new ResourceState(10, 10);
    stamina: ResourceState = new ResourceState(10, 10);
    mana: ResourceState = new ResourceState(10, 10);

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