
/* ----------------------------------------------------------------------------------------*/
/* CATALOGO */
const animais = [
  {
    id: 1,
    nome: "Shadow",
    especie: "cachorro",
    porte: "Pequeno",
    idade: "2 anos",
    sexo: "Macho",
    cidade: "Guararapes",
    status: "Disponível",
    imagem: "/images/shadow.jpeg",
    descricao: "Shadow é um companheiro de pequeno porte cheio de carinho para oferecer. Ele procura uma família que possa lhe dar atenção, segurança e muitos momentos felizes."
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
    imagem:"/images/thor.jpeg",
    descricao: "Com apenas 6 meses, Thor ainda tem muita coisa para descobrir! É uma ótima companhia para quem quer acompanhar de perto o crescimento e as aventuras de um novo amigo."
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
    imagem: "/images/nala.jpeg",
    descricao: "Nala tem um coração enorme e está pronta para encontrar uma família que enxergue além do seu tamanho. Ela merece um lar onde possa se sentir protegida e muito amada."
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
    imagem: "/images/biscoito.jpeg",
    descricao: "Biscoito está esperando alguém que queira dividir a casa com uma companheira especial. Com seu jeitinho felino, ela pode transformar pequenos momentos do dia em boas lembranças."
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
    imagem: "/images/bisteca.jpeg",
    descricao: "Bisteca procura um cantinho para chamar de seu. Uma caminha confortável, carinho e uma família responsável podem ser tudo o que ela precisa para começar uma nova história."
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
    imagem: "/images/mia.jpeg",
    descricao: "Miá já viveu bastante e agora merece aproveitar uma fase tranquila ao lado de uma família. Ela procura alguém disposto a oferecer o carinho e a companhia que todo cão merece."
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
    imagem: "/images/odin.jpeg",
     descricao: "Odin é jovem, grande e tem toda uma vida pela frente. Ele está procurando uma família preparada para compartilhar espaço, brincadeiras e muitos momentos de companheirismo."
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
    imagem: "/images/gergolon.jpeg",
    descricao: "Gergolon ainda é um filhote e está naquela fase de aprender sobre o mundo. Com paciência, cuidado e muito carinho, ele pode crescer ao lado de uma família para a vida toda."
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
    imagem: "/images/nina.jpeg",
    descricao: "Nina tem 13 anos e merece que sua idade seja vista como uma história, não como um obstáculo. Ela procura um lar tranquilo onde possa receber atenção, cuidado e muito amor."
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
    imagem: "/images/paçoca.jpeg",
    descricao: "Paçoca está pronto para ganhar uma nova família. Aos 5 anos, ele ainda tem muitos ronrons, descobertas e momentos de companhia para compartilhar com quem decidir adotá-lo."
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
    imagem: "/images/chico-moedas.jpeg",
     descricao: "Chico Moedas é pequeno no tamanho, mas pode ocupar um espaço enorme no coração da família. Ele procura um lar responsável que ofereça os cuidados e a atenção que precisa."
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
    imagem: "/images/maya.jpeg",
        descricao: "Maya procura uma segunda chance para viver cercada de carinho. Seu novo lar pode ser o começo de uma história cheia de companheirismo, segurança e momentos especiais."
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
    imagem: "/images/banguela.jpeg",
     descricao: "Banguela está procurando alguém para dividir a rotina e conquistar aos poucos. Ele merece um lar responsável, confortável e cheio de espaço para ser simplesmente ele mesmo."
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
    imagem: "/images/diego-roberto.jpeg",
      descricao: "Diego Roberto é jovem e está pronto para começar uma nova fase. Ele procura uma família que queira transformar sua chegada em uma amizade para muitos anos."
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
    imagem: "/images/alice.jpeg",
    descricao: "Alice procura um lar onde possa viver com tranquilidade e receber todos os cuidados necessários. Para quem gosta de animais diferentes, ela pode ser uma companheira muito especial."
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
    imagem: "/images/Minina.jpeg",
    descricao: "Minina já passou por muitos anos de vida e agora procura aquilo que todo animal merece: um lar seguro, uma rotina tranquila e alguém que escolha cuidar dela todos os dias."
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
    imagem: "/images/Ivy.jpeg",
    descricao: "Ivy ainda é bem novinha e tem uma vida inteira pela frente. Ela procura uma família que queira acompanhar suas descobertas e fazer parte de seu crescimento."
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
    imagem: "/images/Vênus.jpeg",
    descricao: "Vênus está esperando por alguém que queira abrir espaço para uma nova integrante na família. Ela merece um lar onde possa se sentir segura, querida e parte da rotina."
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
    imagem: "/images/megan-maria.jpeg",
    descricao: "Megan Maria tem 9 anos e ainda tem muito amor para dar. Ela procura uma família que valorize sua companhia e queira proporcionar a ela uma vida tranquila e cheia de carinho."
  },



];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

/*----------------------------------------------------------------------------------------*/

const listaCardpet = document.querySelector("#cardpet");
function mostrarAnimais(animais) {
  if (!listaCardpet)return;
  listaCardpet.innerHTML = "";
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
mostrarAnimais(animais);

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
     <button> adotar </button>
            </a>
  `;
}
}

const paginaFav = document.querySelector("#favoritos");
if (paginaFav) {
  const animaisFav = animais.filter (animal => favoritos.includes(String(animal.id)));
  animaisFav.forEach(animal => {
    paginaFav.innerHTML += `<article class="card-favorito">
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
 const barrapesquisa = document.getElementById("pesquisar");
 let filtroAtual = "all";
 barrapesquisa.addEventListener("input", () => {
    aplicarFiltros();
 });
 function aplicarFiltros() {
 const termoPesquisa = barrapesquisa.value.toLowerCase().trim();
 const animaisFiltrados = animais.filter(animal => {
  const especieOk = 
  filtroAtual === "all" ||
  (filtroAtual === "cachorro" && animal.especie.toLowerCase() === "cachorro") ||
 (filtroAtual === "gato" && animal.especie.toLowerCase() === "gato");
  const pesquisaOk = 
  animal.nome.toLowerCase().includes(termoPesquisa) ||
  animal.especie.toLowerCase().includes(termoPesquisa);
  return especieOk && pesquisaOk;
 });
 mostrarAnimais(animaisFiltrados);
}