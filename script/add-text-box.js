document.addEventListener('DOMContentLoaded', function() {
  function insertFixedTextBox() {
    var textBoxSurfly = document.createElement('div');

    textBox.style.position = 'fixed';
    textBox.style.top = '50%';
    textBox.style.left = '50%';
    textBox.style.zIndex = '9999';
    textBox.style.backgroundColor = 'red';
    textBox.style.padding = '10px';
    textBox.style.border = '1px solid #fff';
    textBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
    textBox.style.color = 'white';
    textBox.style.fontWeight = 'bold';
    textBox.innerText = 'Add anything you like to any website';

    document.body.appendChild(textBoxSurfly);
  }

  insertFixedTextBox();
});
