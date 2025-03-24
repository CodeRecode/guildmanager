import { useShallow } from 'zustand/shallow';
import { ActivityStateStore } from '../activity/ActivityState';
import { Card } from '../components/Card';
import { ProgressBar } from '../components/ProgressBar';
import { LocationHome } from './LocationHome';
import { LocationEnum, LocationStateStore } from './LocationState';

interface LocationCellProps {
    location: LocationEnum
};

function LocationCell(props: LocationCellProps) {
    const locationState = LocationStateStore((state) => state.location);
    const SwitchLocation = LocationStateStore((state) => state.SwitchLocation);

    return <div className={`${locationState.currentLocation == props.location && "bg-zinc-600 text-white border-black"}`}
        onClick={() => SwitchLocation(props.location)}>
        {String(props.location)}
    </div>;
}

export function Location() {
    const locationState = LocationStateStore((state) => state.location);
    const [allActivities, currentActivity, SetCurrentActivity] = ActivityStateStore(useShallow((state) => [state.allActivities, state.currentActivity, state.SetCurrentActivity]));
    return (<>
        <Card>
            <div className='mb-2'>
                <div className="text-center font-bold">Location</div>
                <div className='grid grid-cols-3 border rounded-md text-center divide-x bg-zinc-300'>
                    <LocationCell location={LocationEnum.Home} />
                    <LocationCell location={LocationEnum.Forest} />
                    <LocationCell location={LocationEnum.Town} />
                </div>
            </div>
            {locationState.currentLocation == LocationEnum.Home && <LocationHome />}
            {
                Array.from(allActivities.values())
                    .filter(act => act.def.location == locationState.currentLocation)
                    .map(act => {
                        const isCurrentActivity = currentActivity?.def.id == act.def.id
                        return (<div className="grid grid-cols-3 mt-0.5" key={act.def.id}>
                            <button
                                className={`${isCurrentActivity ? "bg-amber-200" : "bg-zinc-300"} rounded-md px-2 border border-black mr-1`}
                                onClick={() => SetCurrentActivity(isCurrentActivity ? null : act)}>
                                {act.def.name}
                            </button>
                            <ProgressBar
                                rounded={true}
                                outerClassName="col-span-2 border"
                                innerClassName="bg-amber-300"
                                current={act.progressMs}
                                max={act.durationMs}
                                text={((act.durationMs - act.progressMs) / 1000).toString() + " hours"}>
                            </ProgressBar>
                        </div>);
                    })
            }
        </Card>
    </>)
}