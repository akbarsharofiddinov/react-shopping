import { Home, Cart, Favorite, Profile, DetailProduct } from "@pages/index";

export const routes = [
  {
    RouteElement: Home,
    path: "/",
  },
  {
    RouteElement: Cart,
    path: "cart",
  },
  {
    RouteElement: Favorite,
    path: "favorite",
  },
  {
    RouteElement: Profile,
    path: "profile",
  },
  {
    RouteElement: DetailProduct,
    path: "detail/:id",
  },
];
