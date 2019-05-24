class Alcohol {
    constructor(name, size, kind, price) {
        this.name = name;
        this.size = size;
        this.kind = kind;
        this.price = price;
    }
    displayAlcohol() {
        return `
            <div class="pa-ad">
                <b>${this.name}</b> <br>
                ${this.kind} <br>
                ${this.size} <br>
                ${this.price}
            </div>
        `
    }
}

var myAlcohol = document.getElementById('myAlcohol');

var xhttml = new XMLHttpRequest();

xhttml.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var responce = JSON.parse(xhttml.responseText);
        
        for(let i = 0;i < responce.length; i++){
            const alcohol = new Alcohol(responce[i].name, responce[i].size, responce[i].kind, responce[i].price);

            myAlcohol.innerHTML += alcohol.displayAlcohol();
        }
    }
};
xhttml.open("GET", "alcohol.json", true);
xhttml.send();