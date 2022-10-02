import "./styles.css";
import {renderHtml} from './preload'
console.log('it is working');

document.addEventListener("DOMContentLoaded", () =>{
    let body = document.getElementsByTagName('body')[0];

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
        constructor(innerText) {
            this.innerText = innerText,
                this.addText = function () {
                    let li = document.createElement('li');
                    li.classList.add("px-4", "py-4", "basis-1/5", "text-2xl", "hover:bg-slate-200", "hover:cursor-pointer", "hover:text-sky-500");
                    let text = document.createTextNode(this.innerText);

                    li.appendChild(text);
                    ul.appendChild(li);
                    
                    li.addEventListener('click', renderHtml.showHome);
                };
        }
    }
    
    const homeTab = new listItem('Home');
    homeTab.addText();

    const menuTab = new listItem('Menu');
    menuTab.addText();

    const contactsTab = new listItem('Contacts');
    contactsTab.addText();

    navBar.appendChild(ul);
    body.appendChild(navBar);
});
