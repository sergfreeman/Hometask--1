import { DATABASE } from "./dataBase.js";
import { buildTableRow } from "./rowBuilder.js";




function getNumberOfRecords(obj) {
    return Object.keys(obj).length;
}



function showAllRecords(obj) {
    let element = Object.values(obj);
    let params;

    for (let arr in element) {

        params = (element[arr])
        console.log(params);
        buildTableRow(params[0], params[1], params[2], params[3], params[4]);
    }
}

//buildTableRow('Serhii', '01-01-01', 'Idea', ' I said `Hello world`', '08-11-1980');

showAllRecords(DATABASE);

 //alert('fin');