// Initialize Firebase
var config = {
    apiKey: "AIzaSyAilqJAUA6MAe8_fYYjdgzAtWAI3BaKOZw",
    authDomain: "testweb-artifice.firebaseapp.com",
    databaseURL: "https://testweb-artifice.firebaseio.com",
    projectId: "testweb-artifice",
    storageBucket: "testweb-artifice.appspot.com",
    messagingSenderId: "848834373957",
    appId: "1:848834373957:web:a192770faebdb47995362c",
    measurementId: "G-63GHDCEY9V"
  };
  firebase.initializeApp(config);

  // Reference Messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
// Submit Form
function submitForm(e){
    e.preventDefault();
    
    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    if(message == "") {
        alert ("Veuillez renseigner votre message!");
        return false;
    }
    if(phone == "") {
        alert ("Veuillez renseigner votre téléphone!");
        return false;
    }

   //Save Message
    saveMessage(name, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display='block';

    //Hide alet after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear Form
    document.getElementById('contactForm').reset();
    return true
}

// Fuction To get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save The Message to The firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        phone:phone,
        messsage:message
    });
}
