
function init() {
    
    var navigation = _.G('navigation');
    var navigationitems = [
        "Vem &auml;r Mr.Beat?",
        "info/bokning/github",
        "Freddots kalsongblogg"
    ];
    
    var item;
    
    for (var i = 0, len = navigationitems.length; i < len; i++) {
        item = document.createElement('div');
        item.innerHTML = navigationitems[i];
        item.className = 'navigationitem';
        //_.AC(item, 'navigationitem');
        navigation.appendChild(item);
    }
    
}

