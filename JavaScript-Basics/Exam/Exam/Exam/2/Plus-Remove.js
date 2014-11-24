function solve(input) {
    var foundTriangles = [];

    for (var i = 0; i < input.length; i++) {
        foundTriangles[i] = input[i].split('');
    }

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {

            if (input[i + 1] === undefined || input[i + 2] === undefined) {
                continue;
            }

            if (input[i + 1][j - 1] === undefined ||
                input[i + 1][j] === undefined ||
                input[i + 1][j + 1] === undefined ||
                input[i + 2][j] === undefined) {
                continue;
            } else {
                var char = (input[i][j]).toLowerCase();

                if (char === (input[i + 1][j - 1]).toLowerCase() &&
                char === (input[i + 1][j]).toLowerCase() &&
                char === (input[i + 1][j + 1]).toLowerCase() &&
                char === (input[i + 2][j]).toLowerCase()) {
                    foundTriangles[i][j] = '';
                    foundTriangles[i + 1][j - 1] = '';
                    foundTriangles[i + 1][j] = '';
                    foundTriangles[i + 1][j + 1] = '';
                    foundTriangles[i + 2][j] = '';
                }
            }

        }
    }

    for (var i = 0; i < foundTriangles.length; i++) {
        console.log(foundTriangles[i].filter(function trim(x) {
            return x !== '';
        }).join(''));
    }
}

var sampleInput = [
	'ab**l5',
    'bBb*555',
    'absh*5',
    'ttHHH',
    'ttth'

];

solve(sampleInput)