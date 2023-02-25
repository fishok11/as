export const INDEX_URL = 'http://localhost:3000'

export const sattolo = (array) => { 
  const len = array.length; 
  for (let i = 0; i < len - 1; i++) { 
    let j = Math.floor(Math.random() *  (len-(i+1)))+(i+1); 
    const temp = array[i]
    array[i] = array[j]; 
    array[j] = temp; 
  } 
  return array;
}