window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	var loginButton = $$('[data-submit]')[0];

	var ls = new LocalStorage();

	loginButton.addEvent('click', function() {
		var username = $$('[name="username"]')[0].get('value');
		var password = $$('[name="password"]')[0].get('value');
		new Request.JSON({
			url: server+'/login',
			onSuccess: function(data) {
				if (data && data.token) {
					ls.set('Authorization', data.token);
				}
			},
			onError: function(data) {
				alert(data.error);
			}
		}).post({username: username, password: password});
	})
})