
export const words:string[] = [

    'PAPEL',
    'MICROBIO',
    'MANDARINA',
    'BANDERA',
    'POLLO',
    'ESTERNOCLEIDOMASTOIDEO',
    'AUTOBUS',
    'COMPUTADORA',
    'PAISAJE',
    'PERA',
    'MANZANA',
    'ZANAHORIA',
    'MOSQUITO',
    'JAVIER',
    'MASTOIDES',
    'JAVITEAMAMUCHO'

]

export function getRandomWord(){


    const randomIndex = Math.floor((Math.random() * words.length));

    return words[randomIndex];

}