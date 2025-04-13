function adminLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Admin2025" && password === "SeitenWelt!") {
    window.location.href = "admin-dashboard.html";
  } else {
    document.getElementById("error-message").textContent = "Login fehlgeschlagen. Bitte überprüfen.";
  }
}
