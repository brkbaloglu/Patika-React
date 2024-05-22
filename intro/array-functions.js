const users = [
    {
        name: "Mehmet"
    },
    {
        name: "Ahmet"
    },{
        name: "Murat"
    }
]


users.push("Ayşe")
users.push("Fatma")

users.map((item) => {
    console.log(item);
})
console.log(users);

const findIt = users.find((item) => item.name === "Mehmet")
console.log(findIt);

const filtered = users.filter((item) => item.name === "Mehmet")
console.log(filtered);


const every = users.every((item) => item.name === "Mehmet")
console.log(every);


const meyveler = ["elma", "armut", "muz"]
const isIncluded = meyveler.includes("muz")
console.log(isIncluded);