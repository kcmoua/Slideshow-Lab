var slideshow = {
    photoList: ["photo0","photo1","photo2","photo3","photo4","photo5"],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        
        if(this.currentPhotoIndex==(this.photoList.length-1)){
            console.log("End of slideshow");
        }
        else{
            this.currentPhotoIndex++;
        console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    prevPhoto: function(){
        if(this.currentPhotoIndex==0){
            console.log("Start of slideshow");
        }
        else{
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    getCurrentPhoto: function(){
        return console.log(this.photoList[this.currentPhotoIndex]);
    }
};

slideshow.getCurrentPhoto();

slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();

// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();