var faker = require('faker');
faker.locale = "zh_CN"; // 语言设置

const testFakerData = {
    result: {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomCard: faker.helpers.createCard()
    }
}

module.exports = testFakerData