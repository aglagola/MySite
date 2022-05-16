//Stuff to know

// export, require
// Variables 
// let =  block scope nto hoisted, const = block scope, var = function scope and hoisted
// Classes vs Objects, classes are the blueprints while objects are the finished house with all the extra info filled in
// Data Structures(Array, Objects, map, sets)
// Promises, Aysnc funtions, async await
// Loops and Interation, For, Do...While, While, For...in, For...of, Break, Continue
// if, else, else if
// array, push(), pop(), shift(), unshift(), splic(), etc
// Big0 notation, space and time complexity.
// linear, binary, constant time
// min, max

// finish video, learn algorithms and data structures

class Company {
    name: string;
    category: string;
    start: number;
    end: number;
    constructor(name, category, start, end) {
        this.name = name;
        this.category = category;
        this.start = start;
        this.end = end;
    }
}

const newCompany1 = new Company('coke', 'Reatail', 1910, 2022);


const companies = [
{name: "Company One", category: "Finance", start: 1981, end: 2003},
{name: "Company Two", category: "Tech", start: 1983, end: 2005},
{name: "Company Three", category: "Retail", start: 1980, end: 2002},
{name: "Company Four", category: "Biotech", start: 1978, end: 2001},
{name: "Company Five", category: "Auto", start: 1984, end: 2006},
{name: "Company Six", category: "Finance", start: 1977, end: 1999},
{name: "Company Seven", category: "Tech", start: 1979, end: 1998},
{name: "Company Eight", category: "Retail", start: 1978, end: 1996},
];

const ages = [22, 24, 17, 33, 55, 13, 16, 23, 35];

companies.push(newCompany1);




// foreach
companies.forEach(company => console.log(company.name));

function getNumberYearsCompany(start: number, end: number) {
    throw new Error("Function not implemented.");
}
// filter
const whatCompany= companies.filter(company => company.name = "Company One");
console.log(whatCompany);



// map
// sort
// reduce

