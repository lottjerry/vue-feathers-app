const { authenticate } = require('@feathersjs/authentication').hooks;
const { setField } = require("feathers-authentication-hooks");

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

// Limit all external access of the users service to the authenticated user:
const limitToUser = setField({
  from: "params.user.id",
  as: "params.query.id",
});
module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt"), limitToUser],
    get: [authenticate("jwt"), limitToUser],
    create: [hashPassword("password")],
    update: [hashPassword("password"), authenticate("jwt"), limitToUser],
    patch: [hashPassword("password"), authenticate("jwt"), limitToUser],
    remove: [authenticate("jwt"), limitToUser],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
