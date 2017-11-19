// Code your solution in this file!
function logDriverNames(array){
  array.forEach(function(element){
    console.log(element.name)
  });
}

function logDriversByHometown(array, location){
  array.forEach(function(element){
    return element.filter(function(matchIt){
      return matchIt.hometown === location
    })
  })
}