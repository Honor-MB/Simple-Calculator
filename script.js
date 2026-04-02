const myFirstNum = document.querySelector("#firstnum")
const mySecondNum = document.querySelector("#secondnum")
const multiplication = document.querySelector("#multiply")
const division = document.querySelector("#divide")
const addition = document.querySelector("#add")
const subtraction = document.querySelector("#subtract")
const displayAnswer = document.querySelector("#show")

const error = () =>
{
    if(!myFirstNum.value || !mySecondNum.value)
    {
        return displayAnswer.textContent = "Syntax Error" 
    }
}

multiplication.addEventListener("click", () => 
{
    let answer = myFirstNum.value * mySecondNum.value
    displayAnswer.textContent = answer
    error()
})

division.addEventListener("click", () => 
{
    let answer = (myFirstNum.value / mySecondNum.value).toFixed(8)
    displayAnswer.textContent = answer
    error()
})

addition.addEventListener("click", () => 
{
    const myFirstNum = parseInt(document.querySelector("#firstnum").value)
    const mySecondNum = parseInt(document.querySelector("#secondnum").value)
    let answer = (myFirstNum + mySecondNum)
    document.querySelector("#show").textContent = answer
    error()
})

subtraction.addEventListener("click", () => 
{
    let answer = myFirstNum.value - mySecondNum.value
    displayAnswer.textContent = answer
    error()
})
