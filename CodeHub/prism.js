document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `
      <nav class="main-navigation">
          <ul>
              <li><a href="index.html">Home</a></li>
              <li>
                  <a href="#">Notes</a>
                  <ul class="sub-navigation">
                      <li><a href="python.html">Python</a></li>
                      <li><a href="mysql.html">MySQL</a></li>
                      <li><a href="Html.html">Html</a></li>
                      <li><a href="Api.html">API</a></li>
                      <li><a href="cpp.html">C++</a></li>
                  </ul>
              </li>
              <li><a href="#">Contact</a>
                  <ul class="sub-navigation">
                      <li><button style="all: unset; padding-left: 10px;" onclick="window.location.href='tel:+918692985091'">Call</button></li>
                      <li><a href="https://www.instagram.com/prathvithakur20?igsh=NW9tZGw3ZW9jNnZi" target="_blank">Instagram</a></li>
                  </ul>
              </li>
              <li><a href="about.html">About</a></li>
          </ul>
      </nav>
  `;

  document.querySelector('body').insertAdjacentHTML('afterbegin', navHTML);
});

document.addEventListener('DOMContentLoaded', function() {
    var clipboard = new ClipboardJS('.copy-button');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('success', function(e) {
        e.trigger.textContent = 'Copied';
        setTimeout(function() {
            e.trigger.textContent = 'Copy';
        }, 2000);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
});