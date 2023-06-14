//  let a =[1,3,4,5,6,7,8,9,8,6,7,5]

// let count = 0
// for (let i of a ) {
//     let prmt = +prompt('Введите число !')

//     if (prmt > 100){
//         break;
//     }

//     count++
//     alert(`Осталось ${a.length - count} попыток` )
// }


//  for (let i of a) {
//     if (i === 4) { 
//         break;
//     }
//  }

// let arr = [4,33,455,12,346,51]

// let even = []
// let odd = []

// for (  i => i % 2 === 0 ){
//     console.log(even);
// } else {
//     console.log(odd);
// }


// let arr = ["string", 22, true, null, {}, 12, "sdasd", 212,true]

// let string = 0
// let number = 0
// let object = 0
// let boolean = 0


// arr.filter(item => {
    
//     if(typeof(item) === "string"){
//         string++
//     } else if (typeof(item) === "number") {
//             number++
//     }
//     else if (typeof(item) === "object") {
//         object++
// }
// else if (typeof(item) === "boolean") {
//     boolean++
// }
// })

// console.log(string);
// console.log(number);
// console.log(object);
// console.log(boolean);

// ? если  : 


// let myhistory = {
//      name: "Mukhammadali",
//      surname: "Daminov",
//      age : 16,
//      dateOfbirth: "2006-11-19",
//      passort: {
//         series : "ABB223AA",
//         number : 283949230498,
//         date: "2025-01-01",
//         expiery_data:"2035-01-01",
//         visa : ["United States of America" , "South Korea" , "Shengen","Japan" , "Canada" , "Australia"]
//      },
//      networth: "200,000,000,000$",
//      cars: ['Lambogini',"BMW","MERCEDES"]
// }






// let passenger_car = {
//     engine: 5.4,
//     color: "aubergine",
//     brand: "Audi"
// }

// let truck = {
//    engine: 3.0 ,
//    color: "shit color",
//    brand: "Lamborgini"
// }



// let flex_car = Object.assign({} , passenger_car, {truck})



// let keys =[ Object.keys(flex_car)]



// let values =[ Object.values(flex_car)]



// let all = keys = keys.concat(values)


// let types = {
//     string: [],
//     object: [],
//     number: [],
//     boolean: [],
 
// }

// let allcars = all.filter(i => {if (hi.typeof  === "string" ) 
// {types.string.push(i)}
// } 
// ) 

// console.log(all);
 








let passenger_car = {
    engine: 5.4,
    color: "aubergine",
    brand: "Audi",
    Status_new: true
}

let truck = {
   engine: 3.0 ,
   color: "shit color",
   brand: "Lamborgini",
   Status_new : false
}

let flex_car = Object.assign({} , passenger_car, {truck})



let keys = Object.keys(flex_car)



let values = Object.values(flex_car)



let all =  keys.concat(values)



let types = {
    string: [],
    object: [],
    number: [],
    boolean: [],
}

for (i of all ) {
    if (typeof i === "string") {
        types.string++
    } else if (typeof i === "object") {
        types.object++
    } else if (typeof i === "number") {
        types.number++
    } else if (typeof i === "boolean") {
        types.boolean++
    } else {}
}

console.log(types);








