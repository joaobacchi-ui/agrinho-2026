function rolar(){
document
.getElementById("estatisticas")
.scrollIntoView({
behavior:"smooth"
});
}

function animar(id, valor){

let numero = 0;

let intervalo = setInterval(()=>{

numero += Math.ceil(valor/100);

if(numero >= valor){
numero = valor;
clearInterval(intervalo);
}

document.getElementById(id).innerText =
numero.toLocaleString();

},20);
}

animar("num1",12500);
animar("num2",890000);
animar("num3",399);
animar("num4",250000);

const ctx =
document.getElementById("graficoAgrinho");

new Chart(ctx,{
type:"bar",
data:{
labels:[
"Produção",
"Sustentabilidade",
"Tecnologia",
"Educação",
"Conectividade"
],
datasets:[{
label:"Índice de Desenvolvimento",
data:[95,90,85,88,92],
backgroundColor:[
"#2e7d32",
"#43a047",
"#66bb6a",
"#81c784",
"#a5d6a7"
]
}]
},
options:{
responsive:true,
plugins:{
legend:{
display:false
}
}
}
});