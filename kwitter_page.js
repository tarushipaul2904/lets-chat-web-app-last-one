//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDtWnjl8ePKVArSLXzZ3Yw589c_cXverUQ",
    authDomain: "kwitterr-2f43e.firebaseapp.com",
    databaseURL: "https://kwitterr-2f43e-default-rtdb.firebaseio.com",
    projectId: "kwitterr-2f43e",
    storageBucket: "kwitterr-2f43e.appspot.com",
    messagingSenderId: "461181974766",
    appId: "1:461181974766:web:0485e77d5841dd256d5bff",
    measurementId: "G-YLGFCLQJVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

  user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0      
    });
    document.getElementById("msg").value = "";
}
    function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
