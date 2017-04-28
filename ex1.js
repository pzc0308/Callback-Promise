// use the setInterval function to log the current date and time to the console every 1s/1000ms
setInterval(function() {
    const currentDate = new Date();

    const time = currentDate.toLocaleTimeString();

    console.log(time);
},1000);