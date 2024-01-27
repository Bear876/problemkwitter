var firebaseConfig = {
      apiKey: "AIzaSyBqqe6paxsgS-LasYH_GlHSCC0MFQpyTkk",
      authDomain: "kwitter-89228.firebaseapp.com",
      databaseURL: "https://kwitter-89228-default-rtdb.firebaseio.com",
      projectId: "kwitter-89228",
      storageBucket: "kwitter-89228.appspot.com",
      messagingSenderId: "999765155884",
      appId: "1:999765155884:web:ad9a3bbe59a0bf0de7f189"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
