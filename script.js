
const senderForm = document.getElementById('senderForm');
const sendBtn = document.querySelector('.form__input_send');
const textAreaOut = document.querySelector('#out');
const pullBtn = document.querySelector('.form__input_pull');
const textAreaPull = document.querySelector('#pull');
// const rootPage = location.protocol + '//' + location.host;
const BASE = 'https://jsonplaceholder.typicode.com/posts';


function sendFile() {
	const sendData = {};
	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();
		console.log()
		sendInfo = textAreaOut.value;
		sendData.push({
			text: sendInfo,
			body: 'file',
			userId: 1,
		});
	});


	console.log(sendData)
	const axiosConfig = {
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	};
	axios.post(`${BASE}`,
		axiosConfig,
		sendData,
	)
		.then((response) => {
			const text = response.data;
			console.log(`post`, text);
		})
		.catch((errors) => {
			console.error(errors);
		});
};
const pullFile = async () => {
	try {
		const response = await axios.get(`${BASE}`,
			{
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
			},
		);
		const text = response.data;
		console.log(`get`, text);
		textAreaPull.value = text;
	} catch (errors) {
		console.error(errors);
	}
};

sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	sendFile();
});

pullBtn.addEventListener('click', (e) => {
	e.preventDefault();
	pullFile();
});

