
class TestService {
    async getTest() {
        console.log(`Test request!`);
        return {message: `Success`};
    }
}

module.exports = new TestService();