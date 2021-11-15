const EventsWorker = require('./events-worker');
const Queues = require('./queues');
const StateService = require('./state-service');
const routing = require('./routing');

let eventsWorker;

function dispatch(event) {
  if (eventsWorker) {
    eventsWorker.onEvent(event);
  }
}

const queues = new Queues(dispatch);
const stateService = new StateService();
eventsWorker = new EventsWorker(routing, queues, stateService);

queues.play();