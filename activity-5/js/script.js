var data = [
    {
        name: 'open in browser',
        description:'this extension enables you to view an HTML file in your default browser',
        author: 'TechER',
        url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
        downloads: 10681910,
        stars: 3.5,
        price: 'free',
        selector: 'p1'
    },
    {
        name: 'rainbow brackets',
        description:'provide rainbow colors for the round brackets, square brackets and the squiggly brackets',
        author: '2gua',
        url: 'https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets',
        downloads: 2370350,
        stars: 4.5,
        price: 'free',
        selector: 'p2'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function(){
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function(){
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function(){
    var today = new Date();
    return today.toDateString();
}

var getEl = function(id){
    return document.getElementById(id);
}




var writePackageInfo = function(package){
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function(){
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    for (var i = 0; i < data.length; i++){
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
}

init();



