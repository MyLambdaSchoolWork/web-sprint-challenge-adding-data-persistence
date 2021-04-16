// do not make changes to this file (except to optionally add seeds)
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds'},
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
  // this is supposed to cast 0 and 1 stored in boolean columns
  // to true/false, but it seems like sqlite3 does not support it
  typeCast: (field, next) => {
    // logs nothing, doesn't seem to be called
    // console.log(field) 
    return field.type === 'boolean'
      ?  field.integer === 1
      : next()
  }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/lambda.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
