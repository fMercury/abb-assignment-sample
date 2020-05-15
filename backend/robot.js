require('isomorphic-fetch');
const CronJob = require('cron').CronJob;

let job = new CronJob('*/3 * * * * * ', function () {
    try {

        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: 'mutation { pushPart(newPart: { name: "Part X", features: [{ name: "Seam", controls: [{ name: "X", dev: 0, devOutTotal: 0, expected: 0 }, { name: "Y", dev: 0, devOutTotal: 0, expected: 1 }, { name: "Z", dev: 0, devOutTotal: 0, expected: -1 }, { name: "length", dev: 0, devOutTotal: 0, expected: 0 }, { name: "diameter", dev: 0, devOutTotal: 0, expected: 1 }] }, { name: "Slot", controls: [{ name: "X", dev: 0, devOutTotal: 0, expected: 0 }, { name: "Y", dev: 0, devOutTotal: 0, expected: 1 }, { name: "Z", dev: 0, devOutTotal: 0, expected: -1 }, { name: "length", dev: 0, devOutTotal: 0, expected: 0 }, { name: "A", dev: 0, devOutTotal: 0, expected: 0 }, { name: "B", dev: 0, devOutTotal: 0, expected: 1 }, { name: "C", dev: 0, devOutTotal: 0, expected: -1 }, { name: "length", dev: 0, devOutTotal: 0, expected: 0 }] }, { name: "Hole", controls: [{ name: "X", dev: 0, devOutTotal: 0, expected: 0 }, { name: "Y", dev: 0, devOutTotal: 0, expected: 1 }, { name: "Z", dev: 0, devOutTotal: 0, expected: -1 }, { name: "M", dev: 0, devOutTotal: 0, expected: 0 }, { name: "N", dev: 0, devOutTotal: 0, expected: 1 }, { name: "L", dev: 0, devOutTotal: 0, expected: -1 }] }] }) { name } }' }),
        })
            .then(res => res.json())
            .then(res => console.log(res.data))
            .catch(console.error());

    } catch (error) {
    }
    
    console.log(' robot execution !');
}, null, true, '');
job.start();

