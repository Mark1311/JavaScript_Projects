const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click', function(event){
        console.log(event.target);
        if(event.target.id == 'grey'){
            body.style.background = event.target.id;
        };
        if(event.target.id == 'white'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'black'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'green'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'yellow'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'red'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'green'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'purple'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'brown'){
            body.style.background = event.target.id;
        }
        if(event.target.id == 'blue'){
            body.style.background = event.target.id;
        }
                   

    })

})