/* Footers Items _ Slide & Text */
var footerOneSlide = document.getElementById("footerOneSlide");
var footerOneText = document.getElementById("footerOneText");
var footerTwoSlide = document.getElementById("footerTwoSlide");
var footerTwoText = document.getElementById("footerTwoText");
var footerThreeSlide = document.getElementById("footerThreeSlide");
var footerThreeText = document.getElementById("footerThreeText");
var footerFourSlide = document.getElementById("footerFourSlide");
var footerFourText = document.getElementById("footerFourText");
// finding
var footerStartOne = 0;
var footerTimeOne = 3000;
var footerOneArray = [];
footerOneArray[0] = "images/graphic-design.png";
footerOneArray[1] = "images/htm.png";
footerOneArray[2] = "images/css-3-book.jpg";
footerOneArray[3] = "images/bootstrap.png";
footerOneArray[4] = "images/javaS.png";
footerOneArray[5] = "images/javascript.png";
// fined Our One Data
function footerSlideOneChangeImg(){
    footerOneSlide.src = footerOneArray[footerStartOne];
    if(footerStartOne<footerOneArray.length - 1){
        footerStartOne++;
    }else{
        footerStartOne = 0;
    }
    if(footerStartOne === 1){
        footerOneText.innerHTML = "I Lerned"
    }else if(footerStartOne === 2){
        footerOneText.innerHTML = "HTML";
    }else if(footerStartOne === 3){
        footerOneText.innerHTML = "CSS";
    }
    else if(footerStartOne === 4){
        footerOneText.innerHTML = "Bootstrap";
    }else if(footerStartOne === 5){
        footerOneText.innerHTML = "JavaScript";
    }else if(footerStartOne === 0){
        footerOneText.innerHTML = "JQuery";
    }
    setTimeout("footerSlideOneChangeImg()",footerTimeOne);
}
footerSlideOneChangeImg();
// fined Our Two Data 
var footerTwoStart = 0;
var footerTwoDuration = 3000;
var footerTwoArray = [];
footerTwoArray[0] = "images/wordpress.png";
footerTwoArray[1] = "images/php.png";
footerTwoArray[2] = "images/sql.png";
footerTwoArray[3] = "images/json.png";
footerTwoArray[4] = "images/ajax.png";
function footerTwoSlideFunction(){
    footerTwoSlide.src = footerTwoArray[footerTwoStart];
    if(footerTwoStart<footerTwoArray.length - 1){
        footerTwoStart++;
    }else{
        footerTwoStart = 0;
    }
    if(footerTwoStart === 1){
        footerTwoText.innerHTML = "Wordpress"
    }else if(footerTwoStart === 2){
        footerTwoText.innerHTML = "PHP";
    }else if(footerTwoStart === 3){
        footerTwoText.innerHTML = "MySQL(DB)";
    }else if(footerTwoStart === 4){
        footerTwoText.innerHTML = "JSON";
    }else{
        footerTwoText.innerHTML = "AJAX";
    }
    setTimeout("footerTwoSlideFunction()", footerTwoDuration);
}
footerTwoSlideFunction();
// footer Our Three Data 
var footerThreeStart = 0;
var footerThreeDuration = 3000;
var footerThreeArray = [];
footerThreeArray[0] = "images/speed.png";
footerThreeArray[1] = "images/soci.png";
footerThreeArray[2] = "images/social.png";
footerThreeArray[3] = "images/images (2).jpeg";
footerThreeArray[4] = "images/website-forfolio.jpg";
footerThreeArray[5] = "images/webFooter.png";
footerThreeArray[6] = "images/webFinix.jpg";
footerThreeArray[7] = "images/foodWeb.jpeg";
footerThreeArray[8] = "images/website-forfolio.jpg";
footerThreeArray[9] = "images/responsive.png";
footerThreeArray[10] = "images/christmas.jpg";
function footerThreeFunctionChange(){
    footerThreeSlide.src = footerThreeArray[footerThreeStart];
    if(footerThreeStart<footerThreeArray.length - 1){
        footerThreeStart++;
    }else{
        footerThreeStart = 0;
    }
    if(footerThreeStart){
        footerThreeText.innerHTML = "Services";
    }
setTimeout("footerThreeFunctionChange()",footerThreeDuration);
}
footerThreeFunctionChange();
// footer Our Four
var footerFourStart = 0;
var footerFourDuration = 4000;
var footerFourArray = [];
footerFourArray[0] = "images/maps-and-flags.png";
footerFourArray[1] = "images/telemarketer.png";
footerFourArray[2] = "images/email-icon-117.png";
footerFourArray[3] = "images/email-icon-104.png";
footerFourArray[4] = "images/twitter-icon-79.png";
footerFourArray[5] = "images/facebook.png";
footerFourArray[6] = "images/worldwide.jpeg";
function footerFourFunction(){
    footerFourSlide.src = footerFourArray[footerFourStart];
    if(footerFourStart<footerFourArray.length - 1){
        footerFourStart++;
    }else{
        footerFourStart = 0;
    }
    if(footerFourStart){
        footerFourText.innerHTML = "Contact Us"
    }
    setTimeout("footerFourFunction()",footerFourDuration);
}
footerFourFunction();