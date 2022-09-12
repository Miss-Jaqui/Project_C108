function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/t_T71_A4d/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
  }

function gotResults(error, results){
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img  = document.getElementById('caballo') 
    img1 = document.getElementById('delfin')
    img2 = document.getElementById('gato')
    img3 = document.getElementById('leon')
    img4 = document.getElementById('pajaro')
    img5 = document.getElementById('perro')

    if (results[0].label == "Relincho") {
      img.src  = 'Caballo.gif';
      img1.src = 'Delfin.jpg';
      img2.src = 'Gato.jpg';
      img3.src = 'Leon.gif.jpg';
      img4.src = 'Pajaro.jpg';
      img5.src = 'Perro.jpg';
    } 
    else if (results[0].label == "DolphinSound") {
      img.src  = 'Caballo.gif.jpg';
      img1.src = 'Delfin.gif';
      img2.src = 'Gato.jpg';
      img3.src = 'Leon.gif.jpg';
      img4.src = 'Pajaro.jpg';
      img5.src = 'Perro.jpg';
    } 
    else if (results[0].label == "Maullido") {
      img.src  = 'Caballo.gif.jpg';
      img1.src = 'Delfin.jpg';
      img2.src = 'Gato.gif';
      img3.src = 'Leon.gif.jpg';
      img4.src = 'Pajaro.jpg';
      img5.src = 'Perro.jpg';
    }
    else if (results[0].label == "Rugido") {
      img.src  = 'Caballo.gif.jpg';
      img1.src = 'Delfin.jpg';
      img2.src = 'Gato.jpg';
      img3.src = 'Leon.gif';
      img4.src = 'Pajaro.jpg';
      img5.src = 'Perro.jpg';
    }
    else if (results[0].label == "BirdSound") {
      img.src  = 'Caballo.gif.jpg';
      img1.src = 'Delfin.jpg';
      img2.src = 'Gato.jpg';
      img3.src = 'Leon.gif.jpg';
      img4.src = 'Pajaro.gif';
      img5.src = 'Perro.jpg';
    }
    else{
      img.src  = 'Caballo.gif.jpg';
      img1.src = 'Delfin.jpg';
      img2.src = 'Gato.jpg';
      img3.src = 'Leon.gif.jpg';
      img4.src = 'Pajaro.jpg';
      img5.src = 'Perro.gif';
    }
  }
}