class Service1 {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  consume(event) {
    console.log("service 1 got ", event);

    this.dispatch({
      topic: 'main.topic2.dffdf',
      payload: {
        executionId: `execution-${Math.random()}`
      }
    });
  }

}

module.exports = Service1;