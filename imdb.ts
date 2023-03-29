import { Movie } from "./movie";
import { Professional } from "./professional";
import { readFileSync, writeFileSync } from "fs";

class Imdb{
    public peliculas: Movie[];

    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero: string): void{
        writeFileSync(nombreFichero,JSON.stringify(this));
    }

    public obtenerInstanciaIMDB(nombreFichero:string): Imdb{
        let newImdb: Imdb = new Imdb([]);
        newImdb.peliculas = JSON.parse(readFileSync("imdbBBDD.json").toString()).peliculas;        
        return newImdb;
    }
}

export {Imdb}