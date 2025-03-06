export class CInventoryState {
    coins: number = 0;

    GainCoins(delta: number): void {
        this.coins += delta;
    }
}