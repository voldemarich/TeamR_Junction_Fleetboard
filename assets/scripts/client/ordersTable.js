window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	getOrders();
	
	function getOrders() {
		var ls = new LocalStorage();
		var auth = ls.get('Authorization');
		if (!auth) { return; }
		new Request.JSON({
			url: server+'/orders',
			method: 'post',
			headers: {"Authorization": auth },
			onSuccess: function(data) {
				if (data && data.error) {
					alert(data.error);
					return;
				}
			},
			onError: function(data) {

			}
		}).get();
	}
})