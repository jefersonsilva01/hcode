function connectFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBYs4M-bfAuofkl_irtwXrdgdPvEMGNSRs",
        authDomain: "dropbox-clone-c4766.firebaseapp.com",
        databaseURL: "https://dropbox-clone-c4766-default-rtdb.firebaseio.com",
        projectId: "dropbox-clone-c4766",
        storageBucket: "dropbox-clone-c4766.appspot.com",
        messagingSenderId: "977961143569",
        appId: "1:977961143569:web:61fc18cedd45ae003d10b0",
        measurementId: "G-DMHM6KMDCG"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}