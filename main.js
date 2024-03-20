"use strict";
//QUESTION NUMBER 12
let member = ["ali", "maham", "muneeba", "talha", "hashir"];
let message = "kl tumhari chutti h ";
for (let i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
// QUESTION NO 13
let transportation = ["civic", "bikes", "bus", "auto"];
for (let i = 0; i < transportation.length; i++) {
    console.log("i would like to use " + transportation[i]);
}
// QUESTION NO 14  & 15
let guest = ["  Ahad", "  Kashan", "   Zaryab"];
for (let i = 0; i < guest.length; i++) {
    console.log("welcome & and thanks for commming" +
        guest[i] +
        "\n i hope you will come again without innvitation ");
}
// question 15 not prresent guest
let not_Present = "kashan";
let new_Guest = "  SHAH KHAN";
guest[1] = new_Guest;
for (let i = 0; i < guest.length; i++) {
    console.log("welcome & and thanks for commming" +
        guest[i] +
        "\n i hope you will come again without innvitation ");
}
console.log(`opps ${not_Present} will not comming tommoro`);
