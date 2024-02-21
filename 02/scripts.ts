const listaDeNomes: { nome: string; idade: number; status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const filtrarUsuarios = (
    lista: { nome: string; idade: number; status: boolean }[],
    nomeParaEncontrar: string
): { nome: string; idade: number; status: boolean }[] => {
    const encontrarNome = lista.filter((nomeLista) => {
        return nomeLista.nome.toLowerCase().includes(nomeParaEncontrar.toLowerCase());
    });

    return encontrarNome;
};

console.log(filtrarUsuarios(listaDeNomes, "Gui"));
