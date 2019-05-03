let quit = false;
let balance = 500;

while (quit === false) {
    let input = prompt('Please select one of the following options: Q to Quit; W to Withdraw funds; D to Deposit funds; B to display balance:');

    if (input === 'Q') {
        quit = true;
    }
    else if (input === 'B') {
        alert ('Your balance is $' + (balance) + '.');
    }
    else if (input === 'W') {
        let withdrawalAmount = prompt('Please enter amount you wish to squander, you profligate monster:');
        result = Number(balance) - Number(withdrawalAmount)
        alert ('Your new balance is $' + (result) + '.');
    }
    else if (input === 'D') {
        let depositAmount = prompt('Please enter amount you wish to deposit:');
        result = Number(balance) + Number(depositAmount)
        alert ('Your new balance is $' + (result) + '.');
    }

}

alert('Thank you for using Montlake Banking. Your session has now ended.')