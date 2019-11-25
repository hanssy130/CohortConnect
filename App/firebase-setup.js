 var firebaseConfig = {
        apiKey: "AIzaSyBvgCw0PHP1CCITIb23FR2WZ72xR7q4F98",
        authDomain: "cohort-connect-d8de7.firebaseapp.com",
        databaseURL: "https://cohort-connect-d8de7.firebaseio.com",
        projectId: "cohort-connect-d8de7",
        storageBucket: "cohort-connect-d8de7.appspot.com",
        messagingSenderId: "1077255292403",
        appId: "1:1077255292403:web:979011f32859177ee93e86",
        measurementId: "G-99GGCCMMFG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // reference to firestore db
    var db = firebase.firestore();