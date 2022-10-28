const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
//initialize the count variable
let count = 0;
btns.forEach ( btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('increase')){
            count++
        }
        else if(styles.contains('decrease')){
            count--
        }else{

            count = 0;
        }
        //for color change
        if(count > 0){
            counter.style.color = 'green';
        }
        else if ( count < 0){
            counter.style.color = 'red';
        }
          if( count === 0){
            counter.style.color =  'gray'
        }
        counter.textContent = count;
    });
});

//counter for cart system
let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');
addBtn.addEventListener('click', () => {
   qty.value = parseInt(qty.value) +1;
});
//for decrease
subBtn.addEventListener('click', () => {
    // qty.value = parseInt(qty.value) -1;  for negative number
    if(qty.value <= 0){
        qty.value = 0;
    }
    else{
        qty.value = parseInt(qty.value) -1;
    }
});


   




//shopping-cart
