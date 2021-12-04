function valida(){
    let nomeDaObra = window.document.getElementById("nomeDaObraId");
    let nomeDoAutor = window.document.getElementById("nomeDoAutorId");
    let anoDaObra =  window.document.getElementById("anoDaObraId");
    let periodoDaObra = window.document.getElementById("selectPeriodoDaObra");
    let selectTipoDaObra = window.document.getElementById("selectTipoDaObra");


    // Valida campo 'nome da obra'. Campo não pode estar vazio.
    if(nomeDaObra.value == ""){
        window.alert("Complete campo 'Nome da obra'");
        nomeDaObra.focus();
        return false; 
    }

    // Valida 'nome da obra'. Verifica tamanho máximo 100 caracteres.
    if(nomeDaObra.value.length > 100){
        window.alert("Nome da obra não pode ser maior que 100 caracteres. ");
        nomeDaObra.focus();
        return false;
    }

    // Valida campo 'nome da obra'. Tamanho minimo de 6 caracteres.
    if(nomeDaObra.value.length < 6){
        window.alert("Campo 'nome da obra' deve ser maior que 6 caracteres");
        nomeDaObra.focus();
        return false;
    }

    // Valida campo 'nome do autor'. Campo não pode estar vazio. 
    if(nomeDoAutor.value == ""){
        window.alert("Complete o campo 'Nome do autor'");
        nomeDoAutor.focus();
        return false;
    }

    // Valida campo 'nome do autor'. Tamanho minimo de 10 caracteres.
    if(nomeDoAutor.value.length < 10){
        window.alert("Campo 'nome do autor' deve ser maior que 10 caracteres");
        nomeDoAutor.focus();
        return false;
    }

    // Valida 'nome do autor'. Verifica tamanho máximo 100 caracteres.
    if(nomeDoAutor.value.length > 100){
        window.alert("'Nome do autor' não pode ser maior que 100 caracteres. ");
        nomeDoAutor.focus();
        return false;
    }

    // Valida campo 'ano da obra'. Campo não pode estar vazio.
    if(anoDaObra.value == ""){
        window.alert("Complete o campo 'ano da obra'");
        anoDaObra.focus();
        return false;
    }

    // Valida campo 'ano da obra'. Campo deve conter ano valido do ano 1 pra cima.
    if(anoDaObra.value < 1){
        window.alert("'ano da obra' digitado é inválido");
        anoDaObra.focus();
        return false;
    }

    // Valida campo 'ano da obra'. Campo deve conter ano valido no máximo ano atual.
    if(anoDaObra.value > 2021){
        window.alert("Campo 'ano da obra' digitado é inválido");
        anoDaObra.focus();
        return false;
    }

    // Valida campo 'ano da obra'. Verifica se for diferente de um numero exibe erro.
    if(!(isNaN(anoDaObra.value))){
        window.alert("Digite apenas numeros. exemplo: (1992)");
        anoDaObra.focus();
        return false;
    }

    // Valida 'ano da obra'. Verifica tamanho máximo/mínimo 4 caracteres.
    if(anoDaObra.value.length != 4){
        window.alert("'Ano da obra' não pode ser maior, nem menor que 4 caracteres. ");
        anoDaObra.focus();
        return false;
    }

    // Valida campo 'período da obra'. Verifica se campo não esta vazio.
    if(periodoDaObra.value == ""){
        window.alert("Campo 'período da obra' está vazio");
        anoDaObra.focus();
        return false;
    }

    // Valida campo 'tipo da obra'. Verifica se campo não esta vazio.
    if(selectTipoDaObra.value == ""){
        window.alert("Campo 'tipo da obra' está vazio");
        selectTipoDaObra.focus();
        return false;
    }

    // Valida campo 'selecione período'. testa se esta vazio.
    if(document.formularioNome.selectPeriodoDaObra.options[selectPeriodoDaObra.selectedIndex].value == "vazio"){
        window.alert("Selecione período da obra. ");
        document.selectPeriodoDaObra.focus();
        return false;
    }

    // Valida campo 'tipo da obra'. testa se esta vazio.
    if(document.formularioNome.options[selectTipoDaObra.selectedIndex].value == "vazio"){
        window.alert("Selecione tipo da obra. ");
        document.selectTipoDaObra.focus();
        return false;
    }

}
