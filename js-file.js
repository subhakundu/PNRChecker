function check_pnr()
{
var pnr=document.getElementById("pnr_number").value;
if(pnr=="" || isNaN(pnr))
{
 //alert("Subhasish");
 document.getElementById("description").innerHTML="Enter a valid PNR number..";
 return;
}
//var link="http://pnrapi.alagu.net/api/v1.0/pnr/"+pnr;
}
