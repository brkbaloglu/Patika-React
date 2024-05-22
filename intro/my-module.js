const hello = (name) => {
    console.log("Hello" + name);
    console.log(`Hello ${name}`);
}

const topla = (a, b) => {
    return a + b;
}

const cikar = (a, b) => {
    return a - b;
}

export const text = "Text"
export const user = {
    name: "Mehmet",
    surname: "Seven"
}


export {
    hello,
    topla,
    cikar
}