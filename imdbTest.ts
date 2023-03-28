import { Movie } from "./movie";
import { Professional } from "./professional";
import { Imdb } from "./Imdb";
import { readFileSync, writeFileSync } from "fs";


let professional1: Professional = new Professional("Michelle Pfeiffer",64,55,1.68,true,"claiforniana",2,"actriz");
let professional2: Professional = new Professional("Mario Casas",36,75,1.82,false,"española",0,"actor");
let professional3: Professional = new Professional("Scarlett Johansson",38,57,1.65,false,"estadounidense",1,"empresaria");
let professional4: Professional = new Professional("Pedro Almodovar",64,82,1.78,false,"español",2,"director");

let actores: Professional[];
actores = [professional1,professional2,professional3,professional3];

let pelicula: Movie;
pelicula = new Movie ("El señor de los anillos",2005,"estadounidense","fantasía");
pelicula.actors = actores;
pelicula.director = professional4;
pelicula.writer = professional3;
pelicula.language = "español";
pelicula.plataforma = "Amazon Prime";
pelicula.isMCU = true;
pelicula.mainCharacterName = "Frodo Bolson";
pelicula.producer = "Nombre productor";
pelicula.distributor = "Nombre distribuidor";

let pelicula1: Movie;
pelicula1 = new Movie ("Piratas del Caribe",2005,"estadounidense","fantasía");
pelicula1.actors = actores;
pelicula1.director = professional4;
pelicula1.writer = professional3;
pelicula1.language = "español";
pelicula1.plataforma = "Amazon Prime";
pelicula1.isMCU = true;
pelicula1.mainCharacterName = "Frodo Bolson";
pelicula1.producer = "Nombre productor";
pelicula1.distributor = "Nombre distribuidor";

let imdb: Imdb = new Imdb([pelicula,pelicula1, pelicula]);

let imdbJSON: string = JSON.stringify(imdb);

writeFileSync("imdbBBDD.json",imdbJSON);

let imdbJSONread = JSON.parse(readFileSync("imdbBBDD.json").toString());

imdb.escribirEnFicheroJSON("newImdbBBDD.json");

let instanciaImdb: Imdb = new Imdb([]);

console.log(instanciaImdb.obtenerInstanciaIMDB("newImdbBBDD.json"));






