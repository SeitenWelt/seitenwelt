const codes = [

  { code: "WGGUZ84", created: "2025-04-10" },

  { code: "XYZ789", created: "2025-04-01" }

];



function checkCode() {

  const input = document.getElementById("codeInput").value.trim();

  const today = new Date();

  

  const validCode = codes.find(entry => {

    const createdDate = new Date(entry.created);

    const diffDays = Math.floor( (today - createdDate) / (1000 * 60 * 60 * 24));

    return entry.code === input && diffDays <= 240;

  });



  if (validCode) {

    window.location.href = "kundenbereich.html";

  } else {

    alert("Ungültiger oder abgelaufener Zugangscode.");

  }

}
