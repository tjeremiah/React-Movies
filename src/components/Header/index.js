import React from 'react';

import RMDBLogo from '../../images/movie-logo.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
<Wrapper>
    <Content>
        <LogoImg src={ RMDBLogo } alt = 'rmdb-logo' />
        <TMDBLogoImg src={ TMDBLogo } alt = 'tmdb-logo' />
    </Content>
</Wrapper>

);

export default Header;