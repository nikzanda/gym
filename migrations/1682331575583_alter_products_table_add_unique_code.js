const up = 'ALTER TABLE `products` ADD CONSTRAINT UC_products_code UNIQUE (`code`);';
const down = 'ALTER TABLE `products` DROP INDEX UC_products_code;';

module.exports = {
  up,
  down,
};
