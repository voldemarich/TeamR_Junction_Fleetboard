window.addEvent('domready', function() {
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

	document.addEvent('click:relay(#orderCalcCosts)', function() {
		var distance = Number.random(50, 600);
		var petrol = distance * 7 / 100;
		var theseCosts = this.getParent('calculatedCosts');
		if (!theseCosts) { return; }
	})
	document.addEvent('change:relay(input[required][data-name])', function() {
		var s = this.get('value');
		var cond = !s || s == "";
		toggleValid(!cond, this);
	})
	document.addEvent('click:relay([data-new-product])', function() {
		var form = this.getParent('form');
		if (!form) { alert('Error. Reload the page and try again'); return; }
		var prod = form.getElement('.product');
		if (!prod) { alert('Error. Reload the page and try again'); return; }
		var new_prod = enableProduct(form);
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
			var inp = parent.getElement('[data-name="'+this.get('data-select')+'"]');
			if (!inp) { return; }
			inp.removeClass('hidden');
		} else {
			var inp = parent.getElement('[data-name="'+this.get('data-select')+'"]');
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
})