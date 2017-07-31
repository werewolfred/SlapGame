var feeds = ['small', 'large', 'medium', 'reset']


function Dog(name, breed, picture) {

    this.feedCount = 0
    this.dogBowls= [] 
}
function DogBowls(description, cups, type) {
    this.description = description
    this.cups = cups 
    this.type = type
}
var dogBowls={
    smallBowl: new DogBowls('small dog bowl', 1,'A small bowl'),
    mediumBowl: new DogBowls('medium dog bowl', 5, 'medium dog bowl'),
    largeBowl: new DogBowls('large dog bowl', 10 ,'large dog bowl' )
}
//dogBowls[dogBowls.smallBowl]
function addMods(){
    var total = 0
    for (var i = 0; i < dog1.dogBowls.length; i++) {
        var dogBowl = dog1.dogBowls[i];
        total+= dogBowl.cups
    }
    return total
}
function giveBowl(type){
    dog1.dogBowls.push(dogBowls[type])
    console.log('thanks for the ', type)
}


/*var dogOwner = {
    dogs: []
}*/

var dog1 = new Dog()
/*var dog2 = new Dog('Brutus' , 'https://s-media-cache-ak0.pinimg.com/736x/51/6d/b9/516db9b52fe7dda513f789ca3a653392--roman-costumes-greek-costumes.jpg')
var dog3 = new Dog('Squirrly', 'https://s-media-cache-ak0.pinimg.com/736x/e2/79/78/e27978b941edb7011ea9dc4a5f40700e--funny-puppies-funny-dogs.jpg')
var dog4 = new Dog('Annabelle', 'https://s-media-cache-ak0.pinimg.com/736x/02/8b/be/028bbeb792c058889ca6f5186cca7c77--baby-beagle-beagle-pups.jpg')
var dog5 = new Dog('Harry', '')*/


// function feedMe(ownerFeed){
//     var result = ''

//     var dogChoices = ['small','medium','large','abort']

// }

// var tummy = 0

// function feedMe(tummy) {
//     for (var i = 0; i < dogs.length; i++) {
//         var dog = dogs[i];
//         var statusIndex = 0
//         if (dog.feedMe<5) {

//         }
//     }
// }
function feedSmall() {
    dog1.feedCount += 1+addMods()
    updateFeedCount()
}
function feedMedium() {
    dog1.feedCount += 5+addMods()
    updateFeedCount()
}
function feedLarge() {
    dog1.feedCount += 10+addMods()
    updateFeedCount()
}
function reset() {
    dog1.feedCount = 0
    dog1.dogBowls=[]
    updateFeedCount()
}
function updateFeedCount() {
    document.getElementById('tummy').innerText = dog1.feedCount
}
updateFeedCount()
