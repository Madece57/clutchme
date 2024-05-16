

/*let left_scroll_p = document.getElementById('left_scroll_p');
let right_scroll_p = document.getElementById('right_scroll_p');
let project_cards = document.getElementById('project_cards');

left_scroll_p.addEventListener('click', ()=>{
   project_cards.scrollLeft -=250;
})
right_scroll_p.addEventListener('click', ()=>{
   project_cards.scrollLeft +=250;
})
*/

//client data
let c_img = document.getElementsByClassName('c_img');
let c_title = document.getElementsByClassName('c_title');
let c_subtitle = document.getElementsByClassName('c_subtitle');
let change_d = document.getElementsByClassName('change_d');


const check = () =>{
    change_d[0].style.background = "#fff";
    change_d[1].style.background = "#fff";
    change_d[2].style.background = "#fff";
    change_d[3].style.background = "#fff";
    change_d[4].style.background = "#fff";
    change_d[5].style.background = "#fff";
}

change_d[0].addEventListener('click', ()=> {
    c_img[0].src = "img/testmo/t.jpg";
    c_title[0].innerText = "Tom";
    c_subtitle[0].innerText = "They typed my documents with much expertise without any error";
    c_img[1].src = "img/testmo/i.jpg";
    c_title[1].innerText = "Ivy";
    c_subtitle[1].innerText = "Helped me to file my nil returns";
    c_img[2].src = "img/testmo/e.jpg";
    c_title[2].innerText = "Emmanuel";
    c_subtitle[2].innerText = "They are fast and reliabe when needed";
    c_img[3].src = "img/testmo/o.jpg";
    c_title[3].innerText = "Owen";
    c_subtitle[3].innerText = "Always update my with new games";
    c_img[4].src = "img/testmo/v.jpg";
    c_title[4].innerText = "Vallary";
    c_subtitle[4].innerText = "Wow, they are very reliable";
    c_img[5].src = "img/testmo/s.jpg";
    c_title[5].innerText = "Samuel";
    c_subtitle[5].innerText = "They so fast. Thanks";
    check();
    change_d[0].style.background = "#00635a";
    
});
change_d[1].addEventListener('click', ()=> {
    c_img[1].src = "img/testmo/h.jpg";
    c_title[1].innerText = "Halima";
    c_subtitle[1].innerText = "filled my nil returns before the deadline";
    c_img[0].src = "img/testmo/i.jpg";
    c_title[0].innerText = "Ian";
    c_subtitle[0].innerText = "They are a life saver";
    c_img[2].src = "img/testmo/f.jpg";
    c_title[2].innerText = "Fanaka";
    c_subtitle[2].innerText = "My fixed laundry service crew";
    c_img[3].src = "img/testmo/p.jpg";
    c_title[3].innerText = "Phillis";
    c_subtitle[3].innerText = "Games masters";
    c_img[4].src = "img/testmo/j.jpg";
    c_title[4].innerText = "Jack";
    c_subtitle[4].innerText = "They did it so easy";
    c_img[5].src = "img/testmo/u.jpg";
    c_title[5].innerText = "Unice";
    c_subtitle[5].innerText = "Graphics masters";
    check();
    change_d[1].style.background = "#00635a";

   
});
change_d[2].addEventListener('click', ()=> {
    c_img[2].src = "img/testmo/k.jpg";
    c_title[2].innerText = "Kelvin";
    c_subtitle[2].innerText = "A trusted entity in this field ";
    c_img[1].src = "img/testmo/q.jpg";
    c_title[1].innerText = "Quiler";
    c_subtitle[1].innerText = "Experts at their job";
    c_img[0].src = "img/testmo/s.jpg";
    c_title[0].innerText = "Samantha";
    c_subtitle[0].innerText = "Recommended when in a hurry";
    c_img[3].src = "img/testmo/n.jpg";
    c_title[3].innerText = "Nelly";
    c_subtitle[3].innerText = "Thanks guys";
    c_img[4].src = "img/testmo/z.jpg";
    c_title[4].innerText = "Zarri";
    c_subtitle[4].innerText = "All my number 1 service provider";
    c_img[5].src = "img/testmo/k.jpg";
    c_title[5].innerText = "Karis";
    c_subtitle[5].innerText = "Always the best";
    check();
    change_d[2].style.background = "#00635a";
    
});

