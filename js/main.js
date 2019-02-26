var viewModel = function(){
    var self = this;

    self.list = ko.observableArray(JSON.parse(localStorage.getItem("list") || "[]"));
    self.todo = ko.observable();

    self.addTodo = function(){
        if (self.todo() != "") {
            self.list.push({
                text: self.todo(),
                done: false,
                doneTimeStamp: null,
                stared: false
            });
            self.todo("");
        }
        localStorage.setItem("list", JSON.stringify(self.list()))
    }

    self.deleteTodo = function(todo){
        self.list.remove(todo);
        localStorage.setItem("list", JSON.stringify(self.list()))
    }

    self.sortEventAction = function(){
        localStorage.setItem("list", JSON.stringify(self.list()))
    }
}
ko.applyBindings(new viewModel())