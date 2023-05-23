const newman = require('newman');
 
newman.run({
    // collection:require('./collection/dmoney.json'),
     collection:('https://api.postman.com/collections/27579717-054860e0-506c-4e17-86e0-8f9cf97277f1?access_key=PMAT-01H14FEDPPAHH1DEGTN0BJYNTF'),
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});