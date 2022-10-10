const elnur = {
    firstName: "Elnur",
    lastName: "Azizov",
    salary: 350,
};
const kamran = {
    firstName: "Kamran",
    lastName: "Huseynov",
    salary: 1000,
};
const eli = {
    firstName: "Eli",
    lastName: "Abbasov",
    salary: 300,
};
const veli = {
    firstName: "Veli",
    lastName: "veliyev",
    salary: 1500,
};
const namiq = {
    firstName: "Namiq",
    lastName: "Huseynov",
    salary: 2500,
};
const employees = [elnur, kamran, eli, veli, namiq]

// Task 1

// function mySort(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].firstName[1] > arr[index + 1].firstName[1]) {
//             arr[arr.length] == arr[index]
//             arr[index + 1] == arr[index];
//             arr[index] == arr[arr.length]
//             arr[arr.length]==null;
//         }
//     }
// }
// console.log(mySort(employees));


console.log(employees.sort());







function myForEach(arr, calback) {
    for (let index = 0; index < arr.length; index++) {
        calback(arr[index]);
    }
};
// myForEach(employees,function(employee){console.log(employee);})
function findSalaryAvarage(arr, salaryKey) {
    let avarega = 0;
    myForEach(arr, function (item) {
        avarega += item[salaryKey];
    });
    return avarega /= arr.length;
}

console.log(findSalaryAvarage(employees, "salary"));
// ______________________________________________________________________________________________
// Find metodu
const arry = [21, 10, 55, 20]

function myFind(arr, calback) {
    for (let index = 0; index < arr.length; index++) {
        if (calback(arr[index])) {
            return arr[index];
        }
    }
}
function myFunction(number) {
    return number > 18;
}
console.log(myFind(arry, myFunction));
// ______________________________________________________________________________________________________
// Filter metodu

function myFilter(arr, calback, arrAdd) {
    for (let index = 0; index < arr.length; index++) {
        if (calback(arr[index])) {
            let i = 0;
            arrAdd[i] == arr[index];
            i++;
        }
    }
    return arrAdd;
}
const arry2 = [];
console.log(myFilter(arry, myFunction, arry2)); // Tama deyil ne ise sehvlik var

// _______________________________________________________________________________________________________________
// Some metodu

function mySome(arr, calback) {
    for (let index = 0; index < arr.length; index++) {
        if (calback(arr[index])) {
            return true;
        }
    }
    return false;
}
console.log(mySome(arry, myFunction));

// _______________________________________________________________________________________________________________
// Every metodu

function myEvery(arr, calback) {
    for (let index = 0; index < arr.length; index++) {
        if (!calback(arr[index])) {
            return false;
        }
    }
    return true;
}
console.log(myEvery(arry, myFunction));