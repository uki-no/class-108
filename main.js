function identify_sound(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DGNJsjwwS/model.json',modelReady)
}

function modelReady(){
 classifier.classify(gotResults)
}

function gotResults(){
    console.log("got results")
}