let obj = {
    a: 3,
    b: 5,
    c: 7,
  }
  let rows = 3
  let cols = 3 
  
  
  let destructuredObject = []
    
   for (let [key,value] of Object.entries(obj)){
     for (let i = 0; i < value; i++){
    console.log(destructuredObject.push(value))
     }
    }
  