// Zugangscodes mit Erstellungsdatum

const accessCodes = [

  { code: "KUNDE123", createdAt: "2025-04-12" },

  { code: "KUNDE456", createdAt: "2025-04-01" }

];



// Funktion prüft, ob Code gültig ist (240 Tage ab Erstellungsdatum)

function isCodeValid(inputCode) {

  const code = accessCodes.find(c => c.code === inputCode);

  if (!code) return false;



  const created = new Date(code.createdAt);

  const today = new Date();

  const diffDays = Math.floor((today - created) / (1000 * 60 * 60 * 24));



  return diffDays <= 240;

}



// Global verfügbar machen

window.isCodeValid = isCodeValid;
