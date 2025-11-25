"use strict";
function demo(a,a){
    let total=10;
    try{
        delete total;
    }catch(e){
        console.log(e.message);
    }
}
demo(5,10);
