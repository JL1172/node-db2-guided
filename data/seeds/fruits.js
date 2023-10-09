/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()
  await knex('fruits').insert([
    {fruit_name: 'apple', avg_weight_oz : 10.6, delicious : null, color : "purple"},
    {fruit_name: 'orange', avg_weight_oz : 1.5, delicious : true, color : "red"},
    {fruit_name: 'pear', avg_weight_oz : 5.6, delicious : 0,color : "green"}
  ]);
};
