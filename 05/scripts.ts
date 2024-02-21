const soletrar = (palavra: string) => {
  return palavra.split('').join('-')
}

console.log(soletrar('programador'));
