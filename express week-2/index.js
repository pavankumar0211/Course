const express = require('express');
const app = express();

var a = [{
    name: 'Pavan',
    kidney: [{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: true
    }]
}]

app.get('/', (req , res) => {
    var numberofkidney = a[0].kidney.length;
    var b = a[0].kidney.filter(
        (item) => {
            if(item.healthy == true){
                return item
            }
        }
    )

    var healthy = b.length;

    var unhealthy = numberofkidney - healthy;
    res.json({
        numberofkidney,
        healthy,
        unhealthy
})
})


app.use(express.json())

app.post('/', (req, res) => {
    var post = req.body.ishealthy;
    a[0].kidney.push({
        healthy: post
    })
    console.log(a[0].kidney)

    res.json('Done')
})

app.put("/", (req, res) => {
    a[0].kidney.forEach((item) => {
        item.healthy = true
    })

    console.log(a[0].kidney)

    res.json('Done')
})


app.delete("/", (req, res) => {
    var newarray = a[0].kidney.filter((item) => {
      if(item.healthy == true){
        return item
      }
    })

    a[0].kidney = newarray
    console.log(a[0].kidney)
    res.json('Deleted')
})


app.listen(3000)