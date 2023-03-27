import { Professional } from "./professional"

class Movie{
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

constructor (tittle: string, releaseYear: number, nationality: string, genre: string){
    this.title = tittle;
    this.releaseYear = releaseYear;
    this.nacionality = nationality;
    this.genre = genre;
}

public printAll(){
    console.log(this.title);
    console.log(this.releaseYear);
    console.log(this.actors);
    console.log(this.nacionality);
    console.log(this.director);
    console.log(this.writer);
    console.log(this.language);
    console.log(this.plataforma);
    console.log(this.isMCU);
    console.log(this.mainCharacterName);
    console.log(this.producer);
    console.log(this.distributor);
    console.log(this.genre);
}
}

export {Movie}