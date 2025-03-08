import { create } from "zustand";

export enum LocationEnum {
    Home = "Home",
    Forest = "Forest",
    Town = "Town"
};

export class LocationState {
    currentLocation: LocationEnum = LocationEnum.Home;
}

interface ILocationStateStore {
    location: LocationState,
    Update: (newState: LocationState) => void,
    SwitchLocation: (newLocation: LocationEnum) => void
}

export var LocationStateStore = create<ILocationStateStore>((set) => ({
    location: new LocationState(),
    Update: (newState) => set({ location: newState }),
    SwitchLocation: (newLocation) => set((state) => ({ location: { ...state.location, currentLocation: newLocation } })),
}));