const { constants } = require('./params');

function normalize(value, min, max) {
  if (!min && !max) {
    return value;
  }
  return (value - min) / (max - min);
}

// Converts a row from the CSV into features and labels.
// Each feature field is normalized within training data constants
const csvTransform = ({xs, ys}) => {
  const values = [
    normalize(xs.vx0, constants.VX0_MIN, constants.VX0_MAX),
    normalize(xs.vy0, constants.VY0_MIN, constants.VY0_MAX),
    normalize(xs.vz0, constants.VZ0_MIN, constants.VZ0_MAX),
    normalize(xs.ax, constants.AX_MIN, constants.AX_MAX),
    normalize(xs.ay, constants.AY_MIN, constants.AY_MAX),
    normalize(xs.az, constants.AZ_MIN, constants.AZ_MAX),
    normalize(xs.start_speed, constants.START_SPEED_MIN, constants.START_SPEED_MAX),
    xs.left_handed_pitcher
  ];
  return {xs: values, ys: ys.pitch_code};
}

module.exports = {
  normalize,
  csvTransform,
};
