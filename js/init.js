/*
	Read Only by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function ($) {
  skel.init({
    reset: 'full',
    breakpoints: {
      global: {
        href: 'css/style.css',
        containers: '45em',
        grid: { gutters: ['2em', 0] },
      },
      xlarge: { media: '(max-width: 1680px)', href: 'css/style-xlarge.css' },
      large: {
        media: '(max-width: 1280px)',
        href: 'css/style-large.css',
        containers: '42em',
        grid: { gutters: ['1.5em', 0] },
        viewport: { scalable: false },
      },
      medium: {
        media: '(max-width: 1024px)',
        href: 'css/style-medium.css',
        containers: '85%!',
      },
      small: {
        media: '(max-width: 736px)',
        href: 'css/style-small.css',
        containers: '90%!',
        grid: { gutters: ['1.25em', 0] },
      },
      xsmall: { media: '(max-width: 480px)', href: 'css/style-xsmall.css' },
    },
    plugins: {
      layers: {
        config: {
          mode: 'transform',
        },
        titleBar: {
          breakpoints: 'medium',
          width: '100%',
          height: 44,
          position: 'top-left',
          side: 'top',
          html: '<span class="toggle" data-action="toggleLayer" data-args="sidePanel"></span><span class="title" data-action="copyText" data-args="logo"></span>',
        },
        sidePanel: {
          breakpoints: 'medium',
          hidden: true,
          width: { small: 275, medium: '20em' },
          height: '100%',
          animation: 'pushX',
          position: 'top-right',
          side: 'right',
          orientation: 'vertical',
          clickToHide: true,
          html: '<div data-action="moveElement" data-args="header"></div>',
        },
      },
    },
  });

  $(function () {
    // Share profile destinations; Formal Bio appears only in the main body.
    var $sidebarLinks = $('#profile-links').clone().removeAttr('id');
    $sidebarLinks.find('.profile-bio').remove();
    $sidebarLinks.find('a, button').removeClass('button alt small compact').addClass('icon');
    $sidebarLinks.appendTo('#header > footer');

    var $emailButtons = $('.profile-links [data-show-email]');
    if ($emailButtons.length) {
      var $emailPanel = $('<div id="email-panel" class="email-panel" popover="auto" aria-label="Email address"><span class="email-address" role="status" aria-live="polite" aria-atomic="true"></span><button type="button" class="button alt compact" aria-live="polite" autofocus>Copy</button><span class="copy-feedback" role="status"></span></div>').appendTo('body');
      var $emailAddress = $emailPanel.find('.email-address');
      var $copyButton = $emailPanel.find('button');
      var $copyFeedback = $emailPanel.find('.copy-feedback');
      var email;
      $emailButtons.on('click', function () {
        email = ['xiuming6zhang', 'gmail.com'].join('@');
        $emailAddress.text(email);
        $copyButton.text('Copy');
        $copyFeedback.empty();
      });
      $emailPanel[0].addEventListener('beforetoggle', function (event) {
        if (event.newState === 'closed') {
          $emailAddress.empty();
          $copyButton.text('Copy');
          $copyFeedback.empty();
          email = undefined;
        }
      });
      $copyButton.on('click', async function () {
        try {
          await navigator.clipboard.writeText(email);
          if ($emailPanel[0].matches(':popover-open')) {
            $copyButton.text('Copied');
            $copyFeedback.empty();
          }
        } catch (error) {
          if ($emailPanel[0].matches(':popover-open')) {
            $copyButton.text('Copy');
            $copyFeedback.text('Copy unavailable; select the address to copy manually.');
          }
        }
      });
    }

    var $body = $('body'),
      $header = $('#header'),
      $nav = $('#nav'),
      $nav_a = $nav.find('a'),
      $wrapper = $('#wrapper');

    // Forms (IE<10).
    var $form = $('form');
    if ($form.length > 0) {
      $form.find('.form-button-submit').on('click', function () {
        $(this).parents('form').submit();
        return false;
      });

      if (skel.vars.IEVersion < 10) {
        $.fn.n33_formerize = function () {
          var _fakes = [],
            _form = $(this);
          _form
            .find('input[type=text],textarea')
            .each(function () {
              var e = $(this);
              if (e.val() === '' || e.val() === e.attr('placeholder')) {
                e.addClass('formerize-placeholder');
                e.val(e.attr('placeholder'));
              }
            })
            .blur(function () {
              var e = $(this);
              if (e.attr('name').match(/_fakeformerizefield$/)) return;
              if (e.val() === '') {
                e.addClass('formerize-placeholder');
                e.val(e.attr('placeholder'));
              }
            })
            .focus(function () {
              var e = $(this);
              if (e.attr('name').match(/_fakeformerizefield$/)) return;
              if (e.val() === e.attr('placeholder')) {
                e.removeClass('formerize-placeholder');
                e.val('');
              }
            });
          _form.find('input[type=password]').each(function () {
            var e = $(this);
            var x = $(
              $('<div>')
                .append(e.clone())
                .remove()
                .html()
                .replace(/type="password"/i, 'type="text"')
                .replace(/type=password/i, 'type=text')
            );
            if (e.attr('id'))
              x.attr('id', e.attr('id') + '_fakeformerizefield');
            if (e.attr('name'))
              x.attr('name', e.attr('name') + '_fakeformerizefield');
            x.addClass('formerize-placeholder')
              .val(x.attr('placeholder'))
              .insertAfter(e);
            if (e.val() === '') e.hide();
            else x.hide();
            e.blur(function (event) {
              event.preventDefault();
              var e = $(this);
              var x = e
                .parent()
                .find('input[name=' + e.attr('name') + '_fakeformerizefield]');
              if (e.val() === '') {
                e.hide();
                x.show();
              }
            });
            x.focus(function (event) {
              event.preventDefault();
              var x = $(this);
              var e = x
                .parent()
                .find(
                  'input[name=' +
                    x.attr('name').replace('_fakeformerizefield', '') +
                    ']'
                );
              x.hide();
              e.show().focus();
            });
            x.keypress(function (event) {
              event.preventDefault();
              x.val('');
            });
          });
          _form
            .submit(function () {
              $(this)
                .find('input[type=text],input[type=password],textarea')
                .each(function (event) {
                  var e = $(this);
                  if (e.attr('name').match(/_fakeformerizefield$/))
                    e.attr('name', '');
                  if (e.val() === e.attr('placeholder')) {
                    e.removeClass('formerize-placeholder');
                    e.val('');
                  }
                });
            })
            .bind('reset', function (event) {
              event.preventDefault();
              $(this).find('select').val($('option:first').val());
              $(this)
                .find('input,textarea')
                .each(function () {
                  var e = $(this);
                  var x;
                  e.removeClass('formerize-placeholder');
                  switch (this.type) {
                    case 'submit':
                    case 'reset':
                      break;
                    case 'password':
                      e.val(e.attr('defaultValue'));
                      x = e
                        .parent()
                        .find(
                          'input[name=' +
                            e.attr('name') +
                            '_fakeformerizefield]'
                        );
                      if (e.val() === '') {
                        e.hide();
                        x.show();
                      } else {
                        e.show();
                        x.hide();
                      }
                      break;
                    case 'checkbox':
                    case 'radio':
                      e.attr('checked', e.attr('defaultValue'));
                      break;
                    case 'text':
                    case 'textarea':
                      e.val(e.attr('defaultValue'));
                      if (e.val() === '') {
                        e.addClass('formerize-placeholder');
                        e.val(e.attr('placeholder'));
                      }
                      break;
                    default:
                      e.val(e.attr('defaultValue'));
                      break;
                  }
                });
              window.setTimeout(function () {
                for (var x = 0; x < _fakes.length; x++)
                  _fakes[x].trigger('formerize_sync');
              }, 10);
            });
          return _form;
        };
        $form.n33_formerize();
      }
    }

    // Header.
    var ids = [];

    // Set up nav items.
    $nav_a
      .scrolly()
      .on('click', function (event) {
        var $this = $(this),
          href = $this.attr('href');

        // Not an internal link? Bail.
        if (href.charAt(0) !== '#') return;

        // Prevent default behavior.
        event.preventDefault();

        // Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
        $nav_a.removeClass('active').addClass('scrollzer-locked');

        // Set active class on this link.
        $this.addClass('active');
      })
      .each(function () {
        var $this = $(this),
          href = $this.attr('href'),
          id;

        // Not an internal link? Bail.
        if (href.charAt(0) !== '#') return;

        // Add to scrollzer ID list.
        id = href.substring(1);
        $this.attr('id', id + '-link');
        ids.push(id);
      });

    // Initialize scrollzer.
    $.scrollzer(ids, { pad: 300, lastHack: true });
  });
})(jQuery);
