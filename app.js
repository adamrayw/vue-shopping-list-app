const shoppingListApp = Vue.createApp({
    data() {
        return {
            header: 'Shopping List App',
            editing: false,
            newItem: '',
            newItemHighPriority: false,
            items: [
                { id: 1, label: '10 party hats', purchased: true, highPriority: false },
                { id: 1, label: '2 board games', purchased: true, highPriority: false },
                { id: 1, label: '20 cups', purchased: false, highPriority: true },
            ],
            errorMsg: ''
        }
    },
    methods: {
        addNewItem(newItem, newItemHighPriority) {
            if (this.newItem == 0) {
                return this.errorMsg = 'Form cannot blank!'
            } else {
                this.errorMsg = ''
                this.newItem = ''
                return this.items.push({ id: this.items.length + 1, label: newItem, highPriority: newItemHighPriority})
            }
        },
        doEdit(editing) {
            this.editing = editing
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        },
        deleteItem(index) {
           return this.items.splice(index, 1)
        }
    },
}).mount('#shopping-list')