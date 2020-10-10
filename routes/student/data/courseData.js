var Mock = require('mockjs');
var Random = Mock.Random;

const courseData = Mock.mock({
    "result|6-22": [{
        "classId|1-1000": 1,
        "courseId|1-1000": 1,
        "courseName": Random.cname(),
        "courseEnName": Random.name(),
        "coursePictureUrl": Random.image(),
        "subjectId|1-1000": 1,
        "courseStatus|1-3": 1,
        "courseEndTime": Random.datetime(),
        "courseStartTime": Random.datetime(),
        "finishedLessonCounts|1-200": 6,
        "lessonCounts|2-2960": 6,
        "courseType|0-1": 1,

    }]
});

module.exports = courseData