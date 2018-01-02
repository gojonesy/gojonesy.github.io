// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

function getChannelInfo(type, channelName) {
        $.ajax({
            url: 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + channelName,
            dataType: 'jsonp',
            success: function(response) {
                //console.log(response);
                return response;
            }
        });
    }

function urlMaker(type, name) {
        return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
}


$(document).ready(function() {

    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    
    for(var i = 0; i <= channels.length; i++) {

        // Process the streams data
        $.getJSON(urlMaker("streams", channels[i]), function(streamData) {
            var game, status, logo, userURL, name;
            if (streamData.stream === null) {
                let game = 'Offline';
                let status = 'offline';
            } else if (streamData.stream === undefined) {
                let game = 'Account no longer active';
                let status = 'inactive';
            } else {
                game = streamData.stream.game;
                status = 'online';
            }
            // Process the channel data
            $.getJSON(urlMaker("channels", channels[i]), function(channelData) {
                logo = channelData.logo;
                if(logo === null || logo === undefined) {
                    logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
                }
                console.log(logo);
                var name = channelData.display_name;
                var userURL = channelData.url;
                // create our html
                var html = "<img src='" + logo + "'>";
                
                //var html = "<div class='row " + status + "'><div class='col-xs-2 col-sm-1' id='logo'><img src='" + logo + "' class='logo'></div><div class='col-xs-10 col-sm-3' id='name'>";
                //html += "<a href='" + userURL + "' target='_blank'>" + name + "</></div>";
                //html += "<div class='col-xs-10 col-sm-8' id='streaming'>" + game;
                $(".twitch-box").append(html);
            });
            
        });
        
        // Process the channel data
        $.getJSON(urlMaker("channels", channels[i]), function(data) {
            
            let logo = data.logo;
            if(logo === null) {
                let logo = "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
            }
            //console.log(logo);
            var name = data.display_name;
            var userURL = data.url;
        });
        // create our html
        var html = "<img src='" + logo + "'>";
        console.log(logo);
        //var html = "<div class='row " + status + "'><div class='col-xs-2 col-sm-1' id='logo'><img src='" + logo + "' class='logo'></div><div class='col-xs-10 col-sm-3' id='name'>";
        //html += "<a href='" + userURL + "' target='_blank'>" + name + "</></div>";
        //html += "<div class='col-xs-10 col-sm-8' id='streaming'>" + game;
        $(".twitch-box").append(html);
    }

    //getChannelInfo('streams', 'freecodecamp');
    //getChannelInfo('users', 'freecodecamp');
    //getChannelInfo('channels', 'freecodecamp');

});


