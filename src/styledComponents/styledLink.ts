import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        color: #f20179;
    }

    &.active {
        color: #f20179 !important;

    }`