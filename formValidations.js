// Validación de formulario
document.getElementById('miForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto
  
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let role = document.getElementById('dropdown').value;
    let comment = document.getElementById('comments').value.trim();
  
    let isValid = true;
  
    // Validar nombre
    if (name === '') {
      document.getElementById('name-error').textContent = 'Debe ingresar su nombre';
      isValid = false;
    } else {
      document.getElementById('name-error').textContent = '';
    }
  
    // Validar email
    if (email === '') {
      document.getElementById('email-error').textContent = 'Debe ingresar su email';
      isValid = false;
    } else {
      document.getElementById('email-error').textContent = '';
    }
  
    // Validar teléfono
    if (phone === '') {
      document.getElementById('phone-error').textContent = 'Debe ingresar su teléfono';
      isValid = false;
    } else {
      document.getElementById('phone-error').textContent = '';
    }
  
    // Validar motivo de la consulta
    if (role === '') {
      document.getElementById('role-error').textContent = 'Debe seleccionar un motivo';
      isValid = false;
    } else {
      document.getElementById('role-error').textContent = '';
    }
  
    // Validar consulta
    if (comment === '') {
      document.getElementById('comment-error').textContent = 'Debe ingresar su consulta';
      isValid = false;
    } else {
      document.getElementById('comment-error').textContent = '';
    }
  
    // Enviar formulario si es válido
    if (isValid) {
      alert('Envío exitoso');
      // Aquí puedes agregar código para enviar el formulario, por ejemplo:
      // document.getElementById('miForm').submit();
  
    } else {
      alert('Complete el formulario antes de enviar por favor');
    }
  
});