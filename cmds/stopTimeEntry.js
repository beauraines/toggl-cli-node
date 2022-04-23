const Client = require('../client');
const dayjs = require('dayjs');

exports.command = 'stop'
exports.desc = 'Stops the current running time entry'
exports.builder = {}
exports.handler = async function (argv) {

    const client = Client();
    currentTimeEntry = await client.timeEntries.current();
    if (currentTimeEntry) {
        stopped =  await client.timeEntries.stop(currentTimeEntry.id);
        let duration = dayjs.duration({seconds: stopped.duration}).humanize();
        console.log(`Stopped ${stopped.description} after ${duration}`);
}
}



