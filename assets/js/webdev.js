class Webdev {
    constructor(topic, tech, date, link, desc, expl, path) {
        this.topic = topic;
        this.tech = tech;
        this.date = date;
        this.link = link;
        this.desc = desc;
        this.expl = expl;
        this.path = path;
    }
    mainWebdev() {
        return `
            <h2>${this.topic}</h2>
            <img src="${this.link}" alt="" id="myImg1">
            ${this.desc}
            <ul>
                <li>${this.topic}.</li>
                <li>${this.tech}.</li>
                <li>${this.date}</li>
                <li>
                    <button >
                        <a href="${this.path}">
                            Read More...
                        </a>
                    </button>
                </li>
            </ul>
            ${this.expl}
        `
    }
    summWebdev() {
        return `
            <div class="pa-ad">
                <b>${this.topic}</b> <br>
                ${this.tech} <br>
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

var mainArticle = document.getElementById('paPost');
var mainTopics = document.getElementById('mainTopics');

var xhttml = new XMLHttpRequest();

xhttml.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var responce = JSON.parse(xhttml.responseText);
        
        for(let i = 0;i < responce.length; i++){
            const webdev = new Webdev(responce[i].topic, responce[i].tech, responce[i].date, responce[i].link, responce[i].desc, responce[i].expl, responce[i].path);
            
            mainTopics.innerHTML += webdev.summWebdev();
            
            mainArticle.innerHTML = webdev.mainWebdev();
        }
    }
};
xhttml.open("GET", "webdev.json", true);
xhttml.send();