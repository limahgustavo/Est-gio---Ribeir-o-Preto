function contarLetraA(texto) {
    
    const textoLower = texto.toLowerCase();
    
   
    const A = textoLower.split('a').length - 1; 

    if (A > 0) {
        return `A letra 'a' aparece ${A} vez(es) na string.`;
    } else {
        return "A letra 'a' nao aparece na string.";
    }
}

// Exemplo de uso
const stringInput = "Aquela maca e uma delicia."; 
const resultado = contarLetraA(stringInput);
console.log(resultado);
