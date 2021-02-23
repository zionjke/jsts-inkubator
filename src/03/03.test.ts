import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        "name": 'Artem',
        "age": 32,
        isActive: false,
        address: {
            streetTitle: 'Trublaini',
            city: {
                title: 'Kiev',
                countryTitle: 'Ukraine'
            }
        },
        technologies: [
            {id: 1, title: 'Html'},
            {id: 2, title: 'JS'},
            {id: 3, title: 'React'}
        ]
    };
})


test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'Angular');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('Angular');
    expect(student.technologies[3].id).toBeDefined() // определен
})

test('make student is active',() => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true)
});

test('student lives in city?',() => {
   let result =  doesStudentLiveIn(student, 'Kiev');
   let result2 =  doesStudentLiveIn(student, 'Moskow');
   expect(result).toBe(true);
   expect(result2).toBe(false);
});
