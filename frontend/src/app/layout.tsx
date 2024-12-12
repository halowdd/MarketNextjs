"use client";
import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Footer, Header } from "@/widgets";
import { MainContainerStyled } from "@/app/layout.styled";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <MainContainerStyled>
            <Header />
            {children}
            <Footer />
          </MainContainerStyled>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
