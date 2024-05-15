
document.addEventListener('DOMContentLoaded', function() {
let hideSelector; 
hideSelector = "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span,body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div,#input_7_3,#input_7_5";
console.log('Selector masked:', hideSelector);

var cssKeyframes = `
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 0, 255, 0.7);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
    }
  }
`;

// Append the keyframes to the style element

function insertCss(cssKeyframes) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) { // IE
    style.styleSheet.cssText = cssKeyframes;
  } else { // Other browsers
    style.appendChild(document.createTextNode(cssKeyframes));
  }

  // Append the style element to the head
  document.head.appendChild(style);
}

// Call the function with cssKeyframes
insertCss(cssKeyframes);

function insertCssMaskingBorder() {
  var css = hideSelector + ' {border: 1px solid rgba(0, 0, 255, 0.7); border-radius: 10px; animation: glow 3s infinite alternate;}';
  insertCss(css);
}

function insertFixedTextBox() {
  var textBox = document.createElement('div');

  textBox.style.position = 'fixed';
  textBox.style.bottom = '20px';
  textBox.style.left = '20px';
  textBox.style.zIndex = '9999';
  textBox.style.backgroundColor = '#233246';
  textBox.style.padding = '10px';
  textBox.style.border = '1px solid #fff';
  textBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
  textBox.style.color = 'white';
  textBox.style.fontWeight = 'bold';
  textBox.style.fontSize = '10px';
  textBox.style.opacity = '0.7';
  textBox.innerText = 'Masking on';

  // Add hover styles
  textBox.style.transition = 'all 0.3s'; // Smoothing the transition
  textBox.style.cursor = 'pointer'; // Change cursor on hover

  // Apply styles on hover
  textBox.addEventListener('mouseenter', function () {
    textBox.style.transform = 'scale(1.1)';
    textBox.style.opacity = '1';
    textBox.style.left = '40px';
    textBox.innerText = 'Highlighted Elements are Masked From the Agent';
    textBox.style.fontSize = '20px';
  });

  // Reset styles on mouse leave
  textBox.addEventListener('mouseleave', function () {
    textBox.style.transform = 'scale(1)';
    textBox.style.opacity = '0.7';
    textBox.style.left = '20px';
    textBox.innerText = 'Masking on';
    textBox.style.fontSize = '10px';
  });

  document.body.appendChild(textBox);
}
insertCssMaskingBorder();
insertFixedTextBox();
});
