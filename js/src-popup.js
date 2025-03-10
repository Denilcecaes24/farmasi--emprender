// Función para abrir el popup con el efecto deslizante y fade
function openPopup() {
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");

    popup.style.display = "flex";
    setTimeout(function() {
        popup.style.top = "0"; // El popup se desliza desde arriba
        popup.style.opacity = "1"; // Hace que el popup se desvanezca (fade in)
        popupContent.style.opacity = "1"; // Hace que el contenido también se desvanezca (fade in)
    }, 10); // El pequeño retraso es para asegurar que la animación ocurra
}

// Función para cerrar el popup con el efecto deslizante y fade
function closePopup() {
    var popup = document.getElementById("popup");
    var popupContent = document.querySelector(".popup-content");

    popup.style.top = "-100%"; // El popup se desliza hacia arriba
    popup.style.opacity = "0"; // Hace que el popup se desvanezca (fade out)
    popupContent.style.opacity = "0"; // Hace que el contenido también se desvanezca (fade out)
    
    setTimeout(function() {
        popup.style.display = "none"; // Oculta el popup después de la animación
    }, 500); // Tiempo de espera para que la animación se complete antes de ocultarlo
}

// popup 2

 // Función para abrir el popup con el efecto deslizante y fade
 function openPopupTer() {
    var popup = document.getElementById("popup2");
    var popupContent = document.querySelector(".popup-content2");

    // Hacer que el body no pueda desplazarse
    document.body.classList.add('no-scroll');
    
    popup.style.display = "flex";
    setTimeout(function() {
        popup.style.top = "0"; // El popup se desliza desde arriba
        popup.style.opacity = "1"; // Hace que el popup se desvanezca (fade in)
        popupContent.style.opacity = "1"; // Hace que el contenido también se desvanezca (fade in)
    }, 10); // El pequeño retraso es para asegurar que la animación ocurra
}

// Función para cerrar el popup con el efecto deslizante y fade
function closePopupTer() {
    var popup = document.getElementById("popup2");
    var popupContent = document.querySelector(".popup-content2");

    popup.style.top = "-100%"; // El popup se desliza hacia arriba
    popup.style.opacity = "0"; // Hace que el popup se desvanezca (fade out)
    popupContent.style.opacity = "0"; // Hace que el contenido también se desvanezca (fade out)

    // Hacer que el body pueda desplazarse nuevamente
    setTimeout(function() {
        document.body.classList.remove('no-scroll');
    }, 500); // Después de que la animación termine, habilitar el scroll del body
    
    setTimeout(function() {
        popup.style.display = "none"; // Oculta el popup después de la animación
    }, 500); // Tiempo de espera para que la animación se complete antes de ocultarlo
}


// popup 3

 // Función para abrir el popup con el efecto deslizante y fade
 function openPopupTer2() {
    var popup = document.getElementById("popup3");
    var popupContent = document.querySelector(".popup-content3");

    // Hacer que el body no pueda desplazarse
    document.body.classList.add('no-scroll');
    
    popup.style.display = "flex";
    setTimeout(function() {
        popup.style.top = "0"; // El popup se desliza desde arriba
        popup.style.opacity = "1"; // Hace que el popup se desvanezca (fade in)
        popupContent.style.opacity = "1"; // Hace que el contenido también se desvanezca (fade in)
    }, 10); // El pequeño retraso es para asegurar que la animación ocurra
}

// Función para cerrar el popup con el efecto deslizante y fade
function closePopupTer2() {
    var popup = document.getElementById("popup3");
    var popupContent = document.querySelector(".popup-content3");

    popup.style.top = "-100%"; // El popup se desliza hacia arriba
    popup.style.opacity = "0"; // Hace que el popup se desvanezca (fade out)
    popupContent.style.opacity = "0"; // Hace que el contenido también se desvanezca (fade out)

    // Hacer que el body pueda desplazarse nuevamente
    setTimeout(function() {
        document.body.classList.remove('no-scroll');
    }, 500); // Después de que la animación termine, habilitar el scroll del body
    
    setTimeout(function() {
        popup.style.display = "none"; // Oculta el popup después de la animación
    }, 500); // Tiempo de espera para que la animación se complete antes de ocultarlo
}
