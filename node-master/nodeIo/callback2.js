/**
 * Created by bluexu on 15/6/24.
 */
var fs = require('fs');

fs.readFile('somefile.txt','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
});