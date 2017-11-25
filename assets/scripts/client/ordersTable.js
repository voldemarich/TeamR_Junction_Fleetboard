window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	getOrders();
	
	function getOrders() {
		var ls = new LocalStorage();
		var auth = ls.get('Authorization');
		if (!auth) { return; }
		var table = $('ordersTable');
		if (!table) { return; }
		new Request.JSON({
			url: server+'/orders',
			method: 'get',
			headers: {"Authorization": auth },
			onSuccess: function(data) {
				if (data && data.error) {
					alert(data.error);
					return;
				}
				data.each(function(order) {
					var tr = new Element('tr', {
						"class": "orderTr",
						'data-ordernum': order.order_number,
						html: '<td>'+order.order_number+
							'</td><td>'+order.goods_type+
							'</td><td>'+order.volume+
							'</td><td>'+order.weight+
							'</td><td>'+order.distance+
							'</td><td>'+order.temperature+
							'</td><td>'+order.shake_level+
							'</td><td>'+order.goods_special+'</td>'
					});
					table.grab(tr);
				})
				new Request.JSON({
					url: server+'/orders/violations',
					method: 'get',
					headers: {"Authorization": auth },
					onSuccess: function(data) {
						var groupedV = groupViolations(data);
						groupedV.each(function(violation) {
							var tr = table.getElement('[data-ordernum="'+Object.keys(violation)+'"]');
							if (tr) {
								var trViols = Object.values(violation)[0];
								var dangerousViols = trViols.filter(function(viol) {
									return viol.is_finalized == true;
								})
								if (dangerousViols.length > 0) {
									tr.getFirst('td').addClass('strongViolation');
								} else {
									tr.getFirst('td').addClass('mildViolation');
								}
								tr.store('violations', trViols);
							}
						})
					},
					onError(data) {
						alert(data.error);
					}
				}).send();
			},
			onError: function(data) {

			}
		}).send();
	}
	document.addEvent('click:relay(.orderTr td:first-child)', function() {
		createOrderPopup();
	})
	function createOrderPopup() {
		
	}
	function groupViolations(violations) {
		var nums = [];
		violations.each(function(v) {
			if (nums.indexOf(v.order_number) == -1) {
				nums.push(v.order_number);
			}
		})
		var grouped = [];
		for (var i=0; i<nums.length; i++) {
			obj = {};
			var one_group = violations.filter(function(v) {
				return v.order_number == nums[i];
			});
			obj[nums[i]] = one_group;
			grouped.push(obj);
		}
		return grouped;
	}
})