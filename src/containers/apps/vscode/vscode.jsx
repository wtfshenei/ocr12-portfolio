import React from 'react';
import {ContentContainer, ContentLeftWrapper, ContentRightWrapper, MenuItemsLeft, RowItems, RowItemsTitle} from "./vscode.styled";
import AngleDown from "../../../components/utils/icons/angles/angleDown";
import AngleRight from "../../../components/utils/icons/angles/angleRight";
import Folder from "../../../components/utils/icons/folder/folder";
import ReactIcon from "../../../components/utils/icons/react/reactIcon";
import Javascript from "../../../components/utils/icons/javascript/javascript";
import CheckContent from "../../../components/checkContent/checkContent";
import {useMobile} from "../../../mobile/utils/MobileContext";

const Vscode = () => {
    const isMobile = useMobile()

    return (
        <ContentContainer>
            <CheckContent>
                <ContentLeftWrapper isMobile={isMobile}>
                    <RowItemsTitle>
                        <AngleDown/>
                        <p className={'p-title'}>portfolio</p>
                    </RowItemsTitle>
                    <MenuItemsLeft>
                        <RowItems>
                            <AngleRight/>
                            <Folder/>
                            <p>src</p>
                        </RowItems>
                        <RowItems className={'child2'}>
                            <AngleDown/>
                            <Folder/>
                            <p>components</p>
                        </RowItems>
                        <RowItems className={'child3'}>
                            <ReactIcon/>
                            <p>aboutMe.jsx</p>
                        </RowItems>
                        <RowItems className={'child3'}>
                            <ReactIcon/>
                            <p>studies.jsx</p>
                        </RowItems>
                        <RowItems className={'child3'}>
                            <ReactIcon/>
                            <p>career.jsx</p>
                        </RowItems>
                        <RowItems className={'child3'}>
                            <Javascript fill={'yellow'}/>
                            <p>picture.styled.js</p>
                        </RowItems>
                    </MenuItemsLeft>
                </ContentLeftWrapper>
            </CheckContent>
            <ContentRightWrapper>
                <h2>RIGHT</h2>
            </ContentRightWrapper>
        </ContentContainer>
    )
        ;
};

export default Vscode;