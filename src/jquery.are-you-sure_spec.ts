describe("A form's", function() {
  var $form:any = undefined;

  describe('text input', function() {
    var $textInput:any = undefined;

    beforeEach(function() {
      document.body.innerHTML = (window as any).__html__['input-text.html'];
      $form = $('form');
      $textInput = $('input[type=text]');
      $form.areYouSure();
    });

    it('should cause dirtyness after its value changes', function(done) {
      expect($form.hasClass('dirty')).toBe(false);
      $textInput.val('new').change();
      setTimeout(function() {
        expect($form.hasClass('dirty')).toBe(true);
        done();
      }, 0);
    });
  });
});
