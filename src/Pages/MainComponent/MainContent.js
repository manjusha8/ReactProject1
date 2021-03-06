import React, { Component } from "react";
import {
  MainContentWrapper,
  LatestRecipes,
  LeftWrapper,
  RightWrapper,
  SearchWrapper,
  AuthorWrapper,
  Tables,
  CardWrapper,
  Cards,
  BreakThrough,
  Buttons,
  GridButton,
  ListButton,
} from "./MainStyle";
import GridCard from "../GridComponent/GridCard";
import ListCard from "../ListComponent/ListCard";
import SearchBox from "../SearchComponent/SearchBox";
import AuthorBox from "../AuthorComponent/AuthorBox";
import axios from '../../axios_recipes';


class MainContent extends Component {
  state = {
    cards: [],
    tempCards: [],
    hover: false,
    grid: true,
    list: false,
    input : '',
    availableCards: [],
    loading: true,

  };

  onHover = () => this.setState({ hover: true });

  componentDidMount()
    {
      window.scrollTo(0,0)
      axios
      .get('/.json')
        .then(
          response => 
          this.setState({
            loading: false,
            cards: response.data
          }),
          console.log("cards in home page: ", this.state.cards),

        )
        .catch(err => console.log("no response from mock: ",err))
    }

  listHandler = () =>
    this.setState({
      list: !this.state.list,
      grid: !this.state.grid,
    });

  gridHandler = () =>
    this.setState({
      grid: !this.state.grid,
      list: !this.state.list,
    });

    handleInputChange = (event) =>{
      
      let input= event.target.value
      this.setState({
        input: input
      })
      let temp= []

      if (input.length === 0) {
        this.setState({
          tempCards: []
        });
      } else {
        let cards = [...this.state.cards];
        cards.filter(card=> {
          if (card.recipe.toLocaleLowerCase().includes(input.toLowerCase())) {
            temp.push(card);
          }
        });
      }

        this.setState({
          tempCards: temp
        })
  }


  render() {
    return (
      <div>
        <MainContentWrapper>
          <LeftWrapper>
            <Tables>
              <LatestRecipes>Latest Recipes </LatestRecipes>
              <span style={{ width: "515px", display: "inline-block" }}>
                <BreakThrough />
              </span>
            </Tables>
            <CardWrapper>
              <Buttons>
                <ListButton onClick={this.listHandler} state={this.state.list}>
                  List
                </ListButton>
                <GridButton onClick={this.gridHandler} state={this.state.grid}>
                  Grid
                </GridButton>
              </Buttons>
              {this.state.cards!== null ?

              <Cards>
                {this.state.list ? <ListCard value={this.state.cards} tempValue= {this.state.tempCards}/> : null}
                {this.state.grid ? <GridCard value={this.state.cards} tempValue= {this.state.tempCards}/> : null}
              </Cards> 

              : null }
            </CardWrapper>
          </LeftWrapper> 
          
          <RightWrapper>
            <SearchWrapper>
              <SearchBox changeHandler= {this.handleInputChange} inputValue= {this.state.input}/>
            </SearchWrapper>
            <AuthorWrapper>
              <AuthorBox />
            </AuthorWrapper>
          </RightWrapper>
        </MainContentWrapper>
      </div>
    );
  }
}

export default MainContent;
