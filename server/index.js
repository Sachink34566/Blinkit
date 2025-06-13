import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

import connectDB from './config/connectDB.js'
import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js'
import uploadRouter from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'
import cartRouter from './route/cart.route.js'
import addressRouter from './route/address.route.js'
import orderRouter from './route/order.route.js'

dotenv.config()

const app = express()

// ✅ Use PORT before routes
const PORT = process.env.PORT || 8080

// ✅ Allowed origins from env or fallback
const allowedOrigins = process.env.FRONTEND_URLS?.split(',') || [
  'http://localhost:90',
  'https://blinkit-2idt.vercel.app',
  'http://localhost:5173'
]

// ✅ CORS Middleware (very important)
app.use(cors({
  origin: function (origin, callback) {
    // allow REST tools like Postman (no origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true, // enable cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// ✅ Standard Middleware
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({ crossOriginResourcePolicy: false }))

// ✅ Routes
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${PORT}` })
})

app.use('/api/user', userRouter)
app.use('/api/category', categoryRouter)
app.use('/api/file', uploadRouter)
app.use('/api/subcategory', subCategoryRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('/api/order', orderRouter)

// ✅ Start server after DB connection
connectDB()
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB', err)
  })
