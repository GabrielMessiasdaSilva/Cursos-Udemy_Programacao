

// Essa função gera uma história com um personagem, atividade e nome do dono.
// Se nenhum parâmetro for passado, os valores padrão serão usados.
function contarHistoria(personagem='paçoca',atividade='pular',nome_dono='Gabriel'){
    // Essa linha escreve a história no documento HTML.
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava correr ${atividade}, seu dono se chamava ${nome_dono} e cachorro era muito querido.`);
}

// Chamada da função sem parâmetros, usando os valores padrão.
contarHistoria()