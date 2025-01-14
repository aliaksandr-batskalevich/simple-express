const testService = require('../services/test.service.js');


class TestController {
    async getTest(req, res, next) {
        try {
            const payload = req.query['t1'];
            const result = await testService.getTest(payload);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async getData(req, res, next) {
        try {
            const result = await testService.getData();
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TestController();