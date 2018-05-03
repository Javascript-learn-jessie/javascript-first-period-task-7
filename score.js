function calScore(){
    var score=0;
    var scoreInput = document.getElementById("score");
    var q1_1 = document.getElementById("q1-1");
    var q1_2_1 = document.getElementById("q1-2-1");
    var q1_2_2 = document.getElementById("q1-2-2");
    var q1_2_3 = document.getElementById("q1-2-3");
    var q2_1 = document.getElementById("q2-1-2");
    var q2_2 = document.getElementById("q2-2-1");
    var q3_1_1 = document.getElementById("q3-1-1");
    var q3_1_2 = document.getElementById("q3-1-2");
    var q3_1_4 = document.getElementById("q3-1-4");
    var q3_2_1 = document.getElementById("q3-2-1");
    var q3_2_2 = document.getElementById("q3-2-2");
    var q3_2_3 = document.getElementById("q3-2-3");
    var q4_1 = document.getElementById("q4-1-2");
    var q4_2 = document.getElementById("q4-2-1");
    var q5 = document.getElementById("q5-1");
    var rightText = "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。";
    
    if(q1_1.value==="统一建模语言")score+=5;
    if(q1_2_1.value==="封装性")score+=5;
    if(q1_2_2.value==="继承性")score+=5;
    if(q1_2_3.value==="多态性")score+=5;
    if(q2_1.checked==true)score+=10;
    if(q2_2.checked==true)score+=10;
    if(q3_1_1.checked && q3_1_2.checked && q3_1_4.checked)score+=10;
    if(q3_2_1.checked && q3_2_2.checked && q3_2_3.checked)score+=10;
    if(q4_1.checked)score+=10;
    if(q4_2.checked)score+=10;
    if(q5.value===rightText)score+=20;
    console.log(score);
    //alert(score);
    scoreInput.value = score;
    return score;
}
