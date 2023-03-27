import { Movie } from "./movie";
import { Professional } from "./professional";

class Imdb{
    public peliculas: Movie[];

    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }
}

export {Imdb}