function toGrade(score) {
    if(score < 0 || score > 100) {
        console.log(`คะแนน ${score} -> คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0-100`);
        return;
    }

    let grade = '';
 if(score >= 80) {
    grade = 'A';
 }   else if(score >=75){
    grade = 'B+';
 }  else if(score >=70){
    grade = 'B';
 }  else if(score >=65){
    grade = 'C+';
 }  else if(score >=60){
    grade = 'C';
 } else if(score >=55){
    grade = 'D+';
 }  else if(score >=50){
    grade = 'D';
 }  else{
    grade = 'F';
 }
 console.log(`คะแนน ${score} -> เกรด ${grade}`);
}

const testScores = [95,80,79,75,70,65,60,55,50,49,0,-5,120];

for(const score of testScores){
    toGrade(score);
}