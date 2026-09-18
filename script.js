
/* ----------------------------------------------------------------------------------------*/
/* CATALOGO */
const animais = [
  {
    id: 1,
    nome: "Shadow",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "Macho",
    cidade: "Guararapes",
    status: "Disponível",
    imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/Tomilho-Lucy-M.jpg",
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
    imagem:""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
  },
  {
    id: 16,
    nome: "Menina",
    especie: "Cachorro",
    porte: "Pequeno",
    idade: "8 anos",
    sexo: "Fêmea",
    cidade: "Araçatuba",
    status: "Disponível",
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
    imagem: ""
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
              <span class="checkmark"></span>
            </label>
            <a href="solicitacoes.html?id=${animal.id}">
            <button> adotar </button>
            </a>
            <label class="adotar"><input type="button" name="adotar" value="${animal.id}"></label>
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
 const quantidade = document.getElementById("contAnimais");
 quantidade.textContent = animais.length;
 
