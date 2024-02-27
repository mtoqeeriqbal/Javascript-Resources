// JSON Intro (JavaScrit Object Notation)
const post = {
  id: 1,
  title: 'Post One',
  body: 'this is the body',
}
// convert to JSON String
const str = JSON.stringify(post);


// Convert to object
const obj = JSON.parse(str);


const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'this is the body',
  },
  {
    id: 2,
    title: 'Post Second',
    body: 'this is the body',
  }
]
 
const str2 = JSON.stringify(posts);

console.log(str2);