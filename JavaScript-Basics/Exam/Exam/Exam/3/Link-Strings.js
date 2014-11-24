function solve(input) {
    for (var i = 0; i < input.length; i++) {
        var query = {};
        var currentName = '';
        var currentValue = '';
        var result = '';

        var inName = false;
        var inValue = false;

        if (input[i].substr(0, 4) !== 'http') {
            inName = true;
        }

        for (j = 0; j <= input[i].length; j++) {
            var line = input[i].replace(/\+/g, ' ').replace(/%20/g, ' ').replace(/ +/g, ' ').trim();
            if (line[0] === '&') {
                line = line.substring(0);
            }

            if (j === line.length) {
                if (!query[currentName.trim()]) {
                    query[currentName.trim()] = [];
                    break;
                }

                query[currentName.trim()].push(currentValue.trim());
                currentName = '';
                currentValue = '';
            }

            if (line[j] === '=') {
                inName = false;
                inValue = true;
                if (!query[currentName.trim()]) {
                    query[currentName.trim()] = [];
                }
                continue;
            }

            if (line[j] === '?') {
                inName = true;
                continue;
            }

            if (line[j] === '&') {
                if (currentName === '' && currentValue === '') {
                    inName = true;
                    inValue = false;
                    continue;
                }

                inName = true;
                inValue = false;
                query[currentName].push(currentValue.trim());
                currentName = '';
                currentValue = '';
                continue;
            }

            if (inName) {
                currentName += line[j];
                continue;
            } else if (inValue) {
                currentValue += line[j];
            }
        }

        for (var name in query) {
            result += name + '=[' + query[name].join(', ') + ']';
        }

        console.log(result);
        query = {};
    }
}

var sampleInput = [
    //'login=student&password=student'

    'field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret'

    //'foo=%20foo&value=+val&foo+=5+%20+203',
    //'foo=poo%20&value=valley&dog=wow+',
    //'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    //'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php'

    //'fsafsa_=fasfas.'
];

solve(sampleInput);