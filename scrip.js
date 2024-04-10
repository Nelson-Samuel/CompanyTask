const data = [
    {
        category: "Work",
        subcategory: "Project",
        duration: 30,
        task: "Front End",
    },
    {
        category: "Personal Work",
        subcategory: "Meeting",
        duration: 4,
        task: "Attendance",
    },
    {
        category: "Personal Work",
        subcategory: "Meeting",
        duration: 7,
        task: "Openning Speech",
    },
    {
        category: "Work",
        subcategory: "Teaching",
        duration: 120,
        task: "Unit 1",
    },
    {
        category: "Personal Work",
        subcategory: "Weekend",
        duration: 2,
        task: "Finish",
    },
    // {
    //     category:,
    //     subcategory:,
    //     duration:,
    //     task:,
    // },
    // {
    //     category:,
    //     subcategory:,
    //     duration:,
    //     task:,
    // },
    // {
    //     category:,
    //     subcategory:,
    //     duration:,
    //     task:,
    // },
    // {
    //     category:,
    //     subcategory:,
    //     duration:,
    //     task:,
    // },
    // {
    //     category:,
    //     subcategory:,
    //     duration:,
    //     task:,
    // },

]
const st=document.querySelector('.st');
const elements = document.querySelector('.elements');
// var size=Object.keys(data[0]).length;
var tempstore=data;
function tabeleDisplay() {
    data.map((key) => {
        const tr = document.createElement('tr');
        let val = Object.values(key);
        for (var i of val) {
            const td = document.createElement('td');
            td.textContent = i;
            tr.appendChild(td);
        }
        elements.appendChild(tr);
    })
}
tabeleDisplay();
var hour = 0;
var min = 0;
var sec = 0;
const inpdur=document.querySelector('.inpdur');
inpdur.value=''
inpdur.value="00 : 00 : 00";
const time = document.querySelector('.timer');
time.textContent = "00 : 00 : 00";
function start() {
    var strsec;
    var strmin;
    var strhr;
        sec++;
        if (sec == 60) {
            sec=0;
            min++;
            if (min == 60) {
                min=0
                hour++;
            }
        }
    if(sec<10){
        strsec="0"+sec;
    }
    else{
        strsec=sec;
    }
    if(min<10){
        strmin="0"+min;
    }
    else{
        strmin=min;
    }
    if(hour<10){
        strhr="0"+hour;
    }
    else{
        strhr=hour;
    }
    time.textContent = strhr+" : "+strmin+" : "+strsec;
    inpdur.value = strhr+" : "+strmin+" : "+strsec;
}
function time12(){
temptime=setInterval(() => start(), 1000)
}
function stop(){
    clearInterval(temptime)
}
// function revert(){
//     hour=0;
//     sec=0
//     min=0;
//     time.textContent = "00 : 00 : 00";
// }
function selop1() {
    const select1 = document.getElementById('catop');
    if (select1.value == 'all') {
        elements.textContent = '';
        tempstore=data;
        data.map((key) => {
            const tr = document.createElement('tr');
            let val = Object.values(key);
            for (var i of val) {
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            elements.appendChild(tr);
        })
    }
    if (select1.value == 'work') {
        elements.textContent = '';
       const tempwork = data.filter(e => {
            return e.category == 'Work'
        })
        // console.log(tempwork)
        tempstore=tempwork
        tempwork.map(key => {
            const tr = document.createElement('tr');
            let val = Object.values(key);
            for (var i of val) {
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            elements.appendChild(tr);
        })
    }
    if (select1.value == 'pwork') {
        elements.textContent = '';
        const temppwork=data.filter(e => {
            return e.category == 'Personal Work'
        });
        tempstore=temppwork;
        temppwork.map(key => {
            const tr = document.createElement('tr');
            let val = Object.values(key);
            for (var i of val) {
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            elements.appendChild(tr);
        })
    }
}
const main=document.querySelector('.main');
const formcreate=document.querySelector('.formcreate');
function Form1(){
   main.style.filter='blur(3px)';
   formcreate.style.display='block'
}
function submit(){
    const inpcat=document.querySelector('.inpcat')
    const inpsubcat=document.querySelector('.inpsubcat')
    const inptask=document.querySelector('.inptask')
    if(inpcat.value=='' || inpsubcat.value=='' || inptask.value==''){
        alert("Please fill all the details");
    }
    else{
        const subdata={
                category:inpcat.value,
                subcategory:inpsubcat.value,
                duration:inpdur.value,
                task:inptask.value,
            };
            formcreate.style.display='none'
            main.style.filter='';
            tempstore.push(subdata)
            data.push(subdata);
            // console.log(data);
            elements.textContent = '';
            tempstore.map(key => {
                const tr = document.createElement('tr');
                let val = Object.values(key);
                for (var i of val) {
                    const td = document.createElement('td');
                    td.textContent = i;
                    tr.appendChild(td);
                }
                elements.appendChild(tr);
            })
    }
}
function selop2(){
    const select2=document.getElementById('sortop');
    if(select2.value=='asc'){
        elements.textContent = '';
        tempstore.sort((a,b)=>{
           return a.duration - b.duration
        }).map(key => {
            const tr = document.createElement('tr');
            let val = Object.values(key);
            for (var i of val) {
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            elements.appendChild(tr);
        })
    }
    if(select2.value=='dsc'){
        elements.textContent = '';
        tempstore.sort((a,b)=>{
           return b.duration - a.duration
        }).map(key => {
            const tr = document.createElement('tr');
            let val = Object.values(key);
            for (var i of val) {
                const td = document.createElement('td');
                td.textContent = i;
                tr.appendChild(td);
            }
            elements.appendChild(tr);
        })
    }
    
}
function Back() {
    formcreate.style.display='none'
    main.style.filter='';
}
