export class WeatherValue {
    name: String;
    value;
    createdAt: string;
    constructor(name: String, value, createdAt: string) {
        this.name = name;
        this.value = value;
        this.createdAt = createdAt;
    }

}