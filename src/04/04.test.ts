import {CourseType, TaskType} from "./04";

test('should take old men older than 90', () => {

    const ages = [18, 22, 42, 53, 69, 100, 1]

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take chip courses', () => {

    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 250},
    ]


    const chipCourses = courses.filter((course: CourseType) => course.price < 160)

    expect(chipCourses.length).toBe(1)
    expect(chipCourses[0].price).toBe(100)

})


test('get only completed tasks', () => {

    const tasks: Array<TaskType> = [
        {id: 0, title: 'Buy Milk', isDone: false},
        {id: 1, title: 'Learn Book', isDone: true},
        {id: 2, title: 'Go GYM', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].title).toBe('Go GYM')


})
