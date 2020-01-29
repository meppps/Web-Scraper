
// Loop through tables and create a search query URL for each store name

var storeList = []
var queryList = []

var storeNames = document.querySelectorAll('td.sorting_1')

storeNames.forEach((store) => {

    var storename = store.innerText;
    var stringList = storename.split(' ');
    var newString = ""
    var search = `https://www.google.com/search?q=`

    i = 0
    while(i < stringList.length){
        newString += stringList[i] + "+"
        i++
    }
    var searchQuery = search + newString
    console.log(searchQuery)
    storeList.push(storename)
    queryList.push(searchQuery)
    
});


// View Results // Copy & Paste into spreadsheet to clean
queryList.forEach((query) => {console.log(query)});
storeList.forEach((store) => {console.log(store)});
