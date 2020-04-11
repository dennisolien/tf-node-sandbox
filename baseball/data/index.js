const tf = require('@tensorflow/tfjs-node');
const { csvTransform } = require('../model/transformers');
const { constants, pitchFromClassNum } = require('../model/params');

const getPath = (fileName) => `file://${__dirname}/${fileName}`;

const TRAIN_DATA_PATH = getPath('pitch_type_training_data.csv');
const TEST_DATA_PATH = getPath('pitch_type_test_data.csv');


const trainingData = tf.data
  .csv(TRAIN_DATA_PATH, {
    columnConfigs: {
      pitch_code: {
        isLabel: true
      }
    }
  })
    .map(csvTransform)
    .shuffle(constants.TRAINING_DATA_LENGTH)
    .batch(100);

// Load all training data in one batch to use for evaluation
const trainingValidationData = tf.data
  .csv(TRAIN_DATA_PATH, {
    columnConfigs: {
      pitch_code: {
        isLabel: true,
      },
    },
  })
    .map(csvTransform)
    .batch(constants.TRAINING_DATA_LENGTH);

// Load all test data in one batch to use for evaluation
const testValidationData = tf.data
  .csv(TEST_DATA_PATH, {
    columnConfigs: {
      pitch_code: {
        isLabel: true,
      },
    },
  })
    .map(csvTransform)
    .batch(constants.TEST_DATA_LENGTH);

module.exports = {
  trainingData,
  trainingValidationData,
  testValidationData,
};
