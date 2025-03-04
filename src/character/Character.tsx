import { Card } from "../components/Card";
import { CCharacterData } from "./CharacterData";
import { Stat } from "./Stat";

export let CharacterData: CCharacterData = new CCharacterData();

export function Character() {
    return (
        <Card>
            <div className="text-center font-bold">Character name</div>
            <div className="grid grid-cols-3">
                <div>
                    <Stat name="STR" className="" value={CharacterData.Str}/>
                    <Stat name="CON" className="red" value={CharacterData.Con}/>
                </div>
                <div>
                    <Stat name="AGI" className="red" value={CharacterData.Agi}/>
                    <Stat name="REF" className="red" value={0}/>
                </div>
                <div>
                    <Stat name="INT" className="red" value={0}/>
                    <Stat name="WIL" className="red" value={0}/>
                </div>
            </div>
            <div className="text-center">
                Skill Placeholder
            </div>
        </Card>
    );
}