const firstPage = document.querySelector(".first");
const secondPage = document.querySelector(".second");
const thirdPage = document.querySelector(".third");
const fourthPage = document.querySelector(".fourth");
const fifthPage = document.querySelector(".fifth");
const sixthPage = document.querySelector(".sixth");


//페이지 1
const start = document.querySelector(".first .question");


//질문1 페이지 2
const selE = document.querySelector("#sel-E");
const selI = document.querySelector("#sel-I");
const bbang = document.querySelector("#bbang");

//질문2 페이지 3
const selS = document.querySelector("#sel-S");
const selN = document.querySelector("#sel-N");


//질문3 페이지 4
const selF = document.querySelector("#sel-F");
const selT = document.querySelector("#sel-T");
const silcro = document.querySelector("#question3-1");

//질문4 페이지 5
const selJ = document.querySelector("#sel-J");
const selP = document.querySelector("#sel-P");


//질문 5 페이지 6
const sel1 = document.querySelector("#sel-1");
const sel2 = document.querySelector("#sel-2");
const sel3 = document.querySelector("#sel-3");

secondPage.style.display ="none";
thirdPage.style.display ="none";
fourthPage.style.display ="none";
fifthPage.style.display ="none";
sixthPage.style.display ="none";


let q1=null;
let q2=null;
let q3=null;
let q4=null;
let q5=0;

let result =" ";
//메인화면
start.addEventListener("click",startTest);
function startTest() {
   start.classList.add('animate');
    setTimeout(function () 
    {
        firstPage.style.display ="none";
        secondPage.style.display ="block";
    } , 1000);
}

//질문 1
selE.addEventListener("click",selectE, { once : true });
function selectE () {
    q1='E';
   
    selE.classList.add('animate');
    setTimeout(function () 
    {
        secondPage.remove();
        thirdPage.style.display ="block";
    } , 1000);
}

selI.addEventListener("click",selectI, { once : true });
function selectI () {
    q1='I';

    selI.classList.add('animate');
    setTimeout(function () 
    {
        secondPage.remove();
        thirdPage.style.display ="block";
    } , 1000);
 
}

//빵피
bbang.addEventListener("click",selectbbang, { once : true });
function selectbbang() {
    location.href="specialResult/빵피.html";
}


//질문 2
selS.addEventListener("click",selectS, { once : true });
    function selectS () {
        q2='S';

        selS.classList.add('animate');
        setTimeout(function () 
        {
            thirdPage.remove();
            fourthPage.style.display ="block";
        } , 1000);
    }
selN.addEventListener("click",selectN, { once : true });
    function selectN () {
        q2='N';
        
        selN.classList.add('animate');
        setTimeout(function () 
        {
            thirdPage.remove();
            fourthPage.style.display ="block";
        } , 1000);
    }

//질문 3
selF.addEventListener("click",selectF, { once : true });
    function selectF () {
        q3='F';

        selF.classList.add('animate');
        setTimeout(function () 
        {
            fourthPage.remove();
            fifthPage.style.display ="block";
        } , 1000);
    }
selT.addEventListener("click",selectT, { once : true });
    function selectT () {
        q3='T';

        selT.classList.add('animate');
        setTimeout(function () 
        {
            fourthPage.remove();
            fifthPage.style.display ="block";
        } , 1000);
    }

    //실크로
silcro.addEventListener("click",selectsilcro);
let clickedSilcro = 0;
    function selectsilcro() {
        clickedSilcro++;
        console.log(clickedSilcro);
        if(clickedSilcro>5){ location.href="specialResult/silcro.html"; }
    }


//질문 4
selJ.addEventListener("click",selectJ, { once : true });
    function selectJ () {
        q4='J';

        selJ.classList.add('animate');
        setTimeout(function () 
        {
            fifthPage.remove();
            sixthPage.style.display ="block";
        } , 1000);
        
    }
selP.addEventListener("click",selectP, { once : true });
    function selectP () {
        q4='P';
        selP.classList.add('animate');
        setTimeout(function () 
        {
            fifthPage.remove();
            sixthPage.style.display ="block";
        } , 1000);
        
    }



//질문 5
sel1.addEventListener("click",select1, { once : true });
    function select1 () {
        

        sel1.classList.add('animate');
        setTimeout(function () 
        {
            sixthPage.remove();
            result=q1+q2+q3+q4;
            localStorage.setItem("mint",result+1);
            whatResult();
        } , 1000);
        
    }
sel2.addEventListener("click",select2, { once : true });
    function select2 () {
        
        sel2.classList.add('animate');
        setTimeout(function () 
        {
            sixthPage.remove();
            result=q1+q2+q3+q4;
            localStorage.setItem("mint",result+2);
            whatResult();
        } , 1000);
        
    }

sel3.addEventListener("click",select3, { once : true });
    function select3 () {
        
        sel3.classList.add('animate');
        setTimeout(function () 
        {
            sixthPage.remove();
            result=q1+q2+q3+q4;
            localStorage.setItem("mint",result+3);
            whatResult();
        } , 1000);
        
    }

    

function whatResult() {
    if(result==='ISTP')      { console.log('ISTP'); location.href="ISTP.html";}
    else if(result ==='ISTJ'){ console.log('ISTJ'); location.href="ISTJ.html";}
    else if(result ==='ISFP'){ console.log('ISFP'); location.href="ISFP.html";}
    else if(result ==='ISFJ'){ console.log('ISFJ'); location.href="ISFJ.html";}
    
    else if(result ==='INTP'){ console.log('INTP'); location.href="INTP.html";}
    else if(result ==='INTJ'){ console.log('INTJ'); location.href="INTJ.html";}
    else if(result ==='INFP'){ console.log('INFP'); location.href="INFP.html";}
    else if(result ==='INFJ'){ console.log('INFJ'); location.href="INFJ.html";}

    else if(result ==='ESTP'){ console.log('ESTP'); location.href="ESTP.html";}
    else if(result ==='ESTJ'){ console.log('ESTJ'); location.href="ESTJ.html";}
    else if(result ==='ESFP'){ console.log('ESFP'); location.href="ESFP.html";}
    else if(result ==='ESFJ'){ console.log('ESFJ'); location.href="ESFJ.html";}

    else if(result ==='ENTP'){ console.log('ENTP'); location.href="ENTP.html";}
    else if(result ==='ENTJ'){ console.log('ENTJ'); location.href="ENTJ.html";}
    else if(result ==='ENFP'){ console.log('ENFP'); location.href="ENFP.html";}
    else if(result ==='ENFJ'){ console.log('ENFJ'); location.href="ENFJ.html";}
}