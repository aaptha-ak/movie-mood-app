<?php
$mood = $_GET['mood'];
?>

<!DOCTYPE html>
<html>
<head>
    <title><?php echo $mood; ?> Movies</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="header">
    <h1><?php echo $mood; ?> Movies</h1>
</div>

<input type="text" id="search" placeholder="Search..." onkeyup="searchMovie()">

<div id="moviesDiv"></div>

<br>
<a href="index.php"><button>Back</button></a>
<a href="favorites.php"><button>Favorites ❤️</button></a>

<div id="popup" class="popup hidden">
    <iframe id="frame" width="400" height="250"></iframe>
    <br>
    <button onclick="closePopup()">Close</button>
</div>

<script>
let selectedMood = "<?php echo $mood; ?>";
</script>

<script src="script.js"></script>

</body>
</html>