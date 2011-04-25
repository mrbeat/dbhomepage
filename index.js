
function init() {
    
    var navigation = _.G('navigation_container');
    var navigationitems = [
        "Pre-happening",
        "Post-happening",
        "Vem &auml;r Mr.Beat?",
        "Teman",
        "info/&zwnj;bokning/&zwnj;github",
        "Freddots kalsongblogg"
    ];
    var item, a, i, len;
    var ul = document.createElement('ul');
    ul.id = 'navigation';
    
    for (i = 0, len = navigationitems.length; i < len; i++) {
        
        item = document.createElement('li');
        
        if (i === 0) {
            item.className = "active";
        }
        
        a = document.createElement('a');
        a.href = "#";
        a.innerHTML = navigationitems[i];
        item.appendChild(a);
        ul.appendChild(item);
        
    }
    
    navigation.appendChild(ul);
    
    setTwitterStatus();
    
}

function twitterCallback(resp) {
    var a = document.createElement('a');
    a.href = "https://twitter.com/#!/rrrblipbeep";
    a.innerHTML = '&quot;' + resp[0].text + '&quot;';
    _.G("twitterstatus").appendChild(a);
}

function setTwitterStatus() {
    
    var scripttag = document.createElement('script');
    scripttag.src = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=rrrblipbeep&callback=twitterCallback";
    document.body.appendChild(scripttag);
    
}

