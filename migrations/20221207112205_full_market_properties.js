/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('full_market_properties', function(table){
      table.increments();
      table.integer('agent_id');
      table.text('agent_address');
      table.string('agent_postcode');
      table.text('portal');
      table.integer('portal_id');
      table.text('portal_link');
      table.text('full_address');
      table.string('postcode');
      table.double('lat');
      table.double('long');
      table.dateTime('date_first_listed');
      table.dateTime('under_offer_date');
      table.dateTime('sold_date');
      table.dateTime('sale_cancelled_date');
      table.dateTime('withdrawn_date');
      table.dateTime('reduced_date');
      table.integer('days_on_market');
      table.decimal('price');
      table.integer('beds');
      table.integer('bath');
      table.text('property_description');
      table.tinyint('auction_suitability');
      table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('full_market_properties');
};
