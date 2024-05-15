


document.addEventListener('DOMContentLoaded', function() {
    

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
    
    function insertFixedTextBox() {
      var textBox = document.createElement('button');
    
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
      textBox.style.opacity = '1';
      textBox.style.borderRadius = '50%';
      textBox.innerText = 'SS';
      textBox.style.animation = 'glow 3s infinite alternate';
      textBox.style.cursor = 'pointer';
    
    
      document.body.appendChild(textBox);
      textBox.addEventListener('click', function () {
        window.parent.SurflySession.startScreensharing();
      });
    }


    insertFixedTextBox();
    });
    