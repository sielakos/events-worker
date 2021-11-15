class StateService {
  async getStateForExecution(executionId) {
    await new Promise(resolve => setTimeout(resolve, Math.round(Math.random() * 2000)));

    return {
      executionId,
      state: Math.round(Math.random() * 20000)
    };
  }
}

module.exports = StateService;