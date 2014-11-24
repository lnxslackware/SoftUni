function solve(input) {
    var result = {
        'students': [],
        'trainers': []
    };

    for (var i = 1; i < input.length; i++) {
        var person = JSON.parse(input[i]);
        if (person['role'] === 'student') {
            var gradeSum = person.grades.reduce(function (a, b) {
                return a + b;
            });
            
            result['students'].push(person);
        } else {
            result['trainers'].push(person);
        }
    }

    var conditions = input[0].split('^');

    if (conditions[0] === 'name') {
        result.students = result.students.sort(function sortStudentsByName(x, y) {
            return x.firstname.localeCompare(y.firstname) ||
                x.lastname.localeCompare(y.lastname);
        });
    } else {
        result.students = result.students.sort(function sortStudentsByLevel(x, y) {
            return x.level - y.level || x.id - y.id;
        });
    }

    result['trainers'] = result.trainers.sort(function sortTrainers(x, y) {
        return x.courses.length - y.courses.length || x.lecturesPerDay - y.lecturesPerDay;
    });


    for (var i = 0; i < result.students.length; i++) {
        result.students[i]['averageGrade'] = calculateAvgGrades(result.students[i].grades);
        delete result.students[i].grades;
        delete result.students[i].town;
        delete result.students[i].role;
        delete result.students[i].level;
        var cert = result.students[i].certificate;
        delete result.students[i].certificate;
        result.students[i]['certificate'] = cert;
    }

    for (var i = 0; i < result.trainers.length; i++) {

        delete result.trainers[i].town;
        delete result.trainers[i].role;
    }

    function calculateAvgGrades(grades) {
        var sum = 0;
        for (var i = 0; i < grades.length; i++) {
            sum += parseFloat(grades[i]);
        }

        return (sum / grades.length).toFixed(2);
    }

    

    console.log(JSON.stringify(result));

}

var sampleInput = [
    'level^courses',
    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":2,"certificate":false}',
    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
];

solve(sampleInput);