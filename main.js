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
     classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IKk7KI68a/model.json",modelReady);
    
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
        synth.speak(utterThis)
    }