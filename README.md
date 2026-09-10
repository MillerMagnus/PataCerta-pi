# PataCerta-pi
PI Front End Senac UC5




-----------------------------------------




PROJETO INTEGRADOR  |  FRONT-END
Pata Certa
Portal de adoção responsável de animais
DOCUMENTO DE APOIO - GRUPO 1
INTEGRANTES
Mariana Ferreira Sapateiro
Muller Ribeiro Bueno
Felipe Adonis Tedeschi Colturato
HTML  |  CSS  |  JAVASCRIPT  |  DOM  |  LOCALSTORAGE
Docente: Isabella Frederico Celestrino
 
1. Como usar este documento
Importante: este material orienta o planejamento e define o mínimo esperado. Ele não entrega uma solução pronta. As decisões de identidade, organização do código e detalhes da experiência pertencem ao grupo.

Projeto: Pata Certa - Portal de adoção responsável de animais
Repositório sugerido: pi-front-end-pata-certa
Escopo: Aplicação front-end, sem banco de dados ou autenticação real. Os registros do usuário serão simulados no navegador.
Regra de participação: Todos os integrantes devem compreender o fluxo completo e ser capazes de explicar o código apresentado.
2. Situação-problema
Protetores independentes e organizações de cuidado animal precisam divulgar animais disponíveis para adoção de maneira clara, organizada e segura. Muitas informações ficam espalhadas em redes sociais, dificultando a busca de quem deseja adotar e o acompanhamento das manifestações de interesse.
Objetivo da solução
Criar uma aplicação front-end que apresente animais disponíveis, ajude o visitante a localizar um perfil compatível e permita registrar, de forma simulada, o interesse pela adoção.
Público principal: Pessoas interessadas em adoção responsável, protetores independentes e organizações locais.
Cenário de sucesso: Ao final, o usuário deverá encontrar um animal, consultar seu perfil, salvá-lo como favorito, enviar uma manifestação de interesse válida e visualizar a solicitação salva no próprio navegador.
3. Fluxo principal do usuário
1.	Acessar a página inicial e compreender a proposta de adoção responsável.
2.	Explorar o catálogo e pesquisar ou filtrar os animais disponíveis.
3.	Abrir o perfil de um animal e analisar suas características.
4.	Adicionar o animal aos favoritos ou iniciar o processo de interesse.
5.	Preencher o formulário, receber uma confirmação e acompanhar a solicitação salva.
Critério de integração: o fluxo acima deverá funcionar de ponta a ponta. Não basta criar telas bonitas se os dados, botões e retornos não estiverem conectados.

4. Mapa mínimo de telas
O grupo poderá trabalhar com páginas HTML separadas ou com seções exibidas dinamicamente. Em qualquer opção, o usuário precisa saber onde está e como retornar.
Tela	Conteúdo principal	Interação esperada
Início	Apresentação do projeto, chamada para adoção e destaques.	Botão para conhecer os animais e indicadores gerais.
Catálogo	Cards dos animais disponíveis.	Busca por nome e filtros por espécie, porte e localização.
Perfil do animal	Fotos, idade, porte, comportamento, cuidados e status.	Favoritar ou iniciar manifestação de interesse.
Favoritos	Animais marcados pelo usuário.	Remover favorito ou abrir o perfil novamente.
Quero adotar	Formulário com dados do interessado e perguntas de responsabilidade.	Validar, enviar e exibir confirmação na página.
Minhas solicitações	Lista das manifestações registradas.	Consultar dados e cancelar uma solicitação simulada.

5. Funcionalidades obrigatórias
Os requisitos abaixo representam o núcleo avaliável do projeto. Melhorias extras só devem ser iniciadas depois que todos eles estiverem integrados e testados.
ID	Requisito obrigatório	Como demonstrar que funciona
RF01	Apresentar uma página inicial clara	A proposta, o público e a ação principal ficam compreensíveis sem explicação externa.
RF02	Renderizar o catálogo pelo JavaScript	No mínimo 8 animais são criados a partir de um array de objetos, sem duplicação manual de cards no HTML.
RF03	Permitir busca e filtros combináveis	O usuário pesquisa por nome e filtra pelo menos por espécie e porte; a lista é atualizada na própria página.
RF04	Exibir o perfil completo do animal	O perfil mostra informações coerentes e o animal selecionado permanece identificável.
RF05	Gerenciar favoritos	Adicionar e remover favoritos atualiza a interface e persiste no localStorage.
RF06	Validar o formulário de interesse	Campos obrigatórios, contato e aceite de responsabilidade são verificados antes do envio.
RF07	Salvar a manifestação de interesse	A solicitação recebe identificador, data, animal relacionado e fica disponível após atualizar a página.
RF08	Exibir e cancelar solicitações	O usuário visualiza os registros e confirma antes de cancelar um item.
RF09	Tratar estados da interface	Há mensagens visíveis para lista vazia, filtro sem resultado, erro de formulário e operação concluída.
RF10	Manter navegação funcional	Links, botões, formulários e retornos entre telas funcionam sem erros no Console.

