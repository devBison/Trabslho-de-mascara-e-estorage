function mascara_telefone ()
{
   //limitador
 var tel = document.getElementById("telefone").value
    console.log(tel)
  tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
    console.log(tel)
  document.getElementById("telefone").value=tel
tel=document.getElementById("telefone").value.slice(0,10)
    console.log(tel)
   
    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0];
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
        }
    }

    if (tel_formatado[9]!="-")
    {
        if(tel_formatado[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
        }
    }
}




function mascara_cep()
{ var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2]!=".")
    {
        if (cep_formatado[2]!=undefined)
        {
            document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
        }
    }

    if (cep_formatado[6]!="-")
    {
        if(cep_formatado[6]!=undefined)
        {
            document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
        }
    }

}       




function mascara_cpf()
{ var cpf_formatado = document.getElementById("cpf").value
    if (cpf_formatado[3]!=".")
    {
        if (cpf_formatado[3]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
            
        }
    }

    if (cpf_formatado[7]!=".")
    {
        if (cpf_formatado[7]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
            
        }
    }

    if (cpf_formatado[11]!=".")
    {
        if (cpf_formatado[11]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11];
            
        }
    }

    if (cpf_formatado[13]!="-")
    {
        if(cpf_formatado[13]!=undefined)
        {
            document.getElementById("cpf").value=cpf_formatado.slice(0,13)+cpf_formatado[13]
        }
    }

}       


function mascara_cnpj()
{ var cnpj_formatado = document.getElementById("cnpj").value
    if (cnpj_formatado[2]!=".")
    {
        if (cnpj_formatado[2]!=undefined)
        {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
        }
    }

    if (cnpj_formatado[6]!=".")
    {
        if(cnpj_formatado[6]!=undefined)
        {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
        }
    }

    
    if (cnpj_formatado[10]!="/")
    {
        if(cnpj_formatado[10]!=undefined)
        {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10]
        }
    }

    if (cnpj_formatado[15]!="-")
    {
        if(cnpj_formatado[15]!=undefined)
        {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15]
        }
    }

    

 

}       


function mascara_cod()
{ var cod_formatado = document.getElementById("cod").value


if (cod_formatado[2]!="_")
    {
        if (cod_formatado[2]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,2)+"_"+cod_formatado[2];
        }
    }

    if (cod_formatado[5]!="/")
    {
        if(cod_formatado[5]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,5)+"//"+cod_formatado[5]
        }
    }
    if (cod_formatado[6]!="/")
    {
        if(cod_formatado[6]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,6)+"/"+cod_formatado[6]
        }
    }

    if (cod_formatado[10]!="-")
    {
        if(cod_formatado[10]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,10)+"-"+cod_formatado[10]
        }
    }

    if (cod_formatado[14]!=".")
    {
        if(cod_formatado[14]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,14)+"."+cod_formatado[14]
        }
    }

    if (cod_formatado[15]!="9")
    {
        if(cod_formatado[15]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,15)+"9"+cod_formatado[15]
        }
    }
    if (cod_formatado[16]!=".")
    {
        if(cod_formatado[16]!=undefined)
        {
            document.getElementById("cod").value=cod_formatado.slice(0,16)+"."+cod_formatado[16]
        }
    }

}    



function mascara_telefone() {
    const telefone = document.getElementById("telefone");
    const tel = telefone.value;
    telefone.value = tel.slice(0, 14);
    const telFormatado = telefone.value;

    if (telFormatado[0] !== "(") {
        if (telFormatado[0] !== undefined) {
            telefone.value = "(" + telFormatado[0];
        }
    }

    if (telFormatado[3] !== ")") {
        if (telFormatado[3] !== undefined) {
            telefone.value = telFormatado.slice(0, 3) + ")" + telFormatado[3];
        }
    }

    if (telFormatado[9] !== "-") {
        if (telFormatado[9] !== undefined) {
            telefone.value = telFormatado.slice(0, 9) + "-" + telFormatado[9];
        }
    }
}

function mascara_cep() {
    const cep = document.getElementById("cep");
    const cepFormatado = cep.value;

    if (cepFormatado[2] !== ".") {
        if (cepFormatado[2] !== undefined) {
            cep.value = cepFormatado.slice(0, 2) + "." + cepFormatado[2];
        }
    }

    if (cepFormatado[6] !== "-") {
        if (cepFormatado[6] !== undefined) {
            cep.value = cepFormatado.slice(0, 6) + "-" + cepFormatado[6];
        }
    }
}

function mascara_cpf() {
    const cpf = document.getElementById("cpf");
    const cpfFormatado = cpf.value;

    if (cpfFormatado[3] !== ".") {
        if (cpfFormatado[3] !== undefined) {
            cpf.value = cpfFormatado.slice(0, 3) + "." + cpfFormatado[3];
        }
    }

    if (cpfFormatado[7] !== ".") {
        if (cpfFormatado[7] !== undefined) {
            cpf.value = cpfFormatado.slice(0, 7) + "." + cpfFormatado[7];
        }
    }

    if (cpfFormatado[11] !== "-") {
        if (cpfFormatado[11] !== undefined) {
            cpf.value = cpfFormatado.slice(0, 11) + "-" + cpfFormatado[11];
        }
    }
}

function mascara_cnpj() {
    const cnpj = document.getElementById("cnpj");
    const cnpjFormatado = cnpj.value;

    if (cnpjFormatado[2] !== ".") {
        if (cnpjFormatado[2] !== undefined) {
            cnpj.value = cnpjFormatado.slice(0, 2) + "." + cnpjFormatado[2];
        }
    }

    if (cnpjFormatado[6] !== ".") {
        if (cnpjFormatado[6] !== undefined) {
            cnpj.value = cnpjFormatado.slice(0, 6) + "." + cnpjFormatado[6];
        }
    }

    if (cnpjFormatado[10] !== "/") {
        if (cnpjFormatado[10] !== undefined) {
            cnpj.value = cnpjFormatado.slice(0, 10) + "/" + cnpjFormatado[10];
        }
    }

    if (cnpjFormatado[15] !== "-") {
        if (cnpjFormatado[15] !== undefined) {
            cnpj.value = cnpjFormatado.slice(0, 15) + "-" + cnpjFormatado[15];
        }
    }
}

function mascara_cod() {
    const cod = document.getElementById("cod");
    const codFormatado = cod.value;

    if (codFormatado[2] !== "_") {
        if (codFormatado[2] !== undefined) {
            cod.value = codFormatado.slice(0, 2) + "_" + codFormatado[2];
        }
    }

    if (codFormatado[5] !== "/") {
        if (codFormatado[5] !== undefined) {
            cod.value = codFormatado.slice(0, 5) + "/" + codFormatado[5];
        }
    }

    if (codFormatado[10] !== "-") {
        if (codFormatado[10] !== undefined) {
            cod.value = codFormatado.slice(0, 10) + "-" + codFormatado[10];
        }
    }

    if (codFormatado[14] !== ".") {
        if (codFormatado[14] !== undefined) {
            cod.value = codFormatado.slice(0, 14) + "." + codFormatado[14];
        }
    }
}


function FuncaoLocalStorage (){
    //obter valor
    const cep = document.getElementById("cep").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const cnpj = document.getElementById("cnpj").value;  
    const cod = document.getElementById("cod").value;


     // Salvando os valores no Local Storage
     localStorage.setItem("cep", cep);
     localStorage.setItem("cpf", cpf);
     localStorage.setItem("telefone", telefone);
     localStorage.setItem("cnpj", cnpj);
     localStorage.setItem("cod", cod);
}




