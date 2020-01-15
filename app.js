var friends = ["Tim", "Jon", "Sue", "Max","Lane"];

for (var l = 0; l < friends.length; l++) {
    for (i = 99; i >= 0; i--) {
        if (i > 1) {
            console.log(`${i} lines of code in the file, ${i} lines of code; ${friends[l]} strikes out, clears it all out, ${i-1} lines of code in the file`);}  else if (i == 1) {
                console.log(`${i} line of code in the file, ${i} line of code; ${friends[l]} strickes one out, clears it all out, ${i-1} lines of code in the file`);
            }
    }

}