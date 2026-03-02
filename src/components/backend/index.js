const express = require('express'); 
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/api/products', async (req, res) => {
    try {
        const allProducts = await pool.query(
            'SELECT id, name, short_description, image_url, price FROM products ORDER BY id ASC'
        );
        res.json(allProducts.rows);
    } catch (err) {
        console.error('Ошибка в GET /api/products:', err.message);
        res.status(500).json({ error: 'Ошибка сервера при получении списка товаров' });
    }
});


app.get('/api/card/:id', async (req, res) => {
    try {
        const { id } = req.params;
        

        const query = `
            SELECT 
                p.id, 
                p.name, 
                p.image_url,
                d.full_title, 
                d.sub_title, 
                d.description, 
                d.features, 
                d.composition, 
                d.feeding_recommendations, 
                d.target_audience
            FROM products p
            INNER JOIN product_details d ON p.id = d.product_id
            WHERE p.id = $1
            `
        ;

        const product = await pool.query(query, [id]);

        if (product.rows.length === 0) {
            return res.status(404).json({ error: 'Товар не найден' });
        }

        res.json(product.rows[0]);
    } catch (err) {
        console.error('Ошибка в GET /api/products/:id:', err.message);
        res.status(500).json({ error: 'Ошибка сервера при получении данных товара' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Сервер запущен на порту", {PORT});
});