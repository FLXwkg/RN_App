import axios from 'axios'

const api = axios.create({
  baseURL: process.env.WOOCOMMERCE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: process.env.WOOCOMMERCE_API_CLIENT_KEY,
    password: process.env.WOOCOMMERCE_API_SECRET_KEY
  }
})

const createProduct = async (productData) => {
  try {
    const response = await api.post('/wp-json/wc/v3/products', productData)
    return response.data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}

const createTag = async (tagData) => {
  try {
    console.log(`URL: ${api.defaults.baseURL}/wp-json/wc/v3/products/tags`)
    const response = await api.post('/wp-json/wc/v3/products/tags', tagData)
    return response.data
  } catch (error) {
    console.error('Error creating tag:', error)
    throw error
  }
}

export {
  createProduct,
  createTag
}
