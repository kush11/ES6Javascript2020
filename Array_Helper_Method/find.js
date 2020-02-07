var users = [
    { name: 'Kush' },
    { name: 'Ashish' },
    { name: 'Akash' },
    { name: 'Vidya' },
    { name: 'Akram' },
    { name: 'Adarsh' },
    { name: 'Shakti' },
    { name: 'Ratnesh' }
];

var user;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Kush') {
        user = users[i];
        break;
    }
}
console.log(user)

var user1;
user1 = users.find((user) => { // with the find method it return the first match
    return user.name === 'Kush'
});

console.log(user1)