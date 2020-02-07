var products = [
    { name: 'Cucumber', type: 'vegitable', quantity: 1, price: 1 },
    { name: 'Tomato', type: 'vegitable', quantity: 6, price: 20 },
    { name: 'Apple', type: 'fruits', quantity: 2, price: 15 },
    { name: 'Onion', type: 'vegitable', quantity: 10, price: 12 },
    { name: 'Banana', type: 'fruits', quantity: 3, price: 5 }
];

var filterArray = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruits') {
        filterArray.push(products[i])
    }
    // console.log(products[i].type)
}
console.log(filterArray)

var filterArray1 = {}
filterArray1 = products.filter((product) => {
    return product.type === 'vegitable'
})

console.log('filterArray1', filterArray1)

// filter type = vegitable quantity > 0 , price < 10
console.log('sasasas', products.filter((product) => {
    return product.type === 'vegitable' && product.quantity > 0 && product.price < 10
}))

var post = { id: 4, title: 'New Post' }
var comments = [
    { postId: 4, content: 'awsome post' },
    { postId: 3, content: 'ok' },
    { postId: 4, content: 'god' },
];

function commentsForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id
    });
}
console.log(commentsForPost(post, comments));