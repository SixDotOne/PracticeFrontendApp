import axios from 'axios';

class Test {
  endpoint = '/tests';

  async fetchTests() {
    try {
      const response = await axios.get(this.endpoint);

      return {
        data: response.data,
        success: true
      }
    } catch(ex) {
      console.warn(ex);
      return {
        data: {},
        success: false
      }
    }
  }
}

const testService = new Test();
export {
  testService,
  Test
};