function fillHeart() {
    var currentImg = document.getElementById("likeimg").src;
        if (currentImg.endsWith("img/empty-heart.svg")){
            //currentImg.src = "../img/filled-heart.svg"; ça marche po
            document.getElementById("likeimg").setAttribute("src","../img/filled-heart.svg");
        } else {
            // currentImg.src = "../img/empty-heart.svg"; ça marche po
            document.getElementById("likeimg").setAttribute("src","../img/empty-heart.svg");
        }
    };

// notation étoiles
/*
const NbStar = 5;
const StarBaseId = 'star';	

const LgtStarBaseId=star.lastIndexOf('');

 function nameTheStar(star){
    StarNb=star.slice(LgtStarBaseId);
	return(StarNb);
}

function StarOver(star) {
	StarNb=Name2Nb(star);
	for (i=0;i<StarNb;i++) {
		document.getElementById('star'+i).src="../img/filled-star.svg";
	}
}

function StarOut(star) {
	StarNb=Name2Nb(star);
	for (i=0;i<(StarNb);i++) {
		document.getElementById('star'+i).src="../img/empty-star.svg";
	}
}

function note(){
    for (i=0;i<NbStar;i++) {
		var img = document.getElementById('star'+i);
			
    	img.onclick	= function note() {
            var currentStar = document.getElementById("star"+i).src;
        if (currentStar.endsWith("img/empty-star.svg")){
            //currentImg.src = "../img/filled-heart.svg"; ça marche po
            document.getElementById("star"+i).setAttribute("src","../img/filled-star.svg");
        } else {
            // currentImg.src = "../img/empty-heart.svg"; ça marche po
            document.getElementById("star"+i).setAttribute("src","../img/empty-star.svg");
        }
        };
	
		/*
		img.src = "../img/empty-star.svg";
		img.onmouseover	=function() {StarOver(this.id);};
		img.onmouseout	=function() {StarOut(this.id);};
	}
};

function fillStars() {
    var currentStar = 
    var stars = document.getElementsByClassName("star");
    for (let i=0 ; i<stars.length ; i++){
        currentStar =
    }
}*/