var states = {
  1: 'ESTABLISHED',
  2: 'SYN_SENT',
  3: 'SYN_RECV',
  4: 'FIN_WAIT1',
  5: 'FIN_WAIT2',
  6: 'TIME_WAIT',
  7: 'CLOSE',
  8: 'CLOSE_WAIT',
  9: 'LAST_ACK',
  10: 'LISTEN',
  11: 'CLOSING',
}

Object.keys(states).forEach(function (key) {
  states[states[key]] = key
})

module.exports = states
