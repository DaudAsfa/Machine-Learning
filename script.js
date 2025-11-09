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
      let link = "https://www.google.com/search?q=";

      if (genre === "anime") link = "https://myanimelist.net/anime.php?q=";
      else if (genre === "drakor") link = "https://www.viu.com/ott/id/id/all/search?q=";
      else if (genre === "dracin") link = "https://www.iq.com/search?query=";
      else if (genre === "indo") link = "https://www.google.com/search?q=film+indonesia+";

      if (keyword) {
        resultText = `
          🎬 Hasil pencarian film untuk: 
          <a href="${link}${encodeURIComponent(keyword)}" target="_blank">${keyword}</a>
        `;
      } else {
        resultText = `
          🍿 Film populer dari kategori ${genre.toUpperCase()} — 
          <a href="${link}${encodeURIComponent(genre)}" target="_blank">Lihat di situs terkait</a>
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
      resultText = "⚠️ Silakan pilih kategori dan genre terlebih dahulu.";
    }

    resultBox.innerHTML = resultText;
  });
});
