let username;

document.getElementById("myBtn").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello, " + username ;
}