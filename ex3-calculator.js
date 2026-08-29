// ส่วนที่ 1 — ค่าคงที่เกณฑ์วิชา & คะแนนดิบ
// เก็บตัวเลขเกณฑ์ไว้ใน const และตั้งชื่อให้สื่อความหมาย
const MAX_WORKSHOP_RAW = 60; // คะแนนเต็มของ Workshop 60 คะแนน
const WORKSHOP_WEIGHT = 20; // คะแนนเต็มของ Workshop รายวิชา 20 คะแนน
const MAX_TOTAL_SCORE = 100; // คะแนนเต็มรวมทุกวิชา 100 คะแนน
const TRAGET_SCORE = 80; // เป้าของคะแนนสำหรับ A


// ส่วนที่ 2 — ประกาศตัวแปรเก็บคะแนนดิบของนักศึกษา
// คะแนนดิบของนักศึกษา
const workshopRaw = 48; // คะแนนดิบ Workshop 48 คแนน ->(เต็ม 60)
const attendance = 9; // คะแนนเข้าเรียน 9 คะแนน
const project = 17; // คะแนนโปรเจกต์ 17 คะแนน
const midterm = 15; // คะแนนมิดเทอม 15 คะแนน
const final = 24; // คะแนนปลายภาค 24 คะแนน



// ส่วนที่ 3 — คำนวณคะแนนตามสูตร CE385
// แปลงคะแนน Workshop ตามสูตร: (คะแนนดิบ ÷ 60) × 20
// คำนวณคะแนนรวมทั้งหมด
// คำนวณเปอร์เซ็นต์ และ คะแนนที่ขาดอีกถึงเกณฑ์ 80

const workshopWeight = (workshopRaw / MAX_WORKSHOP_RAW) * WORKSHOP_WEIGHT;
const totalScore = workshopWeight + attendance + project + midterm + final;
const percentage = (totalScore / MAX_TOTAL_SCORE) *100;
const pointNeeded = TRAGET_SCORE - totalScore;

// ส่วนที่ 4 — แสดงผลใบสรุปคะแน
// ใช้ .toFixed(2) จัดฟอร์แมตทศนิยม 2 ตำแหน่งตอนแสดงผลออกทางหน้าจอ
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