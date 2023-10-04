
let langDict = {}
fetch('./dictionary.json')
.then(response => {
    response.json().then((data) => {
        langDict = data;
        SetLang("es");
    });
});

let i18TextElements = document.getElementsByName('i18text');

const SetLang = (lang) => {
    currentLang = lang;
    i18TextElements.forEach((element) => {
        try {
            element.innerHTML = langDict[currentLang][element.getAttribute("i18-text")];
        } catch (error) {
            console.log(error);
        }
    });
    // Change buttons colors
    langBtns.forEach((element) => {
        if(element.value == lang){
            element.classList.add("selected");
        } else {
            element.classList.remove("selected");
        }
    });
}

let currentLang = "es";
let langBtns = document.getElementsByName('lang-btn');
langBtns.forEach((element) => {
    element.addEventListener('click', (e) => {
        SetLang(e.target.value);
    });
});

let html_filler = `<h1 
    name="i18text" 
    i18-text="hello" 
    class="first-letter:capitalize">
</h1>`
let js_filler = `let langDict = {}
fetch('./dictionary.json')

let i18TextElements = document
    .getElementsByName('i18text');

// lang: "es", "en" or "fr"
const SetLang = (lang) => {
    currentLang = lang;
    i18TextElements.forEach((element) => {
        try {
            element.innerHTML = langDict
                [currentLang]
                [element.getAttribute("i18-text")];
        } catch (error) {
            console.log(error);
        }
    });
}
`
let json_filler = `{
    "es":{
        "hello":"hola"
    },
    "en":{
        "hello":"hello"
    },
    "fr":{
        "hello":"bonjour"
    }
}`
let html_holder = document.getElementById("html-code");
let js_holder = document.getElementById("js-code");
let json_holder = document.getElementById("json-code");

html_holder.getElementsByTagName("pre")[0].innerText = html_filler;
js_holder.getElementsByTagName("pre")[0].innerText = js_filler;
json_holder.getElementsByTagName("pre")[0].innerText = json_filler;