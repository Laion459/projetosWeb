

// Valida as entradas do formulário "form"
function validar(){
    let test = document.getElementsByClassName.value;
    let name = document.form.name.value;
    let password = form.password.value
    let confirm_password = form.confirm_password.value
    let genre = form.genre.value
    let email = form.email.value
    let numberPhone = form.numberPhone.value
    let address = form.address.value
    //let type = form.type.value
    //let qual = form.qual.value

    if (name == ""){
        alert("Nome é obrigatório");
        //document.getElementById("Valida nome? ").value;
        form.name.focus();
        return false;
    }
            
    if (password == ""){
        alert("Password é obrigatório");
        form.password.focus();
        return false;
    }

    if (password <= 8 ){
        alert("Password deve conter minimo 8 caracteres");
        form.assword.focus();
        return false;
    }

    if (confirm_password == "" && confirm_password != password){
        alert("Password tem que ser iguais");
        form.confirm_password.focus();
        return false;
    }

    if (genre = false){
        alert("Selecione Gênero");
        form.genre.focus();
        return false;
    }

         
    if (email == ''){
        alert("E-mail é obrigatório");
        form.email.focus();
        return false;
    }
    

    if (numberPhone = ""){
        alert("Digite N° Telefone ");
        form.numberPhone.focus();
        return false;
    }

    if (address = ""){
        alert("Digite Endereço ");
        form.address.focus();
        return false;
    }

    if (address = false){
        alert("Selecione Tipo Endereço ");
        form.address.focus();
        return false;
    }

    if (type = false){
        alert("Selecione Tipo De Endereço");
        form.type.focus();
        return false;
    }
}
