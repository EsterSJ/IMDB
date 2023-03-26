class Professional{
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    public printAll(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    }
}

export {Professional}