function login(inputUser, inputPass, role, isActive, age){
    if(inputUser !== "admin" || inputPass !== "ce385pass"){
        return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }

    if(isActive === false){
        return "บัญชีนี้ถูกระงับการใช้งาน"
    }

    if(age < 18){
        return "อายุไม่ถึงเกณฑ์";
    }

    if(role === "อาจารย์"){
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล)";
    }

    if(role === "นักศึกษา"){
        return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป)";
    }
    
    return "บทบาทผู้ใช้ไม่ถูกต้อง";
}

console.log("1. สำเร็จ (อาจารย์):", login("admin", "ce385pass", "อาจารย์", true, 30));
console.log("2. สำเร็จ (นักศึกษา):", login("admin", "ce385pass", "นักศึกษา", true, 20));
console.log("3. รหัสผ่านผิด:", login("admin", "wrongpass", "นักศึกษา", true, 20));
console.log("4. ชื่อผู้ใช้ผิด:", login("wronguser", "ce385pass", "อาจารย์", true, 30));
console.log("5. บัญชีผู้ใช้ถูกระงับ:", login("admin", "ce385pass", "นักศึกษา", false, 20));
console.log("6. อายุไม่ถึง", login("admin", "ce385pass", "นักศึกษา", true, 16));