const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(scheme_id) {
  return db('steps')
    .where({ scheme_id })
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .orderBy('step_number');
}

function add(scheme) {
  if(!scheme || !scheme.scheme_name) return false;
  return db('schemes').insert(scheme)
    .then(r => {
      return findById(r[0]);
    });
}

function update(changes, id) {
  if(!changes || !changes.scheme_name) return false;
  console.log(id);
  return db('schemes').where({ id }).update(changes)
    .then(r => {
      console.log(r);
      return findById(id);
    })
    .catch(e => console.error(e));
}

async function remove(id) {
  const r = await findById(id);
  if(r) {
    await db('schemes').where({ id }).del();
    return r;
  }
  else return null;

}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};