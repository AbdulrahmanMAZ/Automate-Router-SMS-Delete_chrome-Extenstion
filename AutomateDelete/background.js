let stopStatus = false;
let btn = document.getElementById('delete');
let stopp = document.getElementById('stop');
let loop;
let counter = 0
btn.addEventListener('click',()=>{
        if (counter == 0 ) {
   stopStatus = true;
   counter+=1;
   loop =  setInterval(function () {
    
        strtDeleting()
    },500); 
    }
})

stopp.addEventListener('click',()=>{
       if (counter == 1) {
        counter-=1;
    stopStatus = false;
    clearInterval(loop)
    // stopDeleting()
}
}) 




  
function strtDeleting() {
    
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        
        
        chrome.scripting.executeScript({
          target: {tabId: tab.id},

          func: deleting,
        });
      })();
      
}
    function deleting() {        
        document.getElementById("sms_check_all").click();
        document.getElementById("del_msg_btn").click();
        document.getElementById("pop_confirm").click(); 
        }


