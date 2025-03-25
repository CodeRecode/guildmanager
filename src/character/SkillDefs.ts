import { ActivityDef } from "../activity/ActivityDefs"

export interface SkillDef {
    id: string,
    name: string
    activities: ActivityDef[]
    durationScaleMs: number
    onComplete: Function
};

export const AllSkillDefs: SkillDef[] = [

];
