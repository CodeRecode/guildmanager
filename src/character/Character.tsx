import { Card } from "../components/Card";
import { CharacterStateStore } from "./CharacterState";
import { Stat } from "./Stat";


export function Character() {
    const character = CharacterStateStore((state) => state.character);
    return (
        <Card>
            <div className="text-center font-bold">Character name</div>
            <div className="mt-2 border rounded-sm divide-y">
                <div className="text-center bg-red-400 rounded-t-sm">{character.health.current + "/" + character.health.max}</div>
                <div className="text-center bg-green-400">{character.health.current + "/" + character.health.max}</div>
                <div className="text-center bg-blue-400 rounded-b-sm">{character.health.current + "/" + character.health.max}</div>
            </div>
            <div className="grid grid-cols-3 border border-black rounded-md mt-4 divide-x divide-black">
                <div className="divide-y">
                    <Stat name="STR" className="bg-red-400 rounded-tl-md" value={character.str} />
                    <Stat name="CON" className="bg-red-300 rounded-bl-md" value={character.con} />
                </div>
                <div className="divide-y">
                    <Stat name="AGI" className="bg-green-400" value={character.agi} />
                    <Stat name="REF" className="bg-green-300" value={character.ref} />
                </div>
                <div className="divide-y">
                    <Stat name="INT" className="bg-blue-400 rounded-tr-md" value={character.int} />
                    <Stat name="WIL" className="bg-blue-300 rounded-br-md" value={character.wil} />
                </div>
            </div>
            <div className="text-center font-bold mt-4">
                Skills
            </div>
        </Card>
    );
}