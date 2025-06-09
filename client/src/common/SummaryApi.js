export const baseURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

const SummaryApi = {
    register: {
        method: "POST",
        url: `${baseURL}/api/user/register`,
        withCredentials: true
    },
    login: {
        url: `${baseURL}/api/user/login`,
        method: "post",
        withCredentials: true
    },
    forgot_password: {
        url: `${baseURL}/api/user/forgot-password`,
        method: "put"
    },
    forgot_password_otp_verification: {
        url: `${baseURL}/api/user/verify-forgot-password-otp`,
        method: "put"
    },
    resetPassword: {
        url: `${baseURL}/api/user/reset-password`,
        method: "put"
    },
    refreshToken: {
        url: `${baseURL}/api/user/refresh-token`,
        method: "post",
        withCredentials: true
    },
    userDetails: {
        url: `${baseURL}/api/user/user-details`,
        method: "get",
        withCredentials: true
    },
    logout: {
        url: `${baseURL}/api/user/logout`,
        method: "get",
        withCredentials: true
    },
    uploadAvatar: {
        url: `${baseURL}/api/user/upload-avatar`,
        method: "put",
        withCredentials: true
    },
    updateUserDetails: {
        url: `${baseURL}/api/user/update-user`,
        method: "put",
        withCredentials: true
    },
    addCategory: {
        url: `${baseURL}/api/category/add-category`,
        method: "post",
        withCredentials: true
    },
    uploadImage: {
        url: `${baseURL}/api/file/upload`,
        method: "post",
        withCredentials: true
    },
    getCategory: {
        url: `${baseURL}/api/category/get`,
        method: "get"
    },
    updateCategory: {
        url: `${baseURL}/api/category/update`,
        method: "put",
        withCredentials: true
    },
    deleteCategory: {
        url: `${baseURL}/api/category/delete`,
        method: "delete",
        withCredentials: true
    },
    createSubCategory: {
        url: `${baseURL}/api/subcategory/create`,
        method: "post",
        withCredentials: true
    },
    getSubCategory: {
        url: `${baseURL}/api/subcategory/get`,
        method: "post"
    },
    updateSubCategory: {
        url: `${baseURL}/api/subcategory/update`,
        method: "put",
        withCredentials: true
    },
    deleteSubCategory: {
        url: `${baseURL}/api/subcategory/delete`,
        method: "delete",
        withCredentials: true
    },
    createProduct: {
        url: `${baseURL}/api/product/create`,
        method: "post",
        withCredentials: true
    },
    getProduct: {
        url: `${baseURL}/api/product/get`,
        method: "post"
    },
    getProductByCategory: {
        url: `${baseURL}/api/product/get-product-by-category`,
        method: "post"
    },
    getProductByCategoryAndSubCategory: {
        url: `${baseURL}/api/product/get-pruduct-by-category-and-subcategory`,
        method: "post"
    },
    getProductDetails: {
        url: `${baseURL}/api/product/get-product-details`,
        method: "post"
    },
    updateProductDetails: {
        url: `${baseURL}/api/product/update-product-details`,
        method: "put",
        withCredentials: true
    },
    deleteProduct: {
        url: `${baseURL}/api/product/delete-product`,
        method: "delete",
        withCredentials: true
    },
    searchProduct: {
        url: `${baseURL}/api/product/search-product`,
        method: "post"
    },
    addTocart: {
        url: `${baseURL}/api/cart/create`,
        method: "post",
        withCredentials: true
    },
    getCartItem: {
        url: `${baseURL}/api/cart/get`,
        method: "get",
        withCredentials: true
    },
    updateCartItemQty: {
        url: `${baseURL}/api/cart/update-qty`,
        method: "put",
        withCredentials: true
    },
    deleteCartItem: {
        url: `${baseURL}/api/cart/delete-cart-item`,
        method: "delete",
        withCredentials: true
    },
    createAddress: {
        url: `${baseURL}/api/address/create`,
        method: "post",
        withCredentials: true
    },
    getAddress: {
        url: `${baseURL}/api/address/get`,
        method: "get",
        withCredentials: true
    },
    updateAddress: {
        url: `${baseURL}/api/address/update`,
        method: "put",
        withCredentials: true
    },
    disableAddress: {
        url: `${baseURL}/api/address/disable`,
        method: "delete",
        withCredentials: true
    },
    CashOnDeliveryOrder: {
        url: `${baseURL}/api/order/cash-on-delivery`,
        method: "post",
        withCredentials: true
    },
    payment_url: {
        url: `${baseURL}/api/order/checkout`,
        method: "post",
        withCredentials: true
    },
    getOrderItems: {
        url: `${baseURL}/api/order/order-list`,
        method: "get",
        withCredentials: true
    }
};

export default SummaryApi;
