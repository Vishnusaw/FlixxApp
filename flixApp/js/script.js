const global={
    currentPage:window.location.pathname,
};


// Init App 

function init(){
console.log(global.currentPage);
    switch (global.currentPage) {
        case '/flixApp/':
        case '/index.html':
            console.log('Home');
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('Tv Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
        default:
            console.log('Unknown page:', global.currentPage);
            break;           
    }
}


document.addEventListener('DOMContentLoaded',init)