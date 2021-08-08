const leftbtn= document.getElementById('leftbtn');
const rightbtn= document.getElementById('rightbtn');


const left = document.getElementById('left')
const right = document.getElementById('right')


leftbtn.addEventListener('click',leftclicked)

rightbtn.addEventListener('click',rightclicked)


function leftclicked(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('.mp4')) {
            leftclicked();
        }
        else {
            left.innerHTML = `<img src=${data.url} alt="dog" />`;
        }
    });
}

function rightclicked(){
    fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			right.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}


const nav= document.getElementById("navbar")


setInterval(myTimer, 1000);


function myTimer(){
    var currentdate = new Date();

    var datetime=currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

    nav.innerHTML = datetime;
    
}




