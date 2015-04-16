$(document).ready(function() {
var stranica = (window.location.pathname).split("/");




// SLIDESHOW ==========================================================================

// Slide show images input
if (stranica[stranica.length - 1] === "#page2") {
	var slideshow = document.getElementById('slideshow');
	var slika0 = document.createElement('div');
	slika0.setAttribute('id', "slideshow-slika-0");
	slika0.setAttribute('class', "slideShowSlika cf slika-centar");
	slika0.style.background = "url('img/web-design/slide1.jpg') center center no-repeat";
	slika0.style.backgroundSize="contain";
	slika0.style.width="70%"
	slideshow.appendChild(slika0);

	var slika1 = document.createElement('div');
	slika1.setAttribute('id', "slideshow-slika-1");
	slika1.setAttribute('class', "slideShowSlika cf slika-desno");
	slika1.style.background = "url('img/web-design/slide2.jpg') center center no-repeat";
	slika1.style.backgroundSize="contain";
	slika1.style.width="70%"
	slideshow.appendChild(slika1);
	
	var slika2 = document.createElement('div');
	slika2.setAttribute('id', "slideshow-slika-2");
	slika2.setAttribute('class', "slideShowSlika cf slika-desno");
	slika2.style.background = "url('img/web-design/slide3.jpg') center center no-repeat";
	slika2.style.backgroundSize="contain";
	slika2.style.width="70%"
	slideshow.appendChild(slika2);

	var slika3 = document.createElement('div');
	slika3.setAttribute('id', "slideshow-slika-3");
	slika3.setAttribute('class', "slideShowSlika cf slika-desno");
	slika3.style.background = "url('img/web-design/slide4.jpg') center center no-repeat";
	slika3.style.backgroundSize="contain";
	slika3.style.width="70%"
	slideshow.appendChild(slika3);	
};


// creating slideshow
if(stranica[stranica.length - 1] === "" || stranica[stranica.length - 1 ] === "#page2") {

	var trenutnaSlika = 0;
	var pomocnaSlika;
	var pomocnaSlikaDva;
	var intervalPromjene = setInterval(function(){mijenjajSliku(1);}, 5000);
	function kreni(){
		intervalPromjene;
	}
	window.onload = kreni;

	function mijenjajSliku(smjerSlika){
		pomocnaSlika = trenutnaSlika;
		trenutnaSlika += smjerSlika;

		if(trenutnaSlika < 0){
			trenutnaSlika = document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length - 1;
		}

		if(trenutnaSlika >= document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length){
			trenutnaSlika = 0;
		}

		if(smjerSlika === -1){
			if( document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length > 2){
				pomocnaSlikaDva = pomocnaSlika - 2;
				if(pomocnaSlikaDva < 0){
					pomocnaSlikaDva +=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length
				}
			}
		}
		if(smjerSlika === 1){
			if( document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length > 2){
				pomocnaSlikaDva = pomocnaSlika + 2;
				if(pomocnaSlikaDva >=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length){
					pomocnaSlikaDva -=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length;
				}
			}
		}

		for(var i = 0; i <  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length; i++){
			if(i < trenutnaSlika){
				document.getElementById('slideshow-slika-' + i).className = "slideShowSlika cf slika-desno";
			}
			else if(i > trenutnaSlika){
				document.getElementById('slideshow-slika-' + i).className = "slideShowSlika cf slika-desno";
			}
		}
		document.getElementById('slideshow-slika-' + trenutnaSlika).className = "slideShowSlika cf slika-centar";
	}

	function prikaziSliku(index){
		trenutnaSlika = index;
		pomocnaSlika = trenutnaSlika + 1;
		clearInterval(intervalPromjene);

		if(pomocnaSlika >=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length){
			pomocnaSlika -=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length;
		}

		if( document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length > 2){
			pomocnaSlikaDva = pomocnaSlika - 2; 
			if(pomocnaSlikaDva < 0){
				pomocnaSlikaDva +=  document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length;
			}
		}

		for(var i = 0; i < document.getElementById('slideshow').getElementsByClassName('slideShowSlika').length; i++){
			if(i < index){
				document.getElementById('slideshow-slika-' + i).className = "slideShowSlika cf slika-desno";
			}
			else if(i > index){
				document.getElementById('slideshow-slika-' + i).className = "slideShowSlika cf slika-desno";
			}
		}
		document.getElementById('slideshow-slika-' + trenutnaSlika).className = "slideShowSlika cf slika-centar";
		intervalPromjene = setInterval(function(){mijenjajSliku(1);}, 5000);
	}
}
}