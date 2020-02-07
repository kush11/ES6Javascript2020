function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Tata'),
    new Car('Camaro'),
    new Car('Focus')
];
var result;
result = cars.find((car) => {
    return car.model === 'Tata'
});

console.log(result)



var posts = [
    { id: 2, title: 'New Post2' },
    { id: 1, title: 'New Post1' },
    { id: 3, title: 'New Post3' }
]
var comment = { postId: 1, content: 'awsome post' };

function postForComment(posts, comment) {
    console.log(posts)
    console.log(comment)
    return posts.find((post) => {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));