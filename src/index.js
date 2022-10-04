import "./styles.css";
import {showHome} from './preload';
import {showMenu} from './preload';
import {showContacts} from './preload';
console.log('it is working');

document.addEventListener("DOMContentLoaded", () =>{
    
    let body = document.getElementsByTagName('body')[0];
    let main = document.createElement('main');
    main.classList.add('h-screen', 'w-full');
    main.innerHTML = `<section class="home w-full bg-slate-200 flex flex-col px-2 py-8 gap-6 md:px-24 lg:px-48">
    <div class="px-4 w-1/2 h-96 rounded-lg overflow-hidden">
        <img src="./hero.jpg" />
    </div>
    <div class="description">
        <h1 class="text-5xl font-bold px-4 py-4 text-sky-600">JamBull restro-bar</h1>
        <p class="text-xl px-4 max-w-4xl">A bright break from working days? There is an offer - JamBull!
            <br>
            5 reasons why you should visit us:
            <br>
            • author's fusion cuisine, a combination of culinary traditions from all over the world;
            <br>
            • exclusive bar menu;
            <br>
            • breakfasts all day;
            <br>
            • two atmospheric halls and a comfortable contact bar;
            <br>
            • democratic prices.
            <br>
            When developing the menu, we tried to interpret the classics into new bright tastes in our signature format. We guarantee that the high level of service will leave a pleasant impression and a desire to return again. Fill your life with warm memories with JamBull!
            Contact us via Instagram or by contact number, we will answer all your questions!
        </p>
    </div>
    <div class="hours">
        <h1 class="px-4 py-2 font-semibold text-2xl">Hours</h1>
        <p class="text-xl px-4">
            Sunday: 8am - 8pm
            <br>
            Monday: 6am - 6pm
            <br>
            Tuesday: 6am - 6pm
            <br>
            Wednesday: 6am - 6pm
            <br>
            Thursday: 6am - 10pm
            <br>
            Friday: 6am - 10pm
            <br>
            Saturday: 8am - 10pm</p>
    </div>
    <div class="location">
        <h1 class="px-4 py-2 font-semibold text-2xl">Location</h1>
        <p class="text-xl px-4">​ЖК Отау • ​улица Жамбыла, 155 к2
            Алмалинский район, Алматы, 050008</p>
    </div>
</section>`;

    let navBar = document.createElement('nav');
    navBar.classList.add("w-full", "bg-slate-100");

    let ul = document.createElement('ul');
    ul.classList.add("px-2", "md:px-24", "lg:px-48", "flex", "flex-row", "w-full");

    
    let liLogo = document.createElement('li');
    let italicElement = document.createElement('i');
    let logoText = document.createTextNode('Logo');
    liLogo.classList.add("basis-4/5", "px-4", "py-4");
    italicElement.classList.add("hover:cursor-pointer", "hover:text-sky-500");

    italicElement.appendChild(logoText);
    liLogo.appendChild(italicElement);
    ul.appendChild(liLogo);

    class listItem {
        constructor(innerText, showFunction) {
            this.innerText = innerText,
                this.addText = function () {
                    let li = document.createElement('li');
                    li.classList.add("px-4", "py-4", "basis-1/5", "text-2xl", "hover:bg-slate-200", "hover:cursor-pointer", "hover:text-sky-500");
                    let text = document.createTextNode(this.innerText);

                    li.appendChild(text);
                    ul.appendChild(li);
                    
                    li.addEventListener('click', showFunction);
                };
        }
    }
    
    const homeTab = new listItem('Home', showHome);
    homeTab.addText();

    const menuTab = new listItem('Menu', showMenu);
    menuTab.addText();

    const contactsTab = new listItem('Contacts', showContacts);
    contactsTab.addText();
    
    navBar.appendChild(ul);
    body.appendChild(navBar);
    body.appendChild(main);
});
