console.log("here we go", 1)

function DogService() {
    //PRIVATE
    console.log("here we go", 5)

    function Dog(name) {
        this.name = name
        this.fedCount = 0
        this.feedCount = 0
        this.dogBowls = []
    }

    function DogBowls(name, cups) {
        this.name = name
        this.cups = cups
    }
   
    
    var dogBowlOptions = {
        smallBowl: new DogBowls('smallBowl', 1),
        mediumBowl: new DogBowls('mediumBowl', 5),
        largeBowl: new DogBowls('largeBowl', 10)
    }

    var fido = new Dog('Samson')
   

    // fido.dogBowls.push(dogBowlOptions.smallBowl)
    // fido.dogBowls.push(dogBowlOptions.mediumBowl)
    // fido.dogBowls.push(dogBowlOptions.largeBowl)
    console.log(fido.dogBowls.length)
    function addMods() {
        var total = 0

        for (var i = 0; i < fido.dogBowls.length; i++) {
            var dogBowl = fido.dogBowls[i];
            console.log(fido.dogBowls)
            
            total += dogBowl
        }

        return total

    }
    function findBowlByName(name) {

        if (name == dogBowlOptions.smallBowl.name) {
            return dogBowlOptions.smallBowl.cups
        } else if (name == dogBowlOptions.mediumBowl.name) {
            return dogBowlOptions.mediumBowl.cups
        } else if (name == dogBowlOptions.largeBowl.name) {
            return dogBowlOptions.largeBowl.cups
        }
    }
    //PUBLIC
    
    
    this.feed = function(size){
        if(fido.feedCount>=10000){
            return
        }
        fido.feedCount+= size + addMods()
        fido.fedCount += 1
    }
    
    this.giveBowl = function (name) {
        var bowl = findBowlByName(name)
        if (bowl) {
            fido.dogBowls.push(bowl)

        }

    }
    this.getDog = function () {
        var fidoCopy = JSON.parse(JSON.stringify(fido))
        return fidoCopy
    }
    console.log("here we go", 6)

    //add the functions: small feed medium feed and large feed as well as give bowl.
    
    this.reset = function () {

        fido.feedCount = 0;
        fido.dogBowls = []
        fido.fedCount =0
    }


}