change_d[3].addEventListener('click', ()=> {
    c_img[5].src = "img/testmo/z.jpg";
    c_title[5].innerText = "Zeddy";
    c_subtitle[5].innerText = "Designed my youtube thumbnail wonderfully ";
    c_img[4].src = "img/testmo/i.jpg";
    c_title[4].innerText = "Immaculate";
    c_subtitle[4].innerText = "Thanks alot almost bought a new laptop";
    c_img[3].src = "img/testmo/n.jpg";
    c_title[3].innerText = "Noel";
    c_subtitle[3].innerText = "Always updated with the latest pc games";
    c_img[0].src = "img/testmo/a.jpg";
    c_title[0].innerText = "Alpha";
    c_subtitle[0].innerText = "Saved me thanks alot";
    c_img[1].src = "img/testmo/f.jpg";
    c_title[1].innerText = "Frankline";
    c_subtitle[1].innerText = "Saved me from kra fine";
    c_img[2].src = "img/testmo/h.jpg";
    c_title[2].innerText = "Harmony";
    c_subtitle[2].innerText = "My esteemed laundry service providers";
    check();
    change_d[3].style.background = "#00635a";
    
    
});
change_d[4].addEventListener('click', ()=> {
    c_img[3].src = "img/testmo/t.jpg";
    c_title[3].innerText = "Timothy";
    c_subtitle[3].innerText = "This guys are awesome in terms of games";
    c_img[4].src = "img/testmo/p.jpg";
    c_title[4].innerText = "Pablo";
    c_subtitle[4].innerText = "Thanks, really helped";
    c_img[5].src = "img/testmo/m.jpg";
    c_title[5].innerText = "Melody";
    c_subtitle[5].innerText = "Created a wonderfull valentines post for me";
    c_img[0].src = "img/testmo/o.jpg";
    c_title[0].innerText = "Owen";
    c_subtitle[0].innerText = "Saves me alot of time";
    c_img[1].src = "img/testmo/v.jpg";
    c_title[1].innerText = "Vallary";
    c_subtitle[1].innerText = "Wow, they are very reliable";
    c_img[2].src = "img/testmo/s.jpg";
    c_title[2].innerText = "Samuel";
    c_subtitle[2].innerText = "They so fast. Thanks";
    check();
    change_d[4].style.background = "#00635a";
    
});
change_d[5].addEventListener('click', ()=> {
    c_img[0].src = "img/testmo/c.jpg";
    c_title[0].innerText = "Cathrine";
    c_subtitle[0].innerText = "I reccomend this guys ";
    c_img[1].src = "img/testmo/t.jpg";
    c_title[1].innerText = "Terry";
    c_subtitle[1].innerText = "Helped me with my returns";
    c_img[2].src = "img/testmo/j.jpg";
    c_title[2].innerText = "Jay";
    c_subtitle[2].innerText = "My cleaning experts";
    c_img[3].src = "img/testmo/i.jpg";
    c_title[3].innerText = "Irene";
    c_subtitle[3].innerText = "Thanks guys really enjoying";
    c_img[4].src = "img/testmo/z.jpg";
    c_title[4].innerText ="Zacharia";
    c_subtitle[4].innerText = "Hope i had known about them early";
    c_img[5].src = "img/testmo/d.jpg";
    c_title[5].innerText = "Dan";
    c_subtitle[5].innerText = "Thanks madece services";
    check();
    change_d[5].style.background = "#00635a";
   
    
});
let menu = document.getElementById('menu');
let menu_btn = document.getElementById('menu_btn');

menu_btn.addEventListener('click', ()=>{
    menu.classList.toggle('ul_active');
    menu_btn.classList.toggle('bi-x-diamond-fill');
    
})
let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");     
}
function collapseout(){
    popup.classList.remove("open-popup");     
}
let popdown = document.getElementById("popdown");

function openpopdown(){
    popdown.classList.add("open-popdown");     
}
function collapse(){
    popdown.classList.remove("open-popdown");     
}

var orderpop = document.querySelector(".redirect");

function orderr(){
    orderpop.classList.toggle("redirect-height");

}


let orderpo = document.querySelector(".order_main");

function orderpopup(){
    orderpo.classList.toggle("order_main_pop");
}

//typing pop
let typingpo = document.getElementById("typ"); 
function typeback(){
    typingpo.classList.toggle("typing");
}

//printing pop
let printingpo = document.getElementById("prn"); 
function printback(){
    printingpo.classList.toggle("print");
}

//helb pop
let helbpo = document.getElementById("hlb"); 
function helbback(){
    helbpo.classList.toggle("helb");
}

//kra pop
let krapo = document.getElementById("kr"); 
function kraback(){
    krapo.classList.toggle("kra");
}
//laundry pop
let laundrypo = document.getElementById("lnd"); 
function marketingback(){
    laundrypo.classList.toggle("laundry");
}
//windows pop
let windowpo = document.getElementById("wwnd"); 
function windowback(){
    windowpo.classList.toggle("wind");
}
//microsoft pop
let microsoftpo = document.getElementById("ms"); 
function msback(){
    microsoftpo.classList.toggle("microsoft");
}
//graphic pop
let graphicpo = document.getElementById("gd"); 
function graphicback(){
    graphicpo.classList.toggle("graphic");
}
//laminate pop
let laminatepo = document.getElementById("lmt"); 
function laminateback(){
    laminatepo.classList.toggle("laminate");
}
//pc games pop
let pcpo = document.getElementById("pg"); 
function pcback(){
    pcpo.classList.toggle("pcgame");
}

let info = document.getElementById("ppp"); 
function inf(){
    info.classList.toggle("anss");
}



