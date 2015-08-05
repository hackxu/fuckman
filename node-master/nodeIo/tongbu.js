/**
 * Created by bluexu on 15/6/24.
 */
function sleep(milliseconds) {
    var star = new  Date()
    var start = new Date().getTime();
    while ((new Date().getTime() - start) < milliseconds) {
    }
   // console.log(star)
    console.log(parseInt(start))
}

function fetchPage() {
    console.log('fetching page');
    sleep(2000);    // simulate time to fetch a web page
    console.log('data returned from the api')
}

function fetchApi() {
    console.log('fetching api');
    sleep(2000); //simulate time to fetch from an api
    console.log('data returned from the api')
}
fetchPage();
fetchApi();