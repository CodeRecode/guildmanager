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
            <div className="grid grid-cols-3">
                <div>
                    <Stat name="STR" className="" value={props.characterState.Str}/>
                    <Stat name="CON" className="red" value={props.characterState.Con}/>
                </div>
                <div>
                    <Stat name="AGI" className="red" value={props.characterState.Agi}/>
                    <Stat name="REF" className="red" value={props.characterState.Ref}/>
                </div>
                <div>
                    <Stat name="INT" className="red" value={props.characterState.Int}/>
                    <Stat name="WIL" className="red" value={props.characterState.Wil}/>
                </div>
            </div>
            <div className="text-center">
                Skill Placeholder
            </div>
        </Card>
    );
}