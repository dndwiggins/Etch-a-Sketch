
const container = document.querySelector("#container");

var size = 16;

create(size);

color();

const reSizeBtn = document.querySelector("#btn");

reSizeBtn.addEventListener("click", reSize);



//how to address each individual innerBox, but not all at sametime?






function reSize() {

    var resp = Number(window.prompt("Enter Number Size"));

    var number = 10;

    //use single quotes for type of and use !==

    console.log(typeof resp);

    if (resp == 0 || typeof resp !== 'number' || resp > 100) {

        if (resp == 0) {
            alert("Can't be zero bruh");
        }

        alert("You have to enter number (Max is 100)");
        return;

    }

    const outerBoxes = document.querySelectorAll("#outerBox");

    const innerBoxes = document.querySelectorAll("#innerBox");


    for (let i = 0; i < outerBoxes.length; i++) {

        let outerBox = outerBoxes[i];

        outerBox.firstChild.remove();


    }

    while (container.firstChild) {
        container.firstChild.remove();
    }


    create(resp);

    color();



}

function create(size) {

    for (let i = 0; i < size; i++) {

        var outerBox = document.createElement("div");

        container.appendChild(outerBox);

        outerBox.className = "outerBox";


        for (let j = 0; j < size; j++) {
            var innerBox = document.createElement("div");

            outerBox.appendChild(innerBox);

            innerBox.className = "innerBox";

            innerBox.id = "innerBox";

        }



    }
}


function color() {
    const boxes = document.querySelectorAll("#innerBox"); //boxes = nodelist


    for (let i = 0; i < boxes.length; i++) { //can loop over node list and set indivdual to a box at i
        let box = boxes[i];

        box.addEventListener("mouseover", function (e) {

            //add random function for multicolor 

            var randomColor = Math.floor(Math.random() * 16777215).toString(16);

            e.target.style.background = "#" + randomColor;
        });
    }
}