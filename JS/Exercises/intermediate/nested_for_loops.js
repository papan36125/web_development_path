// Write your code below
const bobsFollowers = ['Mark', 'Neil', 'Gemma', 'Ian'];
const tinasFollowers = ['Michael', 'Ian', 'Neil'];
let mutualFollowers = [];
for(let i=0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i] == tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);
