// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(element){
    console.log(element.name)
  });
}

function logDriversByHometown(array, location){
  array.forEach(function(findMatching){
    return array.filter(function(matchIt){
      return matchIt.name === location
    })
    console.log(element.name)
  });
}


function driversByRevenue(array){

}

function driversByName(array){
  array.name.sort(function (a, b){
    return a.localeCompare(b);
  });
}

function totalRevenue(array){

}

function averageRevenue(array){

}
