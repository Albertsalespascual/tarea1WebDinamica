function addRow(){
    const newRow = document.createElement('tr');
    document.getElementById('tabla').appendChild(newRow)
    .innerHTML='<td></td><td></td><td></td><td></td>'
}
document.getElementById("añade").addEventListener("click",addRow)