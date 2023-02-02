const d = new Date();
let hour = d.getHours();

// Pagi
if (hour < 12 && hour >= 4) {
	document.querySelector('[icon="cloudy"]').style.display = 'block';
	document.querySelector('title').innerHTML =
		'Pagi Niken, Jangan Lupa Sarapan sama Mandi :p';
	document.querySelector('body').style.backgroundColor = '#85C8C6';
}
// Siang
if (hour < 15 && hour >= 12) {
	document.querySelector('[icon="sunny"]').style.display = 'block';
	document.querySelector('title').innerHTML = 'Siang Niken, Jangan Lupa Makan';
	document.querySelector('body').style.backgroundColor = '#B6EEF5';
}
// Sore
if (hour < 18 && hour >= 15) {
	document.querySelector('[icon="afternoon"]').style.display = 'block';
	document.querySelector('title').innerHTML =
		'Sore, Nanti hati-hati pulangnya ya!';
	document.querySelector('body').style.backgroundColor = '#85C8C6';
}
// Petang
if (hour < 21 && hour >= 18) {
	document.querySelector('[icon="snowy"]').style.display = 'block';
	document.querySelector('title').innerHTML = "Niken, how's your day?";
	document.querySelector('body').style.backgroundColor = '#48555A';
}
// Bobo
if (hour >= 21 || hour < 4) {
	document.querySelector('[icon="supermoon"]').style.display = 'block';
	document.querySelector('title').innerHTML =
		"Already sleepy? For sure it's Bobo time";
	document.querySelector('body').style.backgroundColor = '#1f2223';
}
