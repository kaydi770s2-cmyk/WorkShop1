//===============================================
// ส่วนที่ 1 — ค่าคงที่เกณฑ์วิชา & คะแนนดิบ
//===============================================


// ตัวเลขเกณฑ์คงที่
const MAX_WORKSHOP_RAW = 60;
const WORKSHOP_WEIGHT = 20;
const MAX_TOTAL_SCORE = 100;
const TRAGET_SCORE = 80;


// คะแนนดิบของนักศึกษา
const workshopRaw = 48; 
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;



//===============================================
// ส่วนที่ 2 — คำนวณคะแนนตามสูตร CE385
//===============================================


// แปลงคะแนน Workshop ตามสูตร: (คะแนนดิบ ÷ 60) × 20
const workshopWeight = (workshopRaw / MAX_WORKSHOP_RAW) * WORKSHOP_WEIGHT;


// คำนวณคะแนนรวมทั้งหมด
const totalScore = workshopWeight + attendance + project + midterm + final;


// คำนวณเปอร์เซ็นต์ และ คะแนนที่ขาดอีกถึงเกณฑ์ 80
const percentage = (totalScore / MAX_TOTAL_SCORE) *100;
const pointNeeded = TRAGET_SCORE - totalScore;



//===============================================

// ส่วนที่ 3 — แสดงผลใบสรุปคะแนน

//===============================================



console.log(`ใบสรุปคะแนนวิชา CE385
คะแนน Workshop (แปลงแล้ว) : ${workshopWeight.toFixed(2)} / ${WORKSHOP_WEIGHT}
คะแนนเข้าเรียน (Attendance)  : ${attendance.toFixed(2)}
คะแนนโปรเจกต์ (Project)      : ${project.toFixed(2)}
คะแนนสอบกลางภาค (Midterm)   : ${midterm.toFixed(2)}
คะแนนสอบปลายภาค (Final)     : ${final.toFixed(2)}
--------------------------------
คะแนนรวมทั้งหมด             : ${totalScore.toFixed(2)} / ${MAX_TOTAL_SCORE}
คิดเป็น                   : ${percentage.toFixed(2)}%
คะแนนที่ขาดอีกถึงเกณฑ์ 80 คะแนน : ${pointNeeded.toFixed(2)} คะแนน`);