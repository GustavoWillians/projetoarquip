const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const diasNome = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
let data = new Date();
let daysMonth =  new Date(data.getFullYear(), (data.getMonth() + 1) , 0).getDate();


let mesExibicao = document.getElementById("dataMes");
let anoExibicao = document.getElementById("dataAno");
let next = document.getElementsByClassName("next");
let prev = document.getElementsByClassName("prev");
let diaSemana = document.getElementsByClassName("weekdays");
let dias = document.getElementsByClassName("days");
let inicioSemana = data.getDay();

mesExibicao.innerText = meses[data.getMonth()];
anoExibicao.innerText = data.getFullYear();

indexMes = data.getMonth();
indexAno = data.getFullYear();

for(let i = 0; i < diasNome.length; i++){   
    diaSemana[0].innerHTML +=  `<li>${diasNome[i]}</li>`;
}

montarCalendario(inicioSemana);

//mostrar mês seguinte
next[0].onclick = () => {
    indexMes++
    if(indexMes > 11){
        indexMes = 0;
        indexAno++ 
    }
    data.setMonth(indexMes)
    data.setFullYear(indexAno)
    mesExibicao.innerText = meses[indexMes];   
    anoExibicao.innerText = indexAno;
    daysMonth =  new Date(indexAno, (indexMes + 1) , 0).getDate();
    inicioSemana = data.getDay();
    montarCalendario(inicioSemana)

    console.log("dia atual "+ data.getDate(),"mês atual "+ (data.getMonth()+1),"ano atual "+ data.getFullYear())
console.log( daysMonth, inicioSemana)

}

// mostrar mês anterior
prev[0].onclick = () => {
    indexMes--
    if(indexMes < 0){
        indexMes = 11
        indexAno--
    }
    data.setMonth(indexMes)
    data.setFullYear(indexAno)
    mesExibicao.innerText = meses[indexMes];   
    anoExibicao.innerText = indexAno;
    inicioSemana = data.getDay();
    daysMonth =  new Date(indexAno, (indexMes + 1) , 0).getDate();
    montarCalendario(inicioSemana)
    console.log("dia atual "+ data.getDate(),"mês atual "+ (data.getMonth()+1),"ano atual "+ data.getFullYear())
    console.log( daysMonth, inicioSemana)
}

function montarCalendario(inicioSemana){
    dias[0].innerHTML = " ";
    for(let i = 0; i <= inicioSemana; i++){   
       dias[0].innerHTML +=  `<li>${" "}</li>`;
    }

    for(let i = 0; i < daysMonth; i++){   
       dias[0].innerHTML +=  `<li>${i+1}</li>`;
    }
}
console.log("dia atual "+ data.getDate(),"mês atual "+ (data.getMonth()+1),"ano atual "+ data.getFullYear())
console.log( daysMonth, inicioSemana)
