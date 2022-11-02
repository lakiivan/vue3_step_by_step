import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: { Assignment, AssignmentTags, Panel },

    template: `
    <Panel v-show="show && assignments.length" class="x-60">
        <div class="flex justify-between item-start">
            <h2 class="font-bold mb-2">
                {{ title }}<span> ({{assignments.length}}) </span>
            </h2>
            <button v-show="canToggle" @click="show = false">&times;</button>
        </div>
    
        <assignment-tags 
            v-model="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
            />
    
        <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
            <assignment v-for="assignment in filteredAssignments" 
            :key="assignment.id"
            :assignment="assignment"></assignment>
        </ul>

        <slot></slot>

        <template v-slot:footer>
            My footer goes here
        </template>
    
    </Panel>
    `,

    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default:false}
    },

    data() {
        return {
            currentTag: 'all',
            show: true
        };
    },

    computed: {

        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}