


fetch('https://apuntesnavarrete.github.io/expenses-chart-component-main/js/data.json')
.then(res => res.json())
.then(data => {

    console.log(data)


    let day = document.getElementsByClassName("description-chart")
    let draw = document.getElementsByClassName("draw-chart")
   

    console.log(data.length)

    for (let number = 0; number <= data.length; number++) {
        day[number].innerHTML = data[number].day
        draw[number].style.height = `${data[number].amount/10}em`;
      }
})

