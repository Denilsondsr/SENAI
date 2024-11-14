// Função para adicionar o CSS ao documento
function adicionarEstilos() {
  const estiloCSS = `
/* CABEÇALHO */
* {
  margin: 0;
}

#arrumar {
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;
  margin-top: 5vh;
}

.separacao {
  margin-left: 70%;
  padding-top: 1%;
}

#icone1 {
  width: 20%;
  display: flex;
}

#sobre1 {
  text-decoration: none;
  font-size: 4vh;
  position: absolute;
  margin-top: 1.9%;
  margin-left: 73%;
  font-family: Arial, Helvetica, sans-serif;
  color: #9f8067;
}

#sobre1:hover {
  transform: scale(1.1);
  filter: drop-shadow(2px 2px 5px #a39998);
  transition: transform 0.3s ease;
}

#casinha {
  margin-left: 70vw;
  margin-top: 2vh;
}

#casinha:hover {
  transform: scale(1.1);
  filter: drop-shadow(2px 2px 5px #a39998);
  transition: transform 0.3s ease;
}

#header1 {
  background-color: #a8a8a8;
  color: #fff;
  padding: 10px 20px;
  padding-bottom: 3vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

#bloco2 {
  width: 100%;
  margin-top: 10vh;
}

.cart-total {
  display: flex;
  padding-left: 1vh;
  font-family: Arial, Helvetica, sans-serif;
  font-optical-sizing: auto;
  color: #9F8067;
  font-size: 5vh;
  letter-spacing: 2px;
  margin-left: 67vw;
  margin-top: 5vh;
}

#button2 {
  outline: none;
  color: #ff523b;
  padding: 0.8em;
  padding-left: 2em;
  padding-right: 2em;
  border: 2px dashed #DAA06D;
  border-radius: 15px;
  background-color: #EADDCA;
  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: .1s ease-in-out, .4s color;
  margin-top: 2.3vh;
  font-size: 2.6vh;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-left: 43vw;
}

#button2:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

#quantidade {
  border: 1px solid #7D634E;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 170px;
  height: 50px;
  background-color: #fff;
  margin-top: 2vh;
  margin-left: 25vw;
}

#nomequan {
  margin-left: 25vw;
}

#quantia {
  height: 50px;
  width: 70px;
  border: 1px solid #7D634E;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantidade-btn {
  border: none;
  cursor: pointer;
  background-color: white;
  color: #7D634E;
  font-size: xx-large;
  width: 50px;
  height: 50px;
}

#produto {
  display: flex;
  align-items: center;
  height: 25vh;
  width: 70%;
  background-color: #a8a8a8;
  margin-left: 15%;
  position: absolute;
  margin-top: 10vh;
}

.organizacao {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 10vh;
  justify-content: center;
}

.organizacao img {
  width: 9vw;
  height: 18vh;
  padding-left: 4%;
}

.escrito {
  display: flex;
  flex-direction: column;
  padding-left: 3vh;
  padding-bottom: 7vh;
  font-family: Arial, Helvetica, sans-serif;
  font-optical-sizing: auto;
  color: #fffff;;
  font-size: xx-large;
  letter-spacing: 2px;
  position: absolute;
  margin-left: 11vw;
}

#caixinha {
  display: flex;
  flex-direction: column;
  padding-left: 15vh;
  padding-bottom: 4.9vh;
  font-family: Arial, Helvetica, sans-serif;
  color: #fffff;
  font-optical-sizing: auto;
  font-size: x-large;
  letter-spacing: 2px;
  align-items: center;
  position: absolute;
}

#precinho {
  color: #ff523b;
  margin-left: 3vw;
  font-size: xx-large;
  position: absolute;
  right: 3px;
  top: 1px; 
  margin-left: 42vw;
  padding-bottom: 9vh;
}

.cart-item {
  flex-direction: column;
  display: flex;
}

/* RODAPÉ  */

footer {
  margin-top: 7vh;
  background-color: #a8a8a8;
  color: #fff;
  display: flex;
  position: absolute;
  width: 100%;
  box-shadow: 0 -2px 4px #a8a8a8;
  height: 30vh;
}

.insta {
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 1.5%;
  margin-left: 2%;
}

.insta img {
  width: 6vh;
}

.tele {
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 6%;
  margin-left: 2%;
}

.tele img {
  width: 6vh;
}

.ema {
  position: absolute;
  display: flex;
  align-items: center;
  margin-top: 10.5%;
  margin-left: 2%;
}

.ema img {
  width: 6vh;
}

.insta p {
  font-size: 2.5vh;
  margin-left: 1vh;
  color: #565147;
}

.tele p {
  font-size: 2.5vh;
  margin-left: 1vh;
  color: #565147;
}

.ema p {
  font-size: 2.5vh;
  margin-left: 1vh;
  color: #565147;
}

.logof {
  position: absolute;
  display: flex;
  margin-top: 2%;
  margin-left: 83%;
}

.logof img {
  width: 33vh;
}

#author {
  color: #565147;
  margin-left: 90vh;
  margin-top: 26vh;
  font-size: 2vh;
}

#vazio {
  color: #9F8067;
  font-size: xx-large;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5vh;
  margin-left: 30vh;
}

#vazioimg {
  width: 100vh;
  margin-left: 95vh;
  margin-top: -30vh;
}

#finalizarcompra{
  background-color: #a8a8a8;
  width: 70%;
  height: 19vh;
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5%;
  margin-top: 5vh;
  
}

#total{
  font-size: 3.5vh;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: -1%;
  color: #ff523b;
  margin-top: 1%;
}

#cupom{
  font-size: 3vh;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #ff523b;
  display: flex;
  justify-content: space-around;
}

#escritin{
  margin-left: 10%;
  font-size: 4vh;
}

#caixin{
  width: 70%;
  height: 5vh;
  border-radius: 2vh;
  border: none;
  font-size: 3vh;
  color: #ff523b;
  margin-top: 2.5vh;
  margin-right: 3%;
}

input:focus{
  outline: #9F8067;
}

#button3{
  outline: none;
  color: #ff523b;
  padding: 0.9em;
  padding-left: 2em;
  padding-right: 2em;
  border: 2px dashed #DAA06D;
  border-radius: 10px;
  background-color: #EADDCA;
  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: .1s ease-in-out, .4s color;
  font-size: 2vh;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-right: 6vh;
  width: 21vh;
}

#button3:active {
  transform: translateX(0.1em) translateY(0.1em);
  box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
  `;
  const styleTag = document.createElement("style");
  styleTag.type = "text/css";
  styleTag.appendChild(document.createTextNode(estiloCSS));
  document.head.appendChild(styleTag);
}
// Adiciona o CSS ao documento quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
  adicionarEstilos();
  atualizarCarrinho(); // Certifique-se de chamar atualizarCarrinho após adicionar os estilos
  updateCartCount(); // Atualiza o contador do carrinho
});
// Remove um item do carrinho
function removerDoCarrinho(nome) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho = carrinho.filter((p) => p.nome !== nome);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho(); // Atualiza a página do carrinho
  updateCartCount(); // Atualiza o contador do carrinho
}
