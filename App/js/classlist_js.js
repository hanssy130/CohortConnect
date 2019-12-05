   function GetList(category) {
      var dbRef = db.collection(category).get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // Creates profile picture.
          var img = new Image();
          img.src = doc.data().pic;
          img.id = "profile"
          document.getElementById('app').appendChild(img);

          // Prints name.
          var para = document.createElement("p");
          para.id = "name"
          document.getElementById("app").appendChild(para);
          var node = document.createTextNode(doc.data().name);
          para.appendChild(node);

          // Prints interests
          var parabeginning = document.createElement("p")
          parabeginning.innerHTML = "<b>Interests:</b>"
          document.getElementById("app").appendChild(parabeginning);
          let interests = doc.data().interests;

          var para = document.createElement("p");
          interests.forEach((item => {
            para.innerHTML += item + ", ";
            document.getElementById("app").appendChild(para);

          }))
        })
      })
        .catch(function (error) {
          console.log("error " + error)
        })
    }
    GetList("users");
    //making sign out button
    function signout() {
      document.getElementById("signout").onclick = ()=>
      {
      firebase.auth().signOut().then(function(){
        console.log("user signed out")
        window.location.href="index.html"
      }).catch(function(error){
        console.log("error")
      })
      }
    }
    signout();