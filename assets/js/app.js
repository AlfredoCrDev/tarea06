document.addEventListener("DOMContentLoaded", function (event) {
    axiosData();
});

const mostrarPoke = document.getElementById("pokemones");

const axiosData = async () => {
    try {
        const request = await axios("https://pokeapi.co/api/v2/pokemon/");
        const data = request.data;
        dataPokemones(data.results)
    } catch (err) {
        console.log(err)
    }
}

const dataPokemones = async (data) => {
    try {
        for (index of data) {
            const response = await fetch(index.url);
            const results = await response.json();

            let card = "";
            const container = document.createElement("div");
            container.setAttribute("id", "container");
            container.setAttribute("class", "container");
            card = `<img class="container__img" src=${results.sprites.other.home.front_default}>
            <p class ="container__paragrah">${results.name}</p>`
            mostrarPoke.appendChild(container);
            container.innerHTML = card;
        }
    } catch (err) {
        console.log(err)
    }
}