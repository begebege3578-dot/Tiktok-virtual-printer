
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    nama: "TikTok Virtual Printer",
    pesan: "Server berhasil berjalan"
  });
});

app.get("/", (req, res) => {
  res.send(`
    <h1>TikTok Virtual Printer</h1>
    <p id="status">Server aktif.</p>
    <script>
      fetch('/api/status')
        .then(r => r.json())
        .then(data => {
          document.getElementById('status').textContent =
            data.nama + ' - ' + data.status;
        });
    </script>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server berjalan pada port " + PORT);
});
