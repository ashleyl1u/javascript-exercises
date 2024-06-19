const reverseString = function(word) {
  if(word.length<=0){
    return 'ERROR';
  }


  let reverse='';

  for(let i = word.length-1; i>=0;i--){
    reverse+=word.charAt(i);
  }

  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
