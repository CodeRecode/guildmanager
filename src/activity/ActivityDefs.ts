import { CharacterStatEnum, CharacterStateStore } from "../character/CharacterState"
import { LocationEnum } from "../location/LocationState"

export interface ActivityDef {
    id: string,
    name: string
    baseDurationMs: number
    durationScaleMs: number
    location: LocationEnum
    onComplete: Function
};

export const AllActivityDefs: ActivityDef[] = [
    {
        id: "train_strength",
        name: "Train Strength",
        baseDurationMs: 5 * 1000,
        durationScaleMs: 1000,
        location: LocationEnum.Forest,
        onComplete: () => {
            CharacterStateStore.getState().ChangeStat(1, CharacterStatEnum.str);
        }
    },
    {
        id: "train_agility",
        name: "Train Agility",
        baseDurationMs: 5 * 1000,
        durationScaleMs: 1000,
        location: LocationEnum.Forest,
        onComplete: () => {
            CharacterStateStore.getState().ChangeStat(1, CharacterStatEnum.agi);
        }
    }
]