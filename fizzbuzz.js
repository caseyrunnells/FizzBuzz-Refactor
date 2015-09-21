//numer array 
var numbers = [];

//for loop sequence 

for (i=1; i<=100; i++){
  
  
  //by 3 or both 
  if (i % 3 === 0) {
      if (i % 5 === 0){
        console.log('FizzBuzz');
        numbers.push('FizzBuzz');
      } else {
        console.log('Fizz');
        numbers.push('Fizz');
      }
  }
  
  //by 5 only
  
  else if (i % 5 ===0) {
    console.log('Buzz');
    numbers.push('Buzz');
  }
  
  //else print all 
  else {
    console.log(i);
    numbers.push(i);
  }
  
}

//display html 
document.getElementById("thelist").innerHTML = numbers;

