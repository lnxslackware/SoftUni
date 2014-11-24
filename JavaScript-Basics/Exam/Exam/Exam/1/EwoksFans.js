function solve(input) {
    var splitedInput = [];
    for (var i = 0, len = input.length; i < len; i += 1) {
        splitedInput[i] = input[i].split('.');
    }

    splitedInput = splitedInput.filter(filterBorderDates);

    if (splitedInput.length === 0) {
        console.log('No result');
        return;
    }

    var fansList = splitedInput.filter(filterFans);
    var hatersList = splitedInput.filter(filterHaters);

    if (fansList.length !== 0) {
        var biggestFan = getBiggerFan(fansList);
        console.log("The biggest fan of ewoks was born on " + biggestFan.toDateString());
    }

    if (hatersList.length !== 0) {
        var biggestHater = getBiggerHater(hatersList);
        console.log("The biggest hater of ewoks was born on " + biggestHater.toDateString());
    }

    function getBiggerHater(haters) {
        var result = haters[0];

        for (var i = 1; i < haters.length; i++) {
            if (haters[i][2] < result[2]) {
                result = haters[i];
                continue;
            } else if (haters[i][2] == result[2]) {
                if (haters[i][1] < result[1]) {
                    result = haters[i];
                    continue;
                } else if (haters[i][0] < result[0]) {
                    result = haters[i];
                    continue;
                }
            }
        }

        return new Date(parseInt(result[2]), (parseInt(result[1]) - 1), parseInt(result[0]));
    }

    function getBiggerFan(fans) {
        var result = fans[0];

        for (var i = 1; i < fans.length; i++) {
            if (fans[i][2] > result[2]) {
                result = fans[i];
                continue;
            } else if (fans[i][2] == result[2]) {
                if (fans[i][1] > result[1]) {
                    result = fans[i];
                    continue;
                } else if(fans[i][1] == result[1]) {
                    if (fans[i][0] > result[0]) {
                        result = fans[i];
                        continue;
                    }
                }
            }
        }

        return new Date(parseInt(result[2]), (parseInt(result[1]) - 1), parseInt(result[0]));
    }


    function filterHaters(date) {
        if (date[2] < 1973 ) {
            return true;
        }

        if (date[2] == 1973) {
            if (date[1] < 5) {
                return true;
            } else if (date[1] == 5) {
                if (date[0] <= 25) {
                    return true;
                }

                return false;
            }
        }

        return false;
    }

    function filterFans(date) {
        if (date[2] > 1973) {
            return true;
        }

        if (date[2] == 1973) {
            if (date[1] > 5) {
                return true;
            } else if (date[1] == 5) {
                if (date[0] >= 25) {
                    return true;
                }

                return false;
            }
        }

        return false;
    }

    function filterBorderDates(date) {
        if (date[2] < 1900 || date[2] >= 2015) {
            return false;
        }

        if (date[2] == 1900) {
            if (date[1] == 1) {
                if (date[0] == 1) {
                    return false;
                }
            }
        }

        return true;
    }
}

var sampleInput = [
    //'22.03.2014',
    //'17.05.1933',
    //'10.10.1954'

    //'22.03.2000'

    '22.03.1700',
    '01.07.2020'
];

solve(sampleInput);