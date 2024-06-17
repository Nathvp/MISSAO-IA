const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: [
        {
            texto:  "Alternativa 1",
            afirmacao: "afirmacao"
        },
        {
            texto:  "Alternativa 2",
            afrimacao: "afirmacao"
        }
        
    ] 
},
{
    enunciado: "Pergunta 2",
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ] 
},
{
    enunciado: "Pergunta 3",
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ] 
},
{
    enunciado: "Pergunta 4",
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ] 
},
{
    enunciado: "Pergunta 5",
    alternativas: [
        "Alternativa 1", 
        "Alternativa 2"
    ] 
},   
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();