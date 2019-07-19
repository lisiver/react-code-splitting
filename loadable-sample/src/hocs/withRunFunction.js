const withRunFunction = (getFunction) => {
  getFunction().then(({ default: Splitted }) => {
    Splitted();
  });
};

export default withRunFunction;
