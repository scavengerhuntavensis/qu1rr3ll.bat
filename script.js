window.onload = () => {

    let correct = document.getElementById("correct");
    let mainContent = document.getElementById("mainContainer");


    document.getElementById("math").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, input);
    });
}


const checkAns = (correct, mainContent, input) => {
    if(md5(input) == "fbe322a89bc0ba531c3f0050e3935f28" || md5(input) == "72a92ae9c1d172cdda196686278fbfc6" || md5(input) == "2403def5083f02105e7802b3b315681e"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "That's correct";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "The wheel of mind spins to take you now, To get there you know the way how , How you get here is what will lead you to the clue for the end";
        }, 2000);
    }
}   