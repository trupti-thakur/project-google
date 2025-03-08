// Check if firebase is defined
if (typeof firebase === "undefined") {
    console.error("Firebase is not loaded properly.");
} else {
    console.log("Firebase loaded successfully.");
}
// Initialize Firebase
    const firebaseConfig = {
  apiKey: "AIzaSyDvjQruuj_UTGxNikxIkl9yLpJX89b8sP0",
  authDomain: "myproject-267ab.firebaseapp.com",
  projectId: "myproject-267ab",
  storageBucket: "myproject-267ab.firebasestorage.app",
  messagingSenderId: "487863292944",
  appId: "1:487863292944:web:030ed506e06086b1c4e695"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Handle Google Sign-In
document.getElementById("google-login").addEventListener("click", () => {
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;

            // Store user details in localStorage
            localStorage.setItem("user", JSON.stringify({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));

            // Redirect to home page
            window.location.href = "home.html";
        })
        .catch((error) => {
            document.getElementById("error").innerText = "Login Failed: " + error.message;
        });
});
