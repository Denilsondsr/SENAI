const relacaoJogadores = [
  { id: 1, numero: 1, nome: "Denilson" },
  { id: 2, numero: 2, nome: "Adriana" },
];

let relacaoJogadoresEscalado = [];
let relacaoJogadoresRemovidos = [];

function imprimirJogadores() {
  const mostrarJogadores = document.getElementById("mostrarJogadores");

  relacaoJogadores.forEach((jogador) => {
    const jogadorDiv = document.createElement("div");
    jogadorDiv.innerHTML = `<span>${jogador.numero} - ${jogador.nome}</span>`;
    mostrarJogadores.appendChild(jogadorDiv);
  });
}

imprimirJogadores();
