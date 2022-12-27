const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const diasNome = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const data = new Date();

let mesExibicao = document.getElementById("dataMes");
let anoExibicao = document.getElementById("dataAno")

mesExibicao.innerText = meses[data.getMonth()];
anoExibicao.innerText = data.getFullYear();


console.log(data.getMonth(), data.getFullYear())