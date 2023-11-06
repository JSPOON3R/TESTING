// Surfly
(function (s, u, r, f, l, y) {
    s[f] = s[f] || { init: function () { s[f].q = arguments } };
    l = u.createElement(r); y = u.getElementsByTagName(r)[0]; l.async = 1;
    l.src = 'https://surfly.com/surfly.js'; y.parentNode.insertBefore(l, y);
})
    (window, document, 'script', 'Surfly');

var urlValue; // Declare urlValue in the global scope

// Make sure this runs only when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to get the value of a query parameter from the URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function removeWwwPrefix(text) {
        return text.replace(/^www\./, '');
    }
    // Get and store the values of query parameters as variables
    const nameValue = getQueryParam("name");
    urlValue = getQueryParam("url"); // Assign urlValue in the global scope

    // Check if the parameters exist and are not empty
    if (nameValue && urlValue) {
        const capitalizedName = capitalizeFirstLetter(nameValue);
        const greeting = "Hi " + capitalizedName + ",";
        console.log("Value of greeting: " + greeting);
        console.log("Value of url: " + urlValue);
        const outputTextElement = document.getElementById("customer-name");
        outputTextElement.textContent = greeting;
        const websitename = document.getElementById("website");
        const websitename2 = document.getElementById("website-subheading");
        websitename.textContent = urlValue;
        const newurlvalue = removeWwwPrefix(urlValue);
        websitename2.textContent = newurlvalue;
    } else {
        console.log("One or both query parameters are missing.");
    }

// Session
var SurflySession;
var settings = {
    widget_key: 'd97af65cf4d24a7f86783f8cd38cfe8e',
    private_session: false, 
    password_required: false,
    host_switching_allowed: true,
    block_until_agent_joins: false,
    videochat: false,
    follower_redirect_url: "https://jspoon3r.github.io/surfly.html",
    leader_redirect_url: "https://jspoon3r.github.io/surfly.html"
};

Surfly.init(settings, function (initResult) {
    if (initResult.success) {
        // API calls can now be made!
        if (!Surfly.isInsideSession) {
            console.log("Surfly loaded successfully!");
        }
    } else {
        console.log("Surfly was unable to initialize properly.");
    }

    SurflySession = Surfly.session({ meta:"(page url + anything else useful for queries)", url: urlValue, allowlist: '[{"pattern": ".*(('+urlValue+'.*)|jspoon3r.github.io/demo-surfly/contact_surfly.html)", "redirect": "https://jspoon3r.github.io/demo-surfly/contact_surfly.html"}]'  }).startLeader("#iframe");

    Surfly.on('session_created', function (session, event) {
        console.log('Session', session.followerLink, 'has just started');
    });
}); 
});
   // When the image has loaded, display the iframe
const iframe = document.getElementById('iframe');
    const laptop = document.getElementById('laptop-png');
    iframe.style.display = 'none';
    laptop.addEventListener('load', function () {
        iframe.style.display = 'block';
    });