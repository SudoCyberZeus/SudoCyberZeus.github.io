class Cpanel {
    constructor(topic, date, link, desc, expl, path) {
        this.topic = topic;
        this.date = date;
        this.link = link;
        this.desc = desc;
        this.expl = expl;
        this.path = path;
    }
    mainCpanel() {
        return `
            <h2>${this.topic}</h2>
            <img src="${this.link}" alt="" id="myImg1">
            <p>
                ${this.desc}
            </p>
            <ul>
                <li>${this.topic}.</li>
                <li>${this.date}</li>
                <li>
                    <button >
                        <a href="${this.path}">
                            Read More...
                        </a>
                    </button>
                </li>
            </ul>
            <p>
                ${this.expl}
            </p>
        `
    }
    summCpanel() {
        return `
            <div class="pa-ad">
                <b>${this.topic}</b> <br>
                ${this.date} <br>
                <button >
                    <a href="${this.path}">
                        Read More...
                    </a>
                </button>
            </div>
        `
    }
}

var mainArticle = document.getElementById('mainArticle');
var mainTopics = document.getElementById('mainTopics');

var xhttml = new XMLHttpRequest();

xhttml.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var responce = JSON.parse(xhttml.responseText);
        
        for(let i = 0;i < responce.length; i++){
            const cpanel = new Cpanel(responce[i].topic, responce[i].date, responce[i].link, responce[i].desc, responce[i].expl, responce[i].path);
            
            mainTopics.innerHTML += cpanel.summCpanel();
            
            mainArticle.innerHTML = cpanel.mainCpanel();
        }
    }
};
xhttml.open("GET", "cpanel.json", true);
xhttml.send();