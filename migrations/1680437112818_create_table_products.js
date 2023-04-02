const up = `
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(100) NOT NULL,
    price DECIMAL(8, 2) NOT NULL DEFAULT 0
);`;

const down = 'DROP TABLE IF EXISTS products;';

export default { up, down };