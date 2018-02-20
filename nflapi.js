$(document).ready(function() {
    $('#myTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $("#countChange").change(countChangeFunc);
    $("#sortChange").change(sortChangeFunc);
    $("#weekChange").change(weekChangeFunc);

    return jsonFun(jsonURL);
});

var jsonCount = 20; //default count
var jsonWeek = 1; //default week=1
var jsonSort = "fanPtsAgainstOpponentRank" //default points - does lowest points first because... order of numbers
var jsonURL = "http://api.fantasy.nfl.com/v1/players/advanced?format=json&count=" + jsonCount + "&week=" + jsonWeek + "&sort=" + jsonSort;

function countChangeFunc(){
    jsonCount = this.value;
    console.log("Count: " + jsonCount);
    var jsonURL = "http://api.fantasy.nfl.com/v1/players/advanced?format=json&count=" + jsonCount + "&week=" + jsonWeek + "&sort=" + jsonSort;
    return jsonFun(jsonURL);
}
function sortChangeFunc(){
    jsonSort = this.value;
    console.log("Count: " + jsonSort);
    var jsonURL = "http://api.fantasy.nfl.com/v1/players/advanced?format=json&count=" + jsonCount + "&week=" + jsonWeek + "&sort=" + jsonSort;
    return jsonFun(jsonURL);
}
function weekChangeFunc(){
    jsonWeek = this.value;
    console.log("Week: " + jsonWeek);
    var jsonURL = "http://api.fantasy.nfl.com/v1/players/advanced?format=json&count=" + jsonCount + "&week=" + jsonWeek + "&sort=" + jsonSort;
    return jsonFun(jsonURL);
}

jsonFun = function(jsonURL) {
    $.getJSON(jsonURL, function(data) {
        //console.log( data );
        var qbData = [];
        var rbData = [];
        var wrData = [];
        var teData = [];
        var kData = [];
        var defData = [];
        $(".qb").empty();
        $(".rb").empty();
        $(".wr").empty();
        $(".te").empty();
        $(".k").empty();
        $(".def").empty();
        i=1;
        $.each(data.QB, function(key, val) {
            //---JSON //qbData.push("{\"id\": \"" + val.id + "\", \"firstName\": \"" + val.firstName + "\", \"lastName\": \"" + val.lastName + "\", \"teamAbbr\": \"" + val.teamAbbr + "\", \"opponentTeamAbbr\": \"" + val.opponentTeamAbbr + "\", \"position\": \"" + val.position + "\", \"stats\": {\"FanPtsAgainstOpponentPts\": \"" + val.stats.FanPtsAgainstOpponentPts + "\", \"FanPtsAgainstOpponentRank\": \"" + val.stats.FanPtsAgainstOpponentRank + "\", \"Carries\": \"" + val.stats.Carries + "\", \"Touches\": \"" + val.stats.Touches + "\", \"Receptions\": \"" + val.stats.Receptions + "\", \"Targets\": \"" + val.stats.Targets + "\", \"ReceptionPercentage\": \"" + val.stats.ReceptionPercentage + "\", \"RedzoneTargets\": \"" + val.stats.RedzoneTargets + "\", \"RedzoneTouches\": \"" + val.stats.RedzoneTouches + "\", \"RedzoneG2g\": \"" + val.stats.RedzoneG2g + "\"},\"status\": \"" + val.status + "\" }");
            //---ALL DATA //qbData.push("<tr><td>" + val.id + "</td><td>" + val.firstName + "</td><td>" + val.lastName + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + val.position + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
            qbData.push("<tr><td>" + i++ + " " + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $.each(data.RB, function(key, val) {
            rbData.push("<tr><td>" + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $.each(data.WR, function(key, val) {
            wrData.push("<tr><td>" + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $.each(data.TE, function(key, val) {
            teData.push("<tr><td>" + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $.each(data.K, function(key, val) {
            kData.push("<tr><td>" + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $.each(data.DEF, function(key, val) {
            defData.push("<tr><td>" + val.firstName + " " + val.lastName + ", " + val.position + "</td><td>" + val.teamAbbr + "</td><td>" + val.opponentTeamAbbr + "</td><td>" + "</td><td>" + val.stats.FanPtsAgainstOpponentPts + "</td><td>" + val.stats.FanPtsAgainstOpponentRank + "</td><td>" + val.stats.Carries + "</td><td>" + val.stats.Touches + "</td><td>" + val.stats.Receptions + "</td><td>" + val.stats.Targets + "</td><td>" + val.stats.ReceptionPercentage + "</td><td>" + val.stats.RedzoneTargets + "</td><td>" + val.stats.RedzoneTouches + "</td><td>" + val.stats.RedzoneG2g + "</td><td>" + val.status + "</td></tr>");
        });
        $( "<tbody/>", { class: "qb", html: qbData.join( "" )}).appendTo( "#qb-bx");
        $( "<tbody/>", { class: "rb", html: rbData.join( "" )}).appendTo( "#rb-bx");
        $( "<tbody/>", { class: "wr", html: wrData.join( "" )}).appendTo( "#wr-bx");
        $( "<tbody/>", { class: "te", html: teData.join( "" )}).appendTo( "#te-bx");
        $( "<tbody/>", { class: "k", html: kData.join( "" )}).appendTo( "#k-bx");
        $( "<tbody/>", { class: "def", html: defData.join( "" )}).appendTo( "#def-bx");
    });
}