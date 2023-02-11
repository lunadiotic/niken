const d = new Date();
let hour = d.getHours();

// Pagi
if (hour < 12 && hour >= 4) {
	document.querySelector('[icon="cloudy"]').style.display = 'block';
	document.querySelector('body').style.backgroundColor = '#85C8C6';
	document.querySelector('#greeting').style.color = 'dimgray';
	let greetings = [
		'<p>Pagi, Pagi, Pagi...</p>',
		"<p>Niken, How's your sleep?</p>",
		'<p>Iken...</p>^1000<p>Banguuuun...</p>',
		'<p>Niken..</p>^1000<p>Siap-siap subuhanya.</p>',
		'<p>Pagi..</p>^1000<p>Moga pagimu seindah pesonamu.</p>',
		'<p>Are you my morning coffee?</p>^1000<p>Because you fill me with energy.</p>',
		'<p>Gak suka sih bangun pagi..</p>^1000<p>Tapi kalo buat liat kamu jadi pengen buru-buru.</p>',
		"<p>If you were a worm, I'd be a bird.</p>^1000<p>The early bird gets the worm.</p>",
		'<p>Ko hari ini cerah ya?</p>^1000<p>atau karena senyuman kamu doang? Ckckc..</p>',
		'<p>Eh ko kaya masih mimpi sih, masih liat ada senyum kamu?</p>',
		"<p>You wanna know what's beautiful? Read the first word again.</p>",
	];
	new Typed('#greeting', {
		strings: [greetings[Math.floor(Math.random() * greetings.length)]],
		typeSpeed: 40,
		fadeOut: true,
		loop: false,
	});
}
// Siang
if (hour < 15 && hour >= 12) {
	document.querySelector('[icon="sunny"]').style.display = 'block';
	document.querySelector('body').style.backgroundColor = '#B6EEF5';
	document.querySelector('#greeting').style.color = 'dimgray';
	let greetings = [
		'<p>Siang Niken,</p><p>Jangan lupa makan.</p>',
		'<p>Terik gak terik</p><p>Jangan lupa minum yg cukup.</p>',
		'<p>Iken</p><p>Kalo ngantuk, peregangan dulu.</p>',
		'<p>Lensa photocromic gue suka jadi item kalo liat kamu. Too shining...</p>',
		'<p>Niken..</p><p>Jangan lupa sholat ya kalo gak halangan.</p>',
		'<p>Kalo siang pengennya minum terus.</p>^1000<p>Kalo pulang, maunya kamu :p.</p>',
	];
	new Typed('#greeting', {
		strings: [greetings[Math.floor(Math.random() * greetings.length)]],
		typeSpeed: 40,
		fadeOut: true,
		loop: false,
	});
}
// Sore
if (hour < 18 && hour >= 15) {
	document.querySelector('[icon="afternoon"]').style.display = 'block';
	document.querySelector('body').style.backgroundColor = '#85C8C6';
	document.querySelector('#greeting').style.color = 'dimgray';
	let greetings = [
		'<p>Yok bisa yok</p>^1000<p>Tanggung sebentar lagi pulaaang.</p>',
		'<p>Iken</p>^1000<p>Pulangnya nanti hati-hati ya...</p>',
		'<p>Leave me a smile just warm enough to spend a million golden hour in afternoon.</p>',
	];
	new Typed('#greeting', {
		strings: [greetings[Math.floor(Math.random() * greetings.length)]],
		typeSpeed: 40,
		fadeOut: true,
		loop: false,
	});
}
// Petang
if (hour < 21 && hour >= 18) {
	document.querySelector('[icon="snowy"]').style.display = 'block';
	document.querySelector('body').style.backgroundColor = '#48555A';
	let greetings = [
		'<p>...</p>^2000<p>Suka ngeteh atau cuma duduk diteras buat nyantai gak?</p>',
		'<p>Santuy dulu sabi kali Niken</p><p>Sambil scroll-scroll postingan kucing.</p>',
		'<p>Iken</p>^2000<p>Isyaan udah?</p>',
		'<p>Hari ini lancar kan Niken?</p>',
		'<p>Gak sabar pengen liat glowingmu lagi besok hari.</p>',
	];
	new Typed('#greeting', {
		strings: [greetings[Math.floor(Math.random() * greetings.length)]],
		typeSpeed: 40,
		fadeOut: true,
		loop: false,
	});
}
// Bobo
if (hour >= 21 || hour < 4) {
	document.querySelector('[icon="supermoon"]').style.display = 'block';
	document.querySelector('body').style.backgroundColor = '#1f2223';
	let greetings = [
		'<p>Terima kasih atas kerja kerasnya hari ini, Niken.</p>',
		'<p>Udah ngantuk?</p>^1000<p>Moga tidurnya berkualitas malam ini.</p>',
		'<p>Niken...</p>^1000<p>Kalo tengah malem masih bangun, besok lemes ntar.</p>',
		'<p>Sleep tight, Niken.</p>',
		"<p>Don't miss me already. ^1000 We'll meet soon. :p</p>",
		"<p>Even if there wasn't gravity on Earth, I'd still fall for you. Night.</p>",
	];
	new Typed('#greeting', {
		strings: [greetings[Math.floor(Math.random() * greetings.length)]],
		typeSpeed: 40,
		fadeOut: true,
		loop: false,
	});
}
