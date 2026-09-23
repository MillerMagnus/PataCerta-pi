
/* ----------------------------------------------------------------------------------------*/
/* CATALOGO */
const animais = [
  {
    id: 1,
    nome: "Shadow",
    especie: "Gato",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "Macho",
    cidade: "Guararapes",
    status: "Disponível",
    imagem: "/images/shadow.jpeg",
    descricao: "Luna é uma gata muito carinhosa e brincalhona. Ela adora receber atenção e se dá bem com outros animais. Ela foi encontrada abandonada .",
  },
  {
    id: 2,
    nome: "Thor",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "6 meses",
    sexo: "Macho",
    cidade: "Rubiácea",
    status: "Disponível",
    imagem:"/images/thor.jpeg"
  },
  {
    id: 3,
    nome: "Nala",
    especie: "Cachorro",
    porte: "Grande",
    idade: "2 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/nala.jpeg"
  },
  {
    id: 4,
    nome: "Biscoito",
    especie: "Gato",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/biscoito.jpeg"
  },
  {
    id: 5,
    nome: "Bisteca",
    especie: "Gato",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/bisteca.jpeg"
  },
  {
    id: 6,
    nome: "Miá",
    especie: "Cachorro",
    porte: "Medio",
    idade: "8 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/mia.jpeg"
  },
  {
    id: 7,
    nome: "Odin",
    especie: "Cachorro",
    porte: "Grande",
    idade: "1 anos",
    sexo: "Macho",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/odin.jpeg"
  },
  {
    id: 8,
    nome: "Gergolon",
    especie: "cachorro",
    porte: "Medio",
    idade: "7 meses",
    sexo: "Macho",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/gergolon.jpeg"
  },
  {
    id: 9,
    nome: "Nina",
    especie: "Gato",
    porte: "Pequeno",
    idade: "13 anos",
    sexo: "Fêmea",
    cidade: "Birigui",
    status: "Disponível",
    imagem: "/images/nina.jpeg"
  },
  {
    id: 10,
    nome: "Paçoca",
    especie: "Gato",
    porte: "Pequeno",
    idade: "5 anos",
    sexo: "Macho",
    cidade: "Birigui",
    status: "Disponível",
    imagem: "/images/paçoca.jpeg"
  },
  {
    id: 11,
    nome: "Chico Moedas",
    especie: "Porco-da-india",
    porte: "Pequeno",
    idade: "6 meses",
    sexo: "Macho",
    cidade: "Rubiácea",
    status: "Disponível",
    imagem: "/images/chico-moedas.jpeg"
  },
  {
    id: 12,
    nome: "Maya",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "4 anos",
    sexo: "Fêmea",
    cidade: "Rubiácea",
    status: "Disponível",
    imagem: "/images/maya.jpeg"
  },
  {
    id: 13,
    nome: "Banguela",
    especie: "Gato",
    porte: "Médio",
    idade: "5 anos",
    sexo: "Macho",
    cidade: "birigui",
    status: "Disponível",
    imagem: "/images/banguela.jpeg"
  },
  {
    id: 14,
    nome: "Diego Roberto",
    especie: "Cachorro",
    porte: "Médio",
    idade: "2 anos",
    sexo: "Macho",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/diego-roberto.jpeg"
  },
  {
    id: 15,
    nome: "Alice",
    especie: "Tartaruga",
    porte: "Pequeno",
    idade: "6 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/alice.jpeg"
  },
  {
    id: 16,
    nome: "Minina",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "8 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/Minina.jpeg"
  },
  {
    id: 17,
    nome: "Ivy",
    especie: "Gato",
    porte: "pequeno",
    idade: "10 meses",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/Ivy.jpeg"
  },
{
    id: 18,
    nome: "Vênus",
    especie: "Gato",
    porte: "Médio",
    idade: "2 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/Vênus.jpeg"
  },
  {
    id: 19,
    nome: "Megan Maria",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "9 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: "/images/megan-maria.jpeg"
  },



];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

/*----------------------------------------------------------------------------------------*/

