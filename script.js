//connection with html tags
const bars = document.querySelectorAll(".bars__ul>li>span");
const prices = document.querySelectorAll(".bars__ul>li>i");
const date = new Date();
//spilit the date string 
const dateArr=date.toString().split(" ")
const currentDay=dateArr[0].toLowerCase()


const dateJson = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
// retrive the index of the current day object
let indexOfDay;
dateJson.filter((dayAndAmount,i)=>{
     if(dayAndAmount.day==currentDay){
        indexOfDay=i
        
     }
})
// add unhover class to all i tags
prices.forEach((amount) => {
  amount.classList.add("bars-unhover");
});
//give span or bars background and height
bars.forEach((bar,index) => {
  //give blue background to current day
   if(index==indexOfDay){
        bar.style.backgroundColor="hsl(186, 34%, 60%)"
   }
   //determine height of the bars
   if(dateJson[index].amount<55){
     bar.style.height=2*(dateJson[index].amount)+"px"

   }
   //insert amount to all tha i tags 
   const amount=bar.nextElementSibling
   amount.innerText=dateJson[index].amount






   // do some stuff for perfect animation
  bar.addEventListener("mouseout", () => {
    const price = bar.nextElementSibling;
    price.classList.remove("bars-hover");
    price.classList.add("bars-unhover");
  });
  bar.addEventListener("mouseover", () => {
    const price = bar.nextElementSibling;
    price.classList.remove("bars-unhover");
    price.classList.add("bars-hover");
  });
});
