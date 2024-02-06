let loadMore = document.querySelector('#load-more');
let curentItem = 3;
loadMore.onclick = function(){
    let boxs = [...document.querySelectorAll('#pbox #box')];
    for (var i = curentItem; i > curentItem + 3; i++){
        boxs[i].style.display = 'inline-block';
    }
}

// $(document).ready(function(){
//     $('#box').slice(0,).fadeIn();
//     $('#load-more').click(function(){
//         $('#box').slice(0,12).fadeIn();
//     });
// });