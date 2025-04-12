
const codes = {
  "SEITEN001": true,
  "SAMMLER2024": true,
  "FAXBIBEL": true
};
function checkCode() {
  const input = document.getElementById("code").value.trim();
  const error = document.getElementById("error");
  if (codes[input]) {
    window.location.href = "kundenbereich.html";
  } else {
    error.textContent = "Ungültiger Zugangscode.";
  }
}
