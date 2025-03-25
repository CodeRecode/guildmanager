import { create } from "zustand";
import { ActivityDef, AllActivityDefs } from "./ActivityDefs";
import { GameTickEventString, GameTickTimeMs } from "../core/Core";
import { CharacterState, CharacterStateStore } from "../character/CharacterState";


export class Activity {
    def: ActivityDef
    completions: number
    durationMs: number
    progressMs: number

    constructor(def: ActivityDef) {
        this.def = def
        this.completions = 0
        this.durationMs = def.baseDurationMs
        this.progressMs = 0
    }
}

interface IActivityStateStore {
    currentDateMs: number,
    maxDateMs: number,
    currentActivity: Activity | null,
    allActivities: Map<string, Activity>,
    SetCurrentActivity(newActivity: Activity | null): void,
    UpdateDate(currentDateMs: number): void
}

export var ActivityStateStore = create<IActivityStateStore>((set) => ({
    currentDateMs: 0,
    maxDateMs: 1000 * 60 * 10, // 10 min
    currentActivity: null,
    allActivities: new Map(AllActivityDefs.map(def => [def.id, new Activity(def)])),
    SetCurrentActivity: (newActivity) => set((prev) => ({
        currentActivity: newActivity, 
        allActivities: newActivity ? new Map(prev.allActivities).set(newActivity.def.id, newActivity) : prev.allActivities
    })),
    UpdateDate: (currentDateMs) => set(() => ({currentDateMs}))
}));

window.addEventListener(GameTickEventString, OnTick);

function OnTick() {
    let currentActivity = ActivityStateStore.getState().currentActivity;
    if (!currentActivity) {
        return;
    }

    let updatedActivity = {...currentActivity};
    updatedActivity.progressMs += GameTickTimeMs;

    if (updatedActivity.progressMs >= updatedActivity.durationMs) {
        var def = updatedActivity.def;
        updatedActivity.completions++;
        updatedActivity.durationMs = def.baseDurationMs + def.durationScaleMs * updatedActivity.completions;
        updatedActivity.progressMs = 0;

        ActivityStateStore.getState().SetCurrentActivity(updatedActivity);

        def.onComplete();
    }
    else {
        ActivityStateStore.getState().SetCurrentActivity(updatedActivity);
    }
    

    let {currentDateMs, maxDateMs} = ActivityStateStore.getState();
    if (currentDateMs + GameTickTimeMs >= maxDateMs) {
        CharacterStateStore.getState().Update(new CharacterState());
        ActivityStateStore.getState().UpdateDate(0);
    }
    else {
        ActivityStateStore.getState().UpdateDate(currentDateMs + GameTickTimeMs);
    }
}