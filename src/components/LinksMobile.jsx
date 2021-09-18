import tw, {styled} from "twin.macro";
import React from 'react';
import { Link } from "gatsby";

export default function LinksMobile() {

    return (
    <>
        <StyledLink to="/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Stephen Parker
        </StyledLink>

        <StyledLink to="/projects/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Projects
        </StyledLink>

        <StyledLink to="/skills/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Skills
        </StyledLink>

        <StyledLink to="/gallery/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Gallery
        </StyledLink>

        <StyledLink to="/blog/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Articles
        </StyledLink>

        <StyledLink to="/daily-photo/"
            activeStyle={tw`block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 font-semibold text-almond-light rounded`}>
            Zen
        </StyledLink>
    </>
    )
}

const StyledLink = styled(Link)`
${tw`block sm:hidden mt-1 px-2 py-1 font-semibold text-ming-light rounded hover:bg-fogra-light`};
`


