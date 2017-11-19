// Code your solution in this file!
const logDriverNames = function(array){
  array.forEach(function(element){
    console.log(element.name)
  });
}

const logDriversByHometown = function(array, location){
  array.forEach((driver) => {
    if (driver.hometown === location){
       console.log(driver.name);
    }
  })
}

const driversByRevenue = function(array){
  return array.slice().sort((a, b) => {
    return a.revenue - b.revenue;
  })
}

const driversByName = function(array){
  return array.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(array){

}

const averageRevenue = function(array){

}