6. Requisitos técnicos comuns
6.	Separar estrutura, aparência e comportamento em arquivos próprios: HTML, CSS e JavaScript.
7.	Usar HTML semântico, títulos em ordem lógica, labels associados aos campos e textos alternativos nas imagens.
8.	Organizar o layout com Box Model e Flexbox; a interface não pode esconder ou estourar conteúdo em telas menores.
9.	Criar os itens principais da aplicação a partir de arrays de objetos e renderizá-los no DOM.
10.	Usar funções com responsabilidades claras e nomes que indiquem a ação realizada.
11.	Trabalhar eventos de clique, envio de formulário e alteração ou digitação em filtros.
12.	Exibir resultados, erros e confirmações na própria página; o Console deve servir para investigação, não como interface final.
13.	Validar os dados antes de salvar e impedir ações incompatíveis com as regras do projeto.
14.	Usar localStorage para os registros do usuário e converter dados com JSON.stringify e JSON.parse.
15.	Manter o Console do navegador sem erros durante o fluxo principal.
Organização sugerida de arquivos
nome-do-projeto/
  index.html
  pages/
  css/style.css
  js/dados.js
  js/app.js
  assets/imagens/
  README.md
Atenção aos caminhos: se o grupo criar subpastas, deverá ajustar corretamente os caminhos de CSS, JavaScript, imagens e links entre páginas. Use o DevTools para localizar arquivos que não carregarem.

7. Modelo inicial de dados
O exemplo demonstra apenas o formato de um registro. O grupo deverá ampliar os campos conforme suas telas e regras, criar dados variados e compreender cada propriedade utilizada.
const animais = [
  {
    id: 1,
    nome: "Luna",
    especie: "Gato",
    porte: "Pequeno",
    idade: 2,
    cidade: "Aracatuba",
    status: "Disponivel"
  }
];
16.	Cada objeto deve possuir um id único e estável.
17.	Datas e valores devem seguir um padrão único antes da formatação visual.
18.	A interface nunca deve depender da posição fixa de um item no array.
19.	Antes de usar dados do localStorage, o código deve tratar a possibilidade de não existir conteúdo salvo.
8. Direção de interface e experiência
20.	Transmitir acolhimento e confiança sem infantilizar o tema.
21.	Usar fotos com proporções consistentes e texto alternativo descritivo.
22.	Diferenciar visualmente os status Disponível, Em processo e Adotado.
23.	Manter o botão Quero adotar visível e coerente em todos os perfis.
Estados que precisam ser desenhados
24.	Estado inicial, antes de qualquer registro do usuário.
25.	Estado com dados e ações disponíveis.
26.	Estado vazio depois de uma busca ou filtro.
27.	Estado de erro de validação ou regra de negócio.
28.	Estado de sucesso depois de salvar, editar ou cancelar.
 
9. Roteiro de desenvolvimento
O grupo deve avançar por entregas pequenas e demonstráveis. Uma etapa só está concluída quando o resultado funciona no navegador e foi integrado ao trabalho dos demais.
1. Planejar antes de codificar
29.	Ler o desafio e escrever, em uma frase, qual problema o projeto resolve.
30.	Definir o perfil do usuário, o mapa de telas e o fluxo principal.
31.	Produzir wireframes simples e aprová-los com a docente antes de detalhar o visual.
2. Montar a base do projeto
32.	Criar o repositório, a estrutura de pastas e o README inicial.
33.	Construir a navegação e a estrutura semântica das telas.
34.	Conferir links, títulos, formulários e caminhos de arquivos no navegador.
3. Criar a identidade e o layout
35.	Definir cores, tipografia, espaçamento e componentes reutilizáveis.
36.	Estilizar primeiro os componentes principais e depois os estados especiais.
37.	Testar legibilidade, foco do teclado, contraste e adaptação de conteúdo.
4. Fazer a primeira funcionalidade completa
38.	Carregar os dados e renderizar os cards ou lançamentos pelo JavaScript.
39.	Implementar uma ação do início ao fim antes de começar várias funções incompletas.
40.	Usar o DevTools para verificar elementos, eventos e mensagens de erro.
5. Integrar regras e armazenamento
41.	Adicionar busca, filtros, validações e cálculos específicos do tema.
42.	Salvar apenas dados necessários e reconstruir a interface ao carregar a página.
43.	Criar mensagens para estados vazios, erros e operações concluídas.
6. Testar e revisar
44.	Executar o fluxo principal, os casos inválidos e os limites da aplicação.
45.	Revisar textos, nomes de variáveis, duplicações e erros no Console.
46.	Pedir para uma pessoa de fora do grupo usar a aplicação sem receber instruções.
7. Preparar a entrega
47.	Conferir repositório, README, link publicado e materiais de apresentação.
48.	Ensaiar uma demonstração curta em que cada integrante explique sua contribuição.
49.	Separar um exemplo de problema técnico encontrado e como o grupo o resolveu.
10. Organização do trio
Regra do grupo: as responsabilidades podem começar divididas, mas nenhum arquivo ou funcionalidade deve pertencer a uma única pessoa. Revisão e integração são tarefas coletivas.

