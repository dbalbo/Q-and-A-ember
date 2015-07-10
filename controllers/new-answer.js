Forum.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var comment = this.store.createRecord('answer', {
        text: this.get('text')
      });
      comment.save();

      var post = this.get('controllers.post.model');
      post.get('answers').pushObject(answer);
      post.save();

      this.transitionToRoute('post', post.id);
    }
  }
});