let tab = document.querySelectorAll(".tab");
let content = document.querySelector(".content");
let img = document.querySelector(".img");

tab[0].addEventListener("click", function(){

    tab[0].classList.add("active");
    tab[1].classList.remove("active");
    tab[2].classList.remove("active");

    content.innerHTML = `
    <div class="content">
        <ul>
            <li><b>Birthday:</b> June 1 (Gemini)</li>
            <li><b>Blood type:</b> B</li>
            <li><b>Height:</b> 167 cm</li>
            <li><b>Weight:</b> 54 kg</li>
            <li><b>Karuta Society:</b> Shiranami Society, A Class</li>
            <li><b>Favourite food:</b> Chocolate, pollock squid</li>
            <li><b>Hobby:</b> Collecting Daddy Bear merchandise</li>
        </ul>
        <p>A determined schoolgirl who "possesses a remarkable hearing ability." She believes that by persevering in karuta, she will meet Arata again, and begins a karuta club at her high school with Mashima. While she is beautiful, she is considered too weird; her classmates refer to her as a "waste of a beauty." She has been described as a "tomboy trapped in a supermodel's body."</p>
    </div>`
    img.style.backgroundImage = "url('./asset/chihaya.jpg')"
    img.style.transitionDuration = "2s";
    img.stly.transitionTimingFunction = "ease-in-out";
});

tab[1].addEventListener("click", function(){

    tab[0].classList.remove("active");
    tab[1].classList.add("active");
    tab[2].classList.remove("active");

    content.innerHTML =`
    <div class="content">
        <ul>
            <li><b>Birthday:</b> December 1 (Sagittarius)</li>
            <li><b>Blood type:</b> O</li>
            <li><b>Height:</b> 177cm</li>
            <li><b>Weight:</b> 65 kg</li>
            <li><b>Karuta Society:</b> Fukui Nagumo Society - A Class</li>
            <li><b>Favourite food:</b> Habutai mochi, Katsu don with sauce</li>
            <li><b>Hobby:</b> Karuta, Reading, Math, and cooking</li>
        </ul>
        <p>Arata Wataya was a transfer student from Fukui that went to Chihaya's elementary school. The grandchild of a master karuta player, Arata inspires Chihaya to take up karuta by telling her that he thinks she has a talent for it. His passion for karuta is inspired by his grandfather, a Meijin (master). After their first game at Arata's house, Chihaya befriends him. His dream is to become a karuta Meijin.</p>
    
    </div>` 
    img.style.backgroundImage = "url('./asset/Arata.webp')"
    img.style.transitionDuration = "2s";
    img.stly.transitionTimingFunction = "ease-in-out";
});
tab[2].addEventListener("click", function(){

    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    tab[2].classList.add("active");

    content.innerHTML =`
    <div class="content">
        <ul>
            <li><b>Birthday:</b>  April 2 (Aries)</li>
            <li><b>Blood type:</b> A</li>
            <li><b>Height:</b> 178cm</li>
            <li><b>Weight:</b> 67 kg</li>
            <li><b>Karuta Society:</b> Shiranami Society - A Class</li>
            <li><b>Favourite food:</b>  peking duck, rock oysters</li>
            <li><b>Hobby:</b>  crossword puzzles</li>
        </ul>
        <p>Taichi is from a wealthy family (His father & Grandfather are both doctors). Chihaya's childhood friend is quite the golden boy. Smart, good looking, and mature, he excels at nearly everything he does which makes him the voice of reason in the Misusawa Karuta Club. While he sees himself as keeper of Chihaya and the less experienced members, he demands a lot of himself both in games and as a leader and can overthink even the most simple situations. </p>
        
    </div>` 
    img.style.backgroundImage = "url('./asset/taichi.jpg')";
    img.style.transitionDuration = "2s";
    img.stly.transitionTimingFunction = "ease-in-out";
});

