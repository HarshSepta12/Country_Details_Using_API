const countryName = new URLSearchParams(location.search).get("name");
const Country = document.querySelector("#Country");
const countryFlag = document.querySelector(".country-container .img #flagImg");
const countryNames = document.querySelector(
  ".country-details .country-name h2"
);
const countryNative = document.querySelector(".country-all-details p #native");
const countryPop = document.querySelector(".country-all-details p #pop");
const countryRegion = document.querySelector(".country-all-details p #region");
const countrySubRegion = document.querySelector(
  ".country-all-details p #subRegion"
);
const countrycapital = document.querySelector(".country-all-details p #capi");
const countryDomain = document.querySelector(".country-all-details p #domain");
const countrycurrency = document.querySelector(".country-all-details p #curr");
const countryLanguage = document.querySelector(
  ".country-all-details p #language"
);
const borderCountries = document.querySelector(
  ".country-all-details .border-countries p #border"
);
const switchBtn = document.querySelector(".header-container .header-content p");
const body = document.querySelector("body");
console.log(body);


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country);
    // console.log(country.flags.svg)
    countryFlag.src = country.flags.svg;
    // console.log(country.name.common);
    countryNames.innerText = country.name.common;
    countryPop.innerText = country.population;
    if (country.name.nativeName) {
      countryNative.innerText = Object.values(
        country.name.nativeName
      )[0].official;
    } else {
      countryNative.innerText = country.name.common;
    }
    countryRegion.innerText = country.region;
    countrySubRegion.innerText = country.subregion;
    countrycapital.innerText = country.capital[0];
    countryDomain.innerText = country.tld.join(", ");
    if (country.currencies) {
      countrycurrency.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    }

    if (country.languages) {
      countryLanguage.innerText = Object.values(country.languages).join(", ");
    }
  });

  let darkMode = false;

  switchBtn.addEventListener("click", () => {
    if (darkMode) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      switchBtn.innerHTML = `<p><i class="fa-regular fa-moon"></i>&nbsp;&nbsp; <span>Dark Mode</span> </p>`;
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      switchBtn.innerHTML = `<p><i class="fa-regular fa-moon"></i>&nbsp;&nbsp; <span>Light Mode</span> </p>`;
    }
    darkMode = !darkMode;
  });
  
