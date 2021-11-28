Webcam.set({
    height:300,
    width:400,
    image_format:"jpeg",
    jpeg_quality:100,
    crop_height:300,
    crop_width:400
    
    });
     camera = document.getElementById("camera");
    
     Webcam.attach(camera);
    
     function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
                        
    })
     }
    
     console.log("ml5_version ="+ml5.version);
     classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/b8MoxR3Gx/model.json",modelReady);
    
     function modelReady(){
    console.log("Model Ready");
    }
    
    prediction_1="";
    prediction_2="";
    
    function speak(){
        synth = window.speechSynthesis;
        speak_data1 = "The first prediction is"+prediction_1;
        speak_data2 =  "The second prediction is"+prediction_2;
        utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
          utterThis.rate = 0.85;
        synth.speak(utterThis)
    }
    function predictemotion() {
        img = document.getElementById("captured_image");
        classifier.classify(img, gotResults);
    }





    function gotResults(error, results) {
        if (error) {
            console.log(error);
        } else {
            console.log(results);
            document.getElementById("predict1").innerHTML = "Prediction 1- " + results[0].label;
            document.getElementById("predict2").innerHTML = "Prediction 2- " + results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();  

            if (prediction_1 == "Waving") {
            document.getElementById("update_emoji1").innerHTML = "&#9995;";
        }

        if (prediction_1 == "Bird") {
            document.getElementById("update_emoji1").innerHTML = "&#128080;";
        }
        if (prediction_1 == "Clapping") {
            document.getElementById("update_emoji1").innerHTML = "&#128079;";
        }

        if (prediction_1 == "Writing") {
            document.getElementById("update_emoji1").innerHTML = "&#9997;";
        }

        if (prediction_1 == "Balled up Hand") {
            document.getElementById("update_emoji1").innerHTML = "&#9994;";
        }


        if (prediction_2 == "Waving") {
            document.getElementById("update_emoji2").innerHTML = "&#9995;";
        }

        if (prediction_2 == "Bird") {
            document.getElementById("update_emoji2").innerHTML = "&#128080;";
        }
        if (prediction_2 == "Clapping") {
            document.getElementById("update_emoji2").innerHTML = "&#128079;";
        }

        if (prediction_2 == "Writing") {
            document.getElementById("update_emoji2").innerHTML = "&#9997;";
        }

        if (prediction_2 == "Balled up Hand") {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        }



        }


    }  