const listaCardpet = document.querySelector("#cardpet");
  if (listaCardpet) {
  animais.forEach(animal => {
    const article = document.createElement ("article");
    article.dataset.id = animal.id;
    article.className = "caixapet";
    article.innerHTML = `
    <img src = "${animal.imagem}" alt ="${animal.nome}">
        <h2>${animal.nome}</h2>
        <p>${animal.especie}</p>
        <p>${animal.idade}</p>
            <p>${animal.status}</p>
            <a href="perfilpet.html?id=${animal.id}">
            <button> Ver detalhes</button>
            </a>
            <label class="favoritar"> 
            <input type="checkbox" name="favoritar" value="${animal.id}">
              <span class="star">♥</span>
            </label>
            <a href="formulario.html?id=${animal.id}">
            <button> adotar </button>
            </a>
            `;
            listaCardpet.appendChild(article);
  });
}
const checkboxes = document.querySelectorAll('input[name="favoritar"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change",() => {
    const id = checkbox.value;
    if ( checkbox.checked){
      if (!favoritos.includes(id)) {
        favoritos.push(id);
      }
    }
    else {
      favoritos = favoritos.filter( favorito => favorito !==id);
    }
    localStorage.setItem("favoritos",JSON.stringify(favoritos));
  });
});
  const quantidade = document.getElementById("contAnimais");
  if (quantidade) {
    quantidade.textContent = animais.length;
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[name="favoritar"]');
    checkboxes.forEach(checkbox => {
      const id = checkbox.value;  
      if (favoritos.includes(id)) {
        checkbox.checked = true; }
        else {
          checkbox.checked = false;
      } 
    });
});
  }
const listaCatalogoPet = document.querySelector("#perfilpet");
if (listaCatalogoPet){

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const animal = animais.find(animal => animal.id === id);

if (animal) {
  listaCatalogoPet.innerHTML = `
    <img src="${animal.imagem}" alt="${animal.nome}">
    <h2>${animal.nome}</h2>
    <p>${animal.especie}</p>
    <p>${animal.idade}</p>
    <p>${animal.porte}</p>
    <p>${animal.sexo}</p>
    <p>${animal.cidade}</p>
    <p>${animal.status}</p>
    <p>${animal.descricao}</p>
  `;
}
}

const paginaFav = document.querySelector("#favoritos");
if (paginaFav) {
  const animaisFav = animais.filter (animal => favoritos.includes(String(animal.id)));
  animaisFav.forEach(animal => {
    paginaFav.innerHTML += `<article>
      <img src = "${animal.imagem}" alt="${animal.nome}"></img>
      <h2> ${animal.nome}</h2>
      <p>${animal.especie}</p>
    </article>`;
  });
}
const formulario = document.querySelector("#formAdocao");
if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const dadosFormulario = new FormData(formulario);
    const solicitacao = Object.fromEntries(dadosFormulario.entries());
    const params = new URLSearchParams(window.location.search);
    const idAnimal = Number(params.get("id"));
    const animal = animais.find(animal => animal.id === idAnimal);
    if (animal) {
      solicitacao.animalId = animal.id;
      solicitacao.animalNome = animal.nome;
      solicitacao.animalEspecie = animal.especie;
      solicitacao.animalIdade = animal.idade;
      solicitacao.animalImagem = animal.imagem;
      solicitacao.animalCidade = animal.cidade;
    }
    let solicitacoes = JSON.parse(
      localStorage.getItem("solicitacoes")
    ) || [];
    solicitacoes.push(solicitacao);
    localStorage.setItem(
      "solicitacoes",
      JSON.stringify(solicitacoes)
    );
    alert("Solicitação enviada com sucesso!");
    window.location.href = "solicitacoes.html";
  });
}
const ListaSoli = document.querySelector("#solis");

if (ListaSoli) {
  const solicitacoes =
    JSON.parse(localStorage.getItem("solicitacoes")) || [];

  solicitacoes.forEach((solicitacao, index) => {
    const article = document.createElement("article");

    article.className = "card-solicitacao";

    article.innerHTML = `
      <div class="card-animal">

        ${
          solicitacao.animalImagem
            ? `<img src="${solicitacao.animalImagem}" alt="${solicitacao.animalNome}">`
            : `<div class="sem-imagem">🐾</div>`
        }

        <div class="info-animal">
          <h2>${solicitacao.animalNome || "Animal não especificado"}</h2>

          <p>
            <strong>Espécie:</strong>
            ${solicitacao.animalEspecie || "-"}
          </p>

          <p>
            <strong>Idade:</strong>
            ${solicitacao.animalIdade || "-"}
          </p>

          <p>
            <strong>Cidade:</strong>
            ${solicitacao.animalCidade || "-"}
          </p>

          <p>
            <strong>Status:</strong>
            Solicitação enviada
          </p>
        </div>

      

      <hr>

      <div class="dados-solicitante">
        <h3>Dados do solicitante</h3>

        <p><strong>Nome:</strong> ${solicitacao.nome}</p>
        <p><strong>Email:</strong> ${solicitacao.email}</p>
        <p><strong>Telefone:</strong> ${solicitacao.telefone}</p>
        <p><strong>Endereço:</strong> ${solicitacao.endereco}</p>
      </div>
      </div>
    `;

    ListaSoli.appendChild(article);
  });
}