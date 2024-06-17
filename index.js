//define "hoisting"
//hoisting: (javascript's ability to call functions before
//they appear in the code.)
saturdayFun("bathe my dog")
function saturdayFun(foo="roller-skate"){
    return "This Saturday, I want to "+foo+"!";
}

mondayWork()
function mondayWork(foo="go to the office"){
 return "This Monday, I will "+foo+".";
}

wrapAdjective()
function wrapAdjective(){
    return innerFunction()
}

function innerFunction(foo="special"){
    //let result = wrapAdjective('*');
    //console.log(result)
    //let emphatic = result("a hard worker");
    return "You are "+foo+"!";
}

console.log(innerFunction())