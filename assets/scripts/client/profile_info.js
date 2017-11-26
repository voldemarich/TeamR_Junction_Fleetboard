window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	var ls = new LocalStorage();
	var auth = ls.get('Authorization');

	getProfileInfo();

	function getProfileInfo() {
		if (!auth) {
			window.location.href = "login.html";
		}
		new Request.JSON({
			url: server+'/myacc',
			method: 'get',
			headers: {"Authorization": auth},
			onSuccess: function(data) {
				var unameInput = $$('[data-name="username"]')[0];
				var passwordInput = $$('[data-name="password"]')[0];
				unameInput.set('value', data.username);
				passwordInput.set('value', data.password);
			},
			onError: function(data) {
				alert(data.error);
			}
		}).send();
	}
})