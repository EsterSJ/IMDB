import { Movie } from "./movie";
import { Professional } from "./professional";
import { Imdb } from "./Imdb";
import { readFileSync, writeFileSync } from "fs";
import * as readLineSync from "readline-sync";

let professional: Professional = new Professional ("",0,0,0,false,"",0,"");
professional.name = readLineSync.question("Introduce el nombre: ");
professional.age = Number(readLineSync.question("Introduce la edad: "));
professional.weight = Number(readLineSync.question("Introduce el peso: "));
professional.height = Number(readLineSync.question("Introduce la altura: "));
if (readLineSync.question("Esta retirado? (true/false) ")== "true"){
    professional.isRetired = true;
}else{
    professional.isRetired = false;
}
professional.nationality = readLineSync.question("Introduce la nacionalidad: ");
professional.oscarsNumber = Number(readLineSync.question("Introduce el numero de Oscars: "));
professional.profession = readLineSync.question("Introduce la profesion: ");

console.log(professional);

let instanciaficheroJSON: Imdb = new Imdb([]);
instanciaficheroJSON = instanciaficheroJSON.obtenerInstanciaIMDB("imdbBBDD");

if (instanciaficheroJSON.peliculas.length != 0){
    let dondeAnyadir: string = readLineSync.question("Introduce el titulo de la pelicula que quieras modificar: ");
    console.log("pelicula a modificar: " + dondeAnyadir);
    
    for (let i = 0; i<instanciaficheroJSON.peliculas.length; i++){
        if (dondeAnyadir == instanciaficheroJSON.peliculas[i].title){
            instanciaficheroJSON.peliculas[i].actors.push(professional);
        }
    }
}
instanciaficheroJSON.escribirEnFicheroJSON("imdbBBDD.json");
// let imdbModificado: Imdb = new Imdb(instanciaficheroJSON.peliculas);
// imdbModificado.escribirEnFicheroJSON("imdbBBDD.json");

