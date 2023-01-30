selectFrom.addEventListener('click', changeImg);
selectTo.addEventListener('click', changeImg);
formBtn.addEventListener('click', getAmount);

function changeImg(e) {
    const name = e.currentTarget.id;
    if (e.currentTarget.id === "selectFrom") {
        const img = document.querySelector('.imgFrom');
        img.src = `./images/${e.target.value}.png`;
        const label = document.querySelector('.form-label');
        for (const imgKey in symbols) {
            if (imgKey === e.target.value) {
                label.textContent = symbols[imgKey];
            }
        }
    } else {
        const img = document.querySelector('.imgTo');
        img.src = `./images/${e.target.value}.png`;
        for (const imgKey in symbols) {
            if (imgKey === e.target.value) {
                label.textContent = symbols[imgKey];
            }
        }
    }
}

function getAmount() {
    const converter = new Converter(selectFrom.value, selectTo.value, sumFrom.value);
    converter.calculate();
}







