
const container = document.querySelector("#container");


for (let i = 0; i < 16; i++) {

    var outerBox = document.createElement("div");

    container.appendChild(outerBox);

    outerBox.className = "outerBox";


    for (let j = 0; j < 16; j++) {
        var innerBox = document.createElement("div");

        outerBox.appendChild(innerBox);

        innerBox.className = "innerBox";

    }


}