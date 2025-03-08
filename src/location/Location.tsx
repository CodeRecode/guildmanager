import { Card } from '../components/Card';
import { HomeLocation } from './HomeLocation';
import { LocationEnum, LocationStateStore } from './LocationState';

interface LocationCellProps {
    location: LocationEnum
};

function LocationCell(props: LocationCellProps) {
    const locationState = LocationStateStore((state) => state.location);
    const SwitchLocation = LocationStateStore((state) => state.SwitchLocation);
    return <div className={`${locationState.currentLocation == props.location && "bg-zinc-600 text-white"}`} onClick={() => SwitchLocation(props.location)}>{String(props.location)}</div>;
}

export function Location() {
    const locationState = LocationStateStore((state) => state.location);
    return (<>
        <Card>
            <div>
                <div className="text-center font-bold">Location</div>
                <div className='grid grid-cols-3 border rounded-md text-center divide-x bg-zinc-300'>
                    <LocationCell location={LocationEnum.Home} />
                    <LocationCell location={LocationEnum.Forest} />
                    <LocationCell location={LocationEnum.Town} />
                </div>
            </div>
            {locationState.currentLocation == LocationEnum.Home && <HomeLocation />}
        </Card>
    </>)
}