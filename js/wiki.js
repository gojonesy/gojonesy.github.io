// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

$(document).ready(function() {

    var quote; var author;

    function getWiki() {
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            data: {
                action: 'query', 
                list: 'search',
                srsearch: 'gl',
                format: 'json',
                formatversion: 2
            },
            dataType: 'jsonp',
            success: function(response) {
                console.log('title', response.query.search[0].title);
                //console.log('wb description', response.entities.Q39246.descriptions.en.value);
            }
        });
    }
    getWiki();

});


