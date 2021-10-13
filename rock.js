const n=require("readline-sync");
var select=["rock","paper","sesar"]
var randms = select[Math.floor(Math.random())];
console.log(randms)
var player=n.question("enter the rock or sesar or paper:")
if  (player==randms){
console.log("math draw")
}
else  if (player=="rock" && randms=="paper"){
    console.log(randms,"win the match")
}
else  if (player=="rock" && randms=="sesar"){
    console.log(randms,"win the match")
}
else if (player=="paper" && randms=="rock"){
    console.log(randms,"win the match")

}
else  if (player=="paper" && randms=="sesar"){
    console(randms,"win trhe match")
}
else if (player=="sesar" &&  randms=="rock"){
    console.log(randms,"win the match")
}