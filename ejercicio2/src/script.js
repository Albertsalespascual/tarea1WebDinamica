function addRow(tabla){
    const table = document.getElementById("tabla");
    let newRow = table.insertRow(0).innerHTML='<td></td><td></td><td></td><td></td>';
}
document.getElementById("añade").addEventListener("click",addRow)