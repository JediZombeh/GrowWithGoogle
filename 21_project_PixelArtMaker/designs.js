
$(function(){ //<-- Waits to execute any code until the DOM is loaded
	// Declare the variables
	const SWATCH = $('#colorPicker').val(),
				SUBMIT = $('#submit'),
				GRID = $('#canvas');

	SUBMIT.on('click', function makeGrid(event) {
		event.preventDefault(); // prevent page refresh
		GRID.children().remove(); // clear canvas and restart

		// pull user input values and build the grid
		let rows = $('#inputHeight').val();
		let cols = $('#inputWidth').val();

		for (let m = 0; m < rows; m++) {
			GRID.append('<tr></tr>');
		}
		for (let n = 0; n < cols; n++) {
			$('table tr').append('<td></td>');
		}

		// sets the default color of the cells
		let cell = $('td');
		cell.css('background-color', '#FFF');
	});

	// set the <td> background to the color swatch
	$('td').on('click', function() {
		event.preventDefault(); // prevent page refresh
		this.css('background-color', SWATCH);
	});
})
