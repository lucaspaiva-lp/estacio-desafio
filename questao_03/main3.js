var nome = ['leticia', 'luiz', 'felipe', 'fabricio', 'felpz', 'joão', 'maria', 'ryan', 'marcos', 'eduardo']
document.writeln()
function sorteadorNome() {
    let valor = Math.random()*10 
    let sorteadorNome = nome[valor]
    return sorteadorNome;
}
console.log(sorteadorNome())