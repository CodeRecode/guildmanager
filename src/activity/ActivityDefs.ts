import { CharacterStatEnum, CharacterStateStore } from "../character/CharacterState"
import { LocationEnum, LocationStateStore } from "../location/LocationState"
import { ActivityStateStore } from "./ActivityState"

export interface ActivityDef {
    id: string,
    name: string
    baseDurationMs: number
    durationScaleMs: number
    location: LocationEnum
    requirement?: Function
    requirementText?: string
    onComplete: Function
};

export const AllActivityDefs: ActivityDef[] = [
    {
        id: "go_to_forest",
        name: "Go To Forest",
        baseDurationMs: 500,
        durationScaleMs: 0,
        location: LocationEnum.Home,
        onComplete: () => {
            LocationStateStore.getState().SwitchLocation(LocationEnum.Forest);
            ActivityStateStore.getState().SetCurrentActivity(null);
        }
    },
    {
        id: "return_home",
        name: "Return Home",
        baseDurationMs: 500,
        durationScaleMs: 0,
        location: LocationEnum.Forest,
        onComplete: () => {
            LocationStateStore.getState().SwitchLocation(LocationEnum.Home);
            ActivityStateStore.getState().SetCurrentActivity(null);
        }
    },
    {
        id: "go_to_town",
        name: "Go to Town",
        baseDurationMs: 500,
        durationScaleMs: 0,
        location: LocationEnum.Forest,
        requirement: () => {
            return CharacterStateStore.getState().character.str >= 10;
        },
        requirementText: "Strength 10",
        onComplete: () => {
            LocationStateStore.getState().SwitchLocation(LocationEnum.Town);
            ActivityStateStore.getState().SetCurrentActivity(null);
        }
    },
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