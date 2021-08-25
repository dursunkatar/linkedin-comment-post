      var keywords = [
        "developer",
        "yazılım uzmanı",
        "başvurusu için",
        "çalışma arkadaşı",
        "React Native",
        "ekibin parçası olmak",
        "Çalışma Arkadaşları",
      ];

      function eachKeywords(keyword, span) {
        if (span.textContent.indexOf(keyword) === -1) return;
        const parent = span.closest("div.feed-shared-update-v2");
        comment(parent, function () { post(parent); });
      }

      function post(parent) {
        setTimeout(function () {
          parent
            .querySelector("button.comments-comment-box__submit-button")
            .click();
        }, 1000);
      }
      function comment(parent, callBack) {
        parent.querySelector("span.artdeco-button__text").click();
        setTimeout(function () {
          parent.querySelector("div.ql-editor").innerHTML = "<p>++</p>";
          callBack();
        }, 2000);
      }
      document.querySelectorAll('span[dir="ltr"]').forEach((span) => {
        keywords.forEach((keyword) => eachKeywords(keyword, span));
      });
