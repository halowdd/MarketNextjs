import React from "react";
import { Typography } from "@mui/material";
import { routes } from "../../routes";
import { usePathname } from 'next/navigation';
import {
  HeaderContainerStyled,
  LinkContainerStyled,
  NavigationListContainerStyled
} from "@/widgets/Header/ui/index.styled";


export const Header = () => {
  const pathname = usePathname();

  return (
    <HeaderContainerStyled container justifyContent="space-between" alignItems="center">
      <h1>Market</h1>
      <NavigationListContainerStyled>
        {routes.map((route, index) => {
          const isActiveUrl = pathname ? pathname.includes(route.path) : false;
          return (
            <LinkContainerStyled key={index} href={route.path} isActive={isActiveUrl}>
              {route.Icon}
              <Typography>{route.label}</Typography>
            </LinkContainerStyled>
          );
        })}
      </NavigationListContainerStyled>
    </HeaderContainerStyled>
  );
};
