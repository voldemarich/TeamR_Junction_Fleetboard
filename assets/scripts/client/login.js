window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	var loginButton = $$('[data-submit]')[0];

	var ls = new LocalStorage();

	loginButton.addEvent('click', function() {
		var usernameInput = $$('[name="username"]')[0];
		var username = usernameInput.get('value');
		var passwordInput = $$('[name="password"]')[0];
		var password = passwordInput.get('value');
		new Request.JSON({
			url: server+'/login',
			onSuccess: function(data) {
				if (data && data.token) {
					ls.set('Authorization', data.token);
					window.location.href = "profile_info.html";
				} else {
					usernameInput.addClass('required_empty');
					passwordInput.addClass('required_empty');
				}
			},
			onError: function(data) {
				alert(data.error);
			}
		}).post({username: username, password: password});
	})
})