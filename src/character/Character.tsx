import { Card } from "../components/Card";
import { CCharacterState } from "./CharacterState";
import { Stat } from "./Stat";

type CharacterProps = {
    characterState: CCharacterState
}

export function Character(props: CharacterProps) {
    return (
        <Card>
            <div className="text-center font-bold">Character name</div>
            <div className="grid grid-cols-3 border border-black rounded-md">
                <div className="border-r">
                    <Stat name="STR" className="border-b bg-red-400 rounded-tl-md" value={props.characterState.str}/>
                    <Stat name="CON" className=" bg-red-300 rounded-bl-md" value={props.characterState.con}/>
                </div>
                <div className="border-r">
                    <Stat name="AGI" className="border-b bg-green-400" value={props.characterState.agi}/>
                    <Stat name="REF" className="bg-green-300" value={props.characterState.ref}/>
                </div>
                <div>
                    <Stat name="INT" className="border-b bg-blue-400 rounded-tr-md" value={props.characterState.int}/>
                    <Stat name="WIL" className="bg-blue-300 rounded-br-md" value={props.characterState.wil}/>
                </div>
            </div>
            <div className="text-center">
                Skill Placeholder
            </div>
        </Card>
    );
}