import React from "react";
import { Footer, Header } from "@/widgets";
import { LayoutStyled } from "@/components/index.styled";


interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyled container direction="column">
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
