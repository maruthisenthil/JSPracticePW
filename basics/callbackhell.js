// sync - async activities 

// tasks : async steps --> execute all the sync steps in a particular sequence 

// step 1 - III
// step 2 - IV
// step 3 - II
// step 4 - V
// step 5 - I


// Coffee machine 

// 1.startMachine 
// 2. Boilwater 3 seconds
// 3. add coffee powder - 4 secs
// 4. pout incup - 2 secs
// 5. serve cofee - 1 secs

function startMachine(callback){
    setTimeout(()=>{
        console.log('1. machine started');
        callback();
    },5000);
}

function boilWater(callback){
    setTimeout(()=>{
        console.log('2. water boiled');
        callback();
    },3000);
}

function addCoffeePowder(callback){
    setTimeout(()=>{
        console.log('3. machine started');
        callback();
    },4000);
}

function pourInCup(callback){
    setTimeout(()=>{
        console.log('4. pour in cup');
        callback();
    },2000);
}

function serveCoffee(callback){
    setTimeout(()=>{
        console.log('5. coffee served');
        callback();
    },500);
}

// startMachine(()=>{});
// boilWater(()=>{});
// addCoffeePowder(()=>{});
// pourInCup(()=>{});
// serveCoffee(()=>{});

// callback hell : pyramid of doom ... worst way of writing code ..
startMachine(()=>{
    boilWater(()=>{
        addCoffeePowder(()=>{
            pourInCup(()=>{
                serveCoffee(()=>{
                    console.log('coffee is ready enjoy ... ');
                });
            });
        });
    });
});

// to solve callback hell --> we have to start using promise --> Async/wait 

