import { posts } from './data.js';

const articleImage = document.querySelectorAll('.article__photo');
const articleTitle = document.querySelectorAll('.article__title');
const avatar__image = document.querySelectorAll('.avatar__image');
const avatar__name = document.querySelectorAll('.avatar__name');
const time__read = document.querySelectorAll('.time__read');



function loadingImage(image,index){
    articleImage[index].classList.remove('skeleton');
    const img = document.createElement('img');
    img.src=`./images/${image}`;
    articleImage[index].appendChild(img);
}

function loadingTitle(title,index){
    articleTitle[index].classList.remove('skeleton');
    articleTitle[index].textContent = title;

}


function loadingAvatar(avatar,index){
    avatar__image[index].classList.remove('skeleton');
    const img = document.createElement('img');
    img.src=`./images/${avatar}`;
    avatar__image[index].appendChild(img);
    
}


function loadingAvatarName(name,index){
    avatar__name[index].classList.remove('skeleton');
    avatar__name[index].textContent = name;
}


function loadingTimeRead(time,index){
    time__read[index].classList.remove('skeleton');
    time__read[index].classList.add('show');
    time__read[index].textContent = time;
}


function loadCards(){
    posts.forEach((post,index)=>{
        const {image,title,avatar,user,time} = post;

        loadingImage(image,index);
        loadingTitle(title,index);
        loadingAvatar(avatar,index);
        loadingAvatarName(user,index);
        loadingTimeRead(time,index);
    })
}


setTimeout(()=>{
    loadCards();
},3000)

