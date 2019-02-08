import React, { Component, lazy, Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
//  REDUX
import { connect } from 'react-redux';
import { getApiPetsAsync, getDataApiPets, postPetSelect } from '../../store/actions/pets';
//  CUSTOM COMPONENTS
import CardPet from '../../Components/CardPet/CardPet';
import Spinner from '../../Components/Spinner/Spinner'
//  lasy  loading
const ButtonCustom = lazy(()=>import('../../Components/Button/Button'));
class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    };
  }
  componentDidMount(){
    this.getData();
  }
  getData = async() =>{
    const  { getApiPetsAsync, getDataApiPets } = this.props;
    const data =await getApiPetsAsync();
    getDataApiPets(data.message);

  }
  //  la variable item es un string, y que hace la funcion....
  selectPet=(item)=>{
    const { postPetSelect } = this.props;
    postPetSelect(item);
  }

  render() {
    const  { petsRandom, classes } = this.props;

    return (
    
      <Grid container >
        <Grid item sm={6} xs={12}>
          <h1>Pets Factory</h1>
          <h3>Lugar donde se encontrara una gran varidad de perros</h3>
          <Suspense fallback={<Spinner/>}>
          <ButtonCustom>Ver más</ButtonCustom>
          </Suspense>
        </Grid>
        <Grid item sm={6} direction="row" xs={12}>
          <Grid container spacing={16}>
          {Array.isArray(petsRandom)
                && petsRandom.length >0
                  ?
            petsRandom.map(item=>{
              return(
                <Grid item sm={6} xs={12} spacing={Number(10)}>
                  <CardPet
                    data={item}
                    onHandle={()=>this.selectPet(item)}
                    />
                </Grid>
                );
              })
              :
              <Spinner />
          }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    petsRandom: state.listRandomPets.randomPets
  };
};
const mapDispatchToProps = {
  getApiPetsAsync,
  getDataApiPets,
  postPetSelect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
