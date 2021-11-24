const vm = Vue.createApp({
  data() {
    return {
      message: "",
      message1: "Hello Vue3!",
      todos: ["Jouer de la gratte", "Diner", "Coder du Vue3"],
    };
  },
  methods: {
    reverseNote() {
      this.todos.reverse();
    },
    addNote() {
      this.todos.push(this.message);
      this.message = "";
    },
    deleteNote() {
      this.todos.shift();
    },
  },
});

vm.component("note", {
  props: ["content"],
  template: `
            <p>{{content}}</p>
          `,
});

vm.mount("#app");
