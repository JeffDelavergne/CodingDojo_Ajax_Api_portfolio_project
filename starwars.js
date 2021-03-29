function getFilmData() {
    $.get(`https://swapi.dev/api/films`, function (data) {
        $("#data").empty();
        for (var i=0; i<data.results.length; i++) {
            var htmlStr = "";
            htmlStr += `<div class="api-data-box">`;
            htmlStr += `<h2>Title: ${data.results[i].title}</h2>`;
            htmlStr += `<h3>Opening Text:</h3><p>${data.results[i].opening_crawl}</p>`;
            htmlStr += `<h3>Episode Number: ${data.results[i].episode_id}</h3>`;
            htmlStr += "<hr/>";
            htmlStr += "</div>";
            $("#data").append(htmlStr);
        }
    });
}
function getPeopleData() {
    $.get(`https://swapi.dev/api/people`, function (data) {
        $("#data").empty();
        console.log(data);
        for (var i=0; i<data.results.length; i++) {
            var htmlStr = "";
            htmlStr += `<div class="api-data-box">`;
            htmlStr += `<h2>Name: ${data.results[i].name}</h2>`;
            htmlStr += `<h3>Gender: ${data.results[i].gender}</h3>`;
            htmlStr += "<hr/>";
            htmlStr += "</div>";
            $("#data").append(htmlStr);
        }
    });
}
function getPlanetData() {
    $.get(`https://swapi.dev/api/planets`, function (data) {
        $("#data").empty();
        console.log(data);
        for (var i=0; i<data.results.length; i++) {
            var htmlStr = "";
            htmlStr += `<div class="api-data-box">`;
            htmlStr += `<h2>Planet Name: ${data.results[i].name}</h2>`;
            htmlStr += `<h3>Population: ${data.results[i].population}</h3>`;
            htmlStr += `<h3>Terrain: ${data.results[i].terrain}</h3>`;
            htmlStr += "<hr/>";
            htmlStr += "</div>";
            $("#data").append(htmlStr);
        }
    });
}
$(document).ready(function (){
    $("#category").change(function (){
        console.log("gets here");
        var selectedCategory = $(this).children("option:selected").val();
        if (selectedCategory === "people") {
            getPeopleData();
        } else if (selectedCategory === "films") {
            getFilmData();
        } else {
            getPlanetData();
        }
    });
});