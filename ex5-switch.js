//ส่วนที่ 1: // สร้างฟังก์ชันเช็กราคาเมนูอาหาร
function getMenuPrice(menu){
    switch(menu){

        //จงใจใช้ fall-through รวม case เมนูที่มีราคา 50 เท่ากันเข้าด้วยกัน
        case "ข้าวผัด": // กำหนดเมนูอาหาร ข้าวผัด
        case "ข้าวมันไก่": // กำหนดเมนูอาหาร ข้าวมันไก่
        case "ข้าวหมูแดง": // กำหนดเมนูอาหาร ข้าวหมูแดง
            return 50; // ให้คืนค่าราคา 50 บาท
        case "ผัดไทย":
            return 60; // ให้คืนค่าราคา 60 บาท
        case "ต้มยำกุ้ง":
            return 120; // ให้คืนค่าราคา 120 บาท
        default:
            return 0; // ถ้าไม่มีในรายการเมนูคืนค่าไป 0 บาท

    }
}


//ส่วนที่ 2: ฟังก์ชันตัวคูณขนาดด้วย switch
// ฟังก์ชันเช็คตัวคูณตามขนาด
function getSizeMultiplier(size){
    switch(size){
        case "ธรรมดา":
            return 1; // ขนาดธรรมดาให้ x1
        case "พิเศษ":
            return 1.5; // ขนาดพิเศษให้ x1.5
        case "จัมโบ้":
            return 2; // ขนาดจัมโบ้ให้ x2
        default:
            return 1; //ขนาดอื่นๆ ให้ถือเป็นราคาปกติ 
    }
}


// ส่วนที่ 3: คำนวณราคารวมของออร์เดอร์
const orders = [
    {menu: "ผัดไทย", size: "พิเศษ", qty: 2},
    {menu: "ข้าวมันไก่", size: "ธรรมดา", qty: 1},
    {menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1},
    {menu: "ข้าวผัด", size: "พิเศษ", qty: 3},
    {menu: "ชาไทย", size: "ธรรมดา", qty: 2} //ทดสอบเมนูที่ไม่มีในรายการ (ราคา 0)
];


let grandTotal = 0; // ตัวแปรก็บราคารวมของทั้งบิล
console.log("=== รายการสั่งอาหาร ===");

// วนลูปคิดราคาอาหารแต่ละรายการใน Array orders
for (const item of orders){
    const basePrice = getMenuPrice(item.menu); // ดึงราคาเริ่มต้นของเมนู
    const multiplier = getSizeMultiplier(item.menu); // ดึงตัวคูณขนาด
    const itemTotal = getMenuPrice(item.menu) * getSizeMultiplier(item.size) * item.qty; // คำนวณในรายการอาหารนี้
    
    
    grandTotal += itemTotal; // บวกราคารายการนี้สะสมในแต่ละบิล
    
    
    // แสดงผลแต่ละรายการ
    console.log(`${item.menu} (${item.size}) x${item.qty} = ${itemTotal} บาท`);
}


console.log("---------------------------");
console.log(`ราคาทั้งสิ้น: ${grandTotal} บาท`); // แสดงราคาทั้งบิล