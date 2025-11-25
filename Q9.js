"use strict";
const rawData=[
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean=[];

for(let i=0;i<rawData.length;i++){
    try{
        const obj=JSON.parse(rawData[i]);
        if(!obj.user || !obj.age) throw new Error("Missing keys");
        obj.age=Number(obj.age);
        if(obj.age>=18) clean.push(obj);
    }catch(e){
        console.log("Line",i,"Error",e.message);
    }
}

console.log("Clean:",clean);
