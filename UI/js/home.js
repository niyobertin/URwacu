let counts = setInterval(updated,100);
let upto = 0;
function updated() {
    let count = ++upto;
     document.getElementById("loadMyPage").innerHTML=`Loading...${count}%`;
    if (upto === 100) {
        clearInterval(counts);
    }
    if(count == 100){
        window.location.href = "../pages/signIn.html";
    }
}



