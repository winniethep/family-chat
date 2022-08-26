var firebaseConfig = {
    apiKey: "AIzaSyCjJxQk077dbSes1mWnRBlDLGdc5aqpJMQ",
    authDomain: "kwitter-98f10.firebaseapp.com",
    databaseURL: "https://kwitter-98f10-default-rtdb.firebaseio.com",
    projectId: "kwitter-98f10",
    storageBucket: "kwitter-98f10.appspot.com",
    messagingSenderId: "93064960819",
    appId: "1:93064960819:web:9a12f340b165687003fc46"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name: user_name,
        messege: msg,
        like: 0
    })
    document.getElementById("msg").value = ""
}