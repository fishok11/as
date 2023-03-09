export const INDEX_URL = 'http://localhost:3000'

export const mixUsers = (arr) => { 
  const newArr = [...arr];

  for (let i = 0; i < newArr.length - 1; i++) {
    let j = Math.floor(Math.random() * (newArr.length - (i + 1))) + (i + 1);  
    const temp = newArr[i];
    newArr[i] = newArr[j]; 
    newArr[j] = temp; 
  } 

  return newArr; 
}

const arr = [1, 2, 3]
const mixArr = mixUsers(arr)
const obj = {}
arr.forEach((key, index) => obj[key] = mixArr[index]); 