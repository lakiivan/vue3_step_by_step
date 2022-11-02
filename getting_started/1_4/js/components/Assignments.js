import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
    <section class="space-y-6">
        <assignmentList :assignments="filters.inProgress" title="In Progress"></assignmentList>
        <assignmentList :assignments="filters.completed" title="Completed"></assignmentList>
        
        <assignment-create @add="add"></assignment-create>
    </section>

    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: true, id: 1, tag:'math'},
                { name: 'Read chapter', complete: false, id: 2, tag:'reading'},
                { name: 'Turn in Homework', complete: false, id: 3, tag:'math'}
            ],

        }
    },

    computed: {

        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !(assignment.complete)),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    methods: {

        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}