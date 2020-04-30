import React, { useState } from "react";
import {
  CardWrapper,
  ImageWrapper,
  ViewButtonWrapper,
  Wrapper,
  ContentWrapper,
  Title,
  Content,
  Ratings,
  Time,
} from "../GridComponent/GridStyle";
import StarComponent from "../StarComponent/StarComponent";
import ViewButton from "../ViewRecipeComponent/ViewButton";
import { FaClock } from "react-icons/fa";
import {withRouter} from 'react-router-dom';
import NotAvailable from "../NothingFound/NotAvailable";

function SearchValue(props) {

  const [isShown, setIsShown] = useState(null);

  function clickHandler(id) {
    setIsShown(id);
    console.log("isShown ", isShown);
  }

  const navigateToRecipe= (data) =>{
    props.history.push({
      pathname : "/viewrecipe",
      state: {
        data: data
      }
    });
    console.log("navigateToRecipe",data);
    
  }

  return props.value!== null ? (
    <Wrapper>
      {props.value.map((value, index) => (
         
        <CardWrapper>
          
          <ImageWrapper
            onMouseOver={() => {
              clickHandler(value.id);
            }}
          >
            <img src={value.imgUrl} style={{ width: "100%", height: "100%" }} />

            {console.log(value.id === isShown)}
            <ViewButtonWrapper active={value.id === isShown}>
              <ViewButton clicked = {() => navigateToRecipe(value)}/>
            </ViewButtonWrapper>
          </ImageWrapper>

          <ContentWrapper>
            <Title>
              {value.recipe} <hr />
            </Title>
            <Content>
              <Ratings>
                <StarComponent starValue={value.ratings} />
              </Ratings>
              <Time>
                <FaClock color={"#909090"} padding={"0 5px 0 0"} />
                {value.prepTime}
              </Time>
            </Content>
          </ContentWrapper>
          
        </CardWrapper>
        
      ))}
    </Wrapper>
    
  ) : <NotAvailable/> ;
}
export default withRouter(SearchValue);