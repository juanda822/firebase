import { db } from "../firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export default function original() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Buscar Pokémon y Guardar un Dato</h2>
        <form id="formPokemon">
            <input type="text" id="pokemon" placeholder="Nombre del Pokémon" required />
            <button type="submit">Buscar y Guardar</button>
        </form>

        <div id="resultado"></div>
    `;

    document.getElementById("formPokemon").addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("pokemon").value.toLowerCase();

        try {
            // 1️⃣ Consultar API existente
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
            
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }

            const data = await response.json();

            // 2️⃣ Extraer DATO ESPECÍFICO (ejemplo: peso)
            const peso = data.weight;

            // 3️⃣ Mostrar información en pantalla
            document.getElementById("resultado").innerHTML = `
                <p><strong>Pokémon:</strong> ${data.name}</p>
                <p><strong>Peso:</strong> ${peso}</p>
            `;

            // 4️⃣ Guardar el dato en Firestore
            await addDoc(collection(db, "pokemonDatos"), {
                nombre: data.name,
                peso: peso,
                fecha: new Date()
            });

            alert("Peso guardado en Firestore correctamente");

        } catch (error) {
            alert("Error: " + error.message);
        }
    });
}
