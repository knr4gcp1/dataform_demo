module.exports = {
  withTimestamp: (table) => `select *, current_timestamp() as processed_at from ${table}`
};

