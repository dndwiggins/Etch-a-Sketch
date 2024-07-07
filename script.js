
const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {

    var outerBox = document.createElement("div");

    container.appendChild(outerBox);

    outerBox.className = "outerBox";


    for (let j = 0; j < 16; j++) {
        var innerBox = document.createElement("div");

        outerBox.appendChild(innerBox);

        innerBox.className = "innerBox";

        innerBox.id = "innerBox";

    }



}

//how to address each individual innerBox, but not all at sametime?

const boxes = document.querySelectorAll("#innerBox"); //boxes = nodelist


for (let i = 0; i < boxes.length; i++) { //can loop over node list and set indivdual to a box at i
    let box = boxes[i];

    box.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
    });

}


