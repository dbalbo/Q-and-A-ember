
Forum.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        text: this.get('text')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();

      this.transitionToRoute('question', question.id);
    }
  }
});


// Forum.NewAnswerController = Ember.Controller.extend({
//    actions: {
//     save: function() {
//       var answer = this.get('model');
//       answer.save();
//       var controller = this;
//       answer.get('question').then(function(question) {
//         question.save();
//         controller.transitionToRoute('question', question);
//       });
//     }
//   }
// });
