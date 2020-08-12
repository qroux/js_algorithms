class User {
  constructor() {
    this.rank = Math.max(8, Math.min(this.rank, -8));

    this.progress = 0;
  }

  incProgress(activity_rank) {
    if (activity_rank === this.rank - 1) return this.addPoints(1);
    if (activity_rank === this.rank) return this.addPoints(3);
    if (activity_rank < this.rank) return this.addPoints(0);

    const d = activity_rank - this.rank;

    return this.addPoints(10 * d * d);
  }

  addPoints(points) {
    const total = this.progress + points;

    if (total < 100) this.progress = total;
    if (total >= 100) {
      if (this.rank === -1) {
        this.rank = 1;
      } else if (this.rank === 8) {
      } else {
        this.rank += 1;
      }
      this.progress = total - 100;
    }
  }
}

const user = new User();
console.log("rank", user.rank);
console.log("progress", user.progress);
user.incProgress(-7);
console.log("after inc progress, must be 10", user.progress);
user.incProgress(-5);
console.log("after inc progress, must be 0", user.progress);
console.log("rank, must be -7", user.rank);
