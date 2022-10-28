//object......
let newStudent = {
    studentName: "Toufiq Hasan",
    id: 7890,
    department: "BA/BSS",
    marks: "A+",
    phoneNumber: 1779764552,
    status: "Regular"
};
let mobile = {
    model: "itel vision-1",
    color: "Sky blue",
    display: 5,
    storage: "16 / 32 gb",
    warrenty: "2 years"
};
let book = {
    title: "Start with why",
    author: "Simon sinek",
    price: 200,
    pages: 2989,
    publisher: "Dimik"
};
//get & set object property..
//set a obj property value different method
let priceProperty = 'price';
// book.price = 460;
// book[ "price" ] = 560;
book[ priceProperty ] = 670;
console.log(book);