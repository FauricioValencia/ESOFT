import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
};

const CardPet = (props) => {
  const { classes, data, onHandle } = props;
  return (
    <Link to="/Detail">
      <Card
        className={classes.card}
        onClick={onHandle}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Ver mas
          </Button>
        </CardActions> */}
      </Card>
    </Link>
  );
};

CardPet.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.string.isRequired,
  onHandle: PropTypes.func.isRequired,
};

export default withStyles(styles)(CardPet);
