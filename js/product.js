$j(document).ready(function () {
	$j('dt').on('click', function () {
		var filtersBlock = $j(this).next('dd'),
			filtersMotherElement = filtersBlock.find('ol'),
			filtersElement = filtersBlock.find('li'),
			sort = $j(this).data('sort'),
			filters = [];
		filtersElement.each(function () {
			var val = $j(this).data('value');
			filters.push({
				value: val,
				html: $j('*[data-value="' + val + '"]').get()
			});
		});
		if (sort && sort == 'asc') {
			filters.sort(sortDescByName);
			$j(this).data('sort', 'desc');
		} else {
			filters.sort(sortAscByName);
			$j(this).data('sort', 'asc');
		}

		filtersMotherElement.empty();
		filters.each(function (f) {
			filtersMotherElement.append(f.html);
		});
	});

	function sortAscByName(a, b) {
		var aName = parseFloat(a.value);
		var bName = parseFloat(b.value);
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	}

	function sortDescByName(a, b) {
		var aName = parseFloat(a.value);
		var bName = parseFloat(b.value);
		return ((aName > bName) ? -1 : ((aName < bName) ? 1 : 0));
	}
});