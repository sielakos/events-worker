class EventsWorker {
  constructor(routing, queues, stateService) {
    this.stateService = stateService;
    this.queues = queues;
    this.routing = routing.map(entry => {
      return {
        ...entry,
        service: new entry.ServiceClass(this.dispatch)
      };
    });
  }

  onEvent = async (event) => {
    const state = await this.stateService.getStateForExecution(event?.payload?.executionId);
    const eventWithState = {
      ...event,
      state
    };

    for (let entry of this.routing) {
      if (entry.regexp.test(event.topic)) {
        entry.service.consume(eventWithState);
      }
    }
  }

  dispatch = (event) => {
    this.queues.consume(event);
  }
}

module.exports = EventsWorker;