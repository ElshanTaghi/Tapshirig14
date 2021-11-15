

function Gonder(say){
let ekran = document.getElementById("ekran");

ekran.value += say;  // ekran.value  = ekran.value + say

}


function beraber(){
    ekran.value = eval(ekran.value);
}
function temizle(){
    ekran.value = "";
}