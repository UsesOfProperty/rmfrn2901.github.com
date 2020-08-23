
function array1(){ //추가
  
    var input = document.getElementById("text_0").value; 
            var listplus = document.createElement("li"); 
            listplus.innerText = document.querySelectorAll('li').length+1　+ '.' +input;
            
            var asd =document.getElementById("inlist").appendChild(listplus); 
            
            var asdf=document.querySelector('#text_1').value;
}




function btnfunc(){ //삭제
        
        var asdf=document.querySelector('#text_1').value;
        
        var len=document.querySelectorAll('li').length;
        parseInt(asdf);
        if((asdf-1<len)&&(asdf>0)){
        var listNode=document.getElementById("inlist");
        listNode.removeChild(listNode.childNodes[asdf]);
       
        }
        else{
                alert("잘못된 입력");
        }
}