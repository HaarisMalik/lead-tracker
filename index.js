


let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})



let listItems = ""
for (let i = 0; i < myLeads.length; i++){
    listItems += "<li>" +  myLeads[i] + "</li> "
    ulEl.innerHTML = listItems 
  
}




/* EVENT LISTENER 

let openBox = document.getElementById("open-box")

openBox.addEventListener("click", function(){
    console.log("I want to open the box!")
}) 

function saveLead() {
    console.log("button clicked")
}

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("clicked" function(){
    console.log("button clicked form eventlistener")
}) */

/* WHEN TO SAY LET AND CONST PRACTISE 


const playerName = 'per'
let credits = 45

credits = credits - 10

//if possible default to use consts. if not , use let


const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

shippingCost = 15
shippingTime = "7-4 days"

const fullPrice = basePrice - discount + shippingCost

console.log("Total cost: "+ fullPrice + ". it will arrive in "+ shippingTime) */

/* WRITING INNERHTML TAGS 

//use .innerHTML to render buy! button inside the div container

const conatiner = document.getElementById("container")

conatiner.innerHTML = "<button onclick='buy()>Buy!</button>"

function buy() {
    conatiner.innerHTML += "<p>Thank you for buying!</p>"
}*/