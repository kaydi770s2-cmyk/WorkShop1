//ส่วนที่ 1: ฟังก์ชันดึงราคาเมนูด้วย switch (พร้อม fall-through)
function getMenuPrice(menu){
    switch(menu){
        //จงใจใช้ fall-through รวม case เมนูที่มีราคา 50 เท่ากันเข้าด้วยกัน
        case "ข้าวผัด":
        case "ข้าวมันไก่":
        case "ข้าวหมูแดง":
            return 50;
        case "ผัดไทย":
            return 60;
        case "ต้มยำกุ้ง":
            return 120;
        default:
            return 0;

    }
}


//ส่วนที่ 2: ฟังก์ชันตัวคูณขนาดด้วย switch
function getSizeMultiplier(size){
    switch(size){
        case "ธรรมดา":
            return 1;
        case "พิเศษ":
            return 1.5;
        case "จัมโบ้":
            return 2;
        default:
            return 1; //ขนาดอื่นๆ ให้ถือเป็นราคาปกติ (1)
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


let grandTotal = 0;
console.log("=== รายการสั่งอาหาร ===");


for (const item of orders){
    const basePrice = getMenuPrice(item.menu);
    const multiplier = getSizeMultiplier(item.menu);
    const itemTotal = getMenuPrice(item.menu) * getSizeMultiplier(item.size) * item.qty;
    grandTotal += itemTotal;

    console.log(`${item.menu} (${item.size}) x${item.qty} = ${itemTotal} บาท`);
}


console.log("---------------------------");
console.log(`ราคาทั้งสิ้น: ${grandTotal} บาท`);