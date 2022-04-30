 const imprimirResultado = function (nota){
     switch(Math.floor(nota)){
         case 10:
             console.log('Eu sou o rei')
             break
         case 9:
             console.log('Eu sou mais rei')
         default:
             console.log('Número Inválido')
     }
 }

 imprimirResultado(10)