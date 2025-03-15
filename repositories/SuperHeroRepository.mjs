
import mongoose from 'mongoose';
import SuperHero from '../models/SuperHero.mjs' ; 
import Irepository from './Irepository.mjs' ;

class SuperHeroRepository extends Irepository {
    async obtenerPorId(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("ID no válido"); 
            // Evita la consulta si el ID es incorrecto
        }
        return await SuperHero.findById(id);
    }
   /* async obtenerPorId (id) {
        return await SuperHero.findById(id);
    }*/


    async obtenerTodos () {
        return await SuperHero.find({});
    }   

    async buscarPorAtributo(atributo , valor ) { 
        return await SuperHero.find({[atributo]:valor});
    }

    async obtenerMayoresDe30 () {
        return await SuperHero.find({edad:{$gt:30}});

    }

}

export default new SuperHeroRepository ();
/*
export function buscarSuperheroesPorAtributo(atributo, valor) {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        String(hero[atributo]).toLowerCase().includes(valor.toLowerCase())  
    );
}

export function obtenerSuperheroesMayoresDe30() {
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero =>
        hero.edad >30 && hero.planetaOrigen=== 'Tierra' && hero.poder.length >= 2
    );*/