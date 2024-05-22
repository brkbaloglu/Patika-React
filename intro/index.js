// console.log("Hello world");
// var slugify = require("slugify")
import slugify from "slugify";
import {hello, topla, cikar, text, user} from "./my-module";


const title = slugify("some string", "-")

console.log(title);
hello("Mehmet")
console.log(topla(2,3));
console.log(cikar(4,1));

console.log(text);
console.log(user);
console.log(user.name);