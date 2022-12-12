Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValues: ''
        };
    },
    method: {
        addGoal() {
            this.goals.push(this.enteredValues);
            this.enteredValues = '';
        }
    }
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     //to reset the input
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);