import {Injectable} from "@angular/core";

@Injectable()
export class VideojuegosService{

  private videojuegos: Videojuego[]=[
    {
      nombre: 'Fortnite',
      descripcion: 'Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011.',
      img:'assets/img/ps4/fortnite.jpg',
      lanzamiento: '2017',
      consola: 'PS4'
    },
    {
      nombre: 'FIFA 22',
      descripcion: 'FIFA 22 es un videojuego de futbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch. Es la vigésimo novena entrega en la serie FIFA y fue lanzado el 1 de octubre de manera global.',
      img:'assets/img/ps4/fifa22.jpg',
      lanzamiento: '2021',
      consola: 'PS4'
    },
    {
      nombre: 'Assassins Creed Odyssey',
      descripcion: 'Está ambientado dentro de los años 431 a 422 AC, narra una historia acerca de la Guerra del Peloponeso entre Atenas y Esparta, concretamente en la Antigua Grecia, cuna de la civilización occidental. El personaje se enfrentará a una secta extremista y hambrienta de poder que desea unificar Grecia en una sola nación a su imagen, y también a numerosas criaturas mitológicas del folclore griego.',
      img:'assets/img/ps4/odyssey.jpg',
      lanzamiento: '2018',
      consola: 'PS4'
    },
    {
      nombre: 'Assassins Creed Valhalla',
      descripcion: 'Assassins Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassins Creed Odyssey.',
      img:'assets/img/ps4/assassins.jpg',
      lanzamiento: '2020',
      consola: 'PS4'
    },
    {
      nombre: 'Nioh 2',
      descripcion: 'Nioh 2 es un juego de rol de acción desarrollado por Team Ninja y Kou Shibusawa. Precuela y secuela de Nioh, el juego fue lanzado para PlayStation 4 el 13 de marzo de 2020, donde fue publicado por Koei Tecmo en Japón y Sony Interactive Entertainment en todo el mundo.',
      img:'assets/img/ps4/nioh2.jpg',
      lanzamiento: '2020',
      consola: 'PS4'
    },
    {
      nombre: 'Dragon Ball Xenoverse',
      descripcion: 'Dragon Ball Xenoverse (abreviado oficialmente como Dragon Ball XV) es un videojuego basado en la franquicia de los medios de comunicación de Dragon Ball.',
      img:'assets/img/xbox/dbx.jpg',
      lanzamiento: '2015',
      consola: 'Xbox'
    },
    {
      nombre: 'Dragon Ball Xenoverse 2',
      descripcion: 'Es un videojuego desarrollado por Dimps y publicado por Bandai Namco Entertainment, basado en la franquicia de Dragon Ball.',
      img:'assets/img/xbox/dbx2.jpg',
      lanzamiento: '2016',
      consola: 'Xbox'
    },
    {
      nombre: 'BioShock: The Collection',
      descripcion: 'Es una compilación de los videojuegos BioShock, desarrollado por Blind Squirrel Games y publicado por 2K Games. La colección presenta versiones mejoradas de BioShock, BioShock 2 y BioShock Infinite, con nuevas texturas y soporte para pantallas de mayor resolución y framerates.',
      img:'assets/img/xbox/bioShock.jpg',
      lanzamiento: '2016',
      consola: 'Xbox'
    },
    {
      nombre: 'Minecraft',
      descripcion: 'Es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, y posteriormente desarrollado por Mojang Studios.',
      img:'assets/img/xbox/minecraft.jpg',
      lanzamiento: '2011',
      consola: 'Xbox'
    },
    {
      nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'Es un videojuego de rol desarrollado y publicado por la compañía polaca CD Projekt RED. Esta compañía es la desarrolladora mientras que la distribución corre a cargo de la Warner Bros. Interactive, en el caso de Norteamérica y Bandai Namco para Europa.',
      img:'assets/img/xbox/tw3.jpg',
      lanzamiento: '2015',
      consola: 'Xbox'
    },
  ];

  constructor() {
    console.log('Servicio listo para usarse.');
  }

  getVideojuegos():Videojuego[]{
    return this.videojuegos;
  }

  getVideojuego(idx:number){
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[]{
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for(let videojuego of this.videojuegos){
      let nombre = videojuego.nombre.toLowerCase();
      if(nombre.indexOf(termino)>=0){
        videojuegosArr.push(videojuego);
      }
    }
    return videojuegosArr;
  }
}

export interface Videojuego{
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
