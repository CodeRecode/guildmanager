import { CharacterStatEnum, CharacterStateStore } from "../character/CharacterState"
import { LocationEnum } from "../location/LocationState"

export interface ActivityDef {
    name: string
    baseDurationSec: number
    durationScale: number
    location: LocationEnum
    onComplete: Function
};

export const AllActivityDefs: ActivityDef[] = [
    {
        name: "Train Strength",
        baseDurationSec: 5,
        durationScale: 1,
        location: LocationEnum.Forest,
        onComplete: () => {
            CharacterStateStore.getState().ChangeStat(1, CharacterStatEnum.str);
        }
    }
]