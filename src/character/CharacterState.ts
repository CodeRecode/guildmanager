export class CCharacterState {
    Str: number = 10;
    Con: number = 10;
    Agi: number = 10;
    Ref: number = 10;
    Int: number = 10;
    Wil: number = 10;

    fromJSON(json: string) {
        let state: CCharacterState = JSON.parse(json);
        this.Str = state.Str;
        this.Con = state.Con;
        this.Agi = state.Agi;
        this.Ref = state.Ref;
        this.Int = state.Int;
        this.Wil = state.Wil;
    }
}