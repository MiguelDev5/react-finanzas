// 01 - API config
const API_KEY = 'xc5g1Ho0oNFigNg6ZeVG6IOWQBXD0gQr';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

// 02 - Manage promises
peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        // console.log(url);
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);
    })
    .catch(console.error);

// 03 - Async Await

export const getImagen = async() => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
        const {data} =  await resp.json();
        // console.log("data", data);
        const {url} = data.images.original;

        return url;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);
    }catch (e) {
        // ERRORS
    }
}