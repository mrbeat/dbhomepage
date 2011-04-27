
function init(currentPageLink) {
    
    _.G(currentPageLink).className += "currentpage";
    
    // get twitter status
    _.IN("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=rrrblipbeep&callback=twitterCallback");
    
}

function twitterCallback(resp) {
    var a = document.createElement('a');
    a.href = "https://twitter.com/#!/rrrblipbeep";
    a.innerHTML = '&quot;' + resp[0].text + '&quot;';
    _.G("twitterstatus").appendChild(a);
}

