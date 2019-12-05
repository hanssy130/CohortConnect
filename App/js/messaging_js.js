const docRef = db.doc("messages/userAuserB/conversations/hFpyMq5pMPJv0eZcoHFX");
const colRef = db.collection("messages/userAuserB/conversations");
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latestHotDogStatus");
const saveButton = document.querySelector("#saveButton");

function gotoBottom(id) {
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
}


function autoReload(){
    window.location.reload()
}

firebase.auth().onAuthStateChanged(function (user) {
    saveButton.addEventListener("click", function () {
        const textToSave = inputTextField.value;
        console.log("I am going to add " + textToSave + " as a new collection.");
        colRef.add({
                text: textToSave,
                sent_at: new Date(),
                sender: user.displayName,
            }
        ).then(function () {
            console.log("Text added!");
            autoReload();
        }).catch(function (error) {
            console.log("Got an error: ", error);
        });

        const userData = user.displayName;
        var para3 = document.createElement("p");
        para3.id = "text";
        document.getElementById("app").appendChild(para3);
        var sender = document.createTextNode(userData);
        para3.appendChild(sender);

        const myData = inputTextField.value;
        var para2 = document.createElement("p");
        para2.id = "text";
        document.getElementById("app").appendChild(para2);
        var txtmsg = document.createTextNode(myData);
        para2.appendChild(txtmsg);
        gotoBottom("app")
    });

});

function getMessages(category) {
    var dbRef = db.collection(category).orderBy('sent_at').get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {
            // Creates the time.
            var para3 = document.createElement("p");
            para3.id = "sender";
            document.getElementById("app").appendChild(para3);
            var sender = document.createTextNode(doc.data().sender);
            para3.appendChild(sender);

            // Creates the text.
            var para2 = document.createElement("p");
            para2.id = "text";
            document.getElementById("app").appendChild(para2);
            var txtmsg = document.createTextNode(doc.data().text);
            para2.appendChild(txtmsg);

        })
    })
        .catch(function (error) {
            console.log("error " + error)
        })
}

getMessages("/messages/userAuserB/conversations");

//making sign out button
function signout() {
    document.getElementById("signout").onclick = () => {
        firebase.auth().signOut().then(function () {
            console.log("user signed out");
            window.location.href = "index.html"
        }).catch(function (error) {
            console.log("error")
        })
    }
}


signout();
