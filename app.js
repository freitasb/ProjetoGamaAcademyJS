const livros = require("./database")

const readline = require('readline-sync')

const EntradaInicial = readline.question('Deseja buscar um livro? S/N')
console.log('')

if(EntradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade', '/ Historia brasileira', '/ Américas', '/ Estilo de vida', '/ Tecnologia')
    
    const Categorias = readline.question('Qual categoria voce escolhe?:')

    const retorno = livros.filter(livro => livro.categoria === Categorias)

    console.table(retorno)
}else{
    const ordenacaoGeral = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros da base: ')
    console.table(ordenacaoGeral)
}
