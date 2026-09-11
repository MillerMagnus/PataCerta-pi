const animais = [
  {
    id: 1,
    nome: "Luna",
    especie: "Gato",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "femea",
    cidade: "Aracatuba",
    status: "Disponivel"
  },
  {
    id: 2,
    nome: "Thor",
    especie: "Cachorro",
    porte: "Grande",
    idade: "10 meses",
    sexo: "macho",
    cidade: "Aracatuba",
    status: "Disponivel"
  },
  {
    id: 3,
    nome: "Zara",
    especie: "Gato",
    porte: "Pequeno",
    idade: "1 anos",
    sexo: "femea",
    cidade: "Aracatuba",
    status: "Disponivel"
  },
  {
    id: 4,
    nome: "Valkiria",
    especie: "Cadela",
    porte: "Grande",
    idade: "5 meses",
    sexo: "femea",
    cidade: "Aracatuba",
    status: "Disponivel"
  },
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