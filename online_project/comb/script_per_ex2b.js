let key = ['600'];
let answ = [];
let but = document.getElementById('but');
let get = document.getElementById('get');
let pod_but = document.getElementById('pod');
//let mes = document.getElementById('message');
let wait = true;
let i = 0;
let k;
let x;
let check = false;
//console.log(2);
window.onload = function(){
    //console.log(1);
//for (let i = 0; i < arr.length; i++) {
  //wait = false;
  
//alert(i);
//while(wait == false){
//function show(){
 //   mes.style.visibility = 'visible';
 //   show();
//}
let get_ans = document.getElementById('get_ans');
pod_but.addEventListener('click',()=>{
  console.log(4);
  if(check == false){
    pod_but.disabled=true;
  const pod ={
    data(){
      return{
        show:true,
        y:'Подсказка <span v-html="y"></span>',
        x:'<span id="rule_of_sum">Перестановки.</span> Перестановками из n элементов называются комбинации из n элементов, отличающиеся друг от друга только порядком расположения в них элементов. <p>Формула: <img src="formul_1.png" alt=""></p> <span v-html="x"></span></p>'
      }
    }
  }

  Vue.createApp(pod).mount('.answer');
  check=true;
}
else{
  const pod ={
    data(){
      return{
        y:'',
        x:''
      }
    }
  }
  Vue.createApp(pod).mount('.answer');
  check=false;
}





})
but.addEventListener('click', ()=>{
  x ="red";
  console.log(5);
  answ.push(get.value);
  get.value = '';
  //alert(key[0]);
  //alert(answ[0]);
  if(key.length==0 || wait ==false){
    but.disabled = true;
    console.log(1);
    message("");
    
  }else{
  if(key[0]==answ[0]){
    console.log(2);
   // wait = false;
   // mes.style.visibility = 'visible';
   // mes.style.display="inline";
   // mes.innerHTML = 'Правильно';
   //console.log(1011111111111111111111111111);
    x="green";
    k = "Верно";
    but.disabled = true;
    message(k);
    but.disabled = true;
    wait=false;

    //vm.$data.message = "Правильно";
   
   // setTimeout(4000);
  }else{
   wait = false;
   console.log(3);
    //mes.style.visibility = 'visible';
   // mes.style.display="inline";
    //mes.innerHTML = 'Неправильно';
    //console.log(11111111111111111111111111111111111);
    if(key.length>0){
      but.disabled = true;
      x="red";
    message("Неверно");
    but.disabled = true;
    }
    else{
      but.disabled = true;
      x="red";
      message("Неверно");
      but.disabled = true;
    }
    //vm.$data.message = "Неправильно";
   // setTimeout(4000);

  }
  key.shift;
  answ.shift;
 // wait = true;
 //show();
 
 function message(s){
   console.log(x);
   
   but.visibility="visible";
  
    const Demo = {
        data() {
          return {
            
            show: true,
            k:"mes",
            x:x
          }
        }
      }
    /*const message ={
      data(){
        return {
          message:'{{s}}'
        }
      }
    }
    */
    const app = Vue.createApp({
      data() {
        return { message: s ,
          k:"mes",
          x:x
        }
      }
    })
    /*const button={
      data(){
        return{
          mes:'disabled'
        }
      }
    }*/
    const anim ={
      data(){
        return{
          isActive:true
        }
      }
    }
    
    const otvet={
      data(){
        return{
          used:true,
          f:'<button class="but_ex1_1"  v-if="show" >Назад</button>',
          n:'<form href="index_comb_ex1.html"><button class="but_ex1" v-html="z" id="im"  v-if="show">Попробовать ещё раз</button></form>',
          s:'<button class="but_ex1" id="second"   v-if="show">Показать решение</button>',
          y:'pod_vis',
          t:'<button class="but_ex1"   v-if="show">К следующему заданию</button>'


        }
      }
    }
    if(x=="green"){
      let buttt = document.getElementById("im");
      buttt.disabled=true;
    }
      
    
    //let c = document.getElementById("mes");
    //c.style.color = "red";
    //Vue.createApp(anim).mount('#mes')
    const vm = app.mount('#message')
    
    
    
    //vm.$data.message = s;
    //console.log(vm.$data.message)
     // Vue.createApp(message).mount('#message')
      Vue.createApp(Demo).mount('.demo')
     // Vue.createApp(button).mount('#but')
     Vue.createApp(otvet).mount('#otvet')
     document.getElementById('share').style.display='none';

    
  let ans_but = document.getElementById('second');
    
  ans_but.addEventListener('click',()=>{
   // get_ans.visibility="hidden";
   document.getElementById('get_ans').style.display = 'none';
    pod = {
      data(){
        return{
        show:false
        }
      }
    }
    
    const answer ={
      data(){
        return{
          show:true,
          z:'<p>Решение.</p>',
          k:'<p>Дано 6 цифр: 0, 2, 5, 6, 7, 8, из них нужно составлять различные шестизначные шифры. Отличие от предыдущей задачи состоит в том, что ноль не может стоять на первом месте.</p><p>Можно напрямую применить правило произведения: на первое место можно выбрать любую из 5 цифр (кроме нуля); на второе место - любую из 5 оставшихся цифр (4 «ненулевые» и теперь считаем ноль); на третье место - любую из 4 оставшихся после первых двух выборов цифр, и т. д. Общее количество вариантов равно: 5 &#215 5 &#215 4 &#215 3 &#215 2 &#215 1 = 600. </p> <p>Можно применить метод исключения лишних вариантов. 6 цифр можно переставить Р6 = 6! = 720 различными способами. Среди этих способов будут такие, в которых на первом месте стоит ноль, что недопустимо. Подсчитаем количество этих недопустимых вариантов. Если на первом месте стоит ноль (он фиксирован), то на последующих пяти местах могут стоять в произвольном порядке «ненулевые» цифры 2, 5, 6, 7, 8. Количество различных способов, которыми можно разместить 5 цифр на 5 местах, равно Р5 = 5! = 120, т. е. количество перестановок чисел, начинающихся с нуля, равно 120. Искомое количество различных шестизначных шифров в этом случае равно: Р<sub>6</sub> - Р<sub>5</sub> = 720 - 120 = 600.</p>'
        }
      }
    }

    Vue.createApp(answer).mount('.podskazka');






})

    }
  }
})}