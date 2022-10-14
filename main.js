let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let ahmed = document.querySelector('.ahmed');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 2.5 + 'px';    
    ahmed.style.fontSize = value + 'px';
    if(scrollY >= 53){
        ahmed.style.fontSize = 53 + 'px';
        ahmed.style.position = 'fixed';
        if(scrollY >= 445){
            ahmed.style.display = 'none';
        }else{
            ahmed.style.display = 'block';
        }
        if(scrollY >= 126){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
}