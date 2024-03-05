import React from 'react';
import {ContentContainer, ContentLeftWrapper, ContentRightWrapper, LinksContainer, LinkWrapper, MenuItemsLeft, PictureContainer, RowItems, RowItemsTitle, TxtsContainer} from "./vscode.styled";
import AngleDown from "../../../components/utils/icons/angles/angleDown";
import AngleRight from "../../../components/utils/icons/angles/angleRight";
import Folder from "../../../components/utils/icons/folder/folder";
import ReactIcon from "../../../components/utils/icons/react/reactIcon";
import Javascript from "../../../components/utils/icons/javascript/javascript";
import CheckContent from "../../../components/checkContent/checkContent";
import {useMobile} from "../../../mobile/utils/MobileContext";
import PictureLP from "./photo.jpg"
import Github from "./assets/social/github/github";
import Linkedin from "./assets/social/linkedin/linkedin";
import Mail from "./assets/social/mail/mail";
import Cv from "./assets/social/cv/cv";
import CvDl from "./assets/social/cv/CV_de_Ludovic_Parriaud.pdf"

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
                        <a href="#aboutme"><RowItems className={'child3 item-menu'}>
                            <ReactIcon/>
                            <p>aboutMe.jsx</p>
                        </RowItems></a>
                        <a href="#studies"><RowItems className={'child3 item-menu'}>
                            <ReactIcon/>
                            <p>studies.jsx</p>
                        </RowItems></a>
                        <a href="#career"><RowItems className={'child3 item-menu'}>
                            <ReactIcon/>
                            <p>career.jsx</p>
                        </RowItems></a>
                        <a href="#profile"><RowItems className={'child3 item-menu'}>
                            <Javascript fill={'yellow'}/>
                            <p>picture.styled.js</p>
                        </RowItems></a>
                    </MenuItemsLeft>
                </ContentLeftWrapper>
            </CheckContent>
            <ContentRightWrapper>
                <PictureContainer>
                    <img src={PictureLP} id={'profile'} alt="Moi"/>
                </PictureContainer>
                <LinksContainer>
                    <a href={"https://github.com/wtfshenei/"} target={"_blank"} rel={"noreferrer"}><LinkWrapper>
                        <Github />
                        <span>Github</span>
                    </LinkWrapper></a>
                    <a href={"https://www.linkedin.com/in/ludovic-parriaud-4254002b8/"} target={"_blank"} rel={"noreferrer"}><LinkWrapper>
                        <Linkedin/>
                        <span>LinkedIn</span>
                    </LinkWrapper></a>
                    <a href={"mailto:ludovic.parriaud@gmail.com"} target={"_blank"} rel={"noreferrer"}><LinkWrapper>
                        <Mail/>
                        <span>Email</span>
                    </LinkWrapper></a>
                    <a href={CvDl} target={"_blank"} rel={"noreferrer"}><LinkWrapper>
                        <Cv/>
                        <span>CV</span>
                    </LinkWrapper></a>
                </LinksContainer>
                <TxtsContainer>
                    <p id={'aboutme'}>
                        <span>Bonjour.</span> Je m'appelle Ludovic Parriaud et j'ai 36 ans. Je vis en Bourgogne et j'ai choisi de me reconvertir comme développeur web après avoir passé plus de 18 ans en tant qu'agent de maintenance ferroviaire à la SNCF. J'ai toujours
                        eu un attrait et une fascination pour le développement, partir de rien et voir un projet prendre vie sous ses yeux est un sentiment incroyable.
                    </p>
                    <p id={'studies'}>
                        <span>Etudes.</span> Apprenti en alternance de 2003 à 2005, j'ai obtenu mon BEP MSMA (Maintenance des Systèmes Mécaniques Automatisés) qui m'a ensuite permi de me faire embaucher au Technicentre de Nevers, l'établissement où j'étais affilié.
                    </p>
                    <p>
                        <span>Formation.</span> J'ai débuté ma formation de reconversion en novembre 2022 jusqu'en mars 2024.
                    </p>
                    <p id={'career'}>
                        <span>Parcours professionnel.</span> Pour le moment mon parcours professionnel se résume à mon expérience au sein de la SNCF. J'ai pu y exercer plusieurs corps de métiers dans lesquels j'ai appris à travailler aussi bien en collaboration
                        qu'en totale autonomie. J'ai toujours fait en sorte d'apprendre un maximum concernant mes affectations afin de pouvoir vulgariser mon savoir et de former mes nouveaux collègues. Au dela des habilitations propres aux métiers que j'exerçais, j'ai
                        toujours été également intéressé par le cadre de vie dans lequel j'évoluais, ce qui m'a, par exemple, amené à devenir Sauveteur-Secouriste du Travail.
                    </p>
                </TxtsContainer>
            </ContentRightWrapper>
        </ContentContainer>
    )
        ;
};

export default Vscode;