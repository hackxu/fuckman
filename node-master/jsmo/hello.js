/**
 * Created by bluexu on 15/6/23.
 */
//hello.js
function Hello(){
    var name;
    this.setName=function(thyName){
        name= thyName;
    };
    this.sayHello = function(){
        console.log('hello'+name);
    };
};
module.exports = Hello;