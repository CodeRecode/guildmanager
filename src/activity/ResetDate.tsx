import { useShallow } from "zustand/shallow";
import { Card } from "../components/Card";
import { ProgressBar } from "../components/ProgressBar";
import { ActivityStateStore } from "./ActivityState";


export function ResetDate() {
    const [currentDateMs, maxDateMs] = ActivityStateStore(useShallow((state) => [state.currentDateMs, state.maxDateMs]));
    const hours = (maxDateMs - currentDateMs) / 1000;
    const displayHours = Math.floor(hours % 24);
    const days = Math.floor(hours / 24);
    return (
            <ProgressBar rounded={true} current={currentDateMs} max={maxDateMs} outerClassName={"border"} innerClassName="bg-orange-600" text={`${days} Days ${displayHours} Hours Remain`}>
                
            </ProgressBar>
    );
}