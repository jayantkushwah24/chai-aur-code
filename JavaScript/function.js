function loginUserMessage(userName){
    if(!userName){
        return ("Please enter a user name.");
    }else{
        return (`${userName} just logged in.`);
    }
}
// console.log(loginUserMessage("Rishabh"));

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(123,453,554,123,455)); //output = [ 123, 453, 554, 123, 455 ] type = object

const user = {
    name : "Jayant",
    price : 2343
}

function handleObject(anyObject){
    return (`User name is ${anyObject.name} and price is ${anyObject.price}`);
}
 console.log(handleObject(user));