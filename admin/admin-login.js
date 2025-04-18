document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "Admin2025" && password === "SeitenWelt!") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-message").textContent =
      "Falscher Benutzername oder Passwort.";
  }
});
