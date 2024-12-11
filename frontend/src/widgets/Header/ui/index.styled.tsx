import { Grid, styled } from '@mui/system';
import Link from 'next/link';
import { ILinkContainerStyledProps } from "@/widgets/Header/config/types";

export const HeaderContainerStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: 'white',
  height: '72px',
  padding: theme.spacing(0, 2.5),
  position: 'sticky',
  top: 0,
  zIndex: 5,
}));

export const NavigationListContainerStyled = styled('nav')({
  display: 'flex',
  gap: '16px',
  height: '100%',
});

export const LinkContainerStyled = styled(Link, {
  shouldForwardProp: (props) => props !== 'isActive',
})<ILinkContainerStyledProps>(({ theme, isActive }) => ({
  alignItems: 'center',
  background: 'none',
  color: isActive ? '#E5C958' : 'black',
  display: 'flex',
  gap: theme.spacing(),
  height: '100%',
  justifyContent: 'center',
  position: 'relative',
  textDecoration: 'none',
  transition: '.3s ease-in-out',

  "&:hover": {
    color: '#E5C958',
  },
  "&:hover::after": {
    content: '""',
    width: '100%',
  },
  "::after": {
    backgroundColor: '#E5C958',
    borderRadius: '12px',
    content: '""',
    height: '2px',
    position: 'absolute',
    top: 48,
    transition: 'width .3s ease-in-out',
    width: isActive ? '100%' : '0%',
  },
}));
