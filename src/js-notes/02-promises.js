import heroes, {owners} from './data/heroes.js';

// 01 - Function simulate a request api
const getHeroe = (index) => {
    return heroes.find((h) => h.id == index);
};

// 02 - Promises

const getHeroByIdAsync = (index) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroe(index);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("Heroe not found");
            }
        }, 2000);
    });
    return promesa;
}

// A - Execution
const promesa = getHeroByIdAsync(5);

promesa.then((h) => {
    console.log("SUCCESS", h);
}).catch((err) => {
    console.warn("ERROR", err);
});

const promesa2 = getHeroByIdAsync(51);

promesa2.then((h) => {
    console.log("SUCCESS", h);
}).catch(console.warn);