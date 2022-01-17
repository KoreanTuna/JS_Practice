const introImg = document.querySelector("#introImg");
const headerUl = document.querySelector("#headerUl");
const header = document.querySelector("#header");

const chan_box = document.querySelector("#chan_box");
const chan_rowBox = document.querySelector("#chan_rowBox");
const chanCircle = document.querySelector("#chanCircle");

const hauen_box = document.querySelector("#hauen_box");
const hauen_rowBox = document.querySelector("#hauen_rowBox");
const hauenCircle = document.querySelector("#hauenCircle");

const minwoo_rowBox = document.querySelector("#minwoo_rowBox");
const minwooCircle = document.querySelector("#minwooCircle");

const sunkiCircle = document.querySelector("#sunkiCircle");
const sunki_rowBox = document.querySelector("#sunki_rowBox");

const siteLink = document.querySelector("#siteLink");

const home = document.querySelector("#home");
const product = document.querySelector("#product");
const team = document.querySelector("#team");

const firstSection = document.querySelector("#firstSection");
const secondSection = document.querySelector("#secondSection");
const circleCharacter = document.querySelector("#circleCharacter");

home.addEventListener('click', function(event){
    firstSection.scrollIntoView({
        behavior: 'auto',
    });
});
product.addEventListener('click', function(event){
    secondSection.scrollIntoView({
        behavior: 'auto',
    });
});
team.addEventListener('click', function(event){
    circleCharacter.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
        
    });
});
window.addEventListener('resize', function(event) {
    if (window.screen.width<=1023){
        introImg.src = "./src/img/introImg_767.png";
    }
    if (window.screen.width>1023){
        introImg.src = "./src/img/introImg_1024.png";
    }
    if (window.screen.width<=766){
        introImg.src = "./src/img/introImg_767.png";
        chan_box.remove();
        chan_rowBox.prepend(chan_box); 
        hauen_box.remove();
        hauen_rowBox.prepend(hauen_box); 

    }
    if (window.screen.width>766){
        header.append(headerUl);
        introImg.src = "./src/img/introImg_767.png";
        chan_box.remove();
        chan_rowBox.append(chan_box); 
        hauen_box.remove();
        hauen_rowBox.append(hauen_box); 

    }

    if (window.screen.width<=454){
        headerUl.remove();
        introImg.src = "./src/img/introImg_455.png";


    }
}, true);

sunkiCircle.addEventListener('click', function(event){
    sunki_rowBox.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
});
chanCircle.addEventListener('click', function(event){
    chan_rowBox.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
});
minwooCircle.addEventListener('click', function(event){
    minwoo_rowBox.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
});
hauenCircle.addEventListener('click', function(event){
    hauen_rowBox.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
});

window.onload = function() {
    if(window.screen.width<=1023){
        introImg.src = "./src/img/introImg_767.png";
    }
}

