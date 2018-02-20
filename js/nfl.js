$(document).ready(function() {
    document.getElementById("wikiSearchInput").focus();
    var quote; var author;

    function getGames(week, season, type) {
        $.ajax({
            url: 'https://api.nfl.com/v1/games/?s={$query:{week.season:2017,week.seasonType:REG,week.week:1}}',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log(response.query);
                showResults(response);
            }

        });
        console.log(response);
    }
    $(".searchWiki").click(function(event) {
        event.preventDefault();
        var keyword = $(".wikiSearchInput").val();

        getGames(1, 2017, "REG");
        
    });
    $(".random").click(function(event) {
        event.preventDefault();
        window.open('http://en.wikipedia.org/wiki/Special:Random', '_blank');
        
    });

});


