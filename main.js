const Bill = document.querySelector('#bill');
const People = document.querySelector('#people');
const Custom = document.querySelectorAll('.custom');
const Container = document.querySelector('.amount-icons');
const ContainerBill = document.querySelector('.amount');
const Error = document.querySelector('.error');
const ErrorBill = document.querySelector('.error-bill');
/**Percentages */

// const Reset= document.getElementById("id_formulario").reset();
const Percentages = document.querySelectorAll('.percents');
const Inputs = document.querySelectorAll('.input');

let tipAmount = 0;
let Total = 0;
let Percent = 0;
var reg = /^[0-9]+$/;


let OutputTipPerson = document.querySelector('#out-tip');
var OutPersonTotal = document.querySelector('#out-total')

OutputTipPerson.value = 0;

tipAmount = 0;
DeleteInput()


Inputs.forEach(input => {
    
input.addEventListener('keyup', inpt =>{
    var z1 = /^[0-9]*$/;
    console.log(inpt.target.value)
        if (!z1.test(inpt.target.value)) { 
            inpt.target.value="" }
})
})



Percentages.forEach(el => {
    el.addEventListener("click", e => {
        const id = e.target.getAttribute("id");
        console.log("Se ha clickeado el id " + id);

        switch (e.target) {
            case five:
                Percent = 0.05;

                break;
            case ten:
                Percent = 0.1;
                break;

            case fivef:
                Percent = 0.15;
                break;

            case tfive:
                Percent = 0.25;
                break;

            case fifty:
                Percent = 0.5;
                break;

            default:
                Percent = 0;
                break;
        }

        

        tipAmount = Bill.value * Percent;
        console.log(tipAmount)
        OutputTipPerson.value = tipAmount.toFixed(2);
        console.log(OutputTipPerson)




        //  else {
        Total = Bill.value / People.value + tipAmount;
        console.log(Total)

        OutPersonTotal.value = parseInt(Total.toFixed(2));
       
       

        if (Bill.value != 0) {
            // People.classList.remove('incorrect');
            ContainerBill.classList.remove('incorrect')
            ContainerBill.classList.add('correct')
            ErrorBill.classList.remove('incorrect')
            console.log('puesto')
        } else {
            // People.classList.add('incorrect')

            ContainerBill.classList.remove('correct')
            ContainerBill.classList.add('incorrect')

            ErrorBill.classList.add('incorrect')
            console.log('quitado')
        }

        /////////////////////
        if (People.value != 0) {
            // People.classList.remove('incorrect');
            Container.classList.remove('incorrect')
            Container.classList.add('correct')
            Error.classList.remove('incorrect')
            console.log('puesto')
        } else {


            // People.classList.add('incorrect')
            Container.classList.remove('correct')
            Container.classList.add('incorrect')
            Error.classList.add('incorrect')
            console.log('quitado')
        }

    




    });


});


DeleteCustom()

Custom.forEach(input => {
    
    input.addEventListener('keyup', cus => {


        Percent = cus.target.value;


        if (cus.target.value != 0) {
            cus.target.classList.remove('incorrect')
            cus.target.classList.add('correct')

        } else {
            cus.target.classList.add('incorrect')
            cus.target.classList.remove('correct')

        }



        tipAmount = Bill.value * Percent / 100;
        console.log(tipAmount + 'tip')
        OutputTipPerson.value = tipAmount.toFixed(2);



        
        Total = Bill.value / People.value + tipAmount;
        console.log(Total)
        
        // getNum(OutPersonTotal.value = Total.toFixed(2));
        OutPersonTotal.value = Total.toFixed(2);
        OutPersonTotal.value =isFinite(OutPersonTotal.value) ? OutPersonTotal.value : 0.00;


    })
})



function DeleteInput() {
    Bill.value = "";
    People.value = "";
    // Custom.value = "";
}

function DeleteCustom() {
    Custom.value = "";
}

function getNum(OutPersonTotal){
    if (isNaN(OutPersonTotal)){
        return 0;
    }
    return OutPersonTotal;
}

