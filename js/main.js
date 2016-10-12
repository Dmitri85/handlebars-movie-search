

var form = document.querySelector('#search-form');
var inp = form.querySelector('input');
var target = document.querySelector('#target-movie');
var template = Handlebars.compile(document.querySelector('#movie-tmpl').innerHTML);


function handleMovieResult(ev) {
  var xhr = ev.target;
  var data = JSON.parse(xhr.responseText);

  var result_html = template(data);

  target.innerHTML = result_html;
}

function handleSubmit(ev) {
  ev.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://omdbapi.com/?s=" + inp.value);
  xhr.addEventListener('load', handleMovieResult);
  xhr.send();

}


form.addEventListener('submit', handleSubmit);