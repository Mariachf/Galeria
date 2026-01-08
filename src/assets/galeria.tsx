import Bahiaimg from './Cidade/Bahia.jpg';
import Cearáimg from './Cidade/ceará.jpg';
import Minasimg from './Cidade/minas gerais.webp';
import sãoPauloimg from './Cidade/são paulo.jpg' ;


import azaleiasimg from './Flores/azaleas.webp';
import orquideasimg from './Flores/orquidea.jpg';
import girassolimg from './Flores/girassol.jpg';
import rosasimg from './Flores/rosas.webp';

import cachorroimg from './Pets/cachorro.jpg';
import gatoimg from './Pets/gato.avif';
import hamstersimg from './Pets/hamsters.webp';
import cavaloimg from './Pets/cavalo.jpg';

const Bahia = {
    img: Bahiaimg,
    alt: 'Imagem da Bahia',
    title: 'Bahia',
    navagacao: 'Cidades'
};

const Ceará = {
    img: Cearáimg,
    alt: 'Imagem do Ceará',
    title: 'Ceará',
    navagacao: 'Cidades'
};

const Minas = {
    img: Minasimg,
    alt: 'Imagem de Minas Gerais',
    title: 'Minas Gerais',
    navagacao: 'Cidades'
};

const sãoPaulo = {
    img: sãoPauloimg,
    alt: 'Imagem de São Paulo',
    title: 'São Paulo',
    navagacao: 'Cidades'
};



const azaleas = {
    img: azaleiasimg,
    alt: 'Imagem de Azaleias',
    title: 'Azaleias',
    navagacao: 'Flores'
};

const orquideas = {
    img: orquideasimg,
    alt: 'Imagem de Orquídeas',
    title: 'Orquídeas',
    navagacao: 'Flores'
};

const girassol = {
    img: girassolimg,
    alt: 'Imagem de Girassol',
    title: 'Girassol',
    navagacao: 'Flores'
};

const rosas = {
    img: rosasimg,
    alt: 'Imagem de rosas',
    title: 'Rosas',
    navagacao: 'Flores'
};




const cachorro = {
    img: cachorroimg,
    alt: 'Imagem de um cachorro',
    title: 'Cachorro',
    navagacao: 'Pets'
};

const gato = {
    img: gatoimg,
    alt: 'Imagem de um gato',
    title: 'Gato',
    navagacao: 'Pets'
};

const hamsters = {
    img: hamstersimg,
    alt: 'Imagem de hamsters',
    title: 'Hamsters',
    navagacao: 'Pets'
};

const cavalo = {
    img: cavaloimg,
    alt: 'Imagem de um cavalo',
    title: 'Cavalo',
    navagacao: 'Pets'
};

export const pets = [
    cachorro,
    gato,
    hamsters,
    cavalo
];

export const flores = [
    azaleas,
    orquideas,
    girassol,
    rosas
];

export const cidades = [
    sãoPaulo,
    Minas,
    Ceará,
    Bahia

];