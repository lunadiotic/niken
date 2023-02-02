const paperText = document.querySelector('.paper-text');
let index = 0;

function randomGreeting() {
	const greetings = [
		'My mom told me not to talk to strangers online, but I’ll make an exception for you',
		'Not to be cheesy, but oh my god you’re gorgeous!',
		'My sweet tooth has been driving me crazy since the second I saw your profile!',
		'I had this awesome pickup line, but I forgot it the moment I laid eyes on you.',
		'I tripped while looking at you. I guess you owe me a new pair of shoes.',
		"I had the best pickup line on the way, but I saw you and now I'm speechless.",
		'If you were a fruit, you’d be a fineapple. Ba dum tss.',
		'I assumed happiness started with an ‘H’ but I believe it actually starts with ‘U.’',
		'Are you my appendix? ‘Cuz this feeling in my stomach makes me want to take you out.',
		'On a scale of 1 to 10, you’re a 9, and I’m the 1 you need.',
		'Are you a fruit ‘cuz we could make a great pear.',
		'Are you a time traveler? ‘Cuz I see you in my future.',
		'Do you like bagels? Because you’re bae goals.',
		'Roses are red, violets are blue, how did I get so lucky to match with you?',
		'Do you watch Star Wars? Because Yoda only one for me.',
		'Hi, my name is [insert your name], but you can call me tonight or tomorrow.',
		'I’m no organ donor but I’d be happy to give you my heart.',
		'Are you a bank loan? ‘Cuz you have my interest.',
		'Life without you is like a broken pencil… pointless.',
		'Are you religious? ‘Cuz you’re the answer to all of my prayers.',
		'I must be in a museum because you truly are a work of art.',
		'Let’s commit the perfect crime. I’ll steal your heart, you steal mine.',
		'Even if there was no gravity on Earth, I’d still fall for you.',
		'Well, here I am! What are your other two wishes?',
		'They say dating is a numbers game, so can I get yours?',
		'Are you a magician? ‘Cuz when I look at you, everyone else disappears.',
		'Do you know what the Little Mermaid and I have in common? We both want to be a part of your world.',
		'I’d like to take you to the movies, but they don’t let you bring in your own snacks.',
		'Titanic? That’s my icebreaker. What’s up?',
		'I hope you know CPR ‘cuz you just took my breath away!',
		'I’m going to complain to Spotify about you not being in this week’s hottest singles.',
		'I am not a photographer, but I can easily picture us together.',
		'Kiss me if I’m wrong, but dinosaurs still exist, right?',
		'Hey, you’re pretty and I’m cute. Together we’d be pretty cute',
		'I would flirt with you, but I’d rather seduce you with my awkwardness.',
		'I usually go for 8s but I guess I’ll settle for a 10.',
		'Are you https? ‘Cuz without you I’m just ://',
		'Do you like Mexican food? ‘Cuz I want to wrap you up and make you my Bae-ritto.',
		'Truth or date?',
		'Hi, I’m Mrs. Right. Someone said you were looking for me?',
		'You don’t know how many times I’ve had to swipe left to find you.',
		'When our friends ask us how we met, what are we going to tell them? Funny answers only.',
		'If you could be anywhere in the world, doing anything you wanted, where would we be?',
		'I don’t know how this works. Are we married now?',
		'Hey, I’m writing an article on the finer things in life and was hoping I could interview you.',
		'Aside from being this good-looking, what else do you do in your free time?',
		'Are you an archeologist ‘cuz you dug up a hole in my heart.',
		'Coffee, tea, or sushi?',
		'You have one of the most beautiful faces I’ve seen in a long, long time.',
		'Do you know how to train butterflies? The ones in my stomach right now are quite untamed.',
		'No pen, no paper… but you still ‘draw’ my attention.',
		'I know we’re not socks, but I’m sure we’d make a great pair.',
		'I think someone must have stolen the stars and put them in your eyes.',
		'Are you good at algebra? ‘Cuz I’d like you to replace my X without asking Y.',
		'Oh, by the way, I’m wearing that smile you gave me.',
		'Do you have a pencil? ‘Cuz I want to erase your past and write our future.',
	];
	const randomGreeting =
		// greetings[Math.floor(Math.random() * greetings.length)];
		greetings[index];
	return randomGreeting;
}

document.querySelector('.envelope').addEventListener('click', function () {
	if (document.querySelector('.letter').classList.contains('letter--open')) {
		document.querySelector('.letter').classList.remove('letter--open');
		document.querySelector('.letter').classList.add('letter--close');
		setTimeout(function () {
			document.querySelector('.letter').classList.remove('letter--close');
			paperText.innerHTML = '';
			index += 1;
		}, 600);
	} else {
		document.querySelector('.letter').classList.remove('letter--close');
		document.querySelector('.letter').classList.add('letter--open');
		paperText.innerHTML = randomGreeting();
	}
});

document.querySelector('.paper-close').addEventListener('click', function () {
	document.querySelector('.letter').classList.remove('letter--open');
	document.querySelector('.letter').classList.add('letter--close');
	setTimeout(function () {
		document.querySelector('.letter').classList.remove('letter--close');
		paperText.innerHTML = '';
		index += 1;
	}, 600);
});
