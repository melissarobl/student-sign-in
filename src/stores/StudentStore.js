import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {

        const studentList = ref([
            { name: 'A. Student', starID: 'aa1234aa', present: false },
            { name: 'B. Student', starID: 'bb1234bb', present: false },

        ])

    const mostRecentStudent = ref( {} ) //empty object

    function addNewStudent(student) {
            studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
            studentList.value = studentList.value.filter( (student) => {
                return studentToDelete !== student
    })
        mostRecentStudent.value = {} //reset most recent message

}

function arrivedOrLeft(student) {
            mostRecentStudent.value = student //who was the last person to arrive/leave
}

const studentCount = computed( () => {
    return studentList.value.length

})

    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1,s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })



    return {

        //reactive data
        studentList,
        mostRecentStudent,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        //computed properties
        studentCount,
        sortedStudents,

    }
})
// whatever we return from here will be what our store is going to use
