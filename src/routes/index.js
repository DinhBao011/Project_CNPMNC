import homePage from "../pages/HomePage/homePage";
import notFoundPage from "../pages/NotFoundPage/notFoundPage";
import orderPage from "../pages/OrderPage/orderPage";
import productsPage from "../pages/Product/productsPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const route = [
    {
        path: '/',
        page: homePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: orderPage,
        isShowHeader: true

    },
    {
        path: '/product',
        page: productsPage,
        isShowHeader: true
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: notFoundPage
    }

]

