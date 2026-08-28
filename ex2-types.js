//===============================================

// ส่วนที่ 1 — สร้างตัวแปร 6 ชนิดและแสดงผล

//===============================================



// ประกาศตัวแปร 6 ชนิดข้อมูลพื้นฐาน
const str = "สวัสดี";
const num = 42;
const bool = true;
let undef;
const emptyValue = null;
const arr = [1, 2, 3];


// แสดง ค่า คู่กับ ชนิด โดยใช้ typeof ในการดึงชนิดข้อมูล (ห้ามพิมพ์ตายตัว)
console.log(`ค่า: ${str} | ชนิด: ${typeof str}`);
console.log(`ค่า: ${num} | ชนิด: ${typeof num}`);
console.log(`ค่า: ${bool} | ชนิด: ${typeof bool}`);
console.log(`ค่า: ${undef} | ชนิด: ${typeof undef}`);
console.log(`ค่า: ${emptyValue} | ชนิด: ${typeof emptyValue}`);
console.log(`ค่า: ${arr} | ชนิด: ${typeof arr}`);

console.log("----------------------------------------");



//===============================================

// ส่วนที่ 2 — ตอบคำถามด้วยโค้ดออกทาง console

//===============================================



// 1. typeof null
console.log(`1 typeof null ได้ผลว่า: ${typeof null}`);
console.log(`ถูกต้องหรือไม่: ไม่ถูกต้องตามหลักทฤษฎี (เป็น Bug เก่าแก่ของ Js จริงๆ Null เป็น Primitive value ไม่ใช่ object)`);


// 2. ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า
let unassignedVar;
console.log(`2. ตัวแปรที่ยังไม่กำหนดค่า มีชนิดเป็น: ${typeof unassignedVar}`);


// 3. typeof NaN
const notANumber = Number("abc");
console.log(`3. typeof NaN ได้ผลว่า: ${typeof notANumber} (ค่าของตัวแปรคือ: ${notANumber})`);

console.log("----------------------------------------");



//===============================================

// ส่วนที่ 3 — การแปลงชนิดข้อมูล (Type Conversion)

//===============================================




const inputAge = "20";
const inputScore = "88.5";


// แปลง inputAge เป็นตัวเลขแล้วบวก 5
const ageNum = Number(inputAge);
console.log(`ผลบวกอายุ (20+5): ${ageNum + 5}`);


// แปลง inputScore และแสดงผลทศนิยม 1 ตำแหน่
const scoreNum = Number(inputScore);
console.log(`คะแนนทศนิยม 1 ตำแหน่ง: ${scoreNum.toFixed(1)}`);


// เปรียบเทียบความต่างระหว่าง inputAge === 20 กับ Number(inputAge) === 20
console.log(`inputAge === 20 ผลลัพธ์: ${inputAge === 20} (เพราะ 20 เป็น String ไม่ใช่ Number)`);
console.log(`Number(inputAge) === 20 ผลลัพธ์คือ: ${Number(inputAge) === 20} (เพราะแปลง 20 เป็น Number 20 แล้ว)`);