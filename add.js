var boobs = document.getElementById('form');
boobs.addEventListener('submit', function(event){
    event.preventDefault();
     var user = parseInt(document.getElementById('num1').value);
     var user1 = parseInt(document.getElementById('num2').value);
     var result = document.getElementById('preview');

     var sum = 0;
     for (var i=user; i<=user1; i++) {
        sum  += i;
     }

     result.innerHTML = sum;
});
