import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap');
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Spicy Rice', cursive !important;

}

body{
background:#000;
overflow-x:hidden;
overflow-y:scroll
}
`;
