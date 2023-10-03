/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {fruit_name: 'apple',avg_weight_oz : (Math.random() * 15).toFixed(2), delicious : Math.floor(Math.random()*2),color : 'green'},
    {fruit_name: 'orange',avg_weight_oz : (Math.random() * 15).toFixed(2), delicious : Math.floor(Math.random()*2),color : 'green'},
    {fruit_name: 'pear',avg_weight_oz : (Math.random() * 15).toFixed(2), delicious : Math.floor(Math.random()*2),color : 'green'},
  ]);
};
