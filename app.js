window.addEventListener("click", function (e) {
    removemodel(e);
});
function removemodel(e) {
    let model = document.getElementById('player');
    if (e.target == model) {
        document.getElementById('player').style.display = 'none';
        document.getElementById('iframe').src = ``;
    };
}
function playvideo(link) {
    document.getElementById('player').style.display = "block";
    document.getElementById('iframe').src = `https://www.youtube.com/embed/${link}`;
}