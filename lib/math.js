export function soma(a,b){
    return a + b;
}

export function sub(a,b){
    return a - b;
} 

export const PI = Math.PI;

//Sempre preciso exportar com mesmo nome que foi importado - Named Export
//Export Default - exporta uma unica function, e pode ser alterado o nome onde foi importado

export default function sum(a, b){
    return a + b;
}
