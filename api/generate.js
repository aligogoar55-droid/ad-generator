async function generate() {

  let type = document.getElementById("type").value;
  let name = document.getElementById("name").value;
  let offer = document.getElementById("offer").value;

  let result = document.getElementById("result");

  result.innerHTML = "<div class='ad'>جاري توليد إعلانات احترافية...</div>";

  const response = await fetch("https://YOUR-VERCEL-URL.vercel.app/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ type, name, offer })
  });

  const data = await response.json();

  result.innerHTML = "<div class='ad'>" + data.result + "</div>";
}
