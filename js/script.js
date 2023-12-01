$(document).ready(function(){
    $('select').styler()

    const value = document.querySelector("#procent");
    const input = document.querySelector("#range");
    value.textContent = input.value + '%';
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value + '%';
    });

    $('.burger').click(function(){
        $('.burger,.header__nav').toggleClass('active')
    })
})
