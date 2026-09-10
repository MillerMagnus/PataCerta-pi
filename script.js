const animais = [
  {
    id: 1,
    nome: "Luna",
    especie: "Gato",
    porte: "Pequeno",
    idade: 2,
    sexo: "femea",
    cidade: "Aracatuba",
    status: "Disponivel"
  }
];
 const lista = document.querySelector("#cardpet");
  animais.forEach(animal => {
    const article = document.createElement ("article");
    article.dataset.id = animal.id;
    article.innerHTML = `<img src = "${animal.imagem}" alt ="${animal.nome}">
        <h2>${animal.nome}</h2>
        <p>${animal.especie}</p>
         <p>${animal.idade}</p>
          <p>${animal.porte}</p>
            <p>${animal.sexo}</p>
            <p>${animal.cidade}</p>
            <p>${animal.status}</p>
            <button> Ver detalhes</button>
            `;
            lista.appendChild(article);
  });