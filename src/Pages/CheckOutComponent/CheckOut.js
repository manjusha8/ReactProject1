import React,{useEffect, useState} from 'react';
import StarComponent from '../StarComponent/StarComponent';
import {Wrapper,Folded,Header,ImageWrapper,Banner,InfoWrapper,Infomartion,Heading,Detail,LeftDiv,Print,RightButton,IngredientsWrapper,Ingredients,IngredientsContent,ListWrapper,Lists,CheckBox,LabelList,BasicContent} from './CheckOutStyle';
import {DirectionsWrapper,DirectionsContent,Directions,Box,DirectionList} from './CheckOutStyle';
import{Title,Ratings,Reviews} from './CheckOutStyle';
import AuthorBox from '../AuthorComponent/AuthorBox';
function CheckOut (props){
    
    const[checked , setChecked] = useState ([false,false,false,false,false,false,false,false,false])


    const handleCheck = (id) =>
    {
        console.log("id",id);
        console.log("checked",checked);
        let newChecked = [...checked];
        newChecked[id] = !newChecked[id]
        console.log("newChecked",newChecked);
        setChecked (newChecked);
        console.log("Setchecked",checked);

        // setChecked(id);

    }

    
        return(
            <Wrapper>
                {/* <Folded>
                </Folded> */}
                <div>
                    <Header>
                        <Title>{props.data.recipe}</Title>
                        <div>
                            <Ratings><StarComponent starValue = {props.data.ratings}/></Ratings>
                            <Reviews>({props.data.ratings}  reviews)</Reviews>
                        </div>
                    </Header>
                    <ImageWrapper>
                        <img src = {props.data.imgUrl} alt = "image" style = {{width : '100%',height : '100%'}} />
                    </ImageWrapper>
                    <InfoWrapper>
                        <LeftDiv>
                        <Infomartion>
                            <Heading>serves :</Heading>
                            <Detail>{props.data.servings} people</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Prep Time :</Heading>
                            <Detail>{props.data.prepTime}</Detail>
                        </Infomartion>
                        <Infomartion>
                            <Heading>Cooking :</Heading>
                            <Detail>{props.data.cooking}</Detail>
                        </Infomartion>
                        <Infomartion style ={{borderRight : 'none ! important'}}>
                            <Heading>Calories :</Heading>
                            <Detail>{props.data.Calories}</Detail>
                        </Infomartion>
                        </LeftDiv>
                        <RightButton>
                            <Print>print</Print>
                        </RightButton>
                    </InfoWrapper>
                </div>
                <BasicContent>
                This is a very basic beef stew. It’s easy, delicious and inexpensive to make. While there are hundreds of variations of this traditional recipe, it’s hard to improve on this version’s savory and comforting goodness.
                </BasicContent>
                <IngredientsWrapper>
                    <Ingredients>Ingredients</Ingredients>
                    <IngredientsContent>
                        <ListWrapper>
                            {props.data.ingredients.map(
                                (value,index) =>(
                                    <Lists> 
                                        <CheckBox type="checkbox" onChange={() => handleCheck(index)} name="ingredients" checked={checked[index]} />
                                        <LabelList checked = {checked[index]}> {value} </LabelList>
                                    </Lists>
                                )
                            )}
                        </ListWrapper>
                    </IngredientsContent>
                </IngredientsWrapper>
                <DirectionsWrapper>
                    <Directions>Directions</Directions>
                    <DirectionsContent>
                    <div>
                            {props.data.directions.map(
                                (value,index) =>(
                                    <div style = {{marginBottom : '20px',display : 'flex',alignItems: 'center'}}> 
                                        <Box>{index+1}</Box>
                                        <DirectionList>{value} </DirectionList>
                                    </div>
                                )
                            )}
                        </div>
                    </DirectionsContent>
                </DirectionsWrapper>
                {/* // <div>
                //     {/* <AuthorBox/> */}
                {/* </div>   */}
            </Wrapper>
        );

    
}
export default CheckOut;