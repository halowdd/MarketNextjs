import { JSX } from "react";
import { Home, Menu } from '@mui/icons-material';


interface IRoute {
  path: string
  label: string
  Icon?: JSX.Element
}

export const routes: IRoute[] = [
  {
    label: "Главная",
    path: "/home",
    Icon: <Home fontSize="medium" />,
  },
  {
    label: "Каталог",
    path: "/catalogue",
    Icon: <Menu fontSize="medium" />,
  },
];
