// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

$(document).ready(function() {
    document.getElementById("wikiSearchInput").focus();
    var quote; var author;

    function getWiki(keyword) {
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            data: {
                action: 'query', 
                list: 'search',
                srsearch: keyword,
                prop: 'info',
                inprop: 'url',
                format: 'json',
                formatversion: 2
            },
            dataType: 'jsonp',
            success: function(response) {
                console.log(response.query);
                showResults(response);
            }
        });
    }
    $(".searchWiki").click(function(event) {
        event.preventDefault();
        var keyword = $(".wikiSearchInput").val();

        getWiki(keyword);
        
    });
    $(".random").click(function(event) {
        event.preventDefault();
        window.open('http://en.wikipedia.org/wiki/Special:Random', '_blank');
        
    });

});

function showResults (callback) {
    //Build the results area format

    for(var i =0; i <= 9; i++) {
        $('.searchResults').append("<div class='resultList'>" + "<span class='resultTitle title-" + i + "'></span>" + "<br>" + "<span class='resultSnippet snippet-" + i + "'></span>" + "<br>" + "<span class='resultMetadata metadata-" + i + "'></span>" + "</div><br>");
    }

    for(var j = 0; j <=9; j++) {
        var title = callback.query.search[j].title;
        var url = title.replace(' ', "_");
        $(".title-" + j).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[j].title + "</a>");
        $(".snippet-" + j).html(callback.query.search[j].snippet);
        $(".metadata-" + j).html("<em>" + "(" + callback.query.search[j].wordcount + " words)</em>");
    }
}

