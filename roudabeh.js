const arr = ["ahvaz", 'mashhad', 'shiraz', 'rasht', 'tehran', 'abadan'];

const arr2 = arr.map(function(item, index){
    return index + '.' + item
})

console.log(arr2)



const arr3 = arr.filter(function(item, indx){
    return item.startsWith("a")
})

console.log(arr3)


const arr4 = arr.find(function(item, indx){
    return item.startsWith("a")
})

console.log(arr4)

const arr5 = arr.findIndex(function(item, indx){
    return item.startsWith("f")
})

console.log(arr5)

const arr6 = arr.every(function(item, indx){
    return item.startsWith("a")
})

console.log(arr6)

const arr7 = arr.some(function(item, indx){
    return item.startsWith("a")
})

console.log(arr7)

console.log(Date.now())


const email = new RegExp('ab+c')
console.log(email.test("e@chargoo.com"))