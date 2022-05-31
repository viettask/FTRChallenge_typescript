import React from "react";

 /* This function to check if value is a Fibonacci number (return true)
 */
function checkFib(num : number) :boolean
{
    let firstNum :number = 0;
    let secondNum :number= 1;
    if (num===firstNum || num===secondNum) return true;
    let thirdNum : number = firstNum + secondNum;
    while(thirdNum<=num)
    {
        if(thirdNum === num) return true;
        firstNum = secondNum;
        secondNum = thirdNum;
        thirdNum = firstNum + secondNum;
    }
    return false;
}

 /* This function to store all the numbers entered by users into SessionStorage
 Besides, it also check if the value is a number*/
const handleClick = () :void => {
   const num : number = parseInt((document.getElementById("numberadded") as HTMLInputElement).value.trim());
   let numArr : string [] = [];
 
   if((sessionStorage.getItem("frequency") === null))  
   {
       (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='warning'>Please enter the frequency value first</span>";
   }
   else{
        if ((sessionStorage.getItem("numberList") === null)) {
            if (!isNaN(num))
            {   
                let numArr : string [] = [];
                numArr.push(num.toString());
                sessionStorage.setItem('numberList', JSON.stringify(numArr));
                let str = checkFib(num)?"<p> The first number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                (document.getElementById("numberentered") as HTMLInputElement).innerHTML += str;
                (document.getElementById("numberadded") as HTMLInputElement).value = "";
                (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='welcome'>Please enter the next number</span>";
            }
            else {
                (document.getElementById("numberadded")as HTMLInputElement).value = "";
                (document.getElementById("notification_num")as HTMLInputElement).innerHTML = "<span class='warning'>The value must be a number. Please enter again!</span>";
            }
        }
        else {
            if (!isNaN(num)) {
                numArr = [];
                let tempList : string  = sessionStorage.getItem("numberList") as string;
                numArr.push(...JSON.parse(tempList));
                numArr.flat();
                numArr.push(num.toString());
                sessionStorage.setItem('numberList', JSON.stringify(numArr));
                let str = checkFib(num)?"<p> The next number is " + num+" - <b>FIB</b> </p>":"<p> The first number is " + num+"</p>";
                (document.getElementById("numberentered") as HTMLInputElement).innerHTML += str;
                (document.getElementById("numberadded") as HTMLInputElement).value = "";
                (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='welcome'>Please enter the next number</span>";
            }
            else {
                (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='warning'>The value must be a number. Please enter again!</span>";
            }
        }
   }

};

 /* Components for entering the series of numbers
 including 1 input field, 1 button and 1 notification label*/
export default function Nextnumber() {
    return (
        <div className="">
        <input type="text" placeholder="" name="" id="numberadded" className="input"/>
        <button  className="enterBtn button" onClick={handleClick}>Confirm</button>
            <p>
            </p>
            <p id="notification_num">
               <span className="welcome">Please enter the first number</span>
            </p>
        </div>
    )
}