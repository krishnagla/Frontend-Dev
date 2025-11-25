"use strict";
const operations=["add","divide","power","root","subtract"];
const num1=25,num2=0;

function calc(op){
    switch(op){
        case "add": return num1+num2;
        case "subtract": return num1-num2;
        case "power": return num1**2;
        case "divide": 
            if(num2===0) throw new Error("Divide by zero");
            return num1/num2;
        case "root":
            if(num1<0) throw new Error("Negative root");
            return Math.sqrt(num1);
        default:
            throw new Error("InvalidOperation");
    }
}

try{
    let result=calc("add");
    console.log("Result:",result);
}catch(e){
    console.log("Error:",e.message);
}
