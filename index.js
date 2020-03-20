const options = {
	appId: process.env.FB_APP_ID,
	appSecret: process.env.FP_APP_SECRET
};
const groupId = process.env.FB_GROUP_ID;

const FB = require('fb'),
	fb = new FB.Facebook(options);

fb.api(
	`/${groupId}/feed`,
	(response) => {
		if (response && !response.error) {
			response.data.map(post => {
				console.log(`${post.message}`)
				console.log(`${post.updated_time}`)
				console.log(`${post.id}`)
			})
		}
	}
);
