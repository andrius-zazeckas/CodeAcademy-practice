const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();

const firstPost = posts[0];

console.log(firstPost);

// kaip gauti objektu parametru pavadinimus

const firstPostParams = Object.keys(firstPost);

console.log(firstPostParams);

// parametro ir reiksmes deriniai
console.log(Object.entries(firstPost));
