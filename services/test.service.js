
let value = 'no data';

class TestService {
    async getTest() {
        console.log(`Test request!`);
        return {message: `Success`};
    }

    async getData() {
        return {message: `Success`, data: {value}};
    }
}

module.exports = new TestService();