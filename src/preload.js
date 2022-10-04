    export function showHome() {
        let main = document.getElementsByTagName('main')[0];
        let homeSection = `
        <section class="home w-full bg-slate-200 flex flex-col px-2 py-8 gap-6 md:px-24 lg:px-48">
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
        return main.innerHTML = homeSection;

    }
    
    export function showMenu() {
        let main = document.getElementsByTagName('main')[0];
        let menuSection = `
        <section class="menu w-full bg-slate-200 flex flex-col px-2 md:px-24 lg:px-48 py-8 gap-6">
                <h1 class="text-5xl font-bold px-4 py-4">Menu</h1>
                <div class="breakfast list px-4">
                    <h1 class="font-semibold text-2xl py-4">Breakfast</h1>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Cheeses</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 300 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Eggs benedict with salmon</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Bagel with salted salmon, avocado and labne cheese</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 450 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Scramble with avocado and salted salmon</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 350 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Fried eggs with sausages and champignons</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>
                    </div>
                </div>
                <div class="bowl list list px-4">
                    <h1 class="font-semibold text-2xl py-4">Bowls</h1>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Green Bowl</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Teriyaki Bowl with chicken</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 150 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Teriyaki Bowl with salmon</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 450 T</span>
                    </div>
                </div>
                <div class="salad list list px-4">
                    <h1 class="font-semibold text-2xl py-4">Salads</h1>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Warm salad with horsemeat and ginger sauce</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Salad with warm Asian eggplant</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 750 T</span>
                    </div>
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Greece salad</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 550 T</span>
                    </div>  
                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                        <p class="text-2xl font-medium text-slate-600 w-2/4">Salad with arugula and shrimps</p>
                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 450 T</span>
                    </div>   
                    <div class="snack list">
                        <h1 class="font-semibold text-2xl py-4">Snakcs</h1>
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Bread</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">1 550 T</span>
                        </div>
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Cheese plato</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 950 T</span>
                        </div>
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Snacks plato</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>
                        </div>  
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Homemade mackerel</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 750 T</span>
                        </div>    
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Salmon carpaccio</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 350 T</span>
                        </div>      
                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">
                            <p class="text-2xl font-medium text-slate-600 w-2/4">Beer snacks</p>
                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 550 T</span>
                        </div>             
        </section>`;
        return main.innerHTML = menuSection;
    }

export function showContacts() {
    let main = document.getElementsByTagName('main')[0];
     let contactsSection = `
            <section class="contacts h-full w-full bg-slate-200 flex flex-col px-2 md:px-24 lg:px-48 py-8 gap-6">
                <h1 class="text-5xl font-bold px-4 py-4 mt-6 self-center">Our contacts</h1>
                <div class="socials px-4 flex flex-col gap-4">
                    <div class="self-center">
                        <i></i><p class="text-xl">+7-701-200-10-60</p>
                    </div>
                    <div class="self-center">
                        <i></i><a href="wolt.com" class="text-xl underline text-sky-600
                        hover:text-sky-800
                        ">wolt.com</a>
                    </div>
                    <div class="self-center">
                        <i></i><a href="#" class="text-xl underline text-sky-600
                        hover:text-sky-800
                        ">jambulljam@gmail.com</a>
                    </div>
                    <div class="self-center">
                        <i></i><a href="#" class="text-xl underline text-sky-600
                        hover:text-sky-800
                        ">Instagram</a>
                    </div>
                    <div class="self-center">
                        <i></i><a href="#" class="text-xl underline text-sky-600
                        hover:text-sky-800
                        ">Facebook</a>
                    </div>
                    <div class="self-center">
                        <i></i><a href="#" class="text-xl underline text-sky-600
                        hover:text-sky-800
                        ">WhatApp</a>
                    </div>
                </div>
            </section>`;


    return main.innerHTML = contactsSection;

}
    // 
   
    console.log('it is working my dude')


