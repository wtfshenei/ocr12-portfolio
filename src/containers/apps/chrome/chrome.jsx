import React from 'react';
import {BookmarksBar, ContentContainer, HeaderNavigator, MainBar} from "./chrome.styles";
import Button from "../../../components/button/button";
import Input from "../../../components/input/input";

const Chrome = () => {
    return (
        <ContentContainer>
            <HeaderNavigator>
                <MainBar>
                    <Button>A</Button>
                    <Button>-></Button>
                    <Button>C</Button>
                    <Input></Input>
                </MainBar>
                <BookmarksBar>
                    <Button>Home</Button>
                    <Button>Projet 1</Button>
                    <Button>Projet 2</Button>
                    <Button>Projet 3</Button>
                </BookmarksBar>
            </HeaderNavigator>
        </ContentContainer>
    );
};

export default Chrome;