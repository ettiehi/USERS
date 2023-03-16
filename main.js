console.log(users);

// write a function that returns the formatted name of the user
function getFormatedName(user) {
    const { first, last, title } = user.name;
    return `${title} ${first} ${last}`;
}

const resultNAme = getFormatedName(users[0]);
console.log("🚀 ~ file: main.js:10 ~ resultNAme:", resultNAme)


// write a function that returns the age of the user
function getUserAge(user) {
    return user.dob.age;
}

const resultAge = getUserAge(users[0]);
console.log("🚀 ~ file: main.js:10 ~ resultNAme:", resultAge)

// write a function that returns an object like so {name://formatted name of the user ,age://user age }

console.log('name: ' + resultNAme, 'age: ' + resultAge)

// write a function that returns an array of objects like the one above 

const nameAndAgeArr = users.map(
    function (element) {
        return `${element.name.title} ${element.name.first} ${element.name.last} ,${element.dob.age}`

    }
)
console.log("🚀 ~ file: main.js:42 ~ nameAndAgeArr:", nameAndAgeArr)

//write a function that sorts users by their age

let sortseByAge = users.sort((a,b ) => 
    a.dob.age - b.dob.age
)
console.log("🚀 ~ file: main.js:40 ~ sortseByAge:", sortseByAge)







