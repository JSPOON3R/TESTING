const apiKey = 'a69e09988d8d46a1a6b11ad7245eb023';
const url = `https://surfly.com/v2/company/options/?api_key=${apiKey}`;

let hideSelector; 
fetch(url)
  .then(response => response.json())
  .then(data => {
    hideSelector = data.hide_selector; 
    console.log('Value from hide_selector:', hideSelector);

    insertCssHighContrast();
    insertFixedTextBox();
  })
  .catch(error => {
    console.error('Error:', error);
  });

function insertCss(code) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) { // IE
    style.styleSheet.cssText = code;
  } else { // Other browsers
    style.appendChild(document.createTextNode(code));
  }

  document.head.appendChild(style);
}

function insertCssHighContrast() {
  var css = hideSelector + ' { border: 2px solid red; }'; 
  insertCss(css);
}

function insertFixedTextBox() {
  var textBox = document.createElement('div');

  textBox.style.position = 'fixed';
  textBox.style.top = '10px';
  textBox.style.left = '10px';
  textBox.style.zIndex = '9999';
  textBox.style.backgroundColor = 'red';
  textBox.style.padding = '10px';
  textBox.style.border = '1px solid #fff';
  textBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
  textBox.style.color = 'white';
  textBox.style.fontWeight = 'bold';
  textBox.innerText = 'Red borders indicate masked areas';

  document.body.appendChild(textBox);
}















