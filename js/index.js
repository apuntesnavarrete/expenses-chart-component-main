


fetch('https://apuntesnavarrete.github.io/expenses-chart-component-main/js/data.json')
.then(res => res.json())
.then(data => {

    let valores = [data[0].amount, data[1].amount,data[2].amount,data[3].amount, data[4].amount , data[5].amount , data[6].amount]


    let val_order = valores.sort(function(a, b){return b-a})


    let day = document.getElementsByClassName("description-chart")
    let draw = document.getElementsByClassName("draw-chart")
   


    for (let number = 0; number <= data.length; number++) {

      if (data[number].amount != val_order[0]) {
        console.log(data[number].amount)
        console.log(val_order[0])


        day[number].innerHTML = data[number].day
        draw[number].style.height = `${data[number].amount/10}em`;
      
      }
    else{
        console.log(data[number].amount)
        console.log(val_order[0])
        day[number].innerHTML = data[number].day
        console.log(data[number].day)
        draw[number].style.height = `${data[number].amount/10}em`;
        draw[number].style.backgroundColor = `var(--Cyan)`;

}
      }

})

