/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */





$(document).ready(function() {
    console.log('app.js loaded!');

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        dataType: 'json',
        success: handleGetAlbumSuccess,
        error: console.log('error')
    });


    // celebrate!
}); //end of document ready!!

function handleGetAlbumSuccess(json) {
    console.log(json);
    var receivedAlbums = json;
    receivedAlbums.forEach(function renderOneAlbum(album) {
        renderAlbum(album);
    });
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
    var source = $('#album-template').html();
    var template = Handlebars.compile(source); //this returns a function
    var singleAlbumHtml = template(album);
    $("#albums").prepend(singleAlbumHtml);
}
