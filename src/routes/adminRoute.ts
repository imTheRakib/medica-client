import { IRoutes } from "@/types";
import {
  Home,
  LayoutDashboard,
  FolderPlus,
  Users,
  List,
  Pill,
  ShoppingCart,
} from "lucide-react";

export const adminRoute: IRoutes[] = [
  {
    title: "Medica. User Management",
    items: [
      {
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        title: "Dashboard",
        url: "/admin-dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Create Category",
        url: "/admin-dashboard/create-category",
        icon: FolderPlus,
      },
      {
        title: "Manage Users",
        url: "/admin-dashboard/users",
        icon: Users,
      },
      {
        title: "Category List",
        url: "/admin-dashboard/category-list",
        icon: List,
      },
      {
        title: "Medicines",
        url: "/admin-dashboard/medicines",
        icon: Pill,
      },
      {
        title: "Orders",
        url: "/admin-dashboard/orders",
        icon: ShoppingCart,
      },
    ],
  },
];
