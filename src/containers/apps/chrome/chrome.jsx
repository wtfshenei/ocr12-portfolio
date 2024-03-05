import React, {useState} from 'react';
import {BookmarkButton, BookmarksBar, ButtonNavigator, CarouselProjects, ContentContainer, ContentNavigator, HeaderNavigator, LeftMainBar, Loading, LoadingContainer, MainBar, RightMainBar} from "./chrome.styled";
import Input from "../../../components/input/input";
import ReactIcon from "../../../components/utils/icons/react/reactIcon";
import ArrowLeft from "../../../components/utils/icons/webBrowser/arrowLeft";
import ArrowRight from "../../../components/utils/icons/webBrowser/arrowRight";
import House from "../../../components/utils/icons/webBrowser/house";
import Javascript from "../../../components/utils/icons/javascript/javascript";
import ReduxIcon from "../../../components/utils/icons/redux/reduxIcon";
import JSPict1 from './assets/img/project-js/HomepageVisitor.jpg';
import JSPict2 from './assets/img/project-js/HomepageSophie.jpg';
import JSPict4 from './assets/img/project-js/ModaleAdmin1.jpg';
import JSPict5 from './assets/img/project-js/ModaleAdmin2.jpg';
import JSPict6 from './assets/img/project-js/PrevUpload.jpg';
import JSPict7 from './assets/img/project-js/ResultUpload.jpg';
import BankPict1 from './assets/img/project-bank/Homepage.jpg';
import BankPict2 from './assets/img/project-bank/FormLogin.jpg';
import BankPict3 from './assets/img/project-bank/FormNickname.jpg';
import BankPict4 from './assets/img/project-bank/VerifFormNickname.jpg';
import BankPict5 from './assets/img/project-bank/NicknameChanged.jpg';
import PortfolioPict1 from './assets/img/project-portfolio/HomepageDesktop.jpg';
import PortfolioPict2 from './assets/img/project-portfolio/HomepageMobile.jpg';


