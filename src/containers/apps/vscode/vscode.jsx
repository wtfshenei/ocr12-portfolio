import React from 'react';
import {ContentContainer, ContentLeftWrapper, ContentRightWrapper, RowItems, RowItemsTitle} from "./vscode.styled";
import AngleDown from "../../../components/utils/icons/angles/angleDown";

const Vscode = () => {
    return (
        <ContentContainer>
            <ContentLeftWrapper>
                <RowItemsTitle>
                    <AngleDown/>
                    <p className={'p-title'}>portfolio</p>
                </RowItemsTitle>
            </ContentLeftWrapper>
            <ContentRightWrapper>
                <h2>RIGHT</h2>
            </ContentRightWrapper>
        </ContentContainer>
    );
};

export default Vscode;