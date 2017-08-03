
console.log("here we go", 2)

function DogController() {
    console.log("here we go", 4)

    //PRIVATE
    var dogservice = new DogService()
    console.log("here we go", 7)
    function updateFed() {

    }
    function updateFeedCount() {
        var fido = dogservice.getDog()
        document.getElementById('tummy').innerText = fido.feedCount
        document.getElementById('name').innerText = fido.name
        document.getElementById('fed').innerText = fido.fedCount
        if (fido.feedCount >= 10000) {
            document.getElementById('tummy').innerText = 'Stop i need to Poop!'
        }

        //updateFeedCount(DogController.updateFeedCount)
    }
    console.log("here we go", 8)

    //PUBLIC
    this.giveBowl = function (name) {
        dogservice.giveBowl(name)
        updateFeedCount()
    }
    this.feed = function (feedSize) {
        dogservice.feed(feedSize)
        updateFeedCount()
    }



    this.reset = function () {
        dogservice.reset()
        updateFeedCount()
    }

    updateFeedCount()

    console.log("here we go", 9)
}