const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const resultLengthEl = document.getElementById("resultLength-el")
const resultVolumeEl = document.getElementById("resultVolume-el")
const resultMassEl = document.getElementById("resultMass-el") 


let inputNum = 0

convertBtn.addEventListener("click", function() {
    inputNum = Number(inputEl.value)

    let feet = inputNum * 3.28084
    let meters = inputNum * 0.3048

    let gallons = inputNum * 0.264172
    let liters = inputNum * 3.78541

    let pounds = inputNum * 2.20462
    let kilos = inputNum * 0.453592

    resultLengthEl.innerHTML = `${inputNum} meters = ${feet.toFixed(3)} feet | ${inputNum} feet = ${meters.toFixed(3)} meters`

    resultVolumeEl.innerHTML = `${inputNum} liters = ${gallons.toFixed(3)} gallons | ${inputNum} gallons = ${liters.toFixed(3)} liters`
    
    resultMassEl.innerHTML = `${inputNum} kilos = ${pounds.toFixed(3)} pounds | ${inputNum} pounds = ${kilos.toFixed(3)} kilos`
   
   
    
})