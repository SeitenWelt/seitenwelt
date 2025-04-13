const codes = [

  { code: "ABC123", created: "2024-08-15" },

  { code: "XYZ789", created: "2024-08-20" }

];



function checkCode() {

  const input = document.getElementById("codeInput").value.trim();

  const today = new Date();

  

  const validCode = codes.find(entry => {

    const createdDate = new Date(entry.created);

    const diffDays = (today - createdDate) / (1000 * 60 * 60 * 24);

    return entry.code === input && diffDays <= 240;

  });



  if (validCode) {

    window.location.href = "kundenbereich.html";

  } else {

    alert("Ungültiger oder abgelaufener Zugangscode.");

  }

}
