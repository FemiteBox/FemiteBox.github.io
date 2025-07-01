    function showTab(tabId) {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.style.display = 'none';
        });
        const section = document.getElementById(tabId);
        if (section) {
            section.style.display = 'block';
            //location.href = `femitebox.github.io#${tabId}`;
            location.href = `localhost:63342/FemiteBox/index.html?_ijt=njof8o5o4gomca74b4n0j5m6lm&_ij_reload=RELOAD_ON_SAV#${tabId}`;
        }
    }

    // Show the correct tab on load based on URL hash
    function handleHashChange() {
        const hash = window.location.hash.substring(1); // remove the #
        if (hash) {
            showTab(hash);
        } else {
            showTab('about'); // default tab
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('DOMContentLoaded', handleHashChange);

    function checkPassword() {
      const password = document.getElementById("secretPassword").value;
      const message = document.getElementById("loginMessage");
      const content = document.getElementById("secretContent");

      const correctPassword = "8Ba9Sd8Qb2";
      const correctPassword2 = "rubik's cube";
      const correctPassword3 = "insanity";

      if (password === correctPassword || password === correctPassword2 || password === correctPassword3) {
        content.style.display = "block";
        message.style.color = "green";
        message.innerText = "Access granted!";
      } else {
        message.style.color = "red";
        message.innerText = "Wrong password.";
        content.style.display = "none";
      }
    }
