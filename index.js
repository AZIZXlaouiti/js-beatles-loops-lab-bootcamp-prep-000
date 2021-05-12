// add solution here
function theBeatlesPlay(musicians, instruments){
  var  new_array = [] 
  for(let i=0,word = "";i<musicians.length;i++){
    
    word = musicians[i]+" plays "+instruments[i];
    new_array.push(word)
  }
  return new_array
}
const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]
function johnLennonFacts(facts){
  let i = 0;
     while (i<facts.length){
       facts[i]+="!!!"
       i +=1
     }
     return facts
      }
function iLoveTheBeatles(num) {
  let new_array = [];
  
  do {
      new_array.push('I Love The Beatles!');
      num++;
  } while (num <15);
  if (num>15)
  {new_array.push('I Love The Beatles!');
    
  }


return new_array;
}

    
