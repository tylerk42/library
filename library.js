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






