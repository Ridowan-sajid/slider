let images=[
  "./jeremy-bishop-d3fZSXlJ3Ok-unsplash.jpg",
  "./ray-hennessy-YCh5-MpB6C8-unsplash.jpg",
  "./ethan-robertson-SYx3UCHZJlo-unsplash.jpg",
  "./wallpaperflare.com_wallpaper.jpg"
];

const image=document.querySelector('.image');
const previous=document.querySelector('.previous');
const next=document.querySelector('.next');

let i=0;
image.setAttribute('src',images[i]);
if(i==0){
  previous.style.display='none';
}
previous.addEventListener('click',(e)=>{
    i--;
    if(i==0){
      previous.style.display='none';
    }
    next.style.display='inline';
    image.setAttribute('src',images[i]);
});
next.addEventListener('click',(e)=>{
    i++;
    previous.style.display='inline';
    if(i==(images.length-1)){
      next.style.display='none';
    }
    image.setAttribute('src',images[i]);
});
