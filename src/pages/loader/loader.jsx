import React, {useEffect} from 'react';
import {StyledLogoWindows, WrapperCenter} from "./loader.styled";
import {useNavigate} from "react-router-dom";

const Loader = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/login")
        }, 4000)
        return () => clearTimeout(timer)
    }, [navigate])

    return (
      <WrapperCenter>
          <StyledLogoWindows></StyledLogoWindows>
      </WrapperCenter>
    )
};

export default Loader;