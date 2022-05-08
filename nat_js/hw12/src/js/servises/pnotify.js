import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');

// const myAlert = alert({
// 	text: "I'm an alert.",
// 	type: 'info',
// });

// // Automatically set the type.
// const myNotice = notice({
// 	text: "I'm a notice.",
// });

// const myInfo = info({
// 	text: "I'm an info message.",
// });

// const mySuccess = success({
// 	text: "I'm a success message.",
// });

const myError = error({
	text: 'Too many matches found. Please, enter a more specific query!',
});

console.log(myError);
// console.log(mySuccess);
// console.log(myInfo);
// console.log(myAlert);
// defaultStack = new Stack({
// 	dir1: 'down',
// 	dir2: 'left',
// 	firstpos1: 25,
// 	firstpos2: 25,
// 	spacing1: 36,
// 	spacing2: 36,
// 	push: 'bottom',
// 	context: document.body,
// });

// function showStackBottomRight(type) {

// 		 = new PNotify.Stack({
// 			dir1: 'up',
// 			dir2: 'left',
// 			firstpos1: 25,
// 			firstpos2: 25,
// 		});
// 	const opts = {
// 		title: 'Over Here',
// 		text: "Check me out. I'm in a different stack.",
// 		stack: window.stackBottomRight,
// 	};
// 	switch (type) {
// 		case 'error':
// 			opts.title = '';
// 			opts.text =
// 				'Too many matches found. Please, enter a more specific query.';
// 			opts.type = 'error';
// 			break;
// 		case 'info':
// 			opts.title = 'Breaking News';
// 			opts.text = 'Have you met Ted?';
// 			opts.type = 'info';
// 			break;
// 		case 'success':
// 			opts.title = 'Good News Everyone';
// 			opts.text = "I've invented a device that bites shiny metal asses.";
// 			opts.type = 'success';
// 			break;
// 	}
// 	PNotify.alert(opts);
// }

// showStackBottomRight('error');
