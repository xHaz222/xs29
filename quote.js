// Array de frases motivacionales
const quotes = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "Lo único imposible es aquello que no intentas.",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños.",
    "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
    "No cuentes los días, haz que los días cuenten."
];

// Función para mostrar la frase del día con efecto
function displayDailyQuote() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);  // Calcula el día del año
    const quoteIndex = dayOfYear % quotes.length; // Asegura que la frase se repita después de un año

    const quoteElement = document.getElementById("quoteText");

    // Desvanecer la frase antes de cambiarla
    quoteElement.style.opacity = '0';
    setTimeout(function() {
        quoteElement.textContent = quotes[quoteIndex];
        quoteElement.style.opacity = '1'; // Vuelve a aparecer con la animación
    }, 500); // Espera 500ms antes de cambiar el texto
}

// Mostrar la frase cuando la página cargue
window.onload = function() {
    displayDailyQuote();
};
