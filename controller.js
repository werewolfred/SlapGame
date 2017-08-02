
console.log("here we go", 2)

function DogController() {
    console.log("here we go", 4)

    //PRIVATE
    var dogservice = new DogService()
    console.log("here we go", 7)

    function updateFeedCount() {
        var fido = dogservice.getDog()
        document.getElementById('tummy').innerText = fido.feedCount
        //updateFeedCount(DogController.updateFeedCount)
    }
    console.log("here we go", 8)


    //PUBLIC
    this.giveBowl = function (name) {
        dogservice.giveBowl(name)
        updateFeedCount()
    }



    this.feedSmall = function () {
        //dog1.feedCount += 1 + dogservice.addMods()
        dogservice.feedSmall()
        updateFeedCount()
    }
    this.feedMedium = function () {
        dogservice.feedMedium()
        updateFeedCount()
    }
    this.feedLarge = function () {
        dogservice.feedLarge()
        updateFeedCount()
    }
    this.reset = function () {
        dogservice.reset()
        updateFeedCount()
    }

    console.log("here we go", 9)
}