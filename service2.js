class Service2 {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  consume(event) {
    console.log("service 2 got ", event);

    this.dispatch({
      topic: 'main.topic3.adfg334',
      payload: {
        executionId: `execution-${Math.random()}`
      }
    });
  }

}

module.exports = Service2;