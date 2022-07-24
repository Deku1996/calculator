(function(){

    let screen  = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal  = document.querySelector(".btn-equal");
    let clear  = document.querySelector(".btn-clear");

    buttons.forEach(function(button) {
       button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            console.log(value)
        });

        
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
        screen.value = "";
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
        console.log(answer)
    }
    })


    clear.addEventListener('click', function(e) {
        screen.value = "";
    })



})(); // () -> Es un callback
