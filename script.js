// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================

// Seleciona o botão
const btnTopo = document.getElementById("btnTopo");

// Quando o usuário rolar a página
window.addEventListener("scroll", function(){

// Se desceu mais de 300 pixels
if(window.scrollY > 300){
btnTopo.style.display = "block";
}else{
btnTopo.style.display = "none";
}

});

// Quando clicar no botão
btnTopo.addEventListener("click", function(){

// Volta suavemente para o topo
window.scrollTo({
top: 0,
behavior: "smooth"
});

});