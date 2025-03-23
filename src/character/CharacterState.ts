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

    str: number = 10;
    con: number = 10;
    agi: number = 10;
    ref: number = 10;
    int: number = 10;
    wil: number = 10;
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