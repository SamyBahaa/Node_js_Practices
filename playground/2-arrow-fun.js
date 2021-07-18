// const squareFun = function(x){
//     return x*x
// }

// const squareFun = (x) =>{
//     return x*x
// }

// const squareFun = (x) => x*x

// console.log(squareFun(3))

const curtEvent = {
    name:"CURT meeting",
    guestList:["Samy","Moktar","Seif"],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + " is attending CURT event")
        })
    }
}

curtEvent.printGuestList()