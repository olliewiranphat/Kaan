//Login
let userName = prompt(`Please enter your name`)
// if (userName) {
//     alert(`Hello, ${userName}! Thank you for your fun games :) hehe`)
// } else {
//     userName = prompt(`Please enter your name`)
// }

if (userName) {
    // / / true state
    //if put a value in username = true, then do this operation
    alert(`Hello, ${userName}! Thank you for your fun games :) hehe`)
} else { //false state
    //if dont put a vule in username : username = null = false, then do this operation
    let result = prompt(`Please enter your name`)
    // console.log(result)
    alert(`Hello, ${result}! Thank you for your fun games :) hehe`)
}

