document.getElementById("recommendationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const genre = document.getElementById("genre").value;
  const keyword = document.getElementById("keyword").value.trim().toLowerCase();
  const resultBox = document.getElementById("result");

  let resultText = "";

  // === Jika kategori MUSIK ===
  if (category === "music") {
    if (keyword) {
      // Jika user mengetik kata kunci
      resultText = `
        🎵 Hasil pencarian di Spotify untuk: 
        <a href="https://open.spotify.com/search/${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
      `;
    } else {
      // Jika user hanya memilih genre
      resultText = `
        🎧 Lagu populer di kategori ${genre.toUpperCase()} — 
        <a href="https://open.spotify.com/search/${encodeURIComponent(genre)}" target="_blank">Lihat di Spotify</a>
      `;
    }
  }

  // === Jika kategori FILM ===
  else if (category === "film") {
    if (keyword) {
      resultText = `
        🎬 Hasil pencarian film untuk: 
        <a href="https://www.justwatch.com/id/search?q=${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
      `;
    } else {
      resultText = `
        🍿 Film populer dari kategori ${genre.toUpperCase()} — 
        <a href="https://www.justwatch.com/id/search?q=${encodeURIComponent(genre)}" target="_blank">Lihat di JustWatch</a>
      `;
    }
  }

  // === Jika belum memilih ===
  else {
    resultText = "⚠️ Silakan pilih kategori dan jenis terlebih dahulu.";
  }

  // Tampilkan hasil
  resultBox.innerHTML = resultText;
});
