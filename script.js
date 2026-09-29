// --- 1. Lógica del botón "No" escurridizo ---
const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');

// Función para mover el botón de lugar
const moverBoton = () => {
    btnNo.style.position = 'fixed';
    
    // Dimensiones seguras para que no se salga de la pantalla
    const maxX = window.innerWidth - btnNo.clientWidth - 20;
    const maxY = window.innerHeight - btnNo.clientHeight - 20;
    
    // Generar coordenadas aleatorias
    const randomX = Math.floor(Math.random() * maxX) + 10;
    const randomY = Math.floor(Math.random() * maxY) + 10;
    
    // Aplicar nuevas coordenadas
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
};

// El botón huye si pasa el mouse por encima o si intenta hacer click en móvil
btnNo.addEventListener('mouseover', moverBoton);
btnNo.addEventListener('click', moverBoton);

// --- 2. Lógica del botón "Sí" ---
btnSi.addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! ❤️ Nos vemos el 30 de septiembre para seguir creciendo juntos.');
});

// --- 3. Lógica del Carrusel de Imágenes ---
// Asegúrate de que los nombres coincidan exactamente con tus archivos
const imagenes = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg'
];

let indiceActual = 0;
const imgElement = document.getElementById('imagen-actual');

// Cambia la imagen cada 3.5 segundos
setInterval(() => {
    // Efecto de fade out
    imgElement.style.opacity = 0; 
    
    setTimeout(() => {
        // Cambiar la fuente de la imagen mientras está invisible
        indiceActual = (indiceActual + 1) % imagenes.length;
        imgElement.src = imagenes[indiceActual];
        
        // Efecto de fade in
        imgElement.style.opacity = 1; 
    }, 500); 
    
}, 3500);