50.	Criar um quadro simples com as colunas A fazer, Em andamento, Em revisão e Concluído.
51.	Registrar responsável e prazo curto para cada tarefa; dividir tarefas grandes em partes menores.
52.	Alternar, ao longo das etapas, atividades de HTML, CSS, JavaScript, teste e documentação.
53.	Realizar integração frequente para evitar três versões diferentes do mesmo projeto.
54.	Encerrar cada encontro registrando o que foi concluído, o próximo passo e o bloqueio existente.
Fluxo recomendado no Git
55.	Criar um único repositório chamado pi-front-end-pata-certa.
56.	Manter a versão estável na branch principal e desenvolver tarefas em branches curtas quando isso já tiver sido combinado em sala.
57.	Fazer commits pequenos e descritivos, por exemplo: feat: cria filtro por categoria.
58.	Atualizar o repositório antes de iniciar e antes de integrar uma alteração.
59.	Não sobrescrever o trabalho de outro integrante sem revisar as diferenças.
11. Entregáveis
☐	Aplicação front-end funcional com todos os arquivos necessários.
☐	Repositório com histórico de contribuições dos integrantes.
☐	README com nome, problema, público, integrantes, tecnologias, funcionalidades, execução e link publicado.
☐	Wireframes ou protótipo das telas principais.
☐	Link publicado para acesso ao projeto, conforme orientação da docente.
☐	Apresentação e demonstração do fluxo principal.

Prazo: Conforme cronograma definido pela docente em sala.
Formato de envio: Repositório, link publicado e materiais solicitados no ambiente da turma.
12. Critérios de qualidade
Critério	O que será observado
Compreensão do problema	A solução atende ao tema e apresenta um fluxo útil para o público definido.
HTML e conteúdo	Estrutura semântica, formulários corretos, textos coerentes e boa organização das telas.
CSS e experiência visual	Hierarquia, consistência, legibilidade, estados de interação e adaptação do conteúdo.
JavaScript e DOM	Dados dinâmicos, funções, eventos, filtros, regras e atualização visível da interface.
Validação e persistência	Entradas inválidas são tratadas e os dados necessários permanecem no navegador.
Qualidade do código	Arquivos organizados, nomes claros, pouca repetição e Console sem erros.
Trabalho em equipe	Participação dos três integrantes, histórico de contribuições e integração frequente.
Entrega e apresentação	Projeto executável, README completo e demonstração compreensível por todos.

Evidência de autoria: cada integrante deverá explicar decisões, funções e dificuldades do projeto. Trechos que ninguém consegue explicar não demonstram aprendizagem.

13. Checklist de testes
☐	Todos os links, botões e formulários realizam a ação esperada.
☐	A aplicação inicia sem erros e o Console permanece limpo no fluxo principal.
☐	Campos obrigatórios impedem envio inválido e mostram mensagens claras.
☐	Há retorno visual para sucesso, erro, carregamento ou operação sem resultados.
☐	Os dados persistentes continuam corretos depois de atualizar e reabrir a página.
☐	Teclado, foco e labels permitem compreender e usar os principais controles.
☐	Textos, valores, datas e imagens aparecem sem cortes ou sobreposições.
☐	O README explica objetivo, integrantes, tecnologias, execução e funcionalidades.
☐	Aplicar filtros que resultem em animais disponíveis e também em lista vazia.
☐	Favoritar um animal, atualizar a página e confirmar que ele continua salvo.
☐	Enviar o formulário vazio e conferir se cada erro aparece próximo ao campo correto.
☐	Registrar duas solicitações, cancelar apenas uma e conferir o armazenamento.
☐	Alterar o status de um animal nos dados e verificar o comportamento dos botões.

14. Roteiro para apresentação
60.	Apresentar o problema, o público e a proposta da solução.
61.	Mostrar rapidamente o planejamento e a identidade escolhida.
62.	Demonstrar o fluxo principal com dados válidos.
63.	Demonstrar pelo menos um caso inválido e o retorno da interface.
64.	Explicar como arrays, objetos, DOM, eventos, validação e localStorage foram utilizados.
65.	Relatar uma dificuldade real, como foi investigada e qual solução foi adotada.
66.	Garantir a participação dos três integrantes e encerrar com o que ainda poderia evoluir.
15. Desafios extras
Os extras não substituem os requisitos obrigatórios. Escolham no máximo um inicialmente e só avancem depois que a versão principal estiver estável.
67.	Consultar endereço pelo CEP no formulário usando uma API pública.
68.	Criar uma comparação simples entre dois perfis favoritos.
69.	Adicionar uma área de histórias de adoção com carrossel acessível.
16. Conferência final do grupo
☐	Todos os requisitos RF01 a RF10 foram demonstrados e testados.
☐	O projeto abre por um link e também possui instruções de execução local.
☐	Nenhum integrante depende de outro para explicar a solução.
☐	O grupo sabe indicar o que está no localStorage e como os dados são recuperados.
☐	A apresentação foi ensaiada com o projeto na mesma versão que será entregue.

PLANEJAR  |  CONSTRUIR  |  TESTAR  |  EXPLICAR
