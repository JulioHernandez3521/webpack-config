import '../css/components.css';
// import weblog from '../assets/img/webpack-logo.png';

export const saludar = (nombre) =>{
    console.log('Creando saludo')
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!!`;
    
    document.body.append(h1);

    // const img = document.createElement('img');
    // img.src = weblog;
    // document.body.append(img);
}