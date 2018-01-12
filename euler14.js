// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

//console longest chain of collatx sequences for numbers under 1000000
console.log(longestChain(1000000))

//function that retuns array with Collatz sequence
function sequence(x){
  let tempx = x
  let res = [tempx]

  //As it's believed all Collatz sequences end in one, it runs until the sequence == 1
  while(tempx != 1){
    if(tempx%2==0){
      tempx = tempx/2
    }else{
      tempx = (3*tempx) + 1
    }
    //add to the array
    res.push(tempx)
  }
  return res
}

//function that goes through numbers and returns the one with the longest chain
function longestChain(limit){
  let greatest = 0
  let greatestStart = 0

  for(let starting = 2 ; starting<limit ; starting++){
    //store the length of the sequence
    tempLength = sequence(starting).length
    //if the current sequence is greater than the stores, reassign value of greatest
    if(tempLength>greatest){
      greatest = tempLength
      //reassign value of greatest staring number
      greatestStart = starting
    }
  }
  return greatestStart
}
