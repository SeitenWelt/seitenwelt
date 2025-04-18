function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "Admin2025" && password === "SeitenWelt!") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMessage").innerText = "Zugangsdaten sind falsch.";
  }
}
