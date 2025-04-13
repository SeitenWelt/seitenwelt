const USERNAME = "Admin2025";
const PASSWORD = "SeitenWelt!";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("fileList").style.display = "block";
    loadDocuments();
  } else {
    document.getElementById("loginMessage").innerText = "Falscher Benutzername oder Passwort!";
  }
}

function loadDocuments() {
  const files = [
    "RechnungVorlage_SeitenWelt.docx",
    "Vertrag SeitenWelt Zum Selber Eintragen.docx"
  ];

  const docList = document.getElementById("documents");
  files.forEach(file => {
    const link = document.createElement("a");
    link.href = `dokumente/${file}`;
    link.innerText = file;
    link.download = file;
    docList.appendChild(link);
  });
}