const Chrome = () => {
    const projects = [
        {
            id: 'home',
            title: 'Home',
            icon: <House/>,
            content: {
                name: 'Portfolio',
                desc: "Plus qu'un projet de formation, il s'agit du portfolio que vous visitez actuellement." +
                    " J'ai voulu faire une intégration originale avec des features qui m'ont poussé à aller plus" +
                    " loin dans ce que j'avais appris sur React jusqu'à présent. La gestion des fenêtres d'apps" +
                    " sont gérées via Redux Toolkit, l'app de messagerie enregistre les brouillons et les messages" +
                    " envoyés en localStorage afin de ressembler un maximum à un logiciel de messagerie. Afin de" +
                    " gérer la version" +
                    " mobile, j'ai utilisé Context de React. Concernant le style, j'ai également utilisé pour la" +
                    " première fois Styled-Components afin de découvrir le CSS-in-JS.",
                pictures: [
                    {src: PortfolioPict1, txt: "Homepage version desktop."},
                    {src: PortfolioPict2, txt: "Homepage version mobile."}
                ],
                technos: ['React', 'Redux Toolkit', 'Styled-Components', 'React-Draggable'],
                repoGitHub: 'https://github.com/wtfshenei/ocr12-portfolio'
            }
        },
        {
            id: 'project1',
            title: 'Projet-JS',
            icon: <Javascript/>,
            content: {
                name: 'Modales d\'administration en JS',
                desc: "Projet qui a consisté à transformer une page HTML unique avec des images en dur dans le code" +
                    " afin de les gérer en Javascript. Création d'une barre de tri permettant de filtrer les" +
                    " créations de la cliente suivant leur catégorie. Transformation de la homepage lorsque la" +
                    " cliente est connectée avec des liens lui permettant de faire apparaître une modale" +
                    " d'administration : par défaut la modale liste les créations de la cliente en y ajoutant un" +
                    " bouton permettant de supprimer un élément (une option permettant la suppression de la gallerie" +
                    " entière est également présente) et si la cliente choisit d'ajouter une nouvelle création, une" +
                    " modale d'upload apparaît permettant de visualiser l'image avant envoi et de lui choisir un nom" +
                    " ainsi qu'une catégorie.",
                pictures: [
                    {src: JSPict1, txt: "Homepage version visiteur."},
                    {src: JSPict2, txt: "Homepage côté cliente, connectée."},
                    {src: JSPict4, txt: "Modale d'administration pour suppression."},
                    {src: JSPict5, txt: "Modale d'administration pour upload."},
                    {src: JSPict6, txt: "Prévisualisation de l'image choisie avant upload."},
                    {src: JSPict7, txt: "Ajout de la nouvelle image et tri."}
                ],
                technos: ['HTML', 'CSS', 'Javascript'],
                repoGitHub: 'https://github.com/wtfshenei/ocr6sophiebluel'
            }
        },
        {
            id: 'project2',
            title: 'Projet-React',
            icon: <ReactIcon/>,
            content: {
                name: 'Interface d\'une agence bancaire',
                desc: "Projet qui a consisté à intégrer l'interface d'une banque en ligne. Le maintien de connexion" +
                    " sauvegarde un token en localStorage avec une validité de 30 minutes à partir du moment de sa" +
                    " création, évitant ainsi un appel inutile à l'API si celui-ci est périmé. Ceci, entre autre," +
                    " afin de respecter la demande de Green Code du projet. Le formulaire de" +
                    " changement de pseudonyme est protégé par une Regexp évitant l'injection de script. Les" +
                    " informations provenant de la base de données sont gérées en instantané via Redux Toolkit.",
                pictures: [
                    {src: BankPict1, txt: "Homepage."},
                    {src: BankPict2, txt: "Formulaire de connexion avec option de maintien."},
                    {src: BankPict3, txt: "Formulaire de modification de pseudonyme."},
                    {src: BankPict4, txt: "Vérification du changement de pseudonyme par une Regexp."},
                    {src: BankPict5, txt: "Interface avec le pseudonyme changé."}
                ],
                technos: ['React', 'Redux Toolkit', 'SASS'],
                repoGitHub: 'https://github.com/wtfshenei/ocrp11-ArgentBank-website'
            }
        }
    ]

    const [currentProject, setCurrentProject] = useState(projects[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const iconReactColor = currentProject.id === 'project1' ? 'grey' : 'dodgerblue'
    const iconReduxColor = currentProject.id === 'project1' ? 'grey' : 'blueviolet'

    const handleBookmarkClick = (index) => {
        setIsLoading(true)

        setTimeout(() => {
            setCurrentProject(projects[index])
            setCurrentIndex(index)
            setIsLoading(false)
        }, 500)
    }

    const handleArrowLeftClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            setCurrentProject(projects[currentIndex - 1])
        }
    }

    const handleArrowRightClick = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setCurrentProject(projects[currentIndex + 1])
        }
    }

    return (
        <ContentContainer>
            <HeaderNavigator>
                <MainBar>
                    <LeftMainBar>
                        <ButtonNavigator onClick={handleArrowLeftClick} disabled={currentIndex === 0}><ArrowLeft/></ButtonNavigator>
                        <ButtonNavigator onClick={handleArrowRightClick} disabled={currentIndex === projects.length - 1}><ArrowRight/></ButtonNavigator>
                    </LeftMainBar>
                    <Input disabled value={`https://portfolio-lp/${currentProject.title}`}></Input>
                    <RightMainBar>
                        <ReactIcon color={iconReactColor}/>
                        <ReduxIcon color={iconReduxColor}/>
                    </RightMainBar>
                </MainBar>
                <BookmarksBar>
                    {projects.map((project, index) => (
                        <BookmarkButton key={project.id} onClick={() => handleBookmarkClick(index)} isActive={currentIndex === index}>
                            {project.icon}
                            {project.title}
                        </BookmarkButton>
                    ))}
                </BookmarksBar>
            </HeaderNavigator>
            <ContentNavigator>
                {isLoading ? (
                    <LoadingContainer>
                        <Loading/>
                    </LoadingContainer>
                ) : (
                    <>
                        <h2>{currentProject.content.name}</h2>
                        <CarouselProjects pictures={currentProject.content.pictures}/>
                        <h3>Description</h3>
                        <p>{currentProject.content.desc}</p>
                        <h3>Technos</h3>
                        {currentProject.content.technos && currentProject.content.technos.length > 0 ? (
                            <ul>
                                {currentProject.content.technos.map((techno, index) => (
                                    <li key={index}>{techno}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Aucune technologie spécifiée.</p>
                        )}
                        <h3>Repo GitHub</h3>
                        <p><a href={currentProject.content.repoGitHub} target="_blank" rel="noreferrer">{currentProject.content.repoGitHub}</a></p>
                    </>
                )}
            </ContentNavigator>
        </ContentContainer>
    );
};

export default Chrome;