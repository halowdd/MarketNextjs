"use client";
import * as React from 'react';
import { Typography } from "@mui/material";
import { routes } from "../../routes";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import {
  HeaderContainerStyled,
  LinkContainerStyled,
  NavigationListContainerStyled
} from "@/widgets/Header/ui/index.styled";
import { AccountCircle } from '@mui/icons-material';


export const Header = () => {
  const pathname = usePathname();

  return (
    <HeaderContainerStyled container justifyContent="space-between" alignItems="center">
      <Link href="/">
        <h1>Market</h1>
      </Link>
      <NavigationListContainerStyled>
        {routes.map((route, index) => (
          <LinkContainerStyled key={index} href={route.path} isActive={pathname === route.path}>
            {route.Icon}
            <Typography>{route.label}</Typography>
          </LinkContainerStyled>
        ))}
      </NavigationListContainerStyled>
      <div>
        <Link href="/profile">
          <AccountCircle />
        </Link>
      </div>
    </HeaderContainerStyled>
  );
};
