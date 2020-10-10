var Mock = require('mockjs');
var Random = Mock.Random;

const homeData = Mock.mock({
    "result": {
        "currentTime": Random.datetime(),
        "todayTasks|6-22": [{
            "startTime": Random.datetime(),
            "endTime": Random.datetime(),
            "duration|100-253": 1,
            "starMark": Random.boolean(),
            "taskType|0-2": 0,
            "status|0-5": 0,
            "subject|1-11": 0,
            "taskBO|1": [{
                    "courseId|1-1000": 1,
                    "courseName": Random.cname(),
                    "lessonEnName": Random.name(),
                    "courseEnName": Random.name(),
                    "lessonId|1-1000": 1,
                    "teacherEnNames|7-9": Random.name(),
                    "lessonName": Random.cname(),
                    "teacherNames|11-20": Random.cname()
                },
                {
                    "examId|1-1000": 1,
                    "examCode": Random.string(),
                    "examType|0-1": 0,
                    "examName": Random.cname(),
                    "topicsNumber|1-1000": 1
                },
                {
                    "homeWorkId|1-1000": 1,
                    "questionNum|1-1000": 1,
                    "courseId|1-1000": 1,
                    "lessonId|1-1000": 1,
                    "homeWorkName": Random.cname(),
                    "courseName": Random.cname(),
                    "lessonName": Random.cname(),
                    "courseEnName": Random.name(),
                    "lessonEnName": Random.name(),
                    "submitted": Random.boolean(),
                }
            ]
        }],
        "comingUpTasks|3-16": [{
            "startTime": Random.datetime(),
            "endTime": Random.datetime(),
            "duration|100-253": 1,
            "starMark": Random.boolean(),
            "taskType|0-2": 0,
            "status|0-1": 0,
            "subject|1-12": 0,
            "taskBO|1": [{
                    "courseId|1-1000": 1,
                    "courseName": Random.cname(),
                    "lessonEnName": Random.name(),
                    "courseEnName": Random.name(),
                    "lessonId|1-1000": 1,
                    "teacherEnNames|7-9": Random.name(),
                    "lessonName": Random.cname(),
                    "teacherNames|11-20": Random.cname()
                },
                {
                    "examId|1-1000": 1,
                    "examCode": Random.string(),
                    "examType|0-1": 0,
                    "examName": Random.cname(),
                    "topicsNumber|1-1000": 1
                },
                {
                    "homeWorkId|1-1000": 1,
                    "questionNum|1-1000": 1,
                    "courseId|1-1000": 1,
                    "lessonId|1-1000": 1,
                    "homeWorkName": Random.cname(),
                    "courseName": Random.cname(),
                    "lessonName": Random.cname(),
                    "courseEnName": Random.name(),
                    "lessonEnName": Random.name(),
                    "submitted": Random.boolean(),
                }
            ]
        }]
    }
});

module.exports = homeData