Polymer('paper-vertical-tabs', {
  noink: false,
  nobar: false,
  activateEvent: 'down',
  nostretch: false,
  selectedIndexChanged: function(old) {
    var s = this.$.selectionBar.style;

    if (!this.selectedItem) {
      s.height = 0;
      s.top = 0;
      return;
    }

    var h = 100 / this.items.length;
    s.height = h + '%';
    s.width = 10 + 'px';

    s.top = h * this.selectedIndex + '%';

    if (this.nostretch || old === null || old === -1) {
      return;
    }

    this.$.selectionBar.classList.add('expand');
  },

  barTransitionEnd: function() {
    var cl = this.$.selectionBar.classList;
    if (cl.contains('expand')) {
      cl.remove('expand');
      cl.add('contract');
      var s = this.$.selectionBar.style;
    } else if (cl.contains('contract')) {
      cl.remove('contract');
    }
  }

});

