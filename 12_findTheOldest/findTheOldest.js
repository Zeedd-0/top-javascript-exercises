const findTheOldest = function(people) {
    // // map solution
    let oldest = '';
    people.map(person => {
        // oldest empty?
        if (oldest === '') oldest = person;
        if ('yearOfDeath' in oldest) {
            if ('yearOfDeath' in person) {
                // person age vs oldest age =====> higher age
                let personAge = person.yearOfDeath - person.yearOfBirth;
                let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
                if (oldestAge < personAge) oldest = person;
            }; // person age vs oldest birth =====> birth
        } else {
            // person birth vs person birth =====> lower birth  
            if (oldest.yearOfBirth > person.yearOfBirth) oldest = person;
        };
    });
    return oldest;
};

    // see solution
    // it is quite similar
    // differences:
    // -- a separate function to return each person (oldest and current) age
    // -- use of a random year (new Date().getFullYear()) so can
    //    keep only one default comparison (oldestAge vs currentAge)
    //    my solution has an addition comparison (oldest.yearBirth vs current.yearBirth)
    //    -- is better to keep only one comparison if possible
    //    -- solution's double function is easier to read and understand
    // plus! the alternative solution has a coalescing assignment operator
    //    -- a great tool to evalute nullish (undefined or null) and apply action if so
    //       with coalescing assignment we can reduce an if conditional
    //       as we do though ternary operator

// Do not edit below this line
module.exports = findTheOldest;
