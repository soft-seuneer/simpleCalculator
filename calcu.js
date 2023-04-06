(function(){

    let display = document.querySelector('.display');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('#clear');
    let equal = document.querySelector('#equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            //console.log(value);
            display.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
        
        if (display.value == ""){
            display.value = "";
        } else{
            let answer = eval(display.value);
            display.value =  answer;
        }
    });

    clear.addEventListener('click', (e) =>{
        display.value = "";
    });

})();