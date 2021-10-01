Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});
 
cam = document.getElementById("webcam");
Webcam.attach("#webcam");

function takeasnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="photo" src = "'+data_uri+'"/>';   
    });
}

console.log('ml5 version: ',ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/Tn1HTjWNJ/model.json',modelloaded);
function modelloaded(){
    console.log('modelload!');
}

function identify(){
    img = document.getElementById("photo");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    
    }
}