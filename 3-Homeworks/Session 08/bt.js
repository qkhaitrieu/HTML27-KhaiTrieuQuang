function bt1() {
    var bt = prompt('Nhap so');
    if (bt != null) {
        document.getElementById('ko').innerHTML = 'Ket qua ' + bt * 2;
    }
}
function bt2() {
    let a = prompt('nhap so 1')
    let b = prompt('nhap so 2')
    let c = prompt('nhap so 3')
    let d = prompt('nhap so 4')

    let min = a;
    if(min >b) {
        min = b;
    }
      if(min >c) {
        min = c;
    }
      if(min >d) {
        min = d;
    }
     document.getElementById('k').innerHTML = 'Ket qua ' + min;
}

function bt3() {
    var btt = prompt('Nhap so');
    if (btt != null) {
        document.getElementById('koo').innerHTML = 'Ket qua ' + Math.floor((btt-1)/2) ;
        
    }
}

function bt4() {
    var num = prompt('Nhap so');
    if (num >=10 && num <=99) {
        document.getElementById('kooo').innerHTML = 'Ket qua ' ;      
    }
}


function bt5() {
    var number
    var number = prompt('nhap so');
    if(number % 2 == 0 && number !==2 || number <=1) {

        document.getElementById('baitapnam').innerHTML = ' la so nt Yes';
            }
            else 

                 document.getElementById('baitapnam').innerHTML = ' ko No';
            }
        
    
        
    
  


