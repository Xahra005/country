import React from "react";
import { Content, Wrapper } from "./grid.style";




const Grid=({children})=>{
    <> 
    <Wrapper>
        <Content>
        {children}
        </Content>
     
    </Wrapper>
    </>

}


export default Grid;