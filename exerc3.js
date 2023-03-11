const valores = [10.50, 11.83, 16.90,120, 50];

for (let i = 0; i < valores.length; i++) {
    console.log("Valor da array " + valores[i]);
    console.log("Seu número inteiro é: " + Math.trunc(valores[i]))
    console.log("Seu quadrado é: " + Math.pow(valores[i],2))
    console.log("Sua raiz quadrada é : " + Math.sqrt(valores[i]))
    console .log("Arredondado pra cima, ele fica assim: "+ Math.ceil(valores[i]))
    console .log("Arredondado pra baixo, ele fica assim:  "+ Math.floor(valores[i]))
    }