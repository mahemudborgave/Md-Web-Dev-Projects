import { countryList } from "./countries.js"

console.log("ma chudi pari hai ........... ")

const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let amount = document.getElementById("amount");
let subButton = document.querySelector(".convert");
let fromCountry = document.getElementById("from");
let toCountry = document.getElementById("to");
let result = document.querySelector(".result");
let fromSelect = document.querySelector("#from");
let toSelect = document.querySelector("#to");
let fromCountryImg = fromSelect.parentElement.querySelector("img");
let toCountryImg = toSelect.parentElement.querySelector("img");

subButton.addEventListener("click", ()=> {
    if(amount.value == "") {
        alert("Amount dalna madrchod ....");
    }
    else {
        let rate = 
        result.innerText = amount.value;
    }
})


let option;

for(let currCode in countryList) {
    // let option = document.createElement("option");
    // option.innerText = countryList[currCode];
    // console.log(option);
    option = `<option value="${countryList[currCode]}">${countryList[currCode]}</option>`;
    fromSelect.insertAdjacentHTML("beforeend", option);
    toSelect.insertAdjacentHTML("beforeend", option);
}

let indOption = document.querySelectorAll('option[value="IN"]');
if(indOption[0].parentElement.getAttribute("name") == "from") {
    indOption[0].selected = "selected";
    fromCountryImg.src = `https://flagsapi.com/IN/flat/64.png`;
}

let usOption = document.querySelectorAll('option[value="US"]');
if(usOption[1].parentElement.getAttribute("name") == "to") {
    usOption[1].selected = "selected";
    toCountryImg.src = `https://flagsapi.com/US/flat/64.png`;
}

fromSelect.addEventListener("change", () => {
    fromCountryImg.src = `https://flagsapi.com/${fromSelect.value}/flat/64.png`;
})

toSelect.addEventListener("change", () => {
    toCountryImg.src = `https://flagsapi.com/${toSelect.value}/flat/64.png`;
})