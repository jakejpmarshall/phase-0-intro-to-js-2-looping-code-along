/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ['teddy', 'drone', 'doll',];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and yada yada.`);
        debugger;
    };
    return gifts;
};

wrapGifts(gifts);
*/

const names = ['Charlie', 'Samip', 'Ali'];
function writeCards(names, event) {
  const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return messages;
};
console.log(writeCards(names, 'Birthday'));



function countDown (i) {
    let int = i;
    while (int >= 0) {
    console.log(int);
    i = int -= 1;
    };
    return i;
  }
  
  countDown(5);