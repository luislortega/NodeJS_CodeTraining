console.log(" IN PROCESS... ")

let time = 0;

//Wait
setTimeout( () => {
    console.log("was passed 3 seconds")
}, 3000);

//Every 3 seconds.
setInterval( () =>{
    time += 3
    console.log(`${time} seconds was passed`)

    // Functions that call other functions
    function callFunction(fun){
        fun()
    }
    
    function say(){
        console.log("hi")
    }
    
    callFunction(say);
},3000);
