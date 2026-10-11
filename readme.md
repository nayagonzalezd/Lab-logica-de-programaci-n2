# Conversor de Temperatura

## Descripción
Este proyecto convierte una temperatura ingresada en grados Celsius a grados Kelvin y Fahrenheit utilizando JavaScript.

El programa valida que el dato ingresado sea numérico. Si el usuario ingresa un valor incorrecto, muestra un mensaje de error y vuelve a solicitar la temperatura.

## Fórmulas utilizadas
- **Kelvin:** Celsius + 273.15
- **Fahrenheit:** (Celsius × 9 / 5) + 32

## Algoritmo
1. Solicitar la temperatura en grados Celsius.
2. Validar que el dato ingresado sea numérico.
3. Si el dato no es válido, mostrar un mensaje de error y volver a solicitarlo.
4. Convertir el dato a tipo numérico.
5. Calcular la temperatura en Kelvin y Fahrenheit.
6. Mostrar los resultados en la consola.

## Pseudocódigo

INICIO

    REPETIR
        Mostrar "Ingresa la temperatura en Celsius"
        Leer temperatura

        SI temperatura no es un número ENTONCES
            Mostrar "Error: ingresa un número válido"
        FIN SI

    HASTA QUE temperatura sea válida

    Convertir temperatura a número

    kelvin = temperatura + 273.15
    fahrenheit = (temperatura * 9 / 5) + 32

    Mostrar "Grados Kelvin: ", kelvin
    Mostrar "Grados Fahrenheit: ", fahrenheit

FIN

## Tecnologías utilizadas
- HTML
- JavaScript

## Pruebas realizadas

| Celsius | Kelvin | Fahrenheit |
|---:|---:|---:|
| 45 | 318.15 | 113 |
| 14 | 287.15 | 57.2 |

## Ejecución
Abrir el archivo `index.html` en el navegador y seguir las instrucciones para ingresar la temperatura.