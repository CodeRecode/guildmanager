import { create } from "zustand";

export enum CharacterStatEnum {
    str = 'str',
    con = 'con',
    agi = 'agi',
    ref = 'ref',
    int = 'int',
    wil = 'wil'
}

export class ResourceState {
    constructor(current: number, max: number) {
        this.current = current;
        this.max = max;
    }

    current: number = 10;
    max: number = 10;
}

export class CharacterState {
    health: ResourceState = new ResourceState(2, 10);
    stamina: ResourceState = new ResourceState(5, 10);
    mana: ResourceState = new ResourceState(10, 10);

    str: number = 8;
    con: number = 8;
    agi: number = 8;
    ref: number = 8;
    int: number = 8;
    wil: number = 8;
}

interface ICharacterStateStore {
    character: CharacterState
    ChangeStat: (delta: number, stat: CharacterStatEnum) => void
    Update: (newState: CharacterState) => void
}

export var CharacterStateStore = create<ICharacterStateStore>((set) => ({
    character: new CharacterState(),
    ChangeStat: (delta, stat) => set((state) => {
        var newChar = structuredClone(state.character);
        newChar[stat] += delta;
        return {...state, character: newChar }
    }),
    Update: (newState) => set({ character: newState })
}));