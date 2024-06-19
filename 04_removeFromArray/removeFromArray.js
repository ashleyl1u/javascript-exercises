const removeFromArray = function(arr, remove) {
  let removed = [];

  for(let i =0; i<arr.length ;i++){
    if(arr[i] !== remove){
      removed.push(arr[i]);
    }
  }

  return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
