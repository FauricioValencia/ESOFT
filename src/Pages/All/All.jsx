import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


//  REDUX
import { connect } from 'react-redux';
import { getApiAllPetsAsync, postApiAllDataPets, postPetSelect } from '../../store/actions/pets';
//  CUSTOM COMPONENTS
import CardPet from '../../Components/CardPet/CardPet';
// import styles from './styles.scss';
// const cx = classNames.bind(styles);


class All extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    };
  }
  componentDidMount=()=>{
    this.getData();
  }
  getData =async() =>{
    const  { getApiAllPetsAsync, postApiAllDataPets } = this.props;
    const data =await getApiAllPetsAsync();
    postApiAllDataPets(data.message);

  }
  selectPet=(item)=>{
    const { postPetSelect } = this.props;
    console.log('pet select: ', item);
    postPetSelect(item);
  }

  render() {
    const  { allPets, classes } = this.props;

    return (
        <Grid container direction="row" spacing={16}>
          {Array.isArray(allPets)
                && allPets.length >0
                &&
                allPets.map(item=>{
              return(
                <Grid item sm={3} xs={12} spacing={Number(10)}>
                  <CardPet
                    onHandle={()=>this.selectPet(item)}
                    data={item}
                    />
                </Grid>
                );
              })
          }
        </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('datos que trae desde el redux', state);
  return {
    allPets: state.listRandomPets.allPetsList
  };
};
const mapDispatchToProps = {
  getApiAllPetsAsync,
  postApiAllDataPets,
  postPetSelect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(All);
