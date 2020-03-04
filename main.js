// 1. Instantiate and assign a variable called movieArray. This variable should hold an array of movie titles. (Don't go overboard- two or three is fine).
let movieArray = ["The Dark Knight", "Toy Story", "Avatar"]

// 2. Log each movie in the array to the console. Which array method
console.log(movieArray);

// 3. Add a movie into the array. (HINT: .push() it into the array!)
movieArray.push("Gladiator")

// 4. Log the newly added movie to the console
console.log(movieArray);

// .toString()
let movieNames = movieArray.toString()
console.log(movieNames);

//make a forEach loop
let numberArray = [10,20,30,40,2354]

numberArray.forEach((numb)=>{
console.log(numb);
})

//.join()
let newArray = movieArray.join(" * ")
console.log(newArray);

// Add an item to the movie array .push()
movieArray.push("Fast & Furious")
console.log(movieArray);

// .pop()
movieArray.pop()
console.log(movieArray)

// Changing elements by index
movieArray[0] = "Batman Begins"
console.log(movieArray)


movieArray.forEach((film)=>{
    console.log(film);
})




// Bonus Question: FizzBuzz

// Print numbers from 1 - 100 if a number is a multiple of 3 print "Fizz" if the number is a multiple of 5 print "Buzz" if the number is a multiple of 3 AND 5 print "FizzBuzz"

// "print" in word problems is console.log() for javascript

// 1) loop over the numbers from 1 - 100


//EXCEPTIONS
//1) if a number is a multiple of 3 print "Fizz"
//2) if the number is a multiple of 5 print "Buzz"
//3) if the number is a multiple of 3 AND 5 print "FizzBuzz"



for(var i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")   
    }else if(i % 5 === 0 ){
        console.log("Buzz")
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else{
        console.log(i)
    }
}