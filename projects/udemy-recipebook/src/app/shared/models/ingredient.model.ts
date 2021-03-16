
export class Ingredient {
    public name: string;
    public amount: number;
    public metric: string | number;

    constructor(name: string, amt: number, metric?: string | number) {
        this.name = name;
        this.amount = amt;
        this.metric = metric;
    }

}