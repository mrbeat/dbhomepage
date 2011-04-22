
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
    
}

function setTwitterStatus() {
    _.X("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=rrrblipbeep&count=2", function(resp) {
        r = resp;
    });
}

