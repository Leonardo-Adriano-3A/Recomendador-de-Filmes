let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;
let campoAcao;
let campoPolicial;
let campoRomance;
let campoSuspense;
let campoTerror;
let campoComedia;
let campoFiccao;
let campoHeroi;
let campoAnimacao;
let campoEsporte;
let recomendacao = "";

function setup() {
  noCanvas();
  campoIdade = select('#idade');
  campoFantasia = select('#fantasia');
  campoAventura = select('#aventura');
  campoDrama = select('#drama');
  campoAcao = select('#acao');
  campoPolicial = select('#policial');
  campoRomance = select('#romance');
  campoSuspense = select('#suspense');
  campoTerror = select('#terror');
  campoComedia = select('#comedia');
  campoFiccao = select('#ficcao');
  campoHeroi = select('#heroi');
  campoAnimacao = select('#animacao');
  campoEsporte = select('#esporte');

  campoIdade.input(atualizarRecomendacao);
  campoFantasia.changed(atualizarRecomendacao);
  campoAventura.changed(atualizarRecomendacao);
  campoDrama.changed(atualizarRecomendacao);
  campoAcao.changed(atualizarRecomendacao);
  campoPolicial.changed(atualizarRecomendacao);
  campoRomance.changed(atualizarRecomendacao);
  campoSuspense.changed(atualizarRecomendacao);
  campoTerror.changed(atualizarRecomendacao);
  campoComedia.changed(atualizarRecomendacao);
  campoFiccao.changed(atualizarRecomendacao);
  campoHeroi.changed(atualizarRecomendacao);
  campoAnimacao.changed(atualizarRecomendacao);
  campoEsporte.changed(atualizarRecomendacao);

  atualizarRecomendacao();
}

function atualizarRecomendacao() {
  let idade = campoIdade.value();
  let gostos = {
    fantasia: campoFantasia.checked(),
    aventura: campoAventura.checked(),
    drama: campoDrama.checked(),
    acao: campoAcao.checked(),
    policial: campoPolicial.checked(),
    romance: campoRomance.checked(),
    suspense: campoSuspense.checked(),
    terror: campoTerror.checked(),
    comedia: campoComedia.checked(),
    ficcao: campoFiccao.checked(),
    heroi: campoHeroi.checked(),
    animacao: campoAnimacao.checked(),
    esporte: campoEsporte.checked(),
  };

  recomendacao = geraRecomendacao(idade, gostos);
  select('#recomendacao').html(recomendacao);
}

function geraRecomendacao(idade, gostos) {
  const filmes = [
    {titulo: "Drive", idade: 16, generos: ["acao", "drama", "policial"]},
    {titulo: "Prenda-me Se For Capaz", idade: 12, generos: ["biografia", "drama", "policial"]},
    {titulo: "Encontro Marcado", idade: 12, generos: ["drama", "fantasia", "misterio", "romance"]},
    {titulo: "Your Name", idade: 12, generos: ["animacao", "drama", "romance"]},
    {titulo: "Five Nights At Freddy's: O Pesadelo Sem Fim", idade: 14, generos: ["suspense", "terror"]},
    {titulo: "Toy Story", idade: "LIVRE", generos: ["animacao", "fantasia", "familia", "aventura", "comedia"]},
    {titulo: "Procurando Nemo", idade: "LIVRE", generos: ["animacao", "familia", "aventura", "comedia"]},
    {titulo: "Carros", idade: "LIVRE", generos: ["animacao", "esporte", "familia", "aventura", "comedia"]},
    {titulo: "Interestelar", idade: 10, generos: ["aventura", "drama", "ficcao"]},
    {titulo: "Batman", idade: 14, generos: ["acao", "drama", "heroi", "policial", "suspense"]},
  ];

  let filmesRecomendados = filmes.filter(filme => {
    if (idade < filme.idade && filme.idade !== "LIVRE") {
      return false;
    }
    for (let genero of filme.generos) {
      if (gostos[genero]) {
        return true;
      }
    }
    return false;
  });

  if (filmesRecomendados.length > 0) {
    return filmesRecomendados[Math.floor(Math.random() * filmesRecomendados.length)].titulo;
  } else {
    return "Desculpe, não temos recomendações para você.";
  }
}
