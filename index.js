function iterativeLog(arr){
  arr.forEach((index,element) =>{
    console.log(`${element}: ${index}`)
  })
}
function iterate (callback){
  const arr=['hahaha']
  arr.forEach(callback)
  return arr;
}
function doToArray(array, callback) {
  array.forEach(callback)
}
