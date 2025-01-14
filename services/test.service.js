
let value = 'no data';

class TestService {
    async getTest(payload) {
        value = payload;
        return {message: `Success`};
    }

    async getData() {
        return {message: `Success`, data: {value}};
    }
}

module.exports = new TestService();