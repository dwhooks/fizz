# fizz
fizzbuzz project

<!DOCTYPE html>
  <body>
        <script src = jquery-compat-git.js></script>

        <script>
        $(document).ready (function() {
        });
        </script>

        <h2>
          <script>
            for(var i = 1; i <= 100; i++) {
              if (i % 3 === 0) {
                  console.log("fizz");
                } else if (i % 5 ===0) {
                  console.log("buzz");
                } else if (i % 3 === 0 && i % 5 === 0) {
                  console.log("fizz buzz");
                } else {
                  console.log(i);
                }
              }
        
          </script> 
        </h2>       
  </body>
</html>
