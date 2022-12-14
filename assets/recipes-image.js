import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import config from '../src/config';

const RecipesImage = function RecipesImage({ width, height, style }) {
  return (
    <View style={{ width, height }}>
      <Svg xmlns="http://www.w3.org/2000/svg" style={style} width="100%" height="100%" viewBox="0 0 640 512">
        <Path fill={config.primaryTextColor} d="M304 32v376L96 368V34.7c0-19.8 17.8-34.9 37.3-31.6L304 32zM89.7 405.1 320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4V28.8l25.7-5.1c19.8-4 38.3 11.1 38.3 31.3v366.8c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8V55c0-20.2 18.5-35.3 38.3-31.3L64 28.8v345c0 15.3 10.8 28.4 25.7 31.4zM336 408V32L506.7 3.1C526.2-.2 544 14.9 544 34.7V368l-208 40z" />
      </Svg>
    </View>
  );
};

RecipesImage.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

RecipesImage.defaultProps = {
  style: {},
};

export default RecipesImage;
