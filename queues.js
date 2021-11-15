class Queues {
  constructor(dispatch) {
    this.dispatch = dispatch;

    setInterval(this.play, 5000);
  }

  play = () => {
    this.dispatch({
      topic: 'main.topic1.egfggffg',
      payload: {
        executionId: `execution-${Math.random()}`
      }
    });
  }

  consume(event) {
    console.log("sending event to rabbit", event);

    setTimeout(() => {
      this.dispatch(event);
    }, 1000);
  }
}

module.exports = Queues;