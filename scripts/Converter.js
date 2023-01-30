class Converter {
    constructor(from = "USD", to = "ILS", amount = 0) {
        this._from = from;
        this._to = to;
        this._amount = amount;
    }

    calculate = () => {
        fetch(`https://api.apilayer.com/fixer/convert?to=${this._to}&from=${this._from}&amount=${this._amount}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            })
            .then(data => {
                result.textContent = data.result;
            })
    }
}