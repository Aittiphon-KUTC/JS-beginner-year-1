// Basic Function Java Script
function showmessage(){
    console.log("Hello word"); //แสดงผลลัทธ์ใน Console
    alert("Hello word"); //แสดงการแจ้งเตือนข้อความ
}

function changealert() {
    let msg = document.getElementById("change-alert").value;
    // การสร้างตัวแปร เพื่อใช้ชื่อจำลองนี้ ไปใช้งานในส่วนต่าง ๆ โดยที่ไม่ต้องไปแก้ไขในส่วนอื่น ๆ ตาม
    // คำสั่งในการดึงข้อมูลจาก HTML โดยระบุ ID มาเป้นตัวดำเนินการ
    document.getElementById("change-alert").value="";
    //เครียข้อมูลออกจากฟอร์มที่กรอกเข้ามา
    alert(msg)
}

function changetext() {
    let msg = document.getElementById("change-text").value;
    let headtext = document.getElementById("headtext");
    // document.getElementById("change-text").value="";

    headtext.innerHTML = msg;
    //ดึงค่าเข้ามาแสดงผล ตัว ID ที่ต้องการให้เปลี่ยนแปลงข้อมูลนั้น ๆ
}

function checkgrade(){
   
    let M = Number(document.getElementById("midterm").value);
    let F = Number(document.getElementById("final").value);
    let N = Number(document.getElementById("nice").value);

    let T = document.getElementById("total");
    let G = document.getElementById("grade");

    // document.getElementById("midterm").value=""
    // document.getElementById("final").value=""
    // document.getElementById("nice").value=""

    Swal.fire({
        title: "กรุณากรอกข้อมูลให้ครบถ้วนก่อน",
        text: "บางข้อมูลที่คุณยังไม่ได้กรอกอยู่",
        icon: "warning",
        showCancelButton: false,
        showConfirmButton: false
    });

    let total = M+F+N

    if (!M || !F || !N) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (M > 30 || F > 40 ||  N> 30 ) {
        console.log("กรุณากรอกคะแนนให้ถูกต้อง");
    } else {

            if(total >= 70){
                T.innerHTML = "คะแนนรวม : " + total;
                G.innerHTML = "ผลการเรียน : " + "ผ่าน";
            } else {
                T.innerHTML = "คะแนนรวม : " + total;
                G.innerHTML = "ผลการเรียน : " + "ไม่ผ่าน";
                
            }

        }
    }




// Basic Function Java Script
function showmessage(){
    console.log("Hello word"); //แสดงผลลัทธ์ใน Console
    alert("Hello word"); //แสดงการแจ้งเตือนข้อความ
}

showmessage(); //วิธีการเรียกใช้งานฟังก์ชัน

//function return value
function getvalue(number) {
    return document.write("ตัวเลที่ส่งเข้ามา -> ", number);
}

getvalue(200); //วิธ๊การเรียกใช้งาน

let result = "ผลลัทธ์ที่ได้";
getvalue(result); //การเรียกใช้งานแบบเก็บค่าผลลัพธ์ที่ได้จากฟังก์ชัน

function fullname(firstname, lastname) {
    return document.write("ชื่อ - นามสกุล : ", firstname, " ", lastname);
}

fullname("สมชาย", "ใจดี"); //การเรียกใช้งานแบบเก็บค่าผลลัพธ์ที่ได้จากฟังก์ชัน

function result(x, y){
    let total = x + y;
    return document.write("ผลลัพธ์การบวก : ", total);
}

result(10, 20);



// การใช้ HTML DOM
const TESTTEST = document.getElementById("Full-Name"); //อ้างอิงผ่าน ID
const CLASS = document.querySelector(".nickname"); //อ้างอิงผ่าน Class
const TAG = document.querySelectorAll("h2"); //อ้างอิงผ่าน Tag

function Test2() {
    TESTTEST.style.color = "red"; //เปลี่ยนรูปแบบของข้อความที่แสดงผล
    TESTTEST.style.backgroundColor = "yellow"; //เปลี่ยนสีพื้นหลังของข้อความที่แสดงผล
    CLASS.setAttribute('class', 'Hello-Benz'); //เปลี่ยนชื่อคลาส 
    // TAG.setAttribute('class', 'Hello-Benz'); //เปลี่ยนรูปแบบของข้อความที่แสดงผล

    // แก้ไขโดยการใช้ forEach เพื่อวนลูป
    TAG.forEach(element => {
        element.setAttribute('class', 'Hello-Benz');
    });
}

//เปลี่ยนสีโหมดมือ โหมดสว่าง
const BOX = document.querySelector(".box");

function lightTheme() {
    BOX.setAttribute('class', 'lighttheme');
}

function drakTheme() {
    BOX.setAttribute('class', 'darktheme');
}

//เปลี่ยนสีโหมดมือ โหมดสว่าง
