<!DOCTYPE html>
<html>
<head>
    <title>Movie Mood App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="splash">Movie Mood</div>

<div id="app" class="hidden">

    <div class="header">
        <h1>Select Your Mood</h1>
    </div>

    <div class="moods">
        <a href="movies.php?mood=Happy"><button>Happy</button></a>
        <a href="movies.php?mood=Sad"><button>Sad</button></a>
        <a href="movies.php?mood=Action"><button>Action</button></a>
    </div>

    <br>
    <a href="favorites.php"><button>View Favorites ❤️</button></a>

</div>

<script>
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
}, 2000);
</script>

</body>
</html>