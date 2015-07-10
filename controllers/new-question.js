Forum.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function(){
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        body: this.get('body'), 
        author: this.get('author')
      });

      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});