<!DOCTYPE html>
<html>
<head>
    <title>Favorites</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Your Favorites ❤️</h1>

<div id="favList"></div>

<br>
<a href="index.php"><button>Back</button></a>

<script>
let fav = JSON.parse(localStorage.getItem("fav")) || [];
let container = document.getElementById("favList");

function showFav() {
    container.innerHTML = "";

    fav.forEach((f, i) => {
        container.innerHTML += `
        <div class="card">
            <img src="${f.img}">
            <h3>${f.name}</h3>
            <button onclick="play('${f.yt}')">▶ Trailer</button>
            <button onclick="removeFav(${i})">❌ Remove</button>
        </div>`;
    });
}

function removeFav(index) {
    fav.splice(index,1);
    localStorage.setItem("fav", JSON.stringify(fav));
    showFav();
}

function play(id) {
    window.open("https://www.youtube.com/watch?v=" + id);
}

showFav();
</script>

</body>
</html>