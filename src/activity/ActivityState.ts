import { create } from "zustand";
import { ActivityDef, AllActivityDefs } from "./ActivityDefs";


export class Activity {
    def: ActivityDef
    completions: number
    duration: number
    progress: number

    constructor(def: ActivityDef) {
        this.def = def
        this.completions = 0
        this.duration = def.baseDurationSec
        this.progress = 0
    }
}

export class ActivityState {
    currentActivity: Activity | null = null;
    allActivities: Activity[];

    constructor() {
        this.allActivities = AllActivityDefs.map(def => new Activity(def));
    }
}

interface IActivityStateStore {
    state: ActivityState,
    Update: (newState: ActivityState) => void,
}

export var ActivityStateStore = create<IActivityStateStore>((set) => ({
    state: new ActivityState(),
    Update: (newState) => set({ state: newState }),
}));