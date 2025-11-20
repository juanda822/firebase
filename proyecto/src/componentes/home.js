export default function mostrarHome() {
    const app = document.getElementById("app");

    app.innerHTML = "<h2>Datos del API</h2><p>Cargando...</p>";

    // API real (ejemplo)
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(res => res.json())
        .then(data => {
            app.innerHTML = `
                <h2>Datos del API</h2>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Peso:</strong> ${data.weight}</p>
                <p><strong>Altura:</strong> ${data.height}</p>
            `;
        })
        .catch(err => {
            app.innerHTML = "<p>Error cargando API: " + err + "</p>";
        });
}
