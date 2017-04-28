// write a function called finishingUp - this function should accept number as a parameter and return parameter * 50;
function finishingUp(number){
    return number * 50;
}
// write a function called jobComplete - this function should accept number as a parameter then log `done - ${number}` to the console.
function jobComplete(number) {
    console.log(`done - ${number}`);
}
// write a function called startJob - this function should:
// - Return a new promise 
// - Inside that promise, call setTimeout
// - Inside the setTimeout callback, call the resolve callback, passing in the number 50 as an argument.
function startJob(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(50);
        },1000);
    });
}
// here is the example call that will work once you finish the instructions.
startJob()
    .then(finishingUp)
    .then(jobComplete);