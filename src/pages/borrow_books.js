import React from 'react';
import {
    ContentContainer, HeadTitle, PageContainer
  } from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import BorrowedBooks  from '../components/BorrowedBooks';

const Borrow = () => {

    return (
        <div>
        <NavbarHead />
        <PageContainer>
            <ContentContainer>
            <HeadTitle  style={{ marginTop: '130px' }}>Your Books</HeadTitle>
                <BorrowedBooks />
            </ContentContainer>
        <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Borrow;