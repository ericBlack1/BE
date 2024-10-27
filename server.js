require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const smeRoutes = require('./routes/smeRoutes');
const errorHandler = require('./middlewares/errorHandler');
const categoryRoutes = require('./routes/categoryRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const productRoutes = require('./routes/productRoutes');
const { swaggerUi, swaggerDocs } = require("./swagger");

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use(errorHandler);
app.use('/api/sme', smeRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/smes", productRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));