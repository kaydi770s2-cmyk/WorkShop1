// ส่วนที่ 1 — สร้างตัวแปร 6 ชนิดและแสดงผล
// ประกาศตัวแปร 6 ชนิดข้อมูลพื้นฐาน
const str = "สวัสดี"; // ชนิด String
const num = 42; // ชนิด Number
const bool = true; // ชนิด Boolean
let undef; // ชนิด Undefild
const emptyValue = null; // ชนิด Null
const arr = [1, 2, 3]; // ชนิด Array

// แสดงผล "ค่า" คู่กับ "ชนิดข้อมูล" โดยใช้ typeof เช็กค่าข้อมูลอัตโนมัติ 
console.log(`ค่า: ${str} | ชนิด: ${typeof str}`); // แสดงการทำงาน และกำหนด ค่าและชนิดเท่ากับ (Str) โดยใช้ "Typeof" ↓
console.log(`ค่า: ${num} | ชนิด: ${typeof num}`);
console.log(`ค่า: ${bool} | ชนิด: ${typeof bool}`);
console.log(`ค่า: ${undef} | ชนิด: ${typeof undef}`);
console.log(`ค่า: ${emptyValue} | ชนิด: ${typeof emptyValue}`);
console.log(`ค่า: ${arr} | ชนิด: ${typeof arr}`);
console.log("----------------------------------------");


// ส่วนที่ 2 — ตอบคำถามด้วยโค้ดออกทาง console
// 1. typeof null ได้ผลลัพธ์อะไร ถูกต้องหรือไม่
console.log(`1 typeof null ได้ผลว่า: ${typeof null}`);
console.log(`ถูกต้องหรือไม่: ไม่ถูกต้องตามหลักทฤษฎี (เป็น Bug เก่าแก่ของ Js จริงๆ Null เป็น Primitive value ไม่ใช่ object)`);


// 2. ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า มีชนิดอะไร
let unassignedVar;
console.log(`2. ตัวแปรที่ยังไม่กำหนดค่า มีชนิดเป็น: ${typeof unassignedVar}`);


// 3. typeof NaN ได้ผลว่าอะไร
const notANumber = Number("abc"); // สร้าง NaN โดยการแปลงข้อความ "abc" เป็นตัวเลข
console.log(`3. typeof NaN ได้ผลว่า: ${typeof notANumber} (ค่าของตัวแปรคือ: ${notANumber})`);
console.log("----------------------------------------");



// ส่วนที่ 3 — การแปลงชนิดข้อมูล (Type Conversion)
const inputAge = "20";
const inputScore = "88.5";

// แปลง inputAge เป็นตัวเลขแล้วบวก 5
const ageNum = Number(inputAge); // แปลง "20" (Str) เป็น 20 (Num)
console.log(`ผลบวกอายุ (20+5): ${ageNum + 5}`); // คำนวณ 20 + 5 = 25 (ถ้าไม่แปลงข้อความจะเป็น 205 มันจะต่อกัน)

// แปลง inputScore และแสดงผลทศนิยม 1 ตำแหน่ง
const scoreNum = Number(inputScore); // แปลง "85.5" (Str) เป็น 85.5 (Num)
console.log(`คะแนนทศนิยม 1 ตำแหน่ง: ${scoreNum.toFixed(1)}`); // ใช้ .toFixed(1) จัดฟอร์มทศนิยม

// เปรียบเทียบความต่างระหว่าง inputAge === 20 กับ Number(inputAge) === 20
console.log(`inputAge === 20 ผลลัพธ์: ${inputAge === 20} (เพราะ 20 เป็น String ไม่ใช่ Number)`); // ได้ false เพราะการเทียบ 20 (Str) เป็น 20 (Num)
console.log(`Number(inputAge) === 20 ผลลัพธ์คือ: ${Number(inputAge) === 20} (เพราะแปลง 20 เป็น Number 20 แล้ว)`);