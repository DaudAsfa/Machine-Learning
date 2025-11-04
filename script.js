document.getElementById("moodForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const kategori = document.getElementById("kategori").value;
  const resultDiv = document.getElementById("result");

  let rekomendasi = "";

  if (kategori === "wibu") {
    if (mood === "sedih") {
      rekomendasi = "🎵 Lagu: Orange - 7!!<br>🎬 Film: Your Lie in April";
    } else if (mood === "senang") {
      rekomendasi = "🎵 Lagu: Gotoubun no Katachi - Nakanoke no Itsutsugo<br>🎬 Film: Kimi no Na wa";
    } else if (mood === "marah") {
      rekomendasi = "🎵 Lagu: Uragiri no Yuuyake - Theatre Brook<br>🎬 Film: Attack on Titan";
    } else if (mood === "tenang") {
      rekomendasi = "🎵 Lagu: Again - YUI<br>🎬 Film: Spirited Away";
    }
  }

  else if (kategori === "kpopers") {
    if (mood === "sedih") {
      rekomendasi = "🎵 Lagu: Life Goes On - BTS<br>🎬 Film: Twenty-Five Twenty-One";
    } else if (mood === "senang") {
      rekomendasi = "🎵 Lagu: Dynamite - BTS<br>🎬 Film: Dream High";
    } else if (mood === "marah") {
      rekomendasi = "🎵 Lagu: Kill This Love - BLACKPINK<br>🎬 Film: Vincenzo";
    } else if (mood === "tenang") {
      rekomendasi = "🎵 Lagu: Spring Day - BTS<br>🎬 Film: Our Beloved Summer";
    }
  }

  else if (kategori === "normies") {
    if (mood === "sedih") {
      rekomendasi = "🎵 Lagu: Fix You - Coldplay<br>🎬 Film: The Pursuit of Happyness";
    } else if (mood === "senang") {
      rekomendasi = "🎵 Lagu: Happy - Pharrell Williams<br>🎬 Film: Paddington";
    } else if (mood === "marah") {
      rekomendasi = "🎵 Lagu: In the End - Linkin Park<br>🎬 Film: John Wick";
    } else if (mood === "tenang") {
      rekomendasi = "🎵 Lagu: Let Her Go - Passenger<br>🎬 Film: The Secret Life of Walter Mitty";
    }
  }

  if (rekomendasi) {
    resultDiv.innerHTML = rekomendasi;
  } else {
    resultDiv.innerHTML = "⚠️ Silakan pilih mood dan kategori terlebih dahulu.";
  }
});
