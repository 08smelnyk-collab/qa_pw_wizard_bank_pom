function MinStack() {
  this.storage = [];
  this.minStorage = [];
}

MinStack.prototype.push = function(val) {
  if (arguments.length === 0) return; // Це виправить помилку [undefined]
  this.storage.push(val);
  if (this.minStorage.length === 0 || val <= this.getMin()) {
    this.minStorage.push(val);
  }
};
// ... решта методів (pop, top, getMin)