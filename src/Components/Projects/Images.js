const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../../Images/", false, /\.(png|jpe?g|svg)$/)
);

export default images;
