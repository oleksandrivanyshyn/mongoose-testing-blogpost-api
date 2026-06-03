const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1:27017/users_test';

before((done) => {
  mongoose.connect(mongoUri);
  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;

  users
    .drop()
    .catch(() => {})
    .then(() => comments.drop())
    .catch(() => {})
    .then(() => blogposts.drop())
    .catch(() => {})
    .then(() => done());
});
