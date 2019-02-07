import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//  REDUX
import { connect } from 'react-redux';
//  CUSTOM COMPONENTS
import CardPet from '../../Components/CardPet/CardPet';
import ButtonCustom from '../../Components/Button/Button';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    };
  }
  componentDidMount=()=>{
    console.log('entro al detail');
  }

  render() {
    const  { petSelect } = this.props;

    return (
        <Grid container >
        <Grid item sm={6} direction="row" xs={12}>
          <Grid container spacing={16}>
          {
                <Grid item sm={6} xs={12} spacing={Number(10)}
                      justify="center"
                      alignItems="center">
                  <CardPet
                    data={petSelect}
                    />
                </Grid>
          }
          </Grid>
        </Grid>
          <Grid item sm={6} xs={12}>
          <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    petSelect: state.listRandomPets.petSelect
  };
};

export default connect(
  mapStateToProps,
  null,
)(Details);
