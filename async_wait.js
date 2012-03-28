function async_wait() {
  var fns = arguments; // capture
  return {
    then: function(done) {
      var completed = 0;
      for (var i = 0; i < fns.length; i++) {
        fns[i](function() {
          if (++completed == fns.length)
            done();
        });
      }
    }
  };    
}
