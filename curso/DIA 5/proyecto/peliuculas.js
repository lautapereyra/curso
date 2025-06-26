function recomendar(genero) {
    
    let elementoResultado = document.getElementById("resultado");
    let edad = parseInt(document.getElementById("edad").value);

    switch (genero) {
        case "comedia":
            if (edad >= 16) {
                elementoResultado.textContent = "The Wolf of Wall Street";
            }
            else {
                if (edad >= 13 && edad < 16) {
                    elementoResultado.textContent = "The Truman Show";
                }
                else {
                    elementoResultado.textContent = "Back to the Future";
                }
                break;
            }
        break;
        case "crimen":
            if (edad >= 16) {
                elementoResultado.textContent = "The Godfather";
            }
            else {
                if (edad >= 13 && edad < 16) {
                    elementoResultado.textContent = "El secreto de sus ojos";
                }
                else {
                    elementoResultado.textContent = "No hay peliculas ATP";
                }
                break;
            }
        break;
        case "drama":
            if (edad >= 16) {
                elementoResultado.textContent = "Taxi Driver";
            }
            else {
                if (edad >= 13 && edad < 16) {
                    elementoResultado.textContent = "The Shawshank Redemption";
                }
                else {
                    elementoResultado.textContent = "Casablanca";
                }
                break;
            }
        break; case "musical":
            if (edad >= 16) {
                elementoResultado.textContent = "The Rocky Horror Picture Show";
            }
            else {
                if (edad >= 13 && edad < 16) {
                    elementoResultado.textContent = "Les Miserables";
                }
                else {
                    elementoResultado.textContent = "La La Land";
                }
                break;
            }
        break;
    }
}