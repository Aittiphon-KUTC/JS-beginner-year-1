
function showmessage(){
    console.log("Hello word") //แสดงผลลัทธ์ใน Console
    alert("Hello word") //แสดงการแจ้งเตือนข้อความ
}

function changealert() {
    let msg = document.getElementById("change-alert").value
    // การสร้างตัวแปร เพื่อใช้ชื่อจำลองนี้ ไปใช้งานในส่วนต่าง ๆ โดยที่ไม่ต้องไปแก้ไขในส่วนอื่น ๆ ตาม
    // คำสั่งในการดึงข้อมูลจาก HTML โดยระบุ ID มาเป้นตัวดำเนินการ
    document.getElementById("change-alert").value=""
    //เครียข้อมูลออกจากฟอร์มที่กรอกเข้ามา1
    alert(msg)
}

function changetext() {
    let msg = document.getElementById("change-text").value

    let headtext = document.getElementById("headtext")

    document.getElementById("change-text").value=""

    headtext.innerHTML = msg
    //ดึงค่าเข้ามาแสดงผล ตัว ID ที่ต้องการให้เปลี่ยนแปลงข้อมูลนั้น ๆ
}

function checkgrade(){
    let M = Number(document.getElementById("midterm").value)
    let F = Number(document.getElementById("final").value)
    let N = Number(document.getElementById("nice").value)

    document.getElementById("midterm").value=""
    document.getElementById("final").value=""
    document.getElementById("nice").value=""

    let total = M+F+N

    let T = document.getElementById("total")
    let G = document.getElementById("grade")
    if(total >= 70){
        T.innerHTML = "คะแนนรวม : " + total
        G.innerHTML = "ผลการเรียน : " + "ผ่าน"
    } else {
        T.innerHTML = "คะแนนรวม : " + total
        G.innerHTML = "ผลการเรียน : " + "ไม่ผ่าน"
    }

}