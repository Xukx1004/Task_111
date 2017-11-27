'use strict'
 function beer(n){
    let b=' of beer on the wall';
    while(--n>1)
    if(n>1)
    console.log(n+" bottles"+b+', '+n+" bottles of beer.\nTake one down and pass it around,"
    +(n-1)+' bottle'+(n-1>1?'s':'')+b+'.\n');
    console.log("1 bottle"+b
    +", 1 bottle of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")

}
const n = 100;
beer(n);   
module.export =  beer;