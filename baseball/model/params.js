// Constants from training data
const constants = {
  VX0_MIN: -18.885,
  VX0_MAX: 18.065,
  VY0_MIN: -152.463,
  VY0_MAX: -86.374,
  VZ0_MIN: -15.5146078412997,
  VZ0_MAX: 9.974,
  AX_MIN: -48.0287647107959,
  AX_MAX: 30.592,
  AY_MIN: 9.397,
  AY_MAX: 49.18,
  AZ_MIN: -49.339,
  AZ_MAX: 2.95522851438373,
  START_SPEED_MIN: 59,
  START_SPEED_MAX: 104.4,
  NUM_PITCH_CLASSES: 7,
  TRAINING_DATA_LENGTH: 7000,
  TEST_DATA_LENGTH: 700,
  LABELS: [
    'Fastball (2-seam)',
    'Fastball (4-seam)',
    'Fastball (sinker)',
    'Fastball (cutter)',
    'Slider',
    'Changeup',
    'Curveball',
  ],
};

// Returns the string value for Baseball pitch labels
function pitchFromClassNum(classNum) {
  return constants.LABELS[classNum] || 'Unknown';
}

module.exports = {
  constants,
  pitchFromClassNum,
};