(function() {

  function startup() {
      const video = document.getElementById("video");

      navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(function(stream) {
          video.srcObject = stream;
          video.play();

      })
      .catch(function(error) {
          console.log(`An error occured loading media: ${error}`)
      })
  }
 
document.addEventListener("load", startup, false);

})();


