let myHeaders = new Headers();
myHeaders.append("apikey", "1rMJuSsjOXzdlUgoJ5s2HsXNpfdGk531");

let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

symbols = {
    "AUD": "Australian Dollar",
    "AED": "United Arab Emirates Dirham",
    "ARS": "Argentine Peso",
    "BRL": "Brazilian Real",
    "CAD": "Canadian Dollar",
    "COP": "Colombian Peso",
    "EGP": "Egyptian Pound",
    "EUR": "Euro",
    "GBP": "British Pound Sterling",
    "ILS": "Israeli New Sheqel",
    "INR": "Indian Rupee",
    "IRR": "Iranian Rial",
    "JPY": "Japanese Yen",
    "KRW": "South Korean Won",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "NOK": "Norwegian Krone",
    "PHP": "Philippine Peso",
    "PLN": "Polish Zloty",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "THB": "Thai Baht",
    "TRY": "Turkish Lira",
    "UAH": "Ukrainian Hryvnia",
    "USD": "United States Dollar",
    "VND": "Vietnamese Dong",
    "ZAR": "South African Rand",
}

function createSymbols() {
    for (const dataKey in symbols) {
        const from = document.createElement('option');
        from.append(document.createTextNode(dataKey));
        from.value = dataKey;
        selectFrom.appendChild(from);
    }
    for (const dataKey in symbols) {
        const to = document.createElement('option');
        to.append(document.createTextNode(dataKey));
        to.value = dataKey;
        selectTo.appendChild(to)
    }
}

createSymbols();

// function takeSymbols() {
//     fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
//         .then(data => {
//             console.log(data.symbols)
//             for (const dataKey in symbols) {
//                 const to = document.createElement('option');
//                 to.append(document.createTextNode(dataKey));
//                 selectTo.appendChild(to)
//             }
//             for (const dataKey in symbols) {
//                 const from = document.createElement('option');
//                 from.append(document.createTextNode(dataKey));
//                 selectFrom.appendChild(from)
//             }
//         })
// return symbols
// }
// takeSymbols();