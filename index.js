// Seu código aqui!


document.onload = function()
{
  function validarForm()
  {
    var emp = document.getElementById('empresa').char;
    if (emp == '') {
      alert("O campo Empresa é obrigatório!");
      return false;
    }
    var name = document.getElementById('nome').value;
    if (name == '') {
      alert("O campo Nome é obrigatório!");
      return false;
    }
    var team = document.getElementById('time').value;
    if (team == '') {
      alert("O campo Time é obrigatório!");
      return false;
    }
    var age = document.getElementById('idade').value;
    if (isNaN(age) || age <= 0 || age == null || age == '') {
      alert("Escreva um número maior que 0!");
      return false;
    }
  
  }

  document.getElementById("adicionar").onclick = validarForm();
}


