function GetList(category) {
    var dbRef = db.collection(category).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var para = document.createElement("p");
            document.getElementById("results").appendChild(para);
            var node = document.createTextNode(doc.data().firstName);
            para.appendChild(node);
        })
    })
        .catch(function (error) {
            console.log("error " + error)
        })
}

GetList("users");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        //User is signed in.
        var check = 0;
        var dbRef = db.collection("users").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                if (doc.data().name === user.displayName) {
                    console.log("hooray");
                    check = 1;
                    console.log(check)
                }
            });
            setDocument()
        });

        function setDocument() {
            if (check === 0) {
                db.doc("users/" + user.displayName).set({
                    name: user.displayName,
                    email: user.email,
                    pic: "http://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg",
                    interests: ["N/A"],
                }, {merge: true});
                console.log("Account has been set with " + user.displayName)
            } else {
                console.log("No update.")
            }
        }
    }
});

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