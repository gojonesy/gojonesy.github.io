// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
function urlMaker(type, name) {
        return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
}

function getChannel(channel) {
    $.getJSON(urlMaker("channels", channel), function(data) {
        console.log(data);
        var name, logo, userURL;
        // Populate HTML
        logo = data.logo;
        if(logo === null || logo === undefined) {
            logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
        }
        //console.log(logo);
        var name = data.display_name;
        var userURL = data.url;
        var game, status;

        if (data.game != null) {
            game = data.game;
        } else {
            game = "Offline";
        }

        if (data.status != null) {
            status = data.status;
        } else {
            status = "offline";
        }

        console.log(name, logo, userURL, data.game, data.status);
        var html = "<tr><td><img src='" + logo + "' class='logo'></td>";
        html += "<td><a href='" + data.url + "' target='_blank'>" + name + "</a></td>";
        html += "<td style='text-align: right;'>" + game + " - " + status + "</td></tr>";
        $(".twitch-box").append(html);
        
    });
    
}

function getStream(channel) {
    $.getJSON(urlMaker("streams", channel), function(data) {
        // console.log(data);
        var game, status;
        // Populate HTML
        if (data.stream === null) {
            game = 'Offline';
            status = 'offline';
        } else if (data.stream === undefined) {
            game = 'Account no longer active';
            status = 'inactive';
        } else {
            game = data.stream.game;
            status = 'online';
        }

    });
}

$(document).ready(function() {

    $(".twitch-box").append("<table class=table>");
    for (var i = 0; i < channels.length; i++) {
        //$(".twitch-box").append("<tr>");
        getChannel(channels[i]);
        getStream(channels[i]);  
        //$(".twitch-box").append('</tr>');
          
    }
    $(".twitch-box").append("</table>");


});


