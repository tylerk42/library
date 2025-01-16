# CSVVolcanoes
Provides useful information about volcanoes around the world 
#
##### This function takes the user's desired region and returns the number of Volcanoes in that region
###### @param region (string) - takes the user's desired region of the world
###### @return sum (number) - returns the number of volcanoes in region
**`function numberInRegion(region)`**
#
##### This function takes a desired rock type and returns all Volcanoes made of that rock type
###### @param rocktype (string) - Takes the user's desired rock type
###### @return matchingOutputs (list) - Returns the all volcanoes made of that rock type 
**`function findVolcanoes(rocktype)`**
#
##### This Function takes a country from the user and finds the volcanoe with the most recent eruption
###### @param country (string) - takes the desired country of the user
###### @return match (single answer) - returns the volcanoe with the most recent erupption in that country
**`function lastEruption(country)`**
#
##### This function finds all the volcanoes above the user's desired elevation
###### @param feet (number) - takes the desired elevation of the user
###### @return tallVolcanoes (list) - returns all volcanoes above user's desired elevation
**`function searchElevationAbove(feet)`**
#
##### This function finds the volcanoe closest to user's desired location
###### @param Longitude (number) - takes user's desire longitude
###### @paramlatitude (number) - takes user's desire latidue
###### @returnclosestVolcanoe (single answer) - returns volcanoe closest to user's coordinates
**`function findLocationClosest(longitude, latitude)`**
#
function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  #
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }
