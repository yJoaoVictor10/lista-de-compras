function gerarDiaDaSemana() {
    // SE TRATANDO DE DATA E HORA

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', { weekday: 'long' }); // argumento para local, no caso Brasil e objeto dia da semana e valor long para aparecer o dia da semana inteiro (segunda-feira, etc)
    //Segunda-feira

    const data = new Date().toLocaleDateString('pt-BR'); // 01/01/2025
    const hora = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric' }); //12:30


    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;