const summary = document.getElementById('summary');
const toggleButton = document.getElementById('toggleButton');

summary.addEventListener("click", function(){
    alert('คลิกผิดจ้า ต้องคลิกด้านล่าง');
})
toggleButton.addEventListener("click", function(){
    summary.textContent = "เป้าหมายของฉันคือการสร้าง project and understand about the Full stack";
    mainTopic.textContent ="เป้าหมายของฉัน";
})

targetButton.addEventListener("click", function(){
    summary.textContent ="สามารถสร้าง web application ของตัวเองได้";
    mainTopic.textContent ="เป้าหมายหลังเรียบจบ";
})

homeButton.addEventListener("click", function(){
    summary.textContent = "ผมกำลังเข้าสู่การเป็น software developer และเริ่มต้นในการเขียน Web application";
    mainTopic.textContent ="Hello my name is Tua";
})
