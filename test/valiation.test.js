const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
  it('requires a user name', (done) => {
    const joe = new User({});
    const validationResult = joe.validateSync();
    const { message } = validationResult.errors.name;
    assert(message === 'Name is required');
    done();
  });
});
