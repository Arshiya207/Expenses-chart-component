const bars=document.querySelectorAll(".bars__ul>li>span")
const prices=document.querySelectorAll(".bars__ul>li>i")
prices.forEach(price=>{
    price.classList.add("bars-unhover")

})
bars.forEach(bar=>{
  
    bar.addEventListener("mouseout",()=>{
        const price= bar.nextElementSibling
        price.classList.remove("bars-hover")
        price.classList.add("bars-unhover")

    })
    bar.addEventListener("mouseover",()=>{
        const price= bar.nextElementSibling  
        price.classList.remove("bars-unhover")
        price.classList.add("bars-hover")
    })

})

