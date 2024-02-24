$(document).ready(function() {
    // Aplicar máscaras aos campos usando o jQuery Mask Plugin
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
  
    // Event listener para o formulário
    $('#cadastroForm').submit(function(event) {
      event.preventDefault(); // Impedir o comportamento padrão do formulário
  
      // Aqui você pode adicionar lógica para enviar os dados do formulário
      // para um servidor ou fazer qualquer outra manipulação necessária.
  
      alert('Cadastro realizado com sucesso!');
    });
  });
  