const tabuada = (numeros: number[]) => {
    let resultado: string = "";

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${n} x ${i} = ${n * i} \n`;

            if (i === 10) {
                resultado += "--------------------";
            }
        }
    }

    return resultado
};

console.log(tabuada([2, 5]));
