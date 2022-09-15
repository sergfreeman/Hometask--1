export function buildTableRow(name, created, category, content, dates) {

    //create a new row from main div
    const addPoint = document.querySelector('.div-add-table');
    const newDivElement = document.createElement('div');

    newDivElement.style.display = 'flex';
    newDivElement.style.color = 'black';
    newDivElement.style.backgroundColor = 'lightgrey';
    newDivElement.style.margin = '5px 0 0px 0';
    newDivElement.style.padding = '5px 0 5px 0';
    newDivElement.style.wordWrap = 'normal';

    newDivElement.className = name;
    newDivElement.id = name;
    addPoint.insertBefore(newDivElement, addPoint.firstChild);

    // addNewField(name, field);
    addNewField(name,);
    addNewField(name, dates);
    addNewField(name, content);
    addNewField(name, category);
    addNewField(name, created);
    addNewField(name, name);
    




    function addNewField(name, field) {
        const addPoint = document.getElementById(name);
        const newDivElement = document.createElement('div');

        newDivElement.style.textAlign = 'center';

        switch (field) {

            case name: {
                newDivElement.innerHTML = name;
                newDivElement.style.width = '20%';
                break;
            }

            case created: {
                newDivElement.innerHTML = created;
                newDivElement.style.width = '15%';
                break;
            }

            case category: {
                newDivElement.innerHTML = category;
                newDivElement.style.width = '15%';
                break;
            }

            case content: {
                newDivElement.innerHTML = content;
                newDivElement.style.width = '15%';
                break;
            }

            case dates: {
                newDivElement.innerHTML = dates;
                newDivElement.style.width = '15%';
                break;
            }

            default:{
                //create 'delete' button 
                const newBtnElement = document.createElement('button');
                //  newBtnElement.style.margin = 'auto';
                newBtnElement.style.marginLeft = '10%';
                newBtnElement.style.width = '25px';
                newBtnElement.style.height = '25px';
                newBtnElement.style.backgroundPosition = 'center';
                newBtnElement.style.background = "url('../img/recycle-bin-min.png')" ;
                newBtnElement.style.backgroundSize = 'contain';
                newBtnElement.style.backgroundRepeat = 'no-repeat';
                newBtnElement.style.border = '0';
                // newBtnElement.style.textAlign = 'right';
                // newBtnElement.style.display = 'flex';
                // newBtnElement.style.float = 'right';



                const addPoint = document.getElementById(name);
                newBtnElement.id = 'button-delete';
                addPoint.insertBefore(newBtnElement, addPoint.firstChild);

               
                newBtnElement.addEventListener('click', ()=>{
                    let tmp = document.getElementById(name);
                    tmp.remove();
                    delete(DATABASE[name]);
                    console.log(DATABASE);
                    
                });

                const newBtnElement1 = document.createElement('button');
                // newBtnElement1.style.margin = '0 5px 0 5px';
                newBtnElement.style.marginLeft = '10%';
                newBtnElement1.style.width = '25px';
                newBtnElement1.style.height = '25px';
                newBtnElement1.style.backgroundPosition = 'center';
                newBtnElement1.style.background = "url('../img/folder-min.png')" ;
                newBtnElement1.style.backgroundSize = 'contain';
                newBtnElement1.style.backgroundRepeat = 'no-repeat';
                newBtnElement1.style.border = '0';
                
                const addPoint1 = document.getElementById(name);
                newBtnElement1.id = name;
                addPoint.insertBefore(newBtnElement1, addPoint1.firstChild);

                const newBtnElement2 = document.createElement('button');
                newBtnElement2.style.margin = '0 5px 0 5px';
                newBtnElement2.style.width = '25px';
                newBtnElement2.style.height = '25px';
                newBtnElement2.style.backgroundPosition = 'center';
                newBtnElement2.style.background = "url('../img/pen-min.png')" ;
                newBtnElement2.style.backgroundSize = 'contain';
                newBtnElement2.style.backgroundRepeat = 'no-repeat';
                newBtnElement2.style.border = '0';
                
                const addPoint2 = document.getElementById(name);
                newBtnElement1.id = name;
                addPoint.insertBefore(newBtnElement2, addPoint2.firstChild);





            }

        }

        addPoint.insertBefore(newDivElement, addPoint.firstChild);
    }

}