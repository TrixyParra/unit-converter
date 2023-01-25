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

    // * Volume Section 
    const litersToGallons = inputEl.value * 0.264 
    const gallonsToLiters = inputEl.value * 3.785 

    volumeResults.innerHTML = `${inputEl.value} liters = ${litersToGallons.toFixed(3)} <span>|</span> ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters` 

    // * Mass Section 
    const kilogramsToPounds = inputEl.value * 2.205 
    const poundsToKilograms = inputEl.value * 0.454 

    massResults.innerHTML = `${inputEl.value} kilograms = ${kilogramsToPounds.toFixed(3)} pounds <span>|</span> ${inputEl.value} pounds = ${poundsToKilograms.toFixed(3)} kilograms` 
})