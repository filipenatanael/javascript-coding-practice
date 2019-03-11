var array1 = new Array('5','4','6','2');
var ordena = new Array();
var desordena = new Array();
var TAM = array1.lenght;
var aux = "";
var aux2 = "";

// coloca em ordem crescente (1,2,3,4,5...)
for(var x=0; x < TAM; x++) {
  for(var y=(x+1); y < TAM; y++) { // sempre 1 elemento à frente
    // se o (x > (x+1)) então o x passa pra frente (ordem crescente)
    if (array1[x] > array1[y]) {
      aux = array1[x];
      ordena[x] = array1[y];
      ordena[y] = aux;
    }
  }
}

/* exibe o vetor ordenado */
console.log(ordena);

// coloca em ordem decrescente (10,9,8,7...)
for(x = 0; x < TAM; x++){
  for(y = x + 1; y < TAM; y++) { // sempre 1 elemento à frente
    if (array1[y] > array1[x]){
      aux2 = array1[y];
      desordena[y] = array1[x];
      desordena[x] = aux2;
    }
  }
} // fim da ordenação

/* exibe o vetor ordenado */
console.log(desordena[x]);
