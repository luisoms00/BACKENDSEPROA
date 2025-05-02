const express = require('express')
const colors = require('colors')
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const { errorHandler } = require("./middleware/errorMiddleware")
const personaFisicaRoutes = require('./routes/personafisicaRoutes');
const personaMoralRoutes = require('./routes/personamoralRoutes');
const nominaRoutes = require('./routes/nominaRoutes');


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/personas-fisicas', personaFisicaRoutes);
app.use('/api/personas-morales', personaMoralRoutes);
app.use('/api/nominas', nominaRoutes);

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))