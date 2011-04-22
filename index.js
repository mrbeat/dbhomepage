
function init() {
    
    var navigation = _.G('navigation');
    var navigationitems = [
        "News",
        "Vem &auml;r Mr.Beat?",
        "Teman",
        "info/&zwnj;bokning/&zwnj;github",
        //"Freddots kalsongblogg"
    ];
    var item, a, i, len;
    
    for (i = 0, len = navigationitems.length; i < len; i++) {
    
        item = document.createElement('div');
        item.className = 'navigationitem';
        a = document.createElement('a');
        a.href = "#";
        a.innerHTML = navigationitems[i];
        item.appendChild(a);
        navigation.appendChild(item);
        
    }
    
    setTwitterStatus();
    
}

function twitterCallback(resp) {
    var a = document.createElement('a');
    a.href = "https://twitter.com/#!/rrrblipbeep";
    a.innerHTML = '&quot;' + resp[0].text + '&quot;';
    _.G("twitterstatus").appendChild(a);
    //_.G("twitterstatus").innerHTML = resp[0].text;
    
}

function setTwitterStatus() {
    
    var scripttag = document.createElement('script');
    scripttag.src = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=rrrblipbeep&callback=twitterCallback";
    document.body.appendChild(scripttag);
    
}

