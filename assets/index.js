const account1 = {
    owner : 'A',
    movements : [300, 250, -100, 1000, -600, 500],
    pin : 1111,
};

const account2 = {
    owner : 'B',
    movements : [800, 150, -500, 2000, -450, 100],
    pin : 2222,
};  

const account3 = {
    owner : 'C',
    movements : [600, 100, -800, 3000, -400, 500],
    pin : 3333,
};  

const data = [account1, account2, account3]

let num = 0;
const limit = 2000;

let main=document.querySelector('.app')
let user = document.querySelector('.login_input--user')
let password = document.querySelector('.login_input--pin')
let close = document.querySelector(".btn")
let popup = document.querySelector(".pop")
let amount = document.querySelector(".balance__value")
let reqamount = document.querySelector(".form_input--loan-amount")
let transferacc = document.querySelector(".form_input--to")
let transferamt = document.querySelector(".form_input--amount")
let movements = document.querySelector(".movements")



function login() {
    for (let i = 0; i < data.length; i++) {
        
      if (data[i].owner==user.value&&data[i].pin==password.value) {
        main.style.opacity=1

        if (data[i].owner=="A") {
         amount.innerHTML = "4000€"
        }
        else if (data[i].owner=="B") {
            amount.innerHTML = "5000€"
        }
        else if (data[i].owner=="C") {
            amount.innerHTML = "4500€"
        }  
        return
      }

    }

    notification()

}

function closebtn(){
    popup.style.display = "none"
}

function notification(){
    popup.style.display = "block"
}

function requestamount (){

    for (let i = 0; i < data.length; i++) {
        if (data[i].owner==user.value){
       
       
            console.log("Requested amount is sent");
            let reqamt = parseFloat(reqamount.value)
            let balance = parseFloat(amount.textContent)
            let totalbalance = reqamt+balance
            console.log(totalbalance);
            amount.innerHTML=totalbalance+"$"

            let typediv = document.createElement("div")
            let datediv = document.createElement("div")
            let amtdiv = document.createElement("div")
            let rowdiv = document.createElement("div")

            typediv.className="movements_type "
            datediv.className="movements__date"
            amtdiv.className="movements__value"
            rowdiv.className="movements__row"

            typediv.innerHTML="Deposit"
            datediv.innerHTML= new Date().toLocaleDateString()
            amtdiv.innerHTML=reqamt

            rowdiv.appendChild(typediv)
            rowdiv.appendChild(datediv)
            rowdiv.appendChild(amtdiv)
            movements.appendChild(rowdiv)

    
        }
      
        return
    }
   }


function transferaccount(){

    if (user.value==transferacc.value) {
        console.log("Amount can't send yourself");
        return;
    }

    for (let i = 0; i < data.length; i++) {
       if (data[i].owner==transferacc.value) {
        let transfer = parseFloat(transferamt.value)
        let balance = parseFloat(amount.textContent)
        let accbalance = balance-transfer
        console.log(accbalance);
        amount.innerHTML=accbalance+"$"

        let typediv1 = document.createElement("div")
        let datediv1 = document.createElement("div")
        let amtdiv1 = document.createElement("div")
        let rowdiv1 = document.createElement("div")

        typediv1.className="movements_type movements_type--withdrawal "
        datediv1.className="movements__date"
        amtdiv1.className="movements__value"
        rowdiv1.className="movements__row"

        typediv1.innerHTML="Withdrawal"
        datediv1.innerHTML= new Date().toLocaleDateString()
        amtdiv1.innerHTML=transfer

        rowdiv1.appendChild(typediv1)
        rowdiv1.appendChild(datediv1)
        rowdiv1.appendChild(amtdiv1)
        movements.appendChild(rowdiv1)

        return;
       }
    }
}











