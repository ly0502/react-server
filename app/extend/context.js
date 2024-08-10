// app/extend/context.js
module.exports = {
  async setRoom(id) {
    try {
      const room = JSON.parse(await this.app.redis.get('room') || '[]')
      const setRoom = JSON.stringify([...new Set(room.concat(id))])
      await this.app.redis.set('room',setRoom)
    } catch (error) {
      this.app.logger.error(new Error(error));
    }
  },
  async getRoom() {
    try {
      const room = JSON.parse(await this.app.redis.get('room') || '[]');
      return room;
    } catch (error) {
      this.app.logger.error(new Error(error));
      return []
    }
  },
};
