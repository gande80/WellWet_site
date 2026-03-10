const express = require('express'); 
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const multer = require('multer');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads')
express.static('uploads')
// Товары
app.get('/api/products', async (req, res) => {
    try {
        const allProducts = await pool.query(
            'SELECT id, name, short_description, image_url, category_id FROM products ORDER BY id ASC'
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
// Авторизация
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Email уже занят" });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length === 0 || user.rows[0].password !== password) {
      return res.status(401).json({ error: "Неверный логин или пароль" });
    }

    res.json({ 
      id: user.rows[0].id, 
      email: user.rows[0].email, 
      isAdmin: user.rows[0].is_admin 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Админка добавления продукта
app.post('/api/products', async (req, res) => {
  try {
    const { name, category_id, short_description, image_url, full_title, sub_title, description, composition, feeding } = req.body;
    

    const product = await pool.query(
      'INSERT INTO products (name, category_id, short_description, image_url) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, category_id, short_description, image_url]
    );

    const productId = product.rows[0].id;


    await pool.query(
      'INSERT INTO product_details (product_id, full_title, sub_title, description, composition, feeding_recommendations) VALUES ($1, $2, $3, $4, $5, $6)',
      [productId, full_title, sub_title, description, composition, feeding]
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Добавление товара (с фото)
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, category_id, short_description, full_title, description, composition } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
    
    const product = await pool.query(
      'INSERT INTO products (name, category_id, short_description, image_url) VALUES ($1, $2, $3, $4) RETURNING id',
      [name, category_id, short_description, imageUrl]
    );

    await pool.query(
      'INSERT INTO product_details (product_id, full_title, description, composition) VALUES ($1, $2, $3, $4)',
      [product.rows[0].id, full_title, description, composition]
    );
    res.json({ success: true });
  } catch (err) { res.status(500).json(err.message); }
});

app.get('/api/users', async (req, res) => {
  const users = await pool.query('SELECT * FROM users ORDER BY id DESC');
  res.json(users.rows);
});

app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { is_admin } = req.body;
  await pool.query('UPDATE users SET is_admin = $1 WHERE id = $2', [is_admin, id]);
  res.json({ success: true });
});

app.listen(5000);
});

// const express = require('express');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const pool = require('./db');

