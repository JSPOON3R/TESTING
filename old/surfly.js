/* NOTES

SECTIONS:
STARTING UP - add info as listed
API BUILDER - create the flow
EMBED URLS AND BUTTONS - currntly exposing buttons too early. Must update url visuals first

WORKFLOW OF PAGE
- see info about the embed API
- click to create an api request
- hide api request button once it is clicked
- show api builder: blank call on screen with POST, URL and BODY, who are you box, api key box (info about each input and what it means). Include big 'call api' button on screen but mention this can't be clicked until we hav the right info.
- let them add their details with inout boxes
- update API visual the api key added
- when api is called, display response body and status code
- when status code - 200, expose the embed section
- show all the URLs for embed API without access code 
- text box to enter access code from response
- update URL visuals with acess code (and the iframes in the back end) / display generate iframe buttons
- done
*/



  // STARTING UP: START

// reveal the api builder button start
        function Expose_api_view() {
            document.getElementById('api_builder').style.display = "block";

        }
//reveal the api builder button end


//STARTING UP: END

//API BUILDER: START

//request body display start

let agent_id = 'EMPTY';
let email = 'EMPTY';
let namee = 'EMPTY';
let role = 'EMPTY';
let force_new = 'EMPTY';

function request_json(){ 

    document.getElementById("request_body_agent_id").innerHTML = "agent_id: " + agent_id + ",";
    document.getElementById("request_body_email").innerHTML = "email: " + email + ",";
    document.getElementById("request_body_name").innerHTML ="name: " + namee + ",";
    document.getElementById("request_body_role").innerHTML ="role: " + role + ",";
    document.getElementById("request_body_force_new").innerHTML ="force_new: " + force_new;
}


//request body display end


//who are you start

function update_agent_id(){
        var new_agent_id = document.getElementById("agent_id_input_box").value;
        agent_id = new_agent_id;
        document.getElementById("request_body_agent_id").innerHTML = "agent_id: " + agent_id + ",";
}

function update_email(){
    var new_email = document.getElementById("email_input_box").value;
    email = new_email;
    document.getElementById("request_body_email").innerHTML = "email: " + email + ",";

}

function update_name(){
    var new_namee = document.getElementById("name_input_box").value;
    namee = new_namee;
    document.getElementById("request_body_name").innerHTML ="name: " + namee + ",";

}

function update_role(){
    var new_role = document.getElementById("role_input_box").value;
    role = new_role;
    document.getElementById("request_body_role").innerHTML ="role: " + role + ",";

}

function update_force_new(){
    var new_force_new = document.getElementById("force_new_input_box").value;
    force_new = new_force_new;
    document.getElementById("request_body_force_new").innerHTML ="force_new: " + force_new;
}







//who are you end

//store api key entry
        function collectApiKey() {
            var key_input = document.getElementById("apikey_input_box").value
            localStorage.setItem('stored_key', key_input)
            console.log("API_KEY submitted: " + key_input)
            console.log("Key stored locally: " + localStorage.getItem('stored_key'))
        }

//Update Display

function update_api_display(){
    document.getElementById("api_url_key").innerHTML ="YOUR_SECRET_API_KEY";
}



//call api start

        let stored_key = localStorage.getItem('stored_key')

        function callAPI() {
//consolidate response into a single variable for API call


/* storing values for testing
321854
john@surfly.com
John
admin
false
a69e09988d8d46a1a6b11ad7245eb023


https://www.javascripttutorial.net/javascript-fetch-api/
*/
            

let request_body = "{\"agent_id\":"+ agent_id+","+"\"email\":"+"\""+email+"\""+","+"\"name\":"+"\""+namee+"\""+","+"\"role\":"+"\""+role+"\""+","+"\"force_new\":"+force_new+"}";
            console.log("request body log"+request_body);

//for testing
let request_body_testing = "{\"agent_id\":"+ "321854"+","+"\"email\":"+"\""+"john@surfly.com"+"\""+","+"\"name\":"+"\""+"John"+"\""+","+"\"role\":"+"\""+"admin"+"\""+","+"\"force_new\":"+"false"+"}";
console.log("request body testing log"+request_body_testing);

let api_key_test = "a69e09988d8d46a1a6b11ad7245eb023";



           async function get_access_toekn() {
            
            let response = await fetch("https://surfly.com/v2/agents/access-token/?api_key=" + api_key_test, { //change back to stored_key
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: request_body_testing, //changeback to request_body
            })
            .then((response) => Promise.all([response.status, response.json()]))
            .then(([status, data]) => console.log({status, data}))

        
                    
                }
            

            get_access_toekn();
               
        }

/*
           fetch("https://surfly.com/v2/agents/access-token/?api_key=" + stored_key, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: request_body,
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
       

        }
*/



//all api end
//API BUILDER: END

//STEP 2. EMBED URLS
//expose urls with blank tokens start

//expose urls with blank tokens end



//EXPOSE TOKEN INPUT

        function Exposetokenbutton() {
            document.getElementById('token_button_div').style.display = "block";
        }


//ONCE TOKEN IS RECIEVED:

//STORE AGENT_TOKEN

        function returntoken() {
            var token_input = document.getElementById("token_input_box").value
            localStorage.setItem('stored_token', token_input)
            console.log("AGENT_TOKEN submitted: " + token_input)
            console.log("Token stored locally: " + localStorage.getItem('stored_token'))
        }


//'APPLY AGENT_TOKEN TO IFRAME' FUNCTIONS-->

        let stored_token = localStorage.getItem('stored_token')

        function updateurl_startsession() {
            let start_session = document.getElementById("start_session");
            let url_string = "https://app.surfly.com/embed/start/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_supportqueue() {
            let start_session = document.getElementById("support_queue");
            let url_string = "https://app.surfly.com/embed/queue/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_sessionhistory() {
            let start_session = document.getElementById("session_history");
            let url_string = "https://app.surfly.com/embed/history/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_companyoptions() {
            let start_session = document.getElementById("company_options");
            let url_string = "https://app.surfly.com/embed/options/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }


//EXPOSE EMBED URL SECTION

        function ExposeEmbedUrls() {
            document.getElementById('generate_urls_div').style.display = "block";
        }

//EXPOSE IFRAME
//EXPOSE IFRAME FUNCTIONS START
//EXPOSE SESSION iFRAME

        function Exposeiframes_session() {
            document.getElementById('iframe_div_session').style.display = "block";
        }
//EXPOSE SUPPORT iFRAME

        function Exposeiframes_support() {
            document.getElementById('iframe_div_support').style.display = "block";
        }
//EXPOSE HISTORY iFRAME

        function Exposeiframes_history() {
            document.getElementById('iframe_div_history').style.display = "block";
        }

//EXPOSE COMPANY iFRAME

        function Exposeiframes_company() {
            document.getElementById('iframe_div_company').style.display = "block";
        }
//EXPOSE IFRAME FUNCTIONS END