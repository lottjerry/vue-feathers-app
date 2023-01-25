const { authenticate } = require("@feathersjs/authentication").hooks;
const { setField } = require("feathers-authentication-hooks");

// Set the current user id as userId when creating a message and only allow users to edit and remove their own messages:

const setUserId = setField({
  from: "params.user.id",
  as: "data.userId",
});
const limitToUser = setField({
  from: "params.user.id",
  as: "params.query.userId",
});

module.exports = {
  before: {
    all: [authenticate("jwt")],
    find: [limitToUser],
    get: [limitToUser],
    create: [setUserId],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser],
  },

  after: {
    all: [],
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
