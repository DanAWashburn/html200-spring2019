let selection = prompt('Welcome to Montlake Banking, where your privacy and security are one priority among many. Please select one of the following options: Q to Quit; W to Withdraw funds; D to Deposit funds; B to display balance.');

function choice(bankingAction) {
    if (bankingAction === 'W') {
        return prompt ('Please enter amount you would like to squander, you profligate monster.');
    } else if (bankingAction === 'D') {
        return promt ('Enter amount to deposit.');
    } else if (bankingAction === 'B') {
        return 'Your balance is X.'
    } else if (bankingAction === 'Q') {
      return 'Your session will now end.'
    }
}

prompt (
    choice(selection)
);