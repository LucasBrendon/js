// forma literal de uma função
// Em uma função é sempre necessário passar os blocos.
function fun1(){
}

//Armazenar em uma variável
let fun2 = function (){
}

//Armazenar em um array
let array = [function (a, b){
    return a +b
}]
console.log(array[0](2,5))

//Armazenar em um atributo de objeto
let obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//Passar função como parâmetro para outra função
function run(fun){
    fun()
}

function fun(){
    return 'Opa de novo!'
}

