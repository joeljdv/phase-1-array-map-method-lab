const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


let newTutorials=[]
let idk= tutorials.toString()
let arr=idk.split(" ")

function titleCased(arr){
  for(let i=0;i<arr.length;i++){
    newTutorials.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
  }
  return newTutorials.join(" ").split(",")
}

