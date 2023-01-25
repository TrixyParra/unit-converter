const convertBtn = document.getElementById("convert-btn"); 
const inputEl = document.getElementById("input-el"); 
let lengthResults = document.getElementById("length-results"); 
let volumeResults = document.getElementById("volume-results"); 
let massResults = document.getElementById("mass-results"); 

convertBtn.addEventListener("click", function() {
    // * Length Section 
    const metersToFeet = inputEl.value * 3.281 
    const feetToMeters = inputEl.value * 0.305

    lengthResults.innerHTML = `${inputEl.value} meters = ${metersToFeet.toFixed(3)} feet <span>|</span> ${inputEl.value} feet = ${feetToMeters.toFixed(3)} meters` 
})