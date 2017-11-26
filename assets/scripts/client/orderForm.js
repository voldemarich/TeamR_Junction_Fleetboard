window.addEvent('domready', function() {
	var server = "http://130.233.85.30:3000";
	var autocomplete, autocomplete2;
	var orderForm = document.getElement('#orderForm');
	if (orderForm) {
		var prod = enableProduct(orderForm);
		prod.inject(orderForm, 'top');
	}
	function enableProduct(form) {
		var prodToClone = form.getElement('[data-prod-clone]');
		if (!prodToClone) { alert('No product found'); return; }
		var prod = prodToClone.clone();
		prod.removeClass('hidden');
		prod.removeProperty('data-prod-clone');
		return prod;
	}
	function toggleValid(valid, input) {
		if (valid) {
			input.removeClass('required_empty');
			input.addClass('basicInput');
		} else {
			input.removeClass('basicInput');
			input.addClass('required_empty');	
		}
		
	}

      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      function geolocate() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
          });
        }
      }
      function geolocate2() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
              center: geolocation,
              radius: position.coords.accuracy
            });
            autocomplete2.setBounds(circle.getBounds());
          });
        }
      }
      function calculate() {
          fetch('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + $$('[data-name="sendFrom"]')[0].get('value') + '&destinations=' + $$('[data-name="sendTo"]')[0].get('value') + '&key=AIzaSyAXdmrACW6NAQ5vWAwUdDv1nZOGGoTTIPk')
        .then(res => res.json())
        .then((out) => {
            $$('[data-name="travelDistance"]')[0].set('value', out.rows[0].elements[0].distance.value/1000);
            // $$('[data-name="travelTime"]')[0]("time").set('value', ) = out.rows[0].elements[0].duration.value;
            $$('[data-name="petrol"]')[0].set('value', 0.000395 * parseFloat(out.rows[0].elements[0].distance.value));
    }).catch(err => console.error(err));

        //console.log();
      }
	document.addEvent('click:relay(#orderCalcCosts)', function() {
		calculate();
		$$('.calculatedCosts').removeClass('hidden');
	})
	document.addEvent('change:relay(input[required][data-name])', function() {
		var s = this.get('value');
		var cond = !s || s == "";
		toggleValid(!cond, this);
	})
	document.addEvent('click:relay([data-delete])', function() {
		var parent = this.getParent('.product');
		var hr_separator = parent.getPrevious('hr');
		hr_separator.dispose();
		parent.dispose();
	})
	document.addEvent('click:relay([data-new-product])', function() {
		var form = this.getParent('form');
		if (!form) { alert('Error. Reload the page and try again'); return; }
		var prod = form.getElement('.product');
		if (!prod) { alert('Error. Reload the page and try again'); return; }
		var new_prod = enableProduct(form);
		var delete_prod = new Element('input', {
			'type': 'button',
			'data-delete': '1',
			'value': 'Remove product'
		});
		new_prod.grab(delete_prod);
		var hr = new Element('hr', {
			'class': 'hr_separator'
		})
		var orderControls = this.getParent('.orderFormControls');
		if (!orderControls) { return; }
		hr.inject(orderControls, 'before');
		new_prod.inject(orderControls, 'before');
	})
	document.addEvent('change:relay([data-select])', function() {
		var sel = this.getSelected()[0];
		if (!sel) { return; }
		var val = sel.get('value');
		if (!val) { return; }
		var parent = this.getParent('.orderFieldText');
		if (!parent) { return; }
		if (val == "other") {
			var inp = parent.getElement('[data-name-noselect="'+this.get('data-select')+'"]');
			if (!inp) { return; }
			inp.removeClass('hidden');
		} else {
			var inp = parent.getElement('[data-name-noselect="'+this.get('data-select')+'"]');
			if (!inp) { return; }
			if (!inp.hasClass('hidden')) {
				inp.addClass('hidden');
			}
		}
	})

	document.addEvent('click:relay([data-next])', function() {
		var form = this.getParent('form');
		if (!form) { alert('Submission failed. Reload the page and try again'); return; }
		var prods = form.getElements('.product:not([data-prod-clone])');
		if (!prods) { alert('Submission failed. Reload the page and try again'); return; }
		var requiredInputs = [];
		prods.each(function(prod) {
			var elems = prod.getElements('input[required]');
			elems.each(function(el) {
				requiredInputs.push(el);
			})
		})
		var allFilled = true;
		requiredInputs.each(function(inp) {
			var cond = inp.get('value') == "" || !inp.get('value');
			if (cond) {
				allFilled = false;
			}
			toggleValid(!cond, inp);
		});
		var selects = form.getElements('select');
		selects.each(function(sel) {
			var s = sel.getSelected()[0].get('value');
			var q = sel.getProperty('data-required');
			if (sel.getProperty('data-required') != null) {
				if (s == "default") {
					allFilled = false;
					toggleValid(false, sel);
				}
				if (s == "other") {
					var inpSel = sel.getParent('.orderFieldBlock');
					if (!inpSel) { allFilled = false; }
					var otherInp = inpSel.getElement('input[data-name="'+sel.get('data-select')+'"]');
					if (!otherInp) { allFilled = false; }
					var cond = otherInp.get('value') == "" || !otherInp.get('value')
					if (cond) {
						allFilled = false;
					}
					toggleValid(!cond, otherInp);
				}
			} else {
				toggleValid(true, sel);
			}
		})
		if (!allFilled) {
			return;
		}
		form.addClass('hidden');
		var formDelivery = document.getElement('#orderDeliveryTermsForm');
		if (!formDelivery) { return; }
		formDelivery.removeClass('hidden');
	})

	var submitButton = $$('[data-submit-order]')[0];
	submitButton.addEvent('click', function() {
		var ls = new LocalStorage();
		var auth = ls.get('Authorization');
		if (!auth) { return; }
		var products = [];
		var prods = $$('.product:not([data-prod-clone])');
		prods.each(function(prod) {
			var prodObj = {};
			var inputs = prod.getElements('[data-name]');
			var selects = prod.getElements('[data-select]');
			inputs.each(function(inp) {
				var name = inp.get('data-name');
				if (name) {
					prodObj[name] = inp.get('value');
				}
			});
			if (prodObj.x && prodObj.y && prodObj.z) {
				prodObj.volume = prodObj.x * prodObj.y * prodObj.z;
				delete prodObj.x;
				delete prodObj.y;
				delete prodObj.z;
			}
			selects.each(function(sel) {
				var sname = sel.get('data-select');
				if (sname) {
					var val = sel.getSelected()[0].get('value');
					if (val == "other") {
						val = prod.getElement('[data-name-noselect="'+sname+'"]').get('value');
					}
					prodObj[sname] = val;
				}
			})
			prodObj["temperature"] = "10";
			prodObj["distance"] = $$('[data-name="travelDistance"]')[0].get('value');
			prodObj["petrol"] = $$('[data-name="petrol"]')[0].get('value');
			products.push(prodObj);
		})
		new Request.JSON({
			url: server+"/orders",
			headers: {"Authorization": auth },
			onSuccess: function(data) {
				if (data && data.error) {
					alert(data.error);
				}
			},
			onError: function(data) {
				alert(data.error);
			}
		}).post({orders: products});
	})
})