function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        throw(e);
    } 
}

const obj = {nome: 'Roberto'}

imprimirNomeGritado(obj)
