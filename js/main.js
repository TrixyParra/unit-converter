const convertBtn = document.getElementById("convert-btn"); 
const inputEl = document.getElementById("input-el"); 
let lengthResults = document.getElementById("length-results"); 
let volumeResults = document.getElementById("volume-results"); 
let massResults = document.getElementById("mass-results"); 

convertBtn.addEventListener("click", function() {
    // * Length Section 
    const metersToFeet = inputEl.value * 3.281 
    const feetToMeters = inputEl.value * 0.305

    lengthResults.innerHTML = `${inputEl.value} m = ${metersToFeet.toFixed(3)} ft <span>|</span> ${inputEl.value} ft = ${feetToMeters.toFixed(3)} m` 

    // * Volume Section 
    const litersToGallons = inputEl.value * 0.264 
    const gallonsToLiters = inputEl.value * 3.785 

    volumeResults.innerHTML = `${inputEl.value} L = ${litersToGallons.toFixed(3)} gal <span>|</span> ${inputEl.value} gal = ${gallonsToLiters.toFixed(3)} L` 

    // * Mass Section 
    const kilogramsToPounds = inputEl.value * 2.205 
    const poundsToKilograms = inputEl.value * 0.454 

    massResults.innerHTML = `${inputEl.value} kg = ${kilogramsToPounds.toFixed(3)} lbs <span>|</span> ${inputEl.value} lbs = ${poundsToKilograms.toFixed(3)} kg` 
})