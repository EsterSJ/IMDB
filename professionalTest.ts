import { Professional } from "./professional";

let professional1: Professional = new Professional("Michelle Pfeiffer",64,55,1.68,true,"claiforniana",2,"actriz");
let professional2: Professional = new Professional("Mario Casas",36,75,1.82,false,"española",0,"actor");
let professional3: Professional = new Professional("Scarlett Johansson",38,57,1.65,false,"estadounidense",1,"empresaria");
let professional4: Professional = new Professional("Pedro Almodovar",64,82,1.78,false,"español",2,"director");

professional1.printAll();
professional2.printAll();
professional3.printAll();
professional4.printAll();