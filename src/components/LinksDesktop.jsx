import tw, {styled} from "twin.macro";
import React from 'react'
import { Link } from "gatsby"

export default function LinksDesktop() {

    return (
    <>
        <StyledLink to="/"
            activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
            Stephen Parker
        </StyledLink>

        <StyledLink to="/daily-photo"
            activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
            Daily Photo
        </StyledLink>

        <StyledLink to="/skilltree"
            activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
            Skill Tree
        </StyledLink>

        <StyledLink to="/projects"
            activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
            Projects
        </StyledLink>

        <StyledLink to="/blog"
            activeStyle={tw`block mt-1 px-2 py-1 font-semibold text-burnt rounded border-b-2 border-burnt`}>
            My Blog
        </StyledLink>
    </>
    )
}

const StyledLink = styled(Link)`
${tw`hidden sm:block mt-1 px-2 py-1 font-semibold text-gunmetal rounded hover:bg-powder`};
`


