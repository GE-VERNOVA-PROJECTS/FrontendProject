function load(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}

load("navbar", "components/navbar.html");
load("intro", "sections/intro.html");
load("website", "sections/website.html");
load("gallery", "sections/gallery.html");
load("cards", "sections/cards.html");
load("media", "sections/media.html");
