
let hasil = document.querySelector('.hasil')

let newDiv= document.createElement('div')
let title = document.querySelector('.calculation')
title.style.display = 'none'
function submit(){
    
    const weight = document.getElementById('weightInput').value;
const height =  document.getElementById('HeightInput').value;
    const bmi = weight / (height *height / 10000);
    let hasil= bmi.toFixed(2);
    const resultShow = document.getElementById("resultShow")
    const newDiv = document.createElement('div')

   let result = '';
   if(weight == '' || weight == 0){
    alert('You have to fill the Weight')
   }else if(height == ''|| height == 0){
    alert('You have to fill Height')
   }
   else if(hasil <18.5){
    result = "Under Weight"
   newDiv.innerHTML =`
    <div class='information'>
    <img src="./src/kurus.jpg">
    </div>
    `
   }else if(hasil < 24.9){
    result = "Normal"
    newDiv.innerHTML =`
    <div class='information'>
    <img src="./src/normal.jpg">
    </div>
    `
   }else if(hasil < 29.9){
    result ="Over Weight"
    newDiv.innerHTML =`
    <div class='information'>
    <img src="./src/gemuk.jpg">
    </div>
    `
   }else if(hasil <34.9){
    result ="Obese"
    newDiv.innerHTML =`
    <div class='information'>
    <img src="./src/obesitas.jpg">
    </div>
    `
   }else if(hasil <=0){
    alert('Make sure you have entered the correct numbers!')
   }else{
    result = "Extremly Obese"
    newDiv.innerHTML =`
    <div class='information'>
    <img src="./src/obesitas extream.jpg">
    </div>
    `
   }
   if(hasil >0 || hasil != "NaN" ){
       resultShow.innerHTML = `<span class='result'>your BMI is ${hasil},<span class='resultinfo'>${result}</span></span>`
       title.style.display ='block';
       resultShow.appendChild(newDiv)
    }else{
        alert('Make sure you have entered the correct numbers!')
    }

}
