import { Professional } from "./professional";
import { Movie } from "./movie";

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

pelicula.printAll();
