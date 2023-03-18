let num = [1,2,3,4,5,6]

for(let item of num) {
    if(item %2 ==  0){
        console.log(item);
    }
}

// for (let item of company){
// console.log(item.trati)
//}

let company = [
    {
      month: 1,
      incom: 40000,
      trata: 200
    },
    {
      month: 2,
      incom: 578000,
      trata: 5000
    },
    {
      month: 3,
      incom: 30000,
      trata: 9000
    },
    {
      month: 4,
      incom: 1000000,
      trata: 5000000
    },
    {
      month: 5,
      incom: 60000,
      trata: 40000
    },
  ];

  for(item of company) {
item.balance = item.incom - item.trata
if (item.balance < 0){
    item.pribil = false
} else {
    item.pribil = true
} 

}

let month1 = []
let month2 = []
for(let item of company){
    if(item %1 == 0){
        console.log(item);
    } else{
        
    }
}