const bars = document.querySelectorAll(".bars__ul>li>span");
const prices = document.querySelectorAll(".bars__ul>li>i");
const date = new Date();
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
let indexOfDay;
const objectOfCurrentDay=dateJson.filter((dayAndAmount,i)=>{
     if(dayAndAmount.day==currentDay){
        indexOfDay=i
        return dayAndAmount
     }
})

prices.forEach((amount) => {
  amount.classList.add("bars-unhover");
});
bars.forEach((bar,index) => {
   if(index==indexOfDay){
        bar.style.backgroundColor="hsl(186, 34%, 60%)"
   }
   if(dateJson[index].amount<55){
     bar.style.height=2*(dateJson[index].amount)+"px"

   }

   const amount=bar.nextElementSibling
   amount.innerText=dateJson[index].amount







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
