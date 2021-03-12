var banners = ["img/destaque.jpg", "img/destaque-2.jpg"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual +1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 3000);
