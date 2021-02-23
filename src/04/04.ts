export const ages = [18, 22, 42, 53, 69, 100, 1]



const oldAges = [100]

export type CourseType = {
    title:string
    price:number
}

export type TaskType = {
    id:number
    title:string
    isDone: boolean
}

const courses = [
    {title:'CSS',price:100},
    {title:'JS',price:200},
    {title:'REACT',price:150},
]

const cheapCourses = (course:CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title:'CSS',price: 110}
]

