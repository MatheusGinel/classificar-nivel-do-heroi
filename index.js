//vetor com as informações do heroi como nome e experiência 
let herois = [
  {nome: "Batman", experiencia: 7500}, 
  {nome: "Superman", experiencia: 1000}, 
  {nome: "Flash", experiencia: 4580}, 
  {nome: "Mulher-Maravilha", experiencia: 8900},
  {nome: "Aquaman", experiencia: 500},
  {nome: "Homem de Ferro", experiencia: 8500},
  {nome: "Hulk", experiencia: 6000},
  {nome: "Capitão América", experiencia: 2000}
]

//função para determinar o nível de experiência do héroi com estrutura de decisão
function determinarNivel(experiencia){
  if(experiencia <= 1000){
    return "Ferro"
  } else if(experiencia >= 1001 & experiencia <= 2000){
    return "Bronze"
  } else if(experiencia >= 2001 & experiencia <= 5000){
    return "Prata"
  } else if(experiencia >= 5001 & experiencia <= 7000){
    return "Ouro"
  }else if(experiencia >= 7001 & experiencia <= 8000){
    return "Platina"
  }else if(experiencia >= 8001 & experiencia <= 9000){
    return "Ascendente"
  }else if(experiencia >= 9001 & experiencia <= 10000){
    return "Imortal"
  }else if(experiencia >= 10001){
    return "Radiante"
  }
}

//laço de repetição para determinar o nivel de todos os hérois
for (var i = 0; i < herois.length; i++){
  var heroi = herois[i]
  var nivelDoHeroi = determinarNivel(heroi.experiencia)
  console.log("O Herói de nome "+ heroi.nome +" está no nível de "+ nivelDoHeroi)
}