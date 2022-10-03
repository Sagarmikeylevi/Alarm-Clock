   "use strict";
   /* Alarm-1 */

   /* Alarm-1 Toggle Button */
      /* It will take care of on and off function */
   function AlarmClock1(){
      const button1 = document.querySelector(".circle1");
      var isClick = false;
      var isON = false;
      button1.addEventListener("click" , () =>{
         if(isClick == false){
         button1.style.marginLeft = "2.1rem";
         button1.style.backgroundColor = "lightcyan"
         isClick = true;
         isON = true;
         /* Alarm and the real work */
         let realTime = new Date();
         let realHour = realTime.getHours();
         let realMin = realTime.getMinutes();
         let realSec = realTime.getSeconds();
         let realDate = realTime.getDay();
         var audio = new Audio("audio.mp3");

         const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
         let day = days[realTime.getDay()];
         
          if((ab_date.innerHTML.search(day) == 1 || ab_date.innerHTML.search("Everyday") == 0) && realHour == ab_hour.innerHTML){
          
            let miliSec = ab_min.innerHTML - realMin;
            let s =  (miliSec * 60000) - (realSec * 1000);
            if(s >= 0){
               setTimeout( () =>{
                 audio.play();
               //   console.log(s);

               }, s);
            }
            
         }
      
         }
         else{
            button1.style.backgroundColor = "white"
         button1.style.marginLeft = "-2px";
         isClick = false;    
         isON = false;   
         }

         
         
      });

   /* Alarm-1 click and get alarm details */
      /* Here my goal is to click and get the alarm details section
         where user could do the alarm setting */

      const alarmBar = document.getElementsByClassName("alarms");
      const setButton = document.getElementsByClassName("set-button")
      const alarmDetails = document.querySelectorAll(".alarm-details");

         setButton[0].addEventListener("click" , () =>{
            // console.group("hello");
         
               alarmBar[0].classList.add("slideLeft");
               alarmBar[1].classList.add("slideLeft");
               alarmBar[2].classList.add("slideLeft");
            
               alarmDetails[0].classList.add("animate");

         });
   
   /* Alarm-1 click and get alarm-bar back */
      /* Here my goal is to click and get the alarm-bar section back
         to its place */
   
         const done = document.getElementById("done");
         let var1 = "Sunday";
         done.addEventListener("click" , () =>{
         
               alarmDetails[0].classList.remove("animate");
               alarmBar[0].classList.remove("slideLeft");
               alarmBar[1].classList.remove("slideLeft");
               alarmBar[2].classList.remove("slideLeft");

         });
   
   /* Alarm-1 Set time and date */
      /* set time */
      // Hour 

      let hour = document.getElementById("hour");
      let hourUp = document.getElementById("h-up");
      let ab_hour = document.getElementById("hr1");
      let hourDown = document.getElementById("h-down");
      let min = document.getElementById("min");
      let minUp = document.getElementById("m-up");
      let ab_min =  document.getElementById("mn1");
      let minDown = document.getElementById("m-down");

      hourUp.addEventListener("click" , () =>{
         // console.log("hello");
         let hr =  parseInt (hour.innerHTML) + 1;
         if(hr <= 9){
            hour.innerHTML = "0" + hr;
         
         } 
         else if(hr <= 23){
            hour.innerHTML = hr;
            
         } 

         ab_hour.innerHTML = hour.innerHTML;

         

      });
      
      hourDown.addEventListener("click" , () =>{
         // console.log("hello");
         let hr =  parseInt (hour.innerHTML) - 1;
         if(hr >= 0 && hr <= 9) hour.innerHTML = "0" + hr;
         else if(hr >= 10) hour.innerHTML = hr;
         ab_hour.innerHTML = hour.innerHTML;

        
      });

      // Miniute

      minUp.addEventListener("click" , () =>{
         // console.log("hello");
         let m =  parseInt (min.innerHTML) + 1;
         if(m <= 9) min.innerHTML = "0" + m;
         else if(m <= 59) min.innerHTML = m;
         ab_min.innerHTML = min.innerHTML;

         

         
      });

   
      minDown.addEventListener("click" , () =>{
         // console.log("hello");
         let m =  parseInt (min.innerHTML) - 1;
         if(m >= 0 && m <= 9) min.innerHTML = "0" + m;
         else if(m >= 10) min.innerHTML = m;
         ab_min.innerHTML = min.innerHTML;

         
      });
   
      /* set date */
      let ab_date = document.getElementById("ab-date");
      
      let dayCount = 0;
      let sun = document.getElementById("1");
      let sunBg = document.getElementById("sun");
      let isSun = false;
      let temp = "";
      
      sun.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isSun == false){
            sun.style.color = "white";
            sunBg.style.backgroundColor = " #8E2DE2";
            isSun = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Sun";
         } 
         else{
            sun.style.color = "black";
            sunBg.style.backgroundColor = "antiquewhite";
            
            temp =  ab_date.innerHTML.replace("Sun" , "");
            ab_date.innerHTML = temp;
            
            isSun = false;
            dayCount--;

         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }
         
         // console.log(ab_date.innerHTML);
         
      });

      

      let mon = document.getElementById("2");
      let monBg = document.getElementById("mon");
      let isMon = false;
      mon.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isMon == false){
            mon.style.color = "white";
            monBg.style.backgroundColor = " #8E2DE2";
            isMon = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Mon" ;
         } 
         else{
            mon.style.color = "black";
            monBg.style.backgroundColor = "antiquewhite";
            isMon = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Mon" , "");
            ab_date.innerHTML = temp;
         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }

         
      });
      
      let tue = document.getElementById("3");
      let tueBg = document.getElementById("tue");
      let isTue = false;
      
      tue.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isTue == false){
            tue.style.color = "white";
            tueBg.style.backgroundColor = " #8E2DE2";
            isTue = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Tue";
         } 
         else{
            tue.style.color = "black";
            tueBg.style.backgroundColor = "antiquewhite";
            isTue = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Tue" , "");
            ab_date.innerHTML = temp;
         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }
        
      });

      let wed = document.getElementById("4");
      let wedBg = document.getElementById("wed");
      let isWed = false;
      wed.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isWed == false){
            wed.style.color = "white";
            wedBg.style.backgroundColor = " #8E2DE2";
            isWed = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Wed";
         } 
         else{
            wed.style.color = "black";
            wedBg.style.backgroundColor = "antiquewhite";
            isWed = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Wed" , "");
            ab_date.innerHTML = temp;
         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }
         
      });

      let thu =  document.getElementById("5");
      let thuBg = document.getElementById("thur");
      let isThu = false;
      thu.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isThu == false){
            thu.style.color = "white";
            thuBg.style.backgroundColor = " #8E2DE2";
            isThu = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Thu";
         } 
         else{
            thu.style.color = "black";
            thuBg.style.backgroundColor = "antiquewhite";
            isThu = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Thu" , "");
            ab_date.innerHTML = temp;
         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }
        
      });

      let fri = document.getElementById("6");
      let friBg = document.getElementById("fri");
      let isFri = false;
      let isSeven = false;
      fri.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isFri == false){
            fri.style.color = "white";
            friBg.style.backgroundColor = " #8E2DE2";
            isFri = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Fri";
         } 
         else{
            fri.style.color = "black";
            friBg.style.backgroundColor = "antiquewhite";
            isFri = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Fri" , "");
            ab_date.innerHTML = temp;
         }

         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         if(dayCount == 7){
            ab_date.innerHTML = "Everyday"
         }
       
      });

      let sat = document.getElementById("7");
      let satBg = document.getElementById("sat");
      let isSat = false;

      sat.addEventListener("click" , ()=>{
         let sample = ab_date.innerHTML;
         if(sample == "Sunday"){
            sample = "";
            ab_date.innerHTML = sample;
         }
         if(isSat == false){
            sat.style.color = "white";
            satBg.style.backgroundColor = " #8E2DE2";
            isSat = true;
            dayCount++;
            ab_date.innerHTML = ab_date.innerHTML + " " + "Sat";
         } 
         else{
            sat.style.color = "black";
            satBg.style.backgroundColor = "antiquewhite";
            isSat = false;
            dayCount--;
            temp =  ab_date.innerHTML.replace("Sat" , "");
            ab_date.innerHTML = temp;
         }
         
         if(dayCount == 0){
            ab_date.innerHTML = "Sunday"
         }
         
         if( dayCount == 7){
            ab_date.innerHTML = "Everyday"
           
         }
         
         
         
      });
   

   }

   AlarmClock1();


   

      /* In this project only alarm-1 will gonna work. 
         Alarm-2 and 3 will be same like the alarm1 due to complexity of code 
         I only show the alarm-1 functionalities */
      

      

      
      
      



      


      

         
         
   



      


