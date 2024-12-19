const Sparrow = {
  tweet () {
    console.log("pio pio");
  },
  _lifeSpan : 42,
  getLifeSpan () {
    return this._lifeSpan;
  }
};

module.exports = Sparrow;
