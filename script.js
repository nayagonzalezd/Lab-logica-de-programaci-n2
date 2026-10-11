
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const entrada = document.getElementById("celsius").value;

    const error = document.getElementById("error");
    const resultadoKelvin = document.getElementById("kelvin");
    const resultadoFahrenheit = document.getElementById("fahrenheit");

    // Limpiar resultados anteriores
    error.textContent = "";
    resultadoKelvin.textContent = "---";
    resultadoFahrenheit.textContent = "---";

    // Validar la entrada
    if (entrada.trim() === "" || !Number.isFinite(Number(entrada))) {
        error.textContent = "Error: ingresa un número válido.";
        return;
    }

    // Convertir el valor ingresado a número
    const celsius = Number(entrada);

    // Realizar las conversiones
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Mostrar los resultados con dos decimales
    resultadoKelvin.textContent = kelvin.toFixed(2);
    resultadoFahrenheit.textContent = fahrenheit.toFixed(2);
});

