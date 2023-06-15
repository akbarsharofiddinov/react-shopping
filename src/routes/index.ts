import { Home, Cart, Favourite, Profile, DetailProduct } from "@pages/index";

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
    RouteElement: Favourite,
    path: "favourite",
  },
  {
    RouteElement: Profile,
    path: "profile",
  },
  {
    RouteElement: DetailProduct,
    path: "detail/:id",
  }
];
