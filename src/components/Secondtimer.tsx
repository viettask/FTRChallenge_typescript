import React from "react"

 /* This function to store value of time (in seconds) into SessionStorage
 Besides, it also check if the value is a number*/
const handleChange = () : void => { 
    const num : number = parseInt((document.getElementById("timing") as HTMLInputElement).value.trim()) ;
    if(!isNaN(num)){
        sessionStorage.setItem('frequency', num.toString());
        (document.getElementById("freBtn") as HTMLInputElement).disabled = true;
        (document.getElementById("numberentered") as HTMLInputElement).innerHTML = "<p>The frequency entered is "+num+" (in seconds) </p>";
        (document.getElementById("timing")as HTMLInputElement ).disabled = true;
        (document.getElementById("timing") as HTMLInputElement).value = num.toString();
        (document.getElementById("notification_timer") as HTMLInputElement).innerHTML = "<span class='welcome'> Done! Thanks</span>";
    }
    else
    {
        (document.getElementById("timing") as HTMLInputElement).value = "";
        (document.getElementById("notification_timer") as HTMLInputElement).innerHTML = "<span class='warning'>The frequency value must be a number. Please enter again!</span>";
    }
 };

 /* Components for adding the amount of time
 including 1 input field, 1 button and 1 notification label*/
export default function Secondtimer() {
    return (
        <div className="">
                    <input type="text" placeholder="" name="" id="timing" className="input" />
                    <button id="freBtn" className="enterBtn button" onClick={handleChange}> Confirm</button>
                    <p>(in seconds)</p>
                    <p id="notification_timer">
                    <span className="welcome">Please input the amount of time between emitting numbers and their frequency</span>
                    </p>
        </div>
    )
}