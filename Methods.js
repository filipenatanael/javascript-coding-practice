// ---- MANIPULAÇÃO DE ARRAY ----
var arrayDados = ["Item 1","Item 2","Item 3","Item 4","Item 5",20]

arrayDados[1]
//'Item 2'
arrayDados.indexOf("Item 3")
//2 Retornar a posição do item, caso não exista entâo retornara -1

arrayDados.join(",")
//'Item 1,Item 2,Item 3,Item 4,Item 5,20' - Retornar um string com os dados do array

arrayDados.pop()
//20 - Remove o ultimo elemento

arrayDados.shift()
//'Item 1' - Remover o primeiro item do array

arrayDados.push("Item 10")
//5 - Adiciona um novo Item ao array

//----------------------------------
