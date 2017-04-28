// write a function called jobFinished - this function should simply log 'done' to the console.
function jobFinished(){
    console.log('done');
}
// write a function called startJob with one parameter called callback. this function should simply call the callback.
function startJob(callback){
    callback();
}
// call the startJob function, passing jobFinished as a callback.
startJob(jobFinished);