# Generador de Contraseñas

Este proyecto es una aplicación web simple que permite generar contraseñas de manera aleatoria, además de clasificar su fortaleza en "Débil", "Mediana" o "Fuerte" según ciertos criterios. La aplicación está construida con HTML, CSS y JavaScript.

## Características

- Generación de contraseñas aleatorias con caracteres alfanuméricos y caracteres especiales.
- Clasificación de la fortaleza de la contraseña en tres niveles: **Débil**, **Mediana** y **Fuerte**.
- Opciones para establecer la longitud de la contraseña.
- Interfaz limpia y moderna con diseño responsivo.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del contenido de la página.
- **CSS3**: Para el diseño y estilo visual de la página.
- **JavaScript**: Para la lógica de generación de contraseñas y verificación de su fortaleza.

## Instrucciones de Uso

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. Introduce la cantidad de caracteres que deseas para la contraseña en el campo "Cantidad".
4. Haz clic en el botón **Generar** para crear una contraseña aleatoria.
5. La contraseña generada se mostrará en el campo correspondiente y su fortaleza aparecerá debajo.
6. Para limpiar el campo de contraseña, haz clic en el botón **Limpiar**.

## Criterios de Fortaleza de la Contraseña

- **Débil**: Si la contraseña tiene menos de 2 mayúsculas, menos de 2 minúsculas, menos de 2 números, y menos de 1 carácter especial.
- **Mediana**: Si la contraseña tiene al menos 2 mayúsculas, 2 minúsculas, 2 números y al menos 1 carácter especial.
- **Fuerte**: Si la contraseña cumple con todos los criterios anteriores y tiene una longitud de al menos 12 caracteres.

## Archivos

- `index.html`: Estructura HTML del proyecto.
- `assets/style.css`: Estilos CSS para el diseño de la página.
- `main.js`: Lógica JavaScript para generar la contraseña y verificar su fortaleza.
- `README.md`: Documento de descripción del proyecto.

## Vista Previa

![Vista Previa](img/preview.png)

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, crear una nueva rama con tus cambios y luego enviar un pull request.

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz tus cambios y haz commit de los mismos (`git commit -am 'Añadir nueva funcionalidad'`).
4. Empuja los cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

