document.addEventListener('DOMContentLoaded', function() {
    //Load Surfly
    (function(s,u,r,f,l,y){s[f]=s[f]||{init:function(){s[f].q=arguments}};
    l=u.createElement(r);y=u.getElementsByTagName(r)[0];l.async=1;
    l.src='https://surfly.com/surfly.js';y.parentNode.insertBefore(l,y);})
    (window,document,'script','Surfly');

    Surfly.init( function(initResult) {
        if (initResult.success) {
            console.log('Surfly loaded on child page');
        } else {
            console.log('Surfly init failed in iFrame');
        }


        Surfly.on("session_started", ()=> {
            Surfly.on('message', function (session, event) {
                if (event.origin) {
                    console.error('Message received inside from: ', event.origin);
                    console.log('Message Received inside session:', event.data.message);
                }
            });
            Surfly.listSessions()[0].on('message', function(session, event) {
                      console.log("HELLO: "+event.data.message);
            });
        
    });});


    // Function to add HTML to the DOM
    function insertFixedWidgetSurfly(callback) {
        // Create the floating widget container
        var widgetContainer = document.createElement('div');
        widgetContainer.id = 'surfly-floating-widget';
        widgetContainer.style.position = 'fixed';
        widgetContainer.style.bottom = '20px';
        widgetContainer.style.right = '20px';
        widgetContainer.style.width = '300px';
        widgetContainer.style.backgroundColor = '#f0f0f0';
        widgetContainer.style.border = '1px solid #ccc';
        widgetContainer.style.borderRadius = '5px';
        widgetContainer.style.padding = '10px';
        widgetContainer.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.1)';
        document.body.appendChild(widgetContainer);

        // Create the message container
        var messageContainer = document.createElement('div');
        messageContainer.id = 'surfly-message-container';
        messageContainer.style.height = '200px';
        messageContainer.style.overflowY = 'auto';
        messageContainer.style.border = '1px solid #ddd';
        messageContainer.style.marginBottom = '10px';
        messageContainer.style.padding = '5px';
        widgetContainer.appendChild(messageContainer);

        // Create the message input
        var messageInput = document.createElement('input');
        messageInput.id = 'surfly-message-input';
        messageInput.type = 'text';
        messageInput.style.width = 'calc(100% - 70px)';
        messageInput.style.padding = '5px';
        messageInput.style.marginRight = '5px';
        widgetContainer.appendChild(messageInput);

        // Create the send button
        var sendButton = document.createElement('button');
        sendButton.id = 'surfly-send-button';
        sendButton.textContent = 'Send';
        sendButton.style.width = '60px';
        sendButton.style.padding = '5px';
        sendButton.style.cursor = 'pointer';
        widgetContainer.appendChild(sendButton);

        if (typeof callback === 'function') {
            callback();
        }
    }

    // Call the function to insert the fixed widget
    insertFixedWidgetSurfly(onInsertFixedWidgetSurflyCompleted);

    function onInsertFixedWidgetSurflyCompleted() {
        // This function will be executed when insertFixedWidgetSurfly() has fully executed
        console.log('insertFixedWidgetSurfly has fully executed');

         // Function to send message to parent page
         function sendMessage() {
            const input = document.getElementById("surfly-message-input");
            const messageinput = input.value;
            input.value = "";
            Surfly.listSessions()[0].sendMessage({ message: messageinput }, 'https://demo.surfly.com', window.location.origin);
            console.log("Message Sent from Surfly widget: ");
        }

        // Event listener for send button click
        sendButton = document.getElementById('surfly-send-button')
        sendButton.addEventListener('click', function() {
                sendMessage();
        });

        // Listen for messages from parent page
        window.addEventListener('message', function(event) {
            if (event.origin) {
                console.log('Message received from ' + event.origin + ': ' + event.data.params.msg.message);
                return;
            }
        });

        //listen for messages from parent page
window.addEventListener('message', function (event) {
    if (event.origin) {
        console.log('Message received from '+ event.origin +': '+ event.data.params.msg.message);
        return;
    }
});
    }

    //listen for messages from parent page
window.addEventListener('message', function (event) {
    if (event.origin) {
        console.log('Message received from '+ event.origin +': '+ event.data.params.msg.message);
        return;
    }
});

           
});
