<script type="text/javascript">
  function toggleMessenger(){
    Genesys("command", "Messenger.open", {},
      function(o){},  // if resolved
      function(o){    // if rejected
        Genesys("command", "Messenger.close");
      }
    );
  }
</script>
