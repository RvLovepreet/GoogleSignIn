/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
/**
 * Colors
 */
export const Colors = {
  // Example.tsx colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#54607d',
  primary: '#3eccf0',
  success: '#28a745',
  error: '#dc3545',
  lightBlack: '#b6bdd4',
};
export const NavigationColors = {
  primary: Colors.primary,
};
/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40,
};
/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export const Common = {
  skip: 'SKIP',
  next: 'Next',
  start: 'Start',
  signIn: 'Sign In',
  signout: 'Sign Out',
  name: 'Name:',
  email: 'Email:',
  familyName: 'Family Name',
  password: 'Password',
};
export const ImagePath = {
  logo: require('../theme/assets/images/googlelogo.png'),
  painting: require('../theme/assets/images/painting.jpeg'),
  userImage: require('../theme/assets/images/user.png'),
};
export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  Common,
  ImagePath,
};
