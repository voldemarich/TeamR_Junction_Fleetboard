window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	var ls = new LocalStorage();
	var auth = ls.get('Authorization');
	getOrders();
	
	function getOrders() {
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
		var tr = this.getParent('.orderTr');
		createOrderPopup(tr);
	})
	function createOrderPopup(tr) {
		var orderNum = tr.get('data-ordernum');
		if (!orderNum) { return; }
		if (!auth) { return; }
		var modal = $("myModal");
		new Request.JSON({
			url: server+'/orders/'+orderNum,
			method: 'get',
			headers: {"Authorization": auth },
			onSuccess: function(data) {
				console.log(data);
				var oneOrder = new Element('table', {
					'class': 'one_order'
				})
				var closeSpan = new Element('span', {
					'class': 'close',
					'html': '&times;'
				})
				var header = new Element('h1', {
					'text': 'Order number: '+data.order_number
				});
				oneOrder.set('html',
					'<tr><th>Product name</th><td>'+data.goods_name+'</td></tr>'+
					'<tr><th>Product type</th><td>'+data.goods_type+'</td></tr>'+
					'<tr><th>Shake level</th><td>'+data.shake_level+'</td></tr>'+
					'<tr><th>Volume</th><td>'+data.volume+' m&sup3;</td></tr>'+
					'<tr><th>Weight</th><td>'+data.weight+' kg</td></tr>'+
					'<tr><th>Temperature</th><td>'+data.temperature+' &deg;C</td></tr>'+
					'<tr><th>Special conditions</th><td><textarea readonly>'+data.goods_special+'</textarea></td></tr>'+
					'<tr><th><b>Cost</th><td><b>'+parseFloat(data.cost).toFixed(2)+' &euro;</b></td></tr>');
				header.grab(closeSpan);
				var modalContent = modal.getElement('.modal-content');
				modalContent.grab(header);
				modalContent.grab(oneOrder);
				var violations = tr.retrieve('violations');
				if (violations) {
					var vtable = createViolationsTable(violations);
					modalContent.grab(vtable);
				}
				modal.setStyle('display', 'block');
			},
			onError: function(data) {
				alert(data.error);
			}
		}).send();
	}
	function createViolationsTable(violationsArray) {
		var violation_desc = ["Broken glass", "Broken metal", "Coffee spilled"];
		var table = new Element('table', {
			'class': 'violTable',
			html: '<tr><th>Violation description</th><th>Severity</th></tr>'
		});
		violationsArray.each(function(violation) {
			var severe = (violation.is_finalized) ? "Severe" : "Mild";
			var cl = (violation.is_finalized) ? "strongViolation" : "mildViolation";
			var tr = new Element('tr', {
				html: '<td>'+violation_desc[Number.random(0, 2)]+'</td><td class="'+cl+'">'+severe+'</td>'
			});
			table.grab(tr);
		})
		return table;
	}
	document.addEvent('click:relay(.close)', function() {
		var modal = this.getParent('#myModal');
		modal.setStyle('display', 'none');
		modal.getElement('.modal-content').set('html', '');
	})
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