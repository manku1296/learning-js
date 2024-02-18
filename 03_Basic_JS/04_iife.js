// Immediately Invoked Function Expression (IIFE)

(function coffee(){
    //Named IIFE
    console.log("DB Connected");
})();

//Simple IIFE
((name) => {
    console.log(`DB 2 Connected ${name}`);
})('Mayank')