import "./styles.css";
import {renderHtml} from './preload'
console.log('it is working');
// let main = document.getElementById("content");
// console.log(main);
// let p = `<p class="w-12 h-12">Hi! My name is Gustavo.</p>`;

// document.addEventListener("DOMContentLoaded", renderHtml);
document.addEventListener("DOMContentLoaded", () =>{
    let main = document.getElementsByTagName('main')[0];
    // let navBar = `
    //     <nav class="w-full bg-slate-100">
    //         <ul class="px-2 md:px-24 lg:px-48 flex flex-row w-full">
    //             <li class="basis-4/5 px-4 py-4"><i class="
    //             hover:cursor-pointer hover:text-sky-500">Logo</i></li>
    //             <li class="px-4 py-4 basis-1/5 text-2xl 
    //             hover:bg-slate-200 hover:cursor-pointer hover:text-sky-500">Home</li>
    //             <li class="px-4 py-4 basis-1/5 text-2xl 
    //             hover:bg-slate-200 hover:cursor-pointer hover:text-sky-500">Menu</li>
    //             <li class="px-4 py-4 basis-1/5 text-2xl 
    //             hover:bg-slate-200 hover:cursor-pointer hover:text-sky-500">Contact</li>
    //         </ul>
    //     </nav>`;
    let navBar = document.createElement('nav');
    navBar.classList.add("w-full", "bg-slate-100");

    let ul = document.createElement('ul');
    ul.classList.add("px-2", "md:px-24", "lg:px-48", "flex", "flex-row", "w-full");

    let li = document.createElement('li');
    li.classList.add("px-4", "py-4", "basis-1/5", "text-2xl", "hover:bg-slate-200", "hover:cursor-pointer", "hover:text-sky-500")
    
    let logo = document.createTextNode("logo");
    li.appendChild(logo);
    ul.appendChild(li);
    navBar.appendChild(ul);

    
    li.addEventListener('click', renderHtml);
    main.appendChild(navBar);
});
