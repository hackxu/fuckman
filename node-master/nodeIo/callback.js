/**
 * Created by bluexu on 15/6/24.
 */

function haveBreakfast(food,drink,callback){
    console.log('Having breadkfst of' + food + ',' + drink);
    if(callback && typeof (callback) === "function"){
        callback();
    }
};
haveBreakfast("toast","coffee",function(){
    console.log('Finished breakfast.Time to go to work')
})