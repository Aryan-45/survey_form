
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCcoST22v2ebsDf1SgZ0ZrGoRAnrvKa60k",
    authDomain: "survey-form-7cf43.firebaseapp.com",
    projectId: "survey-form-7cf43",
    storageBucket: "survey-form-7cf43.appspot.com",
    messagingSenderId: "246393314280",
    appId: "1:246393314280:web:692a5d3f937efe67bd225d",
    measurementId: "G-E22Y3GW44Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();
  const colRef = collection(db, "formData")

  const form = document.querySelector(".input-fields")
  const name = document.querySelector("#name")
  const dob = document.querySelector("#dob")
  const email = document.querySelector("#email")
  const curKnowledge = document.querySelector("#curKnowledge")
  const aim = document.querySelector("#aim")
  const dreamProject = document.querySelector("#dreamProject")

  form.addEventListener("submit",(Event)=>{
    Event.preventDefault()
    addDoc(colRef,{
        name: name.value,
        dob: dob.value,
        email: email.value,
        curKnowledge: curKnowledge.value,
        aim: aim.value,
        dreamProject: dreamProject.value,
    })
    .then((reuslt)=>{
        form.reset()
        alert("Your data was successfully submitted")

    })
    .catch((err)=>{
        alert(err);

    })
  })
