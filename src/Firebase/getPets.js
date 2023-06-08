import React from "react";
import {Text} from 'native-base';
import firestore from '@react-native-firebase/firestore';


export async function getCats(setPets) {
        setPets([]);
    const cats = [];
    const citiesRef = firestore().collection('animal')
    const snapshot = await citiesRef.where('tipoPet', '==', 'gato').get();    
    snapshot.forEach( (c) => {cats.push({key: c.id, ...c.data()} )})                                      
    setPets(cats);
    if (snapshot.empty) {
        <Text>Nenhum dado encontrado!</Text>
        return;
    }  
}

export async function getDogs(setPets) {
    setPets([]);
    const dogs = [];
    const citiesRef = firestore().collection('animal')
    const snapshot = await citiesRef.where('tipoPet', '==', 'cachorro').get();    
    snapshot.forEach( (d) => {dogs.push({key: d.id, ...d.data()} )})                                      
    setPets(dogs);
    if (snapshot.empty) {
    <Text>Nenhum dado encontrado!</Text>
    return;
    }  
}

export async function getBirds(setPets) {
    setPets([]);
    const birds = [];
    const citiesRef = firestore().collection('animal')
    const snapshot = await citiesRef.where('tipoPet', '==', 'passaros').get();    
    snapshot.forEach( (b) => {birds.push({key: b.id, ...b.data()} )})                                      
    setPets(birds);
    if (snapshot.empty) {
        <Text>Nenhum dado encontrado!</Text>
        return;
    }  
}

export async function getRodents(setPets) {
    setPets([]);
    const rodents = [];
    const citiesRef = firestore().collection('animal')
    const snapshot = await citiesRef.where('tipoPet', '==', 'roedores').get();    
    snapshot.forEach( (r) => {rodents.push({key: r.id, ...r.data()} )})                                      
    setPets(rodents);
    if (snapshot.empty) {
        <Text>Nenhum dado encontrado!</Text>
        return;
    }  
}

export async function getOthers(setPets) {
    setPets([]);
    const others = [];
    const citiesRef = firestore().collection('animal')
    const snapshot = await citiesRef.where('tipoPet', '==', 'outros').get();    
    snapshot.forEach( (o) => {others.push({key: o.id, ...o.data()} )})                                      
    setPets(others);
    if (snapshot.empty) {
        <Text>Nenhum dado encontrado!</Text>
        return;
    }  
}








