const seat=document.getElementsByClassName('sit')

let count=0;
let counts=40;
for(const sits of seat){
    sits.addEventListener('click',function(event){
        count=count+1;
        document.getElementById('perSeat').innerText=count;
          counts=counts-1;
        document.getElementById('substracSeat').innerText=counts;
          
        
    const ticketPrice=document.getElementById('price').innerText
    const busquality=document.getElementById('sitclass').innerText
    // console.log(busquality)
   
    const Pricecontainers=document.getElementById('priceContainer');
    const li1=document.createElement('li')

    const li =document.createElement('li');
    const p=document.createElement('p')
    const p1=document.createElement('p')
    p.innerText=ticketPrice;
    p1.innerText=busquality;
    li.appendChild(p) 
    li1.appendChild(p1)
    Pricecontainers.appendChild(li1)
    Pricecontainers.appendChild(li)
    

const totalPrice=document.getElementById('totalPrice').innerText
// console.log(typeof totalPrice)
const convertTotalPrice=parseInt(totalPrice)
   
document.getElementById('totalPrice').innerText= convertTotalPrice+parseInt(ticketPrice)
const sum = convertTotalPrice+parseInt(ticketPrice)

    const grandtotal=document.getElementById('grandtotal').innerText

    const convertGrandtotal=parseInt(grandtotal)

    const  sum2= convertGrandtotal+parseInt(ticketPrice);
    console.log(sum2)
    document.getElementById('grandtotal').innerText=sum2
    

//  setBg('A1');
//  setBg('A2')
 
    });
}




const setBg= document.getElementById('A1')
setBg.addEventListener('click',function (){
  setBg.style.backgroundColor='green'
})

const setBg1= document.getElementById('A2')
setBg1.addEventListener('click',function (){
  setBg1.style.backgroundColor='green'
})

const setBg2= document.getElementById('A3')
setBg2.addEventListener('click',function (){
  setBg2.style.backgroundColor='green'
})

const setBg3= document.getElementById('A4')
setBg3.addEventListener('click',function (){
  setBg3.style.backgroundColor='green'
})
const setBg4= document.getElementById('B1')
setBg4.addEventListener('click',function (){
  setBg4.style.backgroundColor='green'
})
const setBg5= document.getElementById('B2')
setBg5.addEventListener('click',function (){
  setBg5.style.backgroundColor='green'
})
const setBg6= document.getElementById('B3')
setBg6.addEventListener('click',function (){
  setBg6.style.backgroundColor='green'
})
const setBg7= document.getElementById('B4')
setBg7.addEventListener('click',function (){
  setBg7.style.backgroundColor='green'
})


// function setBg(id){
//   document.getElementById(id).style.backgroundColor='green'
// }