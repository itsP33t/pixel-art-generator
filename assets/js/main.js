// P33t.net
// Importing 
const aframe = document.getElementById("frame");
const gen = document.getElementById("gen");
const gh = document.getElementById("gh");
const share = document.getElementById("share");
// --
// Main function
function generate() {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const url = `https://avatars.dicebear.com/api/pixel-art/${id}.svg`
    aframe.src = url;
}

// main event
gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
});



// useless things but i was bored so i did it this way

share.addEventListener('click', function(e) {
    e.preventDefault();
    location.replace(aframe.src);
});

gh.addEventListener('click', function(e) {
    e.preventDefault();
    location.replace("https://github.com/itsP33t/pixel-art-generator");
});