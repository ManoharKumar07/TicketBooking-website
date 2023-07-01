
function calc(adults,children)
{
    if(adults<0)
    {
        adults=0;
    }
    if(children<0)
    {
        children=0;
    }
    return (adults*12+children*5);
}

window.onload=function()
{
   let btn=document.getElementById("buy_Btn") ;
   btn.onclick=function()
   {
       let adults=document.getElementById("adult").value;
       let children=document.getElementById("children").value;
       let price=calc(adults,children);
       alert(price);
   }
}