import { Card } from "../components/Card";
import { CharacterStateStore } from "./CharacterState";
import { ResourceBar, Stat } from "./CharacterComponents";


export function Character() {
    const character = CharacterStateStore((state) => state.character);
    return (
        <Card>
            <div className="text-center font-bold">Character name</div>
            <div className="mt-2 border rounded-sm divide-y">
                <ResourceBar state={character.health} outerClassName="rounded-t-sm" innerClassName="bg-red-400 rounded-t-sm"></ResourceBar>
                <ResourceBar state={character.stamina} outerClassName="rounded-t-sm" innerClassName="bg-green-400"></ResourceBar>
                <ResourceBar state={character.mana} outerClassName="rounded-b-sm" innerClassName="bg-blue-400 rounded-b-sm"></ResourceBar>
            </div>
            <div className="grid grid-cols-3 border border-black rounded-md mt-4 divide-x divide-black">
                <div className="divide-y">
                    <Stat name="STR" className="bg-red-300 rounded-tl-md" value={character.str} />
                    <Stat name="CON" className="bg-red-300 rounded-bl-md" value={character.con} />
                </div>
                <div className="divide-y">
                    <Stat name="AGI" className="bg-green-300" value={character.agi} />
                    <Stat name="REF" className="bg-green-300" value={character.ref} />
                </div>
                <div className="divide-y">
                    <Stat name="INT" className="bg-blue-300 rounded-tr-md" value={character.int} />
                    <Stat name="WIL" className="bg-blue-300 rounded-br-md" value={character.wil} />
                </div>
            </div>
            <div className="text-center font-bold mt-4">
                Skills
            </div>
        </Card>
    );
}