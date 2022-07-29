const mint = localStorage.getItem('mint');

if(mint==='ENTJ3')
{
    const icon = document.querySelector('#special');
    icon.style.display ="block";
    icon.addEventListener("click",
    function(){
        location.href="specialResult/가화.html";
    }
    );
}

