import React from 'react';

 /* Function to store all the numbers entered by users into SessionStorage
 Besides, it also check if the value is a number*/
function removeDuplicates(arr : string []) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}


export default function Menu() {
   // const [program, setProgram] = useState("quit");
    let status="quit";
    let interval : any;
    let numArr :any [] = [];
    let freNum : number | null;

     /* This function applied when users click the Quit button
     to clear all values stored in SessionStorage and remove the Interval
     and return the farewell message to users*/
    const handleQuit = () => {
        (document.getElementById("freBtn")  as HTMLInputElement).disabled = false;
        (document.getElementById("quitBtn") as HTMLInputElement).disabled = true;
        sessionStorage.removeItem('frequency');
        sessionStorage.removeItem('numberList');
        (document.getElementById("timing") as HTMLInputElement).disabled = false;
        status="quit";
        (document.getElementById("numberentered") as HTMLInputElement).innerHTML = "<p>Please enter the field required above</p>";
        (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<p>Thanks for playing</p>";
        (document.getElementById("startBtn") as HTMLInputElement).disabled = false;
        (document.getElementById("timing") as HTMLInputElement).value = "";
        clearInterval(interval);
        (document.getElementById("notification_timer") as HTMLInputElement).innerHTML = "<span class='welcome'>Please input the amount of time between emitting numbers and their frequency</span>";
        (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='welcome'>Please enter the first number</span>";
    }

     /* This function applied when the users click the Start button
     to print out the series of numbers in descending order and their frequency exactly like the formating required
     It will be stopped when the users click the Halt button or the Stop button*/
    const handleStart = () => {
        if("frequency" in sessionStorage &&  "numberList" in sessionStorage)
        {
            status="start";
            (document.getElementById("quitBtn") as HTMLInputElement).disabled = false;
            (document.getElementById("startBtn") as HTMLInputElement).disabled = true;
            (document.getElementById("timing") as HTMLInputElement).disabled = false;
            (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML = "<p>The system has started</p> <p>";
            handleInterval();
        }
        else{
            if ((document.getElementById("timing") as HTMLInputElement).disabled == false)
            {
                (document.getElementById("notification_timer") as HTMLInputElement).innerHTML = "<span class='warning'>Please enter all the field required</span>";
            }
            (document.getElementById("notification_num") as HTMLInputElement).innerHTML = "<span class='warning'>Please enter all the field required</span>";
        }

    }

         /* This function applied when the users click the Halt button
    The program will stop to print out The series of numbers and frequency 
    */
    const handleHalt = () => {
        clearInterval(interval);
        (document.getElementById("haltBtn") as HTMLInputElement).disabled = true;
        (document.getElementById("startBtn") as HTMLInputElement).disabled = true;
        (document.getElementById("resumeBtn") as HTMLInputElement).disabled = false;
        (document.getElementById("timing") as HTMLInputElement).disabled = true;
        (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<p>The system has paused</p>";
        status="halt";
    }

         /* This function applied when the users click the Resume button
    The program will start to print out The series of numbers and frequency again 
    */
    const handleResume = () => {
        status="start";
        (document.getElementById("startBtn") as HTMLInputElement).disabled = true;
        (document.getElementById("haltBtn") as HTMLInputElement).disabled = false;
        (document.getElementById("resumeBtn") as HTMLInputElement).disabled = true;
        (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<p>The system has resumed</p>";
        handleInterval();

    }

    //()=> setProgram("resume")
/* This function for the feature of Interval
in order to execute a series of actions in a certain amount of time 
    */
    const handleInterval = () => {
        freNum = parseInt(sessionStorage.getItem("frequency") || '{}');
        if(freNum !== null)
        {
            interval = setInterval(function() {
                if(status==="start")
                {
                    let tempList : string | null= sessionStorage.getItem("numberList");
                    if(tempList!==null)
                    {
                        numArr = JSON.parse(tempList);
                    }
                    let coreNum = removeDuplicates(numArr); 
                    let coreNumCount = new Array(coreNum.length).fill(0);
                    for(let i=0;i<coreNum.length;i++) {
                        for(let j=0;j<numArr.length;j++) {
                            if(coreNum[i]===numArr[j])
                                coreNumCount[i]++;
                        }; 
                    };

                    let objNumList: {
                        key: string;
                        value: any;
                    } []= [];
    
                    for (let m = 0; m < coreNum.length; m++) {
                        objNumList.push({
                            'key': coreNum[m],
                            'value': coreNumCount[m]
                        });
                    }
    
                    objNumList.sort(function(a, b) { return b.value - a.value; });
                    (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<p>";
                    console.log(objNumList);
    
                    let index : number = 0;

                
                    objNumList.map(obj  => {
                        (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<span>"+ obj.key+":"+obj.value+" </span>";                        
                        if(index<objNumList.length-1)
                        {
                            (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "<span>, </span> "; 
                        }
                        index++;
                    });                   
                    (document.getElementById("numberandfrequency") as HTMLInputElement).innerHTML += "</p>";
                }              
              }, freNum *1000);
        }


    }


     /* Components of 4 functional buttons and their according onClick functions triggered by users*/
    return (
        <div className="menu">
        <button className="button" id="startBtn" onClick={handleStart}>Start</button>
        <button className="button"id="haltBtn" onClick={handleHalt}>Halt</button>
        <button  className="button" id="resumeBtn" onClick={handleResume}>Resume</button>
        <button  className="button" id="quitBtn" onClick={handleQuit} >Quit</button>
        </div>
    )
}