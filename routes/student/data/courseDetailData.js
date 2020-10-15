var Mock = require('mockjs');
var faker = require('faker');
var Random = Mock.Random;

const courseData = Mock.mock({
    "result": {
        "courseType|0-1": 1,
        "courseDetailBO": {
            "classId": faker.random.number(),
            "courseName": faker.name.jobDescriptor(),
            "courseEnName": faker.name.jobTitle(),
            "courseId": faker.random.number(),
            "courseUrl": faker.image.nature(),
            "subjectId|4-12": 6,
            "courseStartTime": faker.date.future(),
            "teacherNames|6-22": [Random.cname()],
            "teacherEnNames|6-22": [Random.name()],
            "assistantNames|6-22": [Random.cname()],
            "assistantEnNames|6-22": [Random.name()],
            "lessonNum": faker.random.number(),
            "introduction": faker.lorem.paragraph(),
            "sortId": faker.random.number(),
            "lessonStartTime": faker.date.past(),
            "lessonDueTime": faker.date.future(),
            "platformType": faker.address.county(),
            "lessonUrl": Random.url('http'),
            "lessons": {
                "sortId": faker.random.number(),
                "lessonId": faker.random.number(),
                "lessonName": Random.cname(),
                "lessonEnName": Random.name(),
                "lessonStartTime": faker.date.past(),
                "lessonEndTime": faker.date.future(),
                "lessonStatus|1-3": 4,
                "lessonLearnBOS|1-12": [{
                    "learnStatus|1-3": "2",
                    "sortId": faker.random.number(),
                    "learnUrl": faker.internet.url(),
                    "learnFileType|1-3": "2",
                    "learnName": Random.cname(),
                    "learnEnName": Random.name()
                }],
                "homeWorkBOS|1-12": [{
                    "homeWorkId": faker.random.number(),
                    "homeWorkName": faker.lorem.sentences(),
                    "homeWorkDuetime": faker.date.future(),
                    "homeWorkStatus|1-3": 2,
                    "homeWorkType|2-5": 3
                }],
                "attachmentBO": {
                    "attachmentFileModel": faker.random.image(),
                    "attachmentModels": {
                        "id": faker.random.number(),
                        "title": faker.name.title(),
                        "enTitle": faker.name.title(),
                        "descs": faker.lorem.paragraph(),
                        "enDescs": faker.lorem.paragraph(),
                        "attachmentFileModels": [{
                            "id": faker.random.number(),
                            "name": Random.cname(),
                            "enName": Random.name(),
                            "key": faker.helpers.userCard(),
                            "type|2-6": "4"
                        }]
                    }
                }
            }
        }
    }
});

module.exports = courseData;