document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("category");
  const genreSelect = document.getElementById("genre");
  const form = document.getElementById("recommendationForm");
  const resultBox = document.getElementById("result");

  const genreOptions = {
    music: ["Indo", "Kpop", "Anime", "Game"],
    film: ["Anime", "Drakor", "Dracin", "Indo"],
    game: ["Action", "Adventure", "Strategy", "RPG", "Horror"]
  };

  // Update daftar genre sesuai kategori
  categorySelect.addEventListener("change", () => {
    const selectedCategory = categorySelect.value;
    genreSelect.innerHTML = '<option value="" disabled selected>Pilih genre</option>';

    if (genreOptions[selectedCategory]) {
      genreOptions[selectedCategory].forEach((g) => {
        const opt = document.createElement("option");
        opt.value = g.toLowerCase();
        opt.textContent = g;
        genreSelect.appendChild(opt);
      });
    }
  });

  // Saat form dikirim
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const category = categorySelect.value;
    const genre = genreSelect.value;
    const keyword = document.getElementById("keyword").value.trim().toLowerCase();
    let resultText = "";

    if (category === "music") {
      if (keyword) {
        resultText = `
          🎵 Hasil pencarian musik untuk: 
          <a href="https://open.spotify.com/search/${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
        `;
      } else {
        resultText = `
          🎧 Lagu populer dari kategori ${genre.toUpperCase()} — 
          <a href="https://open.spotify.com/search/${encodeURIComponent(genre)}" target="_blank">Lihat di Spotify</a>
        `;
      }
    }

    else if (category === "film") {
      if (keyword) {
        resultText = `
          🎬 Hasil pencarian film untuk: 
          <a href="https://www.justwatch.com/search?q=${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
        `;
      } else {
        resultText = `
          🍿 Film populer dari kategori ${genre.toUpperCase()} — 
          <a href="https://www.justwatch.com/search?q=${encodeURIComponent(genre)}" target="_blank">Lihat di JustWatch</a>
        `;
      }
    }

    else if (category === "game") {
      if (keyword) {
        resultText = `
          🎮 Hasil pencarian game untuk: 
          <a href="https://store.steampowered.com/search/?term=${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
        `;
      } else {
        resultText = `
          🕹️ Game populer genre ${genre.toUpperCase()} — 
          <a href="https://store.steampowered.com/search/?term=${encodeURIComponent(genre)}" target="_blank">Lihat di Steam</a>
        `;
      }
    }

    else {
      resultText = "⚠️ Silakan pilih kategori dan jenis terlebih dahulu.";
    }

    resultBox.innerHTML = resultText;
  });
});
