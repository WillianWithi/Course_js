/*
    Crie uma função que receba um objeto endereço
    e retorne uma mensagem passando as informações do endereço.
*/

function exibeEndereco(endereco){
    return (
       "O usuário mora em " + endereco.cidade+"/"+endereco.uf+
       ", no Bairro " + endereco.bairro + ", na rua "+ endereco.rua + "com Nº " +  endereco.numero+"." 
    );
}

var endereco = {
   rua: "Av John Sanford",
   numero: 231,
   bairro: "junco",
   cidade: 'Sobral',
   uf: 'CE'
};

console.log(exibeEndereco(endereco));
