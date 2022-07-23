const firstPage = document.querySelector(".first");
const secondPage = document.querySelector(".second");
const thirdPage = document.querySelector(".third");
const fourthPage = document.querySelector(".fourth");
const fifthPage = document.querySelector(".fifth");

const start = document.querySelector("#start");

const selE = document.querySelector("#sel-E");
const selI = document.querySelector("#sel-I");

const selS = document.querySelector("#sel-S");
const selN = document.querySelector("#sel-N");

const selF = document.querySelector("#sel-F");
const selT = document.querySelector("#sel-T");

const selJ = document.querySelector("#sel-J");
const selP = document.querySelector("#sel-P");

secondPage.style.display ="none";
thirdPage.style.display ="none";
fourthPage.style.display ="none";
fifthPage.style.display ="none";

let result = '';

//메인화면
start.addEventListener("click",startTest);
function startTest() {
    firstPage.style.display ="none";
    secondPage.style.display ="block";
}

//질문 1
selE.addEventListener("click",selectE);
function selectE () {
    result=result+'E';
    selE.classList.add('animate');

    setTimeout(function () 
    {
        secondPage.remove();
        thirdPage.style.display ="block";
    } , 1000);

    console.log(result);
}
selI.addEventListener("click",selectI);
function selectI () {
    result=result+'I';
    secondPage.remove();
    thirdPage.style.display ="block";
    console.log(result);
}


//질문 2
selS.addEventListener("click",selectS);
    function selectS () {
        result=result+'S';
        thirdPage.remove();
        fourthPage.style.display ="block";
        console.log(result);
        }
selN.addEventListener("click",selectN);
    function selectN () {
        result=result+'N';
        thirdPage.remove();
        fourthPage.style.display ="block";
        console.log(result);
        }

//질문 3
console.log(result);
selF.addEventListener("click",selectF);
    function selectF () {
        result=result+'F';
        fourthPage.remove();
        fifthPage.style.display ="block";
        console.log(result);
        }
selT.addEventListener("click",selectT);
    function selectT () {
        result=result+'T';
        fourthPage.remove();
        fifthPage.style.display ="block";
        console.log(result);
        }

//질문 4
selJ.addEventListener("click",selectJ);
    function selectJ () {
        result=result+'J';
        fifthPage.remove();
        console.log(result);
        whatResult();
    }
selP.addEventListener("click",selectP);
    function selectP () {
        result=result+'P';
        fifthPage.remove();
        console.log(result);
        whatResult();
    }

function whatResult() {
    console.log('result : ')
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