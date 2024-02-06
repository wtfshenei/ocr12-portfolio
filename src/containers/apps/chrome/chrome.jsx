import React, {useState} from 'react';
import {BookmarkButton, BookmarksBar, ButtonNavigator, ContentContainer, ContentNavigator, HeaderNavigator, LeftMainBar, Loading, LoadingContainer, MainBar, RightMainBar} from "./chrome.styled";
import Input from "../../../components/input/input";
import ReactIcon from "../../../components/utils/icons/react/reactIcon";
import ArrowLeft from "../../../components/utils/icons/webBrowser/arrowLeft";
import ArrowRight from "../../../components/utils/icons/webBrowser/arrowRight";
import Reload from "../../../components/utils/icons/webBrowser/reload";
import House from "../../../components/utils/icons/webBrowser/house";
import Javascript from "../../../components/utils/icons/javascript/javascript";
import ReduxIcon from "../../../components/utils/icons/redux/reduxIcon";
import Pict1 from './assets/img/pict1.jpg';
import Pict2 from './assets/img/pict2.jpg';
import Pict3 from './assets/img/pict3.png';
import Pict4 from './assets/img/pict4.png';


const Chrome = () => {
    const projects = [
        {
            id: 'home',
            title: 'Home',
            icon: <House/>,
            content: {
                name: 'Test 1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis porttitor odio. In' +
                    ' porttitor varius condimentum. Duis non sem dolor. Cras ullamcorper sapien augue, vel elementum neque vestibulum nec. Duis non tortor magna. Vivamus euismod orci et leo vulputate, quis malesuada sapien mollis. Donec rhoncus sapien a velit aliquam laoreet. Vestibulum sodales felis in convallis tempor. Morbi ante augue, convallis id fermentum id, venenatis ac nisl. Nam in nulla leo.',
                pictures: [`${Pict1}, ${Pict2}, ${Pict3}, ${Pict4}`],
                technos: '',
                repoGitHub: 'https://github.com/wtfshenei'
            }
        },
        {
            id: 'project1',
            title: 'Projet 1',
            icon: <Javascript/>,
            content: {
                name: 'Test 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis porttitor odio. In' +
                    ' porttitor varius condimentum. Duis non sem dolor. Cras ullamcorper sapien augue, vel elementum neque vestibulum nec. Duis non tortor magna. Vivamus euismod orci et leo vulputate, quis malesuada sapien mollis. Donec rhoncus sapien a velit aliquam laoreet. Vestibulum sodales felis in convallis tempor. Morbi ante augue, convallis id fermentum id, venenatis ac nisl. Nam in nulla leo.',
                pictures: [`${Pict1}, ${Pict2}, ${Pict3}, ${Pict4}`],
                technos: '',
                repoGitHub: 'https://github.com/wtfshenei'
            }
        },
        {
            id: 'project2',
            title: 'Projet 2',
            icon: <ReactIcon/>,
            content: {
                name: 'Test 3',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis porttitor odio. In' +
                    ' porttitor varius condimentum. Duis non sem dolor. Cras ullamcorper sapien augue, vel elementum neque vestibulum nec. Duis non tortor magna. Vivamus euismod orci et leo vulputate, quis malesuada sapien mollis. Donec rhoncus sapien a velit aliquam laoreet. Vestibulum sodales felis in convallis tempor. Morbi ante augue, convallis id fermentum id, venenatis ac nisl. Nam in nulla leo.',
                pictures: [`${Pict1}, ${Pict2}, ${Pict3}, ${Pict4}`],
                technos: '',
                repoGitHub: 'https://github.com/wtfshenei'
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
        }, 1000)
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
                        <ButtonNavigator><Reload/></ButtonNavigator>
                    </LeftMainBar>
                    <Input disabled value={`http://localhost:3000/${currentProject.title}`}></Input>
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
                        <h2>{currentProject.title}</h2>
                        <p>{currentProject.content}</p>
                    </>
                )}
            </ContentNavigator>
        </ContentContainer>
    );
};

export default Chrome;