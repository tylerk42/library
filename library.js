var url ="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Volcano%20Eruptions.csv"

var volcanoNames= getColumn(url,1)
var countries= getColumn(url,2)
var types= getColumn(url,3)
var oldLastKnownEruptions= getColumn(url,4)
var newLastKnownEruptions=[];
    for(var i=0; i<oldLastKnownEruptions.length;i++){
        if(oldLastKnownEruptions[i].includes("BCE")){
            newLastKnownEruptions.push(parseFloat(oldLastKnownEruptions[i])*-1)
        }
        else{
            newLastKnownEruptions.push(parseFloat(oldLastKnownEruptions[i]))
        }
    }




var regions= getColumn(url,5)
var latitudes= getColumn(url,6)
var longitudes= getColumn(url,7)
var elevations= getColumn(url,8)
var dominantRockTypes= getColumn(url,9)
var tectonicSetting= getColumn(url,10)
// This function takes the user's desired region and returns the number of Volcanoes in that region
// region (string) - takes the user's desired region of the world
// sum (number) - returns the number of volcanoes in region
function numberInRegion(region){
sum=0;
    for(var i=0;i<volcanoNames.length;i++){
        if (regions[i].toLowerCase()==region.toLowerCase()){
            sum=sum+1
        }
        }
    if (sum==0){
        return -1
    }
    return sum
}
console.log(numberInRegion("Italy"))
// This function takes a desired rock type and returns all Volcanoes made of that rock type
// rocktype (string) - Takes the user's desired rock type
// matchingOutputs (list) - Returns the all volcanoes made of that rock type 
function findVolcanoes(rocktype){
var matchingOutputs=[];
    for(var i=0; i<volcanoNames.length;i++){
        if(dominantRockTypes[i].toLowerCase().includes(rocktype)){
            matchingOutputs.push(volcanoNames[i])
        }
    }
    if (matchingOutputs.length==0){
        return "none found"
    }
    return matchingOutputs
}
console.log(findVolcanoes("foidite"))
// This Function takes a country from the user and finds the volcanoe with the most recent eruption
// country (string) - takes the desired country of the user
// match (single answer) - returns the volcanoe with the most recent erupption in that country
function lastEruption(country){
var max=-100000000;
var match="";
    for(var i=0; i<volcanoNames.length; i++){
        if(countries[i]==country){
            if(max<newLastKnownEruptions[i]){
            max=newLastKnownEruptions[i]
            match=volcanoNames[i]
            }
        }
    }
    if(match==""){
        return "Error"
    }
    return match
}

console.log(lastEruption("Italy"))

// This function finds all the volcanoes above the user's desired elevation
// feet (number) - takes the desired elevation of the user
// tallVolcanoes (list) - returns all volcanoes above user's desired elevation
function searchElevationAbove(feet){
    var tallVolcanoes = [];
    feet = Math.round(feet)
    for(var i = 0; i<volcanoNames.length; i++){
     if(elevations[i]>feet){
        tallVolcanoes.push(volcanoNames[i])
     }
    }
        
return tallVolcanoes
}
console.log(searchElevationAbove(-2000))
// This function finds the volcanoe closest to user's desired location
// Longitude/latitude (number) - takes user's desire coordinates
// closestVolcanoe (single answer) - returns volcanoe closest to user's coordinates
function findLocationClosest(longitude, latitude){

    var shortestDistance = 1000000000000000;
    var closestVolcano = "";
    for(var i = 0; i<volcanoNames.length; i++){
        var rise = (longitudes[i] - longitude)
        var run = (latitudes[i] - latitude)
        var hypotenuese = (rise * rise) + (run * run)
        var distance = Math.sqrt(hypotenuese)
        if(distance < shortestDistance){
            shortestDistance = distance;
            closestVolcano = volcanoNames[i]
        }
    
    }
    return closestVolcano;
}
console.log(findLocationClosest(6, 50))