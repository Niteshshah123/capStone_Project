const btn = document.querySelectorAll(".btnclass button");
const participant = document.querySelector("#need");
// console.log(participant.innerHTML);
let need = parseInt(participant.innerHTML);
btn.forEach((item) =>{
    item.addEventListener("click", (e)=>{
        console.log(e.target.nextElementSibling.children[0].getAttribute('id'));
        var confirmation = confirm("Do you want to proceed?");

        if (confirmation) {
        alert("Thanks for Collab. we will Notify you soon through Email")
        
        let needid= e.target.nextElementSibling.children[0].getAttribute('id');
        let data = document.getElementById(needid);
        // console.log(data.innerHTML)
        // needid.forEach((item4)=>{
        //     console.log(item4.innerHTML)
        // })
        // need = need-1;
        // console.log(need);
        let originaldata = data.innerHTML;
        originaldata -=1;
        data.innerHTML=originaldata;
        if (originaldata==0) {
            data.innerHTML="No further participate needed";
            e.target.disabled=true;
        }
        console.log(originaldata)
        // participant.innerHTML=need;
        
        } else {
        // alert("You clicked Cancel!");
    
        }
        
    })
})