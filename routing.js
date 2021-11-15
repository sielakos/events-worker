const Service1 = require('./service1');
const Service2 = require('./service2');

const routing = [
  {
    regexp: /^main.topic1/,
    ServiceClass: Service1,
  },
  {
    regexp: /^main.topic2/,
    ServiceClass: Service2,
  }
]

module.exports = routing;