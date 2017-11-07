
//绘制名字
void function drawgrid() //绘制网格
{
    var table=document.createElement("table");
    var tbody=document.createElement("tbody");
   
    table.style.borderCollapse="collapse";      
    for(var i=0;i<16;i++)
    {
        var tr=document.createElement("tr");
        for(var j=0;j<16;j++)
        {
            var td=document.createElement("td");
            var drawgrid = document.createTextNode("");
                   td.style.border = "1px solid #dfdfdf";
                   td.style.padding = "9px";
                   td.appendChild(drawgrid);
                   tr.appendChild(td);
        }
    }
}
