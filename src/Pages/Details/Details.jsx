import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
//  REDUX
import { connect } from 'react-redux';
//  CUSTOM COMPONENTS
import CardPet from '../../Components/CardPet/CardPet';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { petSelect } = this.props;

    return (
      <Grid container>
        <Grid item sm={6} direction="row" xs={12}>
          <Grid container spacing={16}>
            {
              <Grid
                item
                sm={6}
                xs={12}
                spacing={Number(10)}
              >
                <CardPet
                  data={petSelect}
                />
              </Grid>
          }
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Grid>
      </Grid>
    );
  }
}
Details.propTypes = {
  petSelect: PropTypes.string,
};
Details.defaultProps = {
  petSelect: '-',
};

const mapStateToProps = (state) => {
  return {
    petSelect: state.listRandomPets.petSelect,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Details);
