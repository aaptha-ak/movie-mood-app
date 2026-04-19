const moviesDiv = document.getElementById("moviesDiv");
const search = document.getElementById("search");

// 10 MOVIES EACH (LOCAL IMAGES)
const movies = {

Happy: [
{name:"3 Idiots", img:"images/3idiots.jpg", yt:"K0eDlFX9GMc"},
{name:"ZNMD", img:"images/znmd.jpg", yt:"FJrpcDgC3zU"},
{name:"Barfi!", img:"images/barfi.jpg", yt:"nQ3FYUgSjC8"},
{name:"Queen", img:"images/queen.jpg", yt:"KGC6vl3lzf0"},
{name:"PK", img:"images/pk.jpg", yt:"SOXWc32k4zA"},
{name:"Chhichhore", img:"images/chhichhore.jpg", yt:"tsxemFX0a7k"},
{name:"Jab We Met", img:"images/jabwemet.jpg", yt:"udY0aVJ7FqY"},
{name:"Dil Chahta Hai", img:"images/dilchahta.jpg", yt:"8-0z2X2nF5U"},
{name:"Good Newwz", img:"images/goodnewwz.jpg", yt:"r9zYzV4v7nA"},
{name:"YJHD", img:"images/yjhd.jpg", yt:"fVF8WBf2WZg"}
],

Sad: [
{name:"Aashiqui 2", img:"images/aashiqui2.jpg", yt:"FyXXgpPqe6w"},
{name:"Kal Ho Na Ho", img:"images/kalhonaaho.jpg", yt:"tVMAQAsjsOU"},
{name:"Rockstar", img:"images/rockstar.jpg", yt:"bD5FShPZdpw"},
{name:"Tamasha", img:"images/tamasha.jpg", yt:"5m_-p5kCzQY"},
{name:"Kabir Singh", img:"images/kabirsingh.jpg", yt:"RiANSSgCuJk"},
{name:"Lootera", img:"images/lootera.jpg", yt:"Re8n5Ff1Zb8"},
{name:"Raanjhanaa", img:"images/raanjhana.jpg", yt:"8Q1u3Jm2dYg"},
{name:"Highway", img:"images/highway.jpg", yt:"6C8F7c0mT7A"},
{name:"Masaan", img:"images/masaan.jpg", yt:"SKJfBo3k7c8"},
{name:"October", img:"images/october.jpg", yt:"K0eDlFX9GMc"}
],

Action: [
{name:"KGF", img:"images/kgf.jpg", yt:"-KfsY-qwBS0"},
{name:"Avengers", img:"images/avengers.jpg", yt:"TcMBFSGVi1c"},
{name:"War", img:"images/war.jpg", yt:"tQ0mzXRk-oM"},
{name:"Pathaan", img:"images/pathaan.jpg", yt:"4xl9KfUg8Lc"},
{name:"RRR", img:"images/rrr.jpg", yt:"NgBoMJy386M"},
{name:"Baaghi", img:"images/baaghi.jpg", yt:"swv2gM7LhYk"},
{name:"Singham", img:"images/singham.jpg", yt:"mp-XqCrCi6I"},
{name:"Don", img:"images/don.jpg", yt:"K8Q6Kz6J1aQ"},
{name:"Raees", img:"images/raees.jpg", yt:"J7_1MU3gDk0"},
{name:"Dhoom 3", img:"images/dhoom3.jpg", yt:"ZTkP7o2Y9jE"}
]

};

// LOAD MOVIES
if (typeof selectedMood !== "undefined") {
    displayMovies(movies[selectedMood]);
}

// DISPLAY
function displayMovies(list) {
    moviesDiv.innerHTML = "";

    list.forEach(m => {
        moviesDiv.innerHTML += `
        <div class="card">
            <img src="${m.img}">
            <h3>${m.name}</h3>
            <button onclick="play('${m.yt}')">▶ Trailer</button>
            <button onclick="addFav('${m.name}','${m.img}','${m.yt}')">❤️</button>
        </div>`;
    });
}

// TRAILER
function play(id) {
    window.open("https://www.youtube.com/watch?v=" + id, "_blank");
}

// FAVORITES
function addFav(name,img,yt) {
    let fav = JSON.parse(localStorage.getItem("fav")) || [];
    fav.push({name,img,yt});
    localStorage.setItem("fav", JSON.stringify(fav));
    alert("Added!");
}

// SEARCH
function searchMovie() {
    let val = search.value.toLowerCase();
    let filtered = movies[selectedMood].filter(m =>
        m.name.toLowerCase().includes(val)
    );
    displayMovies(filtered);
}