var a = [{
    name: 'john',
    kidney: [{
        healthy: true,
    }, {healthy: false} , {healthy:true}]
}]

var n = a[0].kidney[0].healthy;

var c = a[0].kidney.filter(
    (item) => {
        if(item.healthy == true){
            return item
        }
    }
)


// var number = [1,9,4,18,12,]

// var b = number.filter((item) => {
//     if(item % 3 === 0){
//         return item
//     }
// })


var todo = [{
    id: '1',
    title : 'Buy Groceries',
    Description: 'Go to shop at 10am and buy the listed',
    completed: false
  },
  {
    id: '2',
    title : 'Buy Food',
    Description: 'Go to shop at 10am and buy Foods items',
    completed: false
  },
  {
    id: '3',
    title : 'Buy Essentials',
    Description: 'Go to shop at 10am and buy the essentials',
    completed: false
  }]

var id = 4;
var b = [1,2,3]

if(b.includes(3)){
    console.log(true)
}
if(todo.forEach((item) => {
    item.id.includes(1)
    console.log(item.id)
})){
    console.log(true)
} else {
    console.log(false)
}


