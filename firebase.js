var firebaseConfig = {
        apiKey: "AIzaSyB0bJ_7rDn2iMSOWrkhYEu8NuwrE3GnTOQ",
        authDomain: "ib-exam-review.firebaseapp.com",
        databaseURL: "https://ib-exam-review.firebaseio.com",
        projectId: "ib-exam-review",
        storageBucket: "ib-exam-review.appspot.com",
        messagingSenderId: "87331105938",
        appId: "1:87331105938:web:87ab6715af859915"
      };
      // Initialize Firebase
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      const db = firebaseApp.firestore();
      