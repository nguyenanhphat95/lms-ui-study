// @ts-ignore
import colorsAsText from '!!raw-loader!../../src/styles/colors.scss';

const linesOfColor = colorsAsText.split('\n');
const colors = linesOfColor.map(item => item.replace(';', '').split(':'));

export default colors;
