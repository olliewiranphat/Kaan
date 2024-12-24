//Login

// if (userName) {
//     alert(`Hello, ${userName}! Thank you for your fun games :) hehe`)
// } else {
//     userName = prompt(`Please enter your name`)
// }

// while (true) { //เป็นจริงเสมอ ทำงานจนกว่าจะได้ค่า break
//     let userName = prompt(`Please enter your name`)
//     //ถ้า username มีค่า จะเข้าเงื่อนไข if //แต่ถ้าไม่มีค่า (false) จะกลับไปที่ prompt ข้างบน
//     if (userName) {
//         // / / true state
//         //if put a value in username = true, then do this operation
//         alert(`Hello, ${userName}! Thank you for your fun games :) hehe`)
//         break
//     }
// }

//Guess My Birthday date
const myDate = 24
let input = +prompt(`Pls guess my birthday date`)
let guessTimes = 1
while (input !== myDate) {
    guessTimes += 1
    if (input == 'q') {
        break
    }
    // } else if (input <= 10) {
    //     input = +prompt(`Wrong!, it's more than 10`)
    // } else if (input <= 20) {
    //     input = +prompt(`Almost right!, but it's more than 20`)
    // } else if (input >= 25) {
    //     input = +prompt(`Wrong!, but it's less than 25`)
    // } else if (input > 31) {
    //     input = +prompt(`Pls enter a date in month`)
    // }
}
alert(`OK, let's quit!`)
// if (input == 'q') {
// }
// //input === myDate
// alert(`YAY!! you guess right :)`)




