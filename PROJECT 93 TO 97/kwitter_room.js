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
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"

function addRoom() {
    room_name = document.getElementById("room_name").value
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" })
    localStorage.setItem("room_name", room_name)
    window.location = "kwitter_page.html"
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room name" + Room_names)
            row = "<div class='room_name'id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
            document.getElementById("output").innerHTML += row
                //End code
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "kwitter.html"
}