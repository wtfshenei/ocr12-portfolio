import React from 'react';
import {WindowContainer, WindowContent, WindowTitlebar} from "./window.styles";

const Window = (props) => {
    return (
        <WindowContainer {...props}>
            <WindowTitlebar>App.exe - Blablablabla</WindowTitlebar>
            <WindowContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit leo, semper a erat at, elementum placerat elit. Morbi quis dui vitae nulla sodales rutrum. Aenean at odio vitae massa congue bibendum vel eu nunc. Nam egestas mi lacus, ullamcorper consectetur arcu vestibulum id. Duis fermentum lacus turpis, vel maximus velit molestie non. Suspendisse in quam porttitor, interdum erat et, mattis quam. Pellentesque vestibulum eros sit amet velit tincidunt, nec lacinia nisl suscipit. Suspendisse potenti. Fusce dignissim, turpis nec vestibulum hendrerit, neque lorem interdum lorem, ac tincidunt lectus risus ut tellus. Maecenas luctus porta sodales. Suspendisse et tellus enim. Aenean.</WindowContent>
        </WindowContainer>
    );
};

export default Window;