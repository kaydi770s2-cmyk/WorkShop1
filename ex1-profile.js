// ประกาศตัวแปรเก็บข้อมูลส่วนตัว
const nickname = "ปอนด์";
const studentId = "67110920";
const age = "21";
const major = "วิศวกรรมคอมพิวเตอร์";
const enrolledSubjects = "6"



// คำนวณปีที่จะจบ (ต้องระวังให้ตัวเลขเป็นประเภท Number ไม่ใช่ String)
const yearsRemaining = 2;       // ห้ามใส่เครื่องหมาย " " ครอบตัวเลข
const currentYear = 2569;       // ห้ามใส่เครื่องหมาย " " ครอบตัวเลข



// แสดงผลบัตรแนะนำตัวด้วย Template Literal
console.log (`===== บัตรแนะนำตัว =====
ชื่อเล่น      : ${nickname}
รหัสนักศึกษา  : ${studentId}
อายุ         : ${age} ปี
สาขาวิชา      : ${major}
ลงทะเบียน    : ${enrolledSubjects} วิชา
ปีที่จะจบ      : ${currentYear + yearsRemaining}
========================`